import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import HeroOrb from "../components/HeroOrb";

export const Route = createFileRoute("/")({
  component: Index,
});

function FadeIn({
  children,
  delay = 0,
  duration = 1000,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={`transition-opacity ${className}`}
      style={{ opacity: visible ? 1 : 0, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

function AnimatedHeading({
  text,
  initialDelay = 200,
  charDelay = 30,
  className = "",
  style,
}: {
  text: string;
  initialDelay?: number;
  charDelay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStart(true), initialDelay);
    return () => clearTimeout(t);
  }, [initialDelay]);

  const lines = text.split("\n");

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {Array.from(line).map((ch, charIndex) => {
            const delay =
              lineIndex * line.length * charDelay + charIndex * charDelay;
            return (
              <span
                key={charIndex}
                style={{
                  display: "inline-block",
                  opacity: start ? 1 : 0,
                  transform: start ? "translateX(0)" : "translateX(-18px)",
                  transition: `opacity 500ms ease, transform 500ms ease`,
                  transitionDelay: `${delay}ms`,
                  whiteSpace: "pre",
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 3D orb overlay, positioned on the right side of the hero */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-1/2 md:block">
        <HeroOrb />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col px-6 pt-6 md:px-12 lg:px-16">
        <nav className="liquid-glass flex items-center justify-between rounded-xl px-4 py-2">
          <div className="text-2xl font-semibold tracking-tight">VEX</div>
          <div className="hidden items-center gap-8 md:flex">
            {["Story", "Investing", "Building", "Advisory"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm text-white transition-colors hover:text-gray-300"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="liquid-glass hidden items-center gap-2 rounded-lg px-3 py-2 md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/70"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="w-40 bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none lg:w-56"
              />
            </div>
            <a
              href="#"
              className="rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100"
            >
              Start a Chat
            </a>
          </div>
        </nav>

        <div className="flex flex-1 flex-col justify-end pb-12 lg:grid lg:grid-cols-2 lg:items-end lg:pb-16">
          <div>
            <AnimatedHeading
              text={"Shaping tomorrow\nwith vision and action."}
              className="mb-4 text-4xl font-normal md:text-5xl lg:text-6xl xl:text-7xl"
              style={{ letterSpacing: "-0.04em" }}
            />
            <FadeIn delay={800} duration={1000}>
              <p className="mb-5 text-base text-gray-300 md:text-lg">
                We back visionaries and craft ventures that define what comes next.
              </p>
            </FadeIn>
            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded-lg bg-white px-8 py-3 font-medium text-black transition-colors hover:bg-gray-100"
                >
                  Start a Chat
                </a>
                <a
                  href="#"
                  className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black"
                >
                  Explore Now
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="mt-8 flex items-end justify-start lg:mt-0 lg:justify-end">
            <FadeIn delay={1400} duration={1000}>
              <div className="liquid-glass rounded-xl border border-white/20 px-6 py-3">
                <span className="text-lg font-light md:text-xl lg:text-2xl">
                  Investing. Building. Advisory.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
