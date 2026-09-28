export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-ink" : "text-white";
  const sub = tone === "dark" ? "text-ink/70" : "text-white/70";

  return (
    <div className="flex shrink-0 items-center gap-2">
      <svg viewBox="0 0 40 34" className="h-8 w-9" aria-hidden="true">
        <path d="M14 33 L28 1 L33 12 L26 12 L21 33 Z" fill="var(--gold)" />
        <path d="M2 33 L16 1 L21 12 L14 12 L9 33 Z" fill={tone === "dark" ? "var(--forest)" : "#ffffff"} />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-[1.65rem] font-extrabold leading-none ${text}`}>
          Anni
        </span>
        <span className={`block text-[0.5rem] font-bold tracking-[0.18em] ${sub}`}>
          WEB SOLUTIONS PVT. LTD.
        </span>
      </span>
    </div>
  );
}
