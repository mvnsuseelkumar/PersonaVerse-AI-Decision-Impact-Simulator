import { create } from "zustand";

// Central store for the "Try PersonaVerse" flow.
// Every simulation step (input -> loading -> personas -> debate -> report)
// reads from and writes to this single store.
export const useSimulationStore = create((set) => ({
  decisionText: "",
  jobId: null,
  currentStep: "input", // input | loading | personas | debate | report
  personas: [],
  opinions: {}, // { [personaId]: opinion }
  debateMessages: [],
  report: null,
  connectionStatus: "idle", // idle | connecting | open | closed | error

  setDecisionText: (text) => set({ decisionText: text }),
  setJobId: (jobId) => set({ jobId }),
  setStep: (step) => set({ currentStep: step }),
  setPersonas: (personas) => set({ personas }),
  addOpinion: (personaId, opinion) =>
    set((s) => ({ opinions: { ...s.opinions, [personaId]: opinion } })),
  addDebateMessage: (message) =>
    set((s) => ({ debateMessages: [...s.debateMessages, message] })),
  setReport: (report) => set({ report }),
  setConnectionStatus: (status) => set({ connectionStatus: status }),
  reset: () =>
    set({
      decisionText: "",
      jobId: null,
      currentStep: "input",
      personas: [],
      opinions: {},
      debateMessages: [],
      report: null,
      connectionStatus: "idle",
    }),
}));
