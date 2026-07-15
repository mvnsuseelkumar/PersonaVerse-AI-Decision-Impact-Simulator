const TEAM = [
  {
    name: "Sussel Kumar",
    role: "AI Systems & Backend Architecture Lead",
    bio: "Builds backend systems, manages databases, and leads AI architecture and research. Designs multi-agent workflows enabling intelligent analysis, debate, and collaboration.",
    initials: "SK",
    color: "from-brand-500 to-purple-500",
  },
  {
    name: "Marripudi Varshini",
    role: "Frontend Developer",
    bio: "Builds responsive and interactive user interfaces, ensuring a seamless user experience.",
    initials: "MV",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Appasani Haritha",
    role: "API Engineer",
    bio: "Designs and integrates REST APIs for efficient communication between the frontend, backend, and AI modules.",
    initials: "AH",
    color: "from-cyan-500 to-brand-500",
  },
  {
    name: "Pesala Ananya",
    role: "Landing Page Developer",
    bio: "Develops responsive and engaging landing pages that provide a smooth user experience.",
    initials: "PA",
    color: "from-pink-500 to-orange-500",
  },
  {
    name: "SriVardhan",
    role: "UI/UX & Visualization Engineer",
    bio: "Designs intuitive interfaces, dashboards, and data visualizations to present AI insights effectively.",
    initials: "SV",
    color: "from-emerald-500 to-cyan-500",
  },
];

export default function Team() {
  return (
    <>
      {/* ═══════ PAGE HEADER ═══════ */}
      <section className="px-6 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text animate-fade-in-up">
          Meet the Team
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-text-secondary animate-fade-in-up delay-100">
          We're a small, mission-driven crew obsessed with bringing AI-powered
          decision intelligence to every team and organization.
        </p>
      </section>

      {/* ═══════ TEAM GRID ═══════ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map(({ name, role, bio, initials, color }, i) => (
            <div
              key={name}
              className={`glass rounded-2xl p-8 text-center transition-all duration-300 hover:scale-[1.03] hover:border-brand-500/30 animate-fade-in-up delay-${(i + 1) * 100}`}
            >
              {/* Avatar */}
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${color} text-2xl font-bold text-white shadow-lg`}
              >
                {initials}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-text-primary">
                {name}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-400">{role}</p>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                {bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ CONTACT US ═══════ */}
      <section className="px-6 py-20 md:py-28 bg-surface-alt/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-bold gradient-text">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-text-secondary">
            Have questions, feedback, or partnership ideas? We'd love to hear
            from you.
          </p>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass rounded-2xl p-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us what's on your mind…"
                  className="w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:shadow-brand-500/40 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>

            {/* Info Cards */}
            <div className="flex flex-col gap-6 justify-center">
              {[
                {
                  icon: "📧",
                  title: "Email",
                  detail: "hello@personaverse.ai",
                  href: "mailto:hello@personaverse.ai",
                },
                {
                  icon: "🐦",
                  title: "Twitter / X",
                  detail: "@PersonaVerse",
                  href: "#",
                },
                {
                  icon: "💼",
                  title: "LinkedIn",
                  detail: "PersonaVerse",
                  href: "#",
                },
                {
                  icon: "💻",
                  title: "GitHub",
                  detail: "github.com/personaverse",
                  href: "#",
                },
              ].map(({ icon, title, detail, href }) => (
                <a
                  key={title}
                  href={href}
                  className="glass rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 hover:scale-[1.02] hover:border-brand-500/30"
                >
                  <span className="text-3xl">{icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {title}
                    </p>
                    <p className="text-sm text-text-secondary">{detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
