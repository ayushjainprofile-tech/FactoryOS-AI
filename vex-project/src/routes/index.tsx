import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef, type ReactNode } from "react";
import {
  BrainCircuit,
  Cpu,
  FileText,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Zap,
  Globe,
  Lock,
  BarChart3,
  Play,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ══════════════════════════════════════════════════
   SHARED ANIMATION PRIMITIVES
   ══════════════════════════════════════════════════ */

function FadeUp({
  children,
  delay = 0,
  duration = 800,
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
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1), transform ${duration}ms cubic-bezier(0.4,0,0.2,1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function AnimatedHeading({
  text,
  initialDelay = 200,
  charDelay = 25,
  className = "",
}: {
  text: string;
  initialDelay?: number;
  charDelay?: number;
  className?: string;
}) {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStart(true), initialDelay);
    return () => clearTimeout(t);
  }, [initialDelay]);

  const lines = text.split("\n");

  return (
    <h1 className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {Array.from(line).map((ch, ci) => {
            const d = li * line.length * charDelay + ci * charDelay;
            return (
              <span
                key={ci}
                style={{
                  display: "inline-block",
                  opacity: start ? 1 : 0,
                  transform: start ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 600ms ease, transform 600ms ease",
                  transitionDelay: `${d}ms`,
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

/* ══════════════════════════════════════════════════
   SCROLL-AWARE FEATURE CARD
   ══════════════════════════════════════════════════ */

function FeatureCard({
  icon: Icon,
  title,
  description,
  stat,
  statLabel,
  delay,
}: {
  icon: typeof BrainCircuit;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="fos-card p-6 group cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-400/40 transition-colors">
          <Icon className="h-5 w-5 text-cyan-400" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{stat}</div>
          <div className="text-[10px] uppercase tracking-wider text-slate-500">{statLabel}</div>
        </div>
      </div>
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   LANDING PAGE
   ══════════════════════════════════════════════════ */

function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden" style={{ background: "var(--fos-bg-base)" }}>

      {/* ════════════════════════════════════════
          SECTION 1 — HERO
         ════════════════════════════════════════ */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Video Background */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: Math.max(0.6, 1 - scrollY / 800) }}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-cyan-500/8 blur-[120px] animate-float-glow pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-blue-500/8 blur-[100px] animate-float-glow pointer-events-none" style={{ animationDelay: "3s" }} />

        {/* NAVBAR */}
        <div className="relative z-20 px-5 pt-5 md:px-10 lg:px-14">
          <nav className="liquid-glass rounded-2xl px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <BrainCircuit className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">FactoryOS AI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {["Platform", "Solutions", "Enterprise", "Docs"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-slate-400 hover:text-white transition-colors duration-300">{l}</a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link to="/login" className="hidden sm:inline-flex text-sm text-slate-300 hover:text-white transition-colors">Log in</Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2 text-sm font-medium text-black hover:bg-slate-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-1 flex-col justify-end px-5 pb-16 md:px-10 lg:px-14 lg:grid lg:grid-cols-5 lg:items-end lg:pb-20">
          <div className="lg:col-span-3">
            <FadeUp delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-subtle text-xs text-cyan-300 font-medium mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-soft" />
                Enterprise Industrial Intelligence Platform
              </div>
            </FadeUp>

            <AnimatedHeading
              text={"Every Document.\nEvery Machine.\nOne AI Brain."}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-white leading-[1.05] mb-6"
            />

            <FadeUp delay={900} duration={1000}>
              <p className="text-base md:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
                FactoryOS AI transforms your plant's tribal knowledge into a real-time intelligence brain.
                Ask questions. Get answers. Prevent failures. Stay compliant.
              </p>
            </FadeUp>

            <FadeUp delay={1200} duration={1000}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/dashboard"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02]"
                >
                  <Sparkles className="h-4 w-4" />
                  Get Started Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 rounded-xl liquid-glass px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
                >
                  <Play className="h-4 w-4 text-cyan-400" />
                  Watch Demo
                </a>
              </div>
            </FadeUp>
          </div>

          <div className="hidden lg:flex lg:col-span-2 items-end justify-end">
            <FadeUp delay={1500} duration={1000}>
              <div className="liquid-glass rounded-2xl p-5 max-w-xs">
                <div className="flex items-center gap-2 mb-3 text-xs text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Live Plant Status
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Plant Health", value: "96%", color: "text-emerald-400" },
                    { label: "Assets Online", value: "12/12", color: "text-cyan-400" },
                    { label: "Docs Indexed", value: "248K", color: "text-blue-400" },
                    { label: "AI Confidence", value: "95%", color: "text-violet-400" },
                  ].map((s) => (
                    <div key={s.label} className="text-center py-2 px-1 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                      <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <FadeUp delay={2000}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Scroll</span>
              <div className="h-8 w-[1px] bg-gradient-to-b from-slate-500 to-transparent animate-pulse-soft" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — TRUSTED BY / SOCIAL PROOF
         ════════════════════════════════════════ */}
      <section className="relative py-16 px-5 md:px-10 lg:px-14 border-t border-white/[0.04]" style={{ background: "var(--fos-bg-base)" }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-8">Trusted by leading industrial enterprises</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Reliance Industries", "Tata Steel", "IOCL", "BPCL", "NTPC", "Adani Power"].map((name) => (
              <span key={name} className="text-sm font-medium text-slate-600 hover:text-slate-400 transition-colors">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — PLATFORM FEATURES
         ════════════════════════════════════════ */}
      <section id="platform" className="relative py-24 px-5 md:px-10 lg:px-14" style={{ background: "var(--fos-bg-base)" }}>
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-3 font-semibold">The Platform</p>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-gradient-white mb-4">
                Intelligence at Every Layer
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-base text-slate-400 max-w-2xl mx-auto">
                From document ingestion to real-time AI investigations — FactoryOS AI covers the complete industrial intelligence stack.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard
              icon={BrainCircuit}
              title="Industrial GPT Engine"
              description="Ask anything about your plant. Get answers from 248K+ indexed documents with full traceability."
              stat="42"
              statLabel="Investigations / Day"
              delay={0}
            />
            <FeatureCard
              icon={Cpu}
              title="Digital Twin & SCADA"
              description="Real-time asset monitoring with predictive failure detection across all connected equipment."
              stat="12"
              statLabel="Connected Assets"
              delay={100}
            />
            <FeatureCard
              icon={FileText}
              title="Knowledge Indexing"
              description="Manuals, SOPs, P&IDs, inspection reports — everything indexed, searchable, and cross-referenced."
              stat="248K"
              statLabel="Documents"
              delay={200}
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Compliance Intelligence"
              description="Automated ISO 27001, OISD, and internal SOP compliance tracking with audit-ready reports."
              stat="97%"
              statLabel="Compliance Score"
              delay={300}
            />
            <FeatureCard
              icon={BarChart3}
              title="Predictive Analytics"
              description="ML-driven failure predictions, maintenance scheduling, and cost-saving estimations."
              stat="₹4.8L"
              statLabel="Savings / Incident"
              delay={400}
            />
            <FeatureCard
              icon={Zap}
              title="Instant Root Cause"
              description="AI-powered root cause analysis in minutes, not days. Cross-references OEM data, maintenance logs, and history."
              stat="96%"
              statLabel="AI Confidence"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — CTA BANNER
         ════════════════════════════════════════ */}
      <section className="relative py-24 px-5 md:px-10 lg:px-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-violet-500/5 animate-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-white mb-6">
              Ready to transform your plant?
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="text-base text-slate-400 mb-10 max-w-xl mx-auto">
              Join the enterprises already using FactoryOS AI to prevent failures, ensure compliance, and unlock operational intelligence.
            </p>
          </FadeUp>
          <FadeUp delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02]"
              >
                Launch Dashboard
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl liquid-glass px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                Talk to Sales
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 — ENTERPRISE TRUST BAR
         ════════════════════════════════════════ */}
      <section className="relative py-16 px-5 md:px-10 lg:px-14 border-t border-white/[0.04]" style={{ background: "var(--fos-bg-base)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Lock, title: "Enterprise Security", desc: "ISO 27001 certified. SOC 2 compliant. On-premise deployment available." },
              { icon: Globe, title: "Scale Globally", desc: "Multi-plant, multi-region support. 99.99% uptime SLA." },
              { icon: Zap, title: "Deploy in Days", desc: "Pre-built industrial connectors. Go live in 5 days, not 5 months." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] transition-colors">
                <div className="h-9 w-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <item.icon className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
         ════════════════════════════════════════ */}
      <footer className="relative py-12 px-5 md:px-10 lg:px-14 border-t border-white/[0.04]" style={{ background: "var(--fos-bg-base)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <BrainCircuit className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">FactoryOS AI</span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-500">Enterprise Industrial Intelligence</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span>ISO 27001 Certified</span>
            <span className="text-slate-700">•</span>
            <span>SOC 2 Compliant</span>
            <span className="text-slate-700">•</span>
            <span>OISD Validated</span>
          </div>
          <div className="text-xs text-slate-600">© 2026 FactoryOS AI. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
