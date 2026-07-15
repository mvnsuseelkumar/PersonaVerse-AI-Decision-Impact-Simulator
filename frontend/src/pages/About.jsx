export default function About() {
  return (
    <>
      {/* ═══════ PAGE HEADER ═══════ */}
      <section className="px-6 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text animate-fade-in-up">
          About PersonaVerse
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-text-secondary animate-fade-in-up delay-100">
          Understanding why we exist, what we solve, and how we deliver value.
        </p>
      </section>

      {/* ═══════ THE PROBLEM ═══════ */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative flex items-center justify-center animate-fade-in-up">
            <div className="h-64 w-64 rounded-full bg-red-500/10 blur-[60px] absolute" />
            <div className="relative glass rounded-3xl p-10 text-center">
              <span className="text-6xl">⚠️</span>
              <p className="mt-4 text-xl font-bold text-red-400">The Problem</p>
            </div>
          </div>
          {/* Text */}
          <div className="animate-fade-in-up delay-200">
            <h2 className="text-3xl font-bold text-text-primary">
              Decisions Made in the Dark
            </h2>
            <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
              <p>
                Every year, businesses lose <span className="text-red-400 font-semibold">billions of dollars</span> on
                product launches, marketing campaigns, pricing strategies, and
                policy rollouts that fail — because they never tested real human
                reactions before going live.
              </p>
              <p>
                Traditional methods like focus groups and surveys are
                <span className="text-text-primary font-medium"> slow, expensive, and biased</span>.
                They capture a narrow slice of opinion, take weeks to organize,
                and still leave critical blind spots.
              </p>
              <p>
                The result? Companies ship products nobody wants, launch
                campaigns that backfire, and set prices that drive customers
                away — all because they relied on <span className="text-text-primary font-medium">gut feelings
                  instead of data</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ THE SOLUTION ═══════ */}
      <section className="px-6 py-20 md:py-28 bg-surface-alt/50">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-in-up order-2 md:order-1">
            <h2 className="text-3xl font-bold text-text-primary">
              AI-Powered Reaction Prediction
            </h2>
            <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
              <p>
                PersonaVerse replaces guesswork with{" "}
                <span className="text-brand-400 font-semibold">
                  multi-agent AI simulation
                </span>
                . Describe your decision — a new feature, a price change, a
                marketing message — and we generate a panel of diverse,
                demographically rich AI personas that mirror your real audience.
              </p>
              <p>
                These personas don't just respond — they{" "}
                <span className="text-brand-400 font-semibold">think, debate, and challenge</span>{" "}
                each other, exposing edge-cases, emotional reactions, and
                concerns that no single brainstorming session could surface.
              </p>
              <p>
                You receive a detailed report with sentiment scores, risk
                flags, and actionable recommendations — all in{" "}
                <span className="text-brand-400 font-semibold">minutes, not weeks</span>.
              </p>
            </div>
          </div>
          {/* Visual */}
          <div className="relative flex items-center justify-center animate-fade-in-up delay-200 order-1 md:order-2">
            <div className="h-64 w-64 rounded-full bg-brand-500/10 blur-[60px] absolute" />
            <div className="relative glass rounded-3xl p-10 text-center">
              <span className="text-6xl">💡</span>
              <p className="mt-4 text-xl font-bold text-brand-400">The Solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ BENEFITS ═══════ */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold gradient-text">
            Benefits
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-text-secondary">
            Why teams across industries choose PersonaVerse.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "💸",
                title: "Cost Savings",
                desc: "Eliminate expensive focus groups and reduce failed launches. Test ideas for a fraction of the cost.",
              },
              {
                icon: "⚡",
                title: "Speed",
                desc: "Go from question to insight in minutes. No scheduling, no waiting, no logistics.",
              },
              {
                icon: "🌍",
                title: "Diversity of Perspectives",
                desc: "Simulate reactions from personas across demographics, cultures, and psychographic profiles.",
              },
              {
                icon: "📊",
                title: "Data-Driven Decisions",
                desc: "Every insight is backed by structured data, sentiment scores, and confidence metrics.",
              },
              {
                icon: "🛡️",
                title: "Risk Reduction",
                desc: "Identify backlash, edge-cases, and weak points before they cost you real money or reputation.",
              },
              {
                icon: "📈",
                title: "Scalability",
                desc: "Run hundreds of simulations across different scenarios — scale your decision intelligence effortlessly.",
              },
            ].map(({ icon, title, desc }, i) => (
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
    </>
  );
}
