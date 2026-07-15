import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/try", label: "Try it", cta: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight gradient-text">
          PersonaVerse
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label, cta }) =>
            cta ? (
              <Link
                key={to}
                to={to}
                className="rounded-full bg-gradient-to-r from-brand-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:shadow-brand-500/40 hover:scale-105"
              >
                {label}
              </Link>
            ) : (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium transition-colors duration-200 ${pathname === to
                    ? "text-brand-400"
                    : "text-text-secondary hover:text-text-primary"
                  }`}
              >
                {label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-0.5 w-6 rounded bg-text-primary transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-text-primary transition-opacity duration-300 ${open ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-text-primary transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 px-6 pb-6 pt-4 flex flex-col gap-4 animate-fade-in-up">
          {NAV_LINKS.map(({ to, label, cta }) =>
            cta ? (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="rounded-full bg-gradient-to-r from-brand-500 to-purple-500 px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                {label}
              </Link>
            ) : (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${pathname === to ? "text-brand-400" : "text-text-secondary"
                  }`}
              >
                {label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
