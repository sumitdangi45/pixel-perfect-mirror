import { createFileRoute } from "@tanstack/react-router";
import { handleCompare } from "@/lib/ai/compare.server";

export const Route = createFileRoute("/api/compare")({
  server: { handlers: { POST: ({ request }) => handleCompare(request) } },
});
