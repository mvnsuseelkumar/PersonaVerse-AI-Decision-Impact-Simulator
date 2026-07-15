import { Link } from "react-router-dom";

/* ──────────── data ──────────── */
const FEATURES = [
  {
    icon: "🤖",
    title: "Multi-Agent AI",
    desc: "Multiple AI agents simulate diverse viewpoints simultaneously.",
  },
  {
    icon: "🎭",
    title: "Dynamic Personas",
    desc: "Demographically and psychographically rich AI personas.",
  },
  {
    icon: "⚔️",
    title: "AI Debate",
    desc: "Personas debate your idea, exposing blind spots.",
  },
  {
    icon: "🧠",
    title: "Decision Intelligence",
    desc: "Data-driven confidence scores for every decision.",
  },
  {
    icon: "📊",
    title: "Actionable Reports",
    desc: "Clear, structured reports you can act on immediately.",
  },
];

const STEPS = [
  { num: "01", title: "Decision", desc: "Describe the product, feature, pricing, or policy you want to test." },
  { num: "02", title: "AI Personas", desc: "We generate diverse AI personas matching your target audience." },
  { num: "03", title: "Debate", desc: "Personas evaluate, critique, and debate your decision." },
  { num: "04", title: "Report", desc: "Receive a detailed analysis with scores, insights, and recommendations." },
];

const APPLICATIONS = [
  { icon: "🚀", title: "Product Launch", desc: "Validate product-market fit before investing resources." },
  { icon: "📢", title: "Marketing", desc: "Test campaign messaging across diverse audience segments." },
  { icon: "💰", title: "Pricing", desc: "Optimize pricing strategy with simulated consumer reactions." },
  { icon: "🏛️", title: "Public Policy", desc: "Gauge public sentiment on policies before announcement." },
  { icon: "🎨", title: "UX Testing", desc: "Get instant persona feedback on user experience designs." },
  { icon: "📈", title: "Business Strategy", desc: "Stress-test strategic decisions with multi-perspective analysis." },
];

/* ──────────── component ──────────── */
export default function Home() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden px-6 py-28 md:py-40 flex flex-col items-center text-center">
        {/* Animated gradient orbs */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-600/20 blur-[120px] animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-float delay-200" />

        <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tight gradient-text animate-fade-in-up">
          PersonaVerse
        </h1>
        <p className="relative mt-6 text-lg md:text-2xl font-medium text-text-primary animate-fade-in-up delay-100">
          Predict Public Reaction Before You Launch.
        </p>
        <p className="relative mt-4 max-w-2xl text-base md:text-lg text-text-secondary leading-relaxed animate-fade-in-up delay-200">
          Simulate how AI-generated personas evaluate your product, feature,
          pricing, or policy — so you can make confident decisions every time.
        </p>
        <Link
          to="/try"
          className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-500/25 transition-all duration-300 hover:shadow-brand-500/40 hover:scale-105 animate-fade-in-up delay-300 animate-pulse-glow"
        >
          Start Simulation
          <span className="text-lg">→</span>
        </Link>
      </section>

      {/* ═══════ WHY PERSONAVERSE ═══════ */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold gradient-text">
            Why PersonaVerse
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-text-secondary">
            A new standard for decision validation — powered by multi-agent AI.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {FEATURES.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className={`glass rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-brand-500/30 animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-sm font-semibold text-brand-300">{title}</h3>
                <p className="mt-2 text-xs text-text-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="px-6 py-24 md:py-32 bg-surface-alt/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold gradient-text">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-text-secondary">
            Four simple steps from question to insight.
          </p>

          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/60 via-purple-500/60 to-transparent" />

            {STEPS.map(({ num, title, desc }, i) => (
              <div
                key={num}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                {/* Dot */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-purple-500 text-sm font-bold text-white shadow-lg shadow-brand-500/30 md:mx-auto">
                  {num}
                </div>
                {/* Card */}
                <div className="glass rounded-2xl p-6 flex-1 max-w-sm">
                  <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ APPLICATIONS ═══════ */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold gradient-text">
            Applications
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-text-secondary">
            PersonaVerse adapts to any domain where decisions impact people.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {APPLICATIONS.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className={`glass rounded-2xl p-8 transition-all duration-300 hover:scale-[1.03] hover:border-brand-500/30 animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        {/* Background orb */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[400px] rounded-full bg-brand-600/15 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">
            Ready?
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            Start your first simulation and make decisions backed by diverse AI perspectives.
          </p>
          <Link
            to="/try"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-500/25 transition-all duration-300 hover:shadow-brand-500/40 hover:scale-105 animate-pulse-glow"
          >
            Start Simulation
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
