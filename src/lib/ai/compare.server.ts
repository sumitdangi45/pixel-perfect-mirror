import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { z } from "zod";
import {
  createLovableAiGatewayRunIdFetch,
  getLovableAiGatewayRunId,
  withLovableAiGatewayRunIdHeader,
} from "./run-id.server";

const Body = z.object({
  reference: z.string().startsWith("data:image/"),
  current: z.string().startsWith("data:image/"),
  viewport: z.string(),
  notes: z.string(),
});

const SYSTEM = `You are a senior UI engineer doing a pixel-level layout review.
Image 1 is the REFERENCE design. Image 2 is the CURRENT page screenshot.
Focus on section heights, vertical spacing, padding, margins, gaps between cards, heading sizes and image crops.
Respond in Markdown with:
## Summary (2-3 sentences)
## Differences — a table: Area | Reference (est. px) | Current (est. px) | Fix
## Actionable fixes — numbered list of concrete CSS/Tailwind changes (e.g. "pt-12 -> pt-16", "card h-[400px] -> h-[425px]", "object-top on card images").
Estimate pixel values proportionally from the images. Keep it under 450 words.`;

export async function handleCompare(request: Request) {
  const apiKey = process.env.LOVABLE_API_KEY;
  if (!apiKey) return Response.json({ error: "AI is not configured." }, { status: 500 });

  let data: z.infer<typeof Body>;
  try {
    data = Body.parse(await request.json());
  } catch {
    return Response.json({ error: "Please upload two valid images." }, { status: 400 });
  }

  const runIdFetch = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(request));
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });

  const result = streamText({
    model: provider.responses("openai/gpt-6-astra"),
    system: SYSTEM,
    abortSignal: request.signal,
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: `Viewport: ${data.viewport}. Notes: ${data.notes || "none"}` },
          { type: "text", text: "Image 1 — REFERENCE:" },
          { type: "image", image: new URL(data.reference) },
          { type: "text", text: "Image 2 — CURRENT:" },
          { type: "image", image: new URL(data.current) },
        ],
      },
    ],
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "medium",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
  });

  return withLovableAiGatewayRunIdHeader(result.toTextStreamResponse(), runIdFetch);
}
