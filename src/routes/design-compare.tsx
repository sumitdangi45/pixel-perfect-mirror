import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/design-compare")({
  head: () => ({
    meta: [
      { title: "Design Compare — Anni Web Solutions" },
      { name: "description", content: "Upload a reference design and a current screenshot to get AI-powered spacing and height fixes." },
      { property: "og:title", content: "Design Compare — Anni Web Solutions" },
      { property: "og:description", content: "AI-powered layout comparison with actionable spacing fixes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DesignCompare,
});

const toDataUrl = (f: File) =>
  new Promise<string>((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result as string);
    r.onerror = rej;
    r.readAsDataURL(f);
  });

function Drop({ label, value, onChange }: { label: string; value: string | undefined; onChange: (v: string) => void }) {
  return (
    <label className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border bg-white p-4 text-center">
      {value ? (
        <img src={value} alt={label} className="max-h-[320px] w-full rounded-md object-contain" />
      ) : (
        <span className="text-sm text-muted-foreground">Click to upload</span>
      )}
      <span className="font-display font-semibold text-ink">{label}</span>
      <input
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={async (e) => {
          const f = e.target.files?.[0];
          if (f) onChange(await toDataUrl(f));
        }}
      />
    </label>
  );
}

function DesignCompare() {
  const [reference, setReference] = useState<string>();
  const [current, setCurrent] = useState<string>();
  const [viewport, setViewport] = useState("Desktop");
  const [notes, setNotes] = useState("");
  const [out, setOut] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!reference || !current) return;
    setLoading(true);
    setOut("");
    setError("");
    try {
      const res = await fetch("/api/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference, current, viewport, notes }),
      });
      if (!res.ok || !res.body) {
        const j = await res.json().catch(() => ({}));
        setError(
          res.status === 402
            ? "AI credits have run out. Please add credits to continue."
            : res.status === 429
              ? "Too many requests — please wait a moment and try again."
              : j.error || "Something went wrong. Please try again.",
        );
        return;
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setOut((o) => o + dec.decode(value, { stream: true }));
      }
    } catch {
      setError("Connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 py-10 lg:px-10">
        <Link to="/" className="text-sm text-ink/60 hover:text-gold">← Back to site</Link>
        <h1 className="mt-4 text-[2rem] lg:text-[2.6rem]">
          Design <span className="text-gold">Compare</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          Upload the reference design and a screenshot of the current page. AI will point out height and spacing differences with fixes.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Drop label="Reference design" value={reference} onChange={setReference} />
          <Drop label="Current page screenshot" value={current} onChange={setCurrent} />
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <select value={viewport} onChange={(e) => setViewport(e.target.value)} className="rounded-md border border-border bg-white px-3 py-3 text-sm">
            <option>Desktop</option>
            <option>Mobile</option>
          </select>
          <input
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Optional notes, e.g. focus on the social cards section"
            className="flex-1 rounded-md border border-border bg-white px-4 py-3 text-sm outline-none"
          />
          <button
            onClick={run}
            disabled={!reference || !current || loading}
            className="rounded-md bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest-deep disabled:opacity-50"
          >
            {loading ? "Analyzing…" : "Compare"}
          </button>
        </div>

        {error && <p className="mt-5 rounded-md bg-destructive/10 p-4 text-sm text-destructive">{error}</p>}
        {out && (
          <pre className="mt-6 whitespace-pre-wrap rounded-xl border border-border bg-white p-6 font-sans text-[0.92rem] leading-relaxed text-ink">
            {out}
          </pre>
        )}
      </div>
    </div>
  );
}
