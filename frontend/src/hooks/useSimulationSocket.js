import { useEffect, useRef } from "react";
import { connectSimulationSocket } from "../services/socket";
import { useSimulationStore } from "../store/simulationStore";

// Owns the WebSocket lifecycle for a given job and dispatches
// incoming messages into the shared simulation store.
export function useSimulationSocket(jobId) {
  const socketRef = useRef(null);
  const setPersonas = useSimulationStore((s) => s.setPersonas);
  const addOpinion = useSimulationStore((s) => s.addOpinion);
  const addDebateMessage = useSimulationStore((s) => s.addDebateMessage);
  const setReport = useSimulationStore((s) => s.setReport);
  const setConnectionStatus = useSimulationStore((s) => s.setConnectionStatus);

  useEffect(() => {
    if (!jobId) return;

    setConnectionStatus("connecting");
    socketRef.current = connectSimulationSocket(jobId, {
      onOpen: () => setConnectionStatus("open"),
      onClose: () => setConnectionStatus("closed"),
      onError: () => setConnectionStatus("error"),
      onMessage: (data) => {
        // placeholder "type" values — align with the real backend payloads
        switch (data.type) {
          case "personas":
            setPersonas(data.payload);
            break;
          case "opinion":
            addOpinion(data.personaId, data.opinion);
            break;
          case "debate_message":
            addDebateMessage(data.payload);
            break;
          case "report":
            setReport(data.payload);
            break;
          default:
            console.warn("Unhandled socket message type:", data.type);
        }
      },
    });

    return () => socketRef.current?.close();
  }, [jobId]);

  return socketRef;
}
