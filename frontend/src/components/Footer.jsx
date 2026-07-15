import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/try", label: "Try it" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold gradient-text">PersonaVerse</h3>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-xs">
              Predict public reaction before you launch. Simulate how
              AI-generated personas evaluate your decisions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-text-secondary hover:text-brand-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a href="mailto:hello@personaverse.ai" className="hover:text-brand-400 transition-colors">
                  hello@personaverse.ai
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} PersonaVerse. All rights reserved.</p>
          <p>Built with AI-first architecture.</p>
        </div>
      </div>
    </footer>
  );
}
