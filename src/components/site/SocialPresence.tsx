import { useRef } from "react";
import s1 from "@/assets/social-1.jpg";
import s2 from "@/assets/social-2.jpg";
import s3 from "@/assets/social-3.jpg";
import { ArrowRight, InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "./icons";

const Ig = ({ c = "h-9 w-9" }: { c?: string }) => (
  <span className={`grid ${c} place-items-center rounded-lg bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] text-white`}>
    <InstagramIcon className="h-[60%] w-[60%]" />
  </span>
);
const Yt = ({ c = "h-9 w-9" }: { c?: string }) => (
  <span className={`grid ${c} place-items-center rounded-lg bg-[#ff0000] text-white`}>
    <YouTubeIcon className="h-[60%] w-[60%]" />
  </span>
);
const Li = ({ c = "h-9 w-9" }: { c?: string }) => (
  <span className={`grid ${c} place-items-center rounded-lg bg-[#0a66c2] text-white`}>
    <LinkedInIcon className="h-[55%] w-[55%]" />
  </span>
);
const Xx = ({ c = "h-9 w-9" }: { c?: string }) => (
  <span className={`grid ${c} place-items-center rounded-lg bg-black text-white`}>
    <XIcon className="h-[55%] w-[55%]" />
  </span>
);

const stats = [
  { I: () => <InstagramIcon className="h-7 w-7 text-[#e1306c]" />, v: "5K+", l: "Followers" },
  { I: () => <YouTubeIcon className="h-7 w-7 text-[#ff0000]" />, v: "2K+", l: "Subscribers" },
  { I: () => <LinkedInIcon className="h-7 w-7 text-[#0a66c2]" />, v: "3K+", l: "Connections" },
  {
    I: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7 text-gold">
        <circle cx="12" cy="7" r="3" /><circle cx="5" cy="9" r="2.2" /><circle cx="19" cy="9" r="2.2" />
        <path d="M6.5 20a5.5 5.5 0 0 1 11 0M1.5 19a3.5 3.5 0 0 1 5-3.2M22.5 19a3.5 3.5 0 0 0-5-3.2" />
      </svg>
    ),
    v: "10K+",
    l: "Total Reach",
  },
];

const cards = [
  { img: s1, P: Ig, p: "Instagram", t: ["Day in My Life", "as a Developer"], v: "12.4K" },
  { img: s1, P: Yt, p: "YouTube", t: ["How We Build", "Real Projects at Anni"], v: "8.7K", pos: "object-right" },
  { img: s2, P: null, p: "Featured", t: ["Our Journey | Anni Web Solutions"], v: "25.1K", featured: true },
  { img: s2, P: Li, p: "LinkedIn", t: ["Tech Insights & Career Tips"], v: "6.3K", pos: "object-left" },
  { img: s3, P: Ig, p: "Instagram", t: ["Behind the Scenes", "at Anni"], v: "9.8K" },
];

const Dots = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/90" fill="currentColor">
    <circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="19" r="1.6" /><circle cx="5" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" />
  </svg>
);
const Eye = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M12 5C6 5 2 12 2 12s4 7 10 7 10-7 10-7-4-7-10-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);

export function SocialPresence() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => track.current?.scrollBy({ left: d * 280, behavior: "smooth" });

  return (
    <section className="relative bg-cream">
      <div className="mx-auto max-w-[1400px] px-5 pt-12 lg:px-10 lg:pt-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-[0.95rem] text-gold brightness-75">Our Social Presence</span>
              <span className="h-px w-12 bg-gold" />
            </div>
            <h2 className="mt-4 text-[2rem] leading-[1.1] sm:text-[2.6rem] lg:text-[3rem] xl:whitespace-nowrap">
              Ideas, Projects &amp;
              <br />
              <span className="text-gold">More on Social Media.</span>
            </h2>
            <p className="mt-4 max-w-[560px] text-[1rem] text-ink/75 lg:text-[1.1rem]">
              Follow our journey, watch project breakdowns, tech content, and get a behind-the-scenes look at Anni Web Solutions.
            </p>
            <span className="hand absolute left-[560px] top-0 hidden -rotate-12 text-[1.7rem] leading-tight text-ink/85 xl:block">
              Let's
              <br />
              <span className="ml-3">Learn</span>
              <br />
              <span className="ml-6">Build</span>
              <br />
              <span className="ml-8">Grow Together</span>
            </span>
          </div>

          <div className="relative flex flex-col items-start gap-5 lg:items-end xl:pr-36">
            <div className="grid w-full grid-cols-4 gap-2 sm:gap-3 lg:w-auto">
              {stats.map(({ I, v, l }) => (
                <div key={l} className="flex flex-col items-center rounded-xl bg-sand/70 px-2 py-4 text-center sm:px-5 lg:h-[122px] lg:w-[108px]">
                  <I />
                  <span className="mt-2.5 font-display text-[1.2rem] font-bold text-ink sm:text-[1.5rem]">{v}</span>
                  <span className="text-[0.7rem] text-ink/65 sm:text-[0.8rem]">{l}</span>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-forest px-7 py-3.5 text-[1rem] font-semibold text-white hover:bg-forest-deep">
              Follow Our Journey <ArrowRight className="h-4 w-4" />
            </a>
            <span className="hand absolute right-0 top-10 hidden -rotate-12 text-[1.3rem] leading-tight text-ink/80 xl:block">
              Join Our
              <br />
              Community
            </span>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mx-auto mt-6 max-w-[1500px] px-0 lg:px-4">
        <button onClick={() => scroll(-1)} aria-label="Previous" className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-white shadow md:grid">
          <ArrowRight className="h-5 w-5 rotate-180" />
        </button>
        <button onClick={() => scroll(1)} aria-label="Next" className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-white shadow md:grid">
          <ArrowRight className="h-5 w-5" />
        </button>
        <div ref={track} className="flex snap-x items-center gap-[18px] overflow-x-auto px-5 py-4 [scrollbar-width:none] md:px-16 lg:justify-center">
          {cards.map(({ img, P, p, t, v, featured, pos }, i) => (
            <a
              key={i}
              href="#"
              className={`relative shrink-0 snap-center overflow-hidden rounded-xl text-white ${
                featured
                  ? "h-[480px] w-[300px] shadow-[0_0_0_6px_#fff,0_0_0_8px_#f3d9bd,0_20px_40px_-10px_rgba(0,0,0,0.35)] lg:w-[350px]"
                  : "h-[425px] w-[230px] lg:w-[245px]"
              }`}
            >
              <img src={img} alt={t.join(" ")} loading="lazy" className={`absolute inset-0 h-full w-full object-cover ${pos ?? ""}`} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                {featured ? (
                  <span className="flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-[0.8rem] font-semibold text-ink">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M3 7l4.5 4L12 4l4.5 7L21 7l-2 12H5L3 7Z" /></svg>
                    Featured Video
                  </span>
                ) : (
                  <span className="flex items-center gap-2 text-[0.95rem] font-medium">
                    {P && <P c="h-8 w-8" />} {p}
                  </span>
                )}
                <Dots />
              </div>
              {featured && (
                <span className="hand absolute right-3 top-40 rotate-[-12deg] text-[1.8rem] leading-tight">
                  From
                  <br />
                  <span className="ml-3">Ideas</span>
                  <br />
                  to Impact
                </span>
              )}
              <span className={`absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full ${featured ? "h-14 w-14 border-2 border-[#e8b54a] bg-black/40" : "bg-black/45"}`}>
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor"><path d="M7 4v16l13-8L7 4Z" /></svg>
              </span>
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-display text-[1.1rem] font-medium leading-tight">
                  {t.map((x) => (<span key={x} className="block">{x}</span>))}
                </p>
                <p className="mt-2 flex items-center gap-2 text-[0.85rem] text-white/90"><Eye /> {v} views</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Stay updated */}
      <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-5 lg:px-10">
        <div className="relative rounded-2xl bg-sand/70 px-6 py-6 lg:px-10">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_auto] xl:pr-32">
            <div className="flex items-center gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold text-white sm:h-[66px] sm:w-[66px]">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M12 3 3 9v11h18V9l-9-6Zm0 2.4L18.6 9 12 13 5.4 9 12 5.4Z" /></svg>
              </span>
              <div>
                <h3 className="text-[1.3rem] lg:text-[1.5rem]">Stay Updated</h3>
                <p className="mt-1 text-[0.9rem] text-ink/70">Get the latest project updates, tech content and behind-the-scenes insights.</p>
              </div>
            </div>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md bg-forest px-5 py-3 text-[0.9rem] font-semibold text-white hover:bg-forest-deep">
              Follow Us on All Platforms <ArrowRight className="h-4 w-4" />
            </a>
            <div className="flex items-center gap-4 lg:border-l lg:border-ink/15 lg:pl-8">
              <Ig c="h-10 w-10" /><Yt c="h-10 w-10" /><Li c="h-10 w-10" /><Xx c="h-10 w-10" />
            </div>
          </div>
          <span className="hand absolute right-8 top-1/2 hidden -translate-y-1/2 -rotate-12 text-[1.4rem] leading-tight text-ink/80 xl:block">
            Same
            <br />
            Team
            <br />
            Bigger
            <br />
            Goals
          </span>
        </div>
      </div>
    </section>
  );
}
