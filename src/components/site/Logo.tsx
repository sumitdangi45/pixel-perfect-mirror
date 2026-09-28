export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-ink" : "text-white";
  const sub = tone === "dark" ? "text-ink/70" : "text-white/70";
  const dark = tone === "dark" ? "var(--forest)" : "#ffffff";

  return (
    <div className="flex shrink-0 items-center gap-2.5">
      <svg viewBox="0 0 44 34" className="h-9 w-10" aria-hidden="true">
        <path d="M22 1 L31 1 L44 33 L34 33 Z" fill="var(--gold)" />
        <path d="M13 1 L22 1 L9 33 L0 33 Z" fill={dark} />
        <path d="M14 20 L30 20 L33 27 L11 27 Z" fill={dark} />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-[1.7rem] font-extrabold leading-none ${text}`}>
          Anni
        </span>
        <span className={`mt-1 block text-[0.5rem] font-bold tracking-[0.16em] ${sub}`}>
          WEB SOLUTIONS PVT. LTD.
        </span>
      </span>
    </div>
  );
}
