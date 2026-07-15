# PersonaVerse Frontend

Scaffold for the PersonaVerse marketing site + interactive "Try PersonaVerse"
simulation flow. Built with Vite + React 19 + React Router 7 + Zustand 5 +
Tailwind CSS v4 (via the `@tailwindcss/vite` plugin — no `tailwind.config.js`
in this setup) + Recharts.

## Setup

```
npm install
npm run dev
```

Copy `.env.example` to `.env` and adjust if your backend runs somewhere
other than `localhost:8000`.

## Structure

```
src/
├── components/       # Shared UI (Navbar, Footer, base ui/ primitives)
├── store/            # Zustand: single source of truth for the sim flow
├── services/         # api.js (REST) and socket.js (WebSocket)
├── hooks/            # useSimulationSocket - owns the WS lifecycle
└── pages/
    ├── Home.jsx / About.jsx / Team.jsx   # static marketing pages
    └── TryPersonaVerse/                  # the interactive flow
        ├── TryPersonaVerse.jsx  # layout + step switcher
        ├── SidebarProgress.jsx  # step indicator
        ├── DecisionInput.jsx    # step 1: submit a decision
        ├── ProgressTracker.jsx  # step 2: opens the WebSocket, shows status
        ├── PersonaGrid.jsx      # step 3: renders generated personas
        ├── DebateChat.jsx       # step 4: renders debate messages
        └── ReportDashboard.jsx  # step 5: pie chart + recommendations
```

## What's still a placeholder

- **`services/socket.js`** - the WS URL path (`/ws/simulation/:jobId`) and
  the `data.type` values handled in `hooks/useSimulationSocket.js`
  (`personas`, `opinion`, `debate_message`, `report`) are guesses. Update
  both once the real backend contract is finalized.
- **`services/api.js`** - same for the REST job-creation endpoint and
  response shape (`{ jobId }`).
- **Visual design** - `src/index.css` deliberately has no color/type tokens
  yet. Add them via an `@theme` block once the team locks the new palette,
  rather than inheriting anything from a prior design pass.
- **Home / About / Team** - placeholder copy only.

## Next steps

1. Confirm the WebSocket message contract with the backend team.
2. Flesh out `Navbar`/`Footer` and the three marketing pages.
3. Do a dedicated design pass (palette, type scale) before polishing UI.
