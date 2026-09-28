import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroDesk from "@/assets/hero-desk.jpg";
import { Logo } from "@/components/site/Logo";
import {
  ArrowRight,
  CalendarIcon,
  ChatIcon,
  ClockIcon,
  CloseIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  PinIcon,
  PlaneIcon,
  ShieldIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/site/icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anni Web Solutions — Ready to Turn Your Ideas into Reality?" },
      {
        name: "description",
        content:
          "Partner with Anni Web Solutions for websites, web apps, mobile apps and AI solutions. Free consultation, fast response, no obligation.",
      },
      {
        property: "og:title",
        content: "Anni Web Solutions — Ready to Turn Your Ideas into Reality?",
      },
      {
        property: "og:description",
        content:
          "A reliable team for your next big project: web, mobile, custom software, AI & ML and digital consulting.",
      },
    ],
  }),
  component: Index,
});

const navLinks = ["Home", "About", "Services", "Projects", "Why Us", "Blog", "Contact"];

const trustItems = [
  { Icon: ChatIcon, title: "Free Consultation", copy: "Discuss your ideas with our experts" },
  { Icon: ClockIcon, title: "Fast Response", copy: "We usually reply within 24 hours" },
  { Icon: ShieldIcon, title: "No Obligation", copy: "Just a friendly discussion" },
];

const socials = [
  {
    name: "LinkedIn",
    copy: "Follow us for career updates and company news.",
    Icon: LinkedInIcon,
    box: "bg-[#0a66c2] text-white",
  },
  {
    name: "X (Twitter)",
    copy: "Quick updates, thoughts and tech trends.",
    Icon: XIcon,
    box: "bg-black text-white",
  },
  {
    name: "Instagram",
    copy: "Behind the scenes, team moments and more.",
    Icon: InstagramIcon,
    box: "bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] text-white",
  },
  {
    name: "YouTube",
    copy: "Project showcases, tutorials and tech content.",
    Icon: YouTubeIcon,
    box: "bg-[#ff0000] text-white",
  },
];

const quickLinks = ["Home", "About", "Services", "Projects", "Blog", "Contact"];
const services = [
  "Website Development",
  "Web Application",
  "Mobile App Development",
  "Custom Software",
  "AI & ML Solutions",
  "Digital Consulting",
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:grid-cols-[auto_1fr_auto] lg:gap-10 lg:px-10">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="text-[0.95rem] text-ink/75 transition-colors hover:text-gold"
              >
                {l}
              </a>
            ))}
          </nav>
          <a
            href="#"
            className="hidden items-center gap-2 rounded-md bg-forest px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-forest-deep lg:inline-flex"
          >
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="justify-self-end text-ink lg:hidden"
          >
            {open ? <MenuIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-white px-5 pb-5 lg:hidden">
            <nav className="flex flex-col">
              {navLinks.map((l) => (
                <a key={l} href="#" className="border-b border-border/70 py-3 text-ink/80">
                  {l}
                </a>
              ))}
            </nav>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-forest px-5 py-3 text-sm font-semibold text-white"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center gap-2 text-sm text-ink/60"
            >
              <CloseIcon className="h-4 w-4" /> Close
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest text-white">
        <img
          src={heroDesk}
          alt="Laptop, books and coffee mug on a warm wooden desk"
          width={1280}
          height={912}
          className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[58%] object-cover lg:block"
        />
        <div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, var(--forest) 0%, var(--forest) 38%, rgba(20,38,31,0.75) 52%, rgba(20,38,31,0.25) 66%, rgba(20,38,31,0) 80%)",
          }}
        />

        <div className="hand absolute right-[36%] top-[11%] hidden -rotate-6 text-[1.6rem] leading-[1.15] text-white/95 xl:block">
          Ideas
          <br />
          Build
          <br />
          Better
          <br />
          Businesses
          <span className="mt-1 block h-px w-24 bg-white/60" />
        </div>
        <div className="absolute left-[71%] top-[36%] hidden -translate-y-1/2 text-center font-display text-[1.05rem] font-bold italic leading-snug text-white lg:block">
          Your
          <br />
          Vision
          <br />
          Our Expertise
          <span className="mx-auto mt-2 block h-0.5 w-8 bg-white/80" />
        </div>


        <div className="relative mx-auto max-w-[1400px] px-5 pb-0 pt-10 lg:px-10 lg:pt-14">
          <div className="max-w-xl lg:max-w-[40rem]">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-white/85">Let&apos;s Build Together</span>
              <span className="h-px w-8 bg-gold" />
            </div>
            <h1 className="mt-5 text-[2.1rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3.05rem]">
              Ready to Turn
              <br />
              <span className="text-gold-soft">Your Ideas</span>
              <br className="lg:hidden" />
              <span className="text-gold-soft lg:ml-3">into Reality?</span>
            </h1>
            <p className="mt-5 max-w-lg text-[1rem] leading-relaxed text-white/80">
              Partner with Anni Web Solutions and get a reliable team for your next big project.
              Let&apos;s create something amazing together.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/45 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-white/10"
              >
                <CalendarIcon className="h-4.5 w-4.5" /> Schedule a Call
              </a>
            </div>
          </div>

          <div className="mt-9 grid gap-0 border-t border-white/10 pt-6 sm:grid-cols-3 sm:divide-x sm:divide-white/10 lg:mt-12 lg:max-w-3xl">
            {trustItems.map(({ Icon, title, copy }) => (
              <div key={title} className="flex items-center gap-3 py-3 sm:px-5 sm:first:pl-0">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/35">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.9rem] font-bold text-white">{title}</span>
                  <span className="block text-[0.8rem] text-white/70">{copy}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="h-8 lg:h-10" />
        </div>
      </section>

      {/* Follow our journey */}
      <section className="relative bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-10 lg:py-16">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-ink/60">Stay Connected</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="mt-4 text-[1.9rem] lg:text-[2.6rem]">
            Follow Our <span className="text-gold">Journey</span>
          </h2>
          <p className="mt-2 text-[0.95rem] text-muted-foreground">
            Get the latest updates, projects, tips and tech insights.
          </p>

          <span className="absolute right-10 top-16 hidden hand -rotate-6 text-[1.6rem] text-ink/80 xl:block">
            Same
            <br />
            Team
            <br />
            Bigger
            <br />
            Goals
            <span className="mt-1 block h-px w-24 bg-ink/40" />
          </span>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {socials.map(({ name, copy, Icon, box }) => (
              <a
                key={name}
                href="#"
                className="flex items-start gap-4 rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-md ${box}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[0.95rem] font-bold text-ink">
                    {name}
                  </span>
                  <span className="mt-1 block text-[0.85rem] leading-snug text-muted-foreground">
                    {copy}
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="relative mt-10 rounded-lg bg-sand px-6 py-7 lg:px-10">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto] xl:pr-40">
              <div className="flex items-start gap-5">
                <PlaneIcon className="hidden h-12 w-12 shrink-0 text-gold sm:block" />
                <div className="min-w-0">
                  <h3 className="text-[1.3rem] lg:text-[1.5rem]">
                    Subscribe to Our <span className="text-gold">Newsletter</span>
                  </h3>
                  <p className="mt-1 text-[0.9rem] text-muted-foreground">
                    Get the latest insights, resources and offers directly in your inbox.
                  </p>
                </div>
              </div>
              <form
                className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-border bg-white px-4 py-3 lg:w-[19rem]">
                  <MailIcon className="h-4.5 w-4.5 shrink-0 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full bg-transparent text-[0.9rem] outline-none placeholder:text-muted-foreground"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-forest px-6 py-3 text-[0.9rem] font-semibold text-white transition-colors hover:bg-forest-deep"
                >
                  Subscribe <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
            <span className="absolute right-8 top-1/2 hidden hand -translate-y-1/2 -rotate-6 text-[1.4rem] text-ink/75 xl:block">
              No Spam
              <br />
              Just Value
              <span className="mt-1 block h-px w-20 bg-ink/40" />
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-forest text-white">
        <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1.2fr_1.4fr]">
            <div>
              <Logo tone="light" />
              <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-white/70">
                Building modern digital solutions for a smarter tomorrow.
              </p>
              <div className="mt-5 flex items-center gap-5 text-white/80">
                <a href="#" aria-label="LinkedIn">
                  <LinkedInIcon className="h-5 w-5 hover:text-gold" />
                </a>
                <a href="#" aria-label="Instagram">
                  <InstagramIcon className="h-5 w-5 hover:text-gold" />
                </a>
                <a href="#" aria-label="YouTube">
                  <YouTubeIcon className="h-5 w-5 hover:text-gold" />
                </a>
                <a href="#" aria-label="GitHub">
                  <GithubIcon className="h-5 w-5 hover:text-gold" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[1rem] font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-2.5 text-[0.9rem] text-white/70">
                {quickLinks.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-gold">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[1rem] font-bold">Our Services</h3>
              <ul className="mt-4 space-y-2.5 text-[0.9rem] text-white/70">
                {services.map((s) => (
                  <li key={s}>
                    <a href="#" className="hover:text-gold">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[1rem] font-bold">Contact Us</h3>
              <ul className="mt-4 space-y-3 text-[0.9rem] text-white/70">
                <li className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0" /> Bhopal, Madhya Pradesh, India
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-4.5 w-4.5 shrink-0" /> hello@anniwebsolutions.com
                </li>
                <li className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-4.5 w-4.5 shrink-0" /> +91 98765 43210
                </li>
                <li className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 h-4.5 w-4.5 shrink-0" /> Mon - Sat, 10AM - 7PM
                </li>
              </ul>
            </div>
          </div>

          <span className="absolute bottom-24 right-10 hidden hand -rotate-6 text-[1.6rem] text-white/85 xl:block">
            Let&apos;s
            <br />
            Build
            <br />
            Together
            <span className="mt-1 block h-px w-24 bg-white/50" />
          </span>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-5 text-[0.82rem] text-white/60 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <p>© 2026 Anni Web Solutions Pvt. Ltd. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-gold">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gold">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
