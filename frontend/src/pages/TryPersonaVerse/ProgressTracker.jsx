import { useEffect } from "react";
import { useSimulationStore } from "../../store/simulationStore";
import { useSimulationSocket } from "../../hooks/useSimulationSocket";

export default function ProgressTracker() {
  const jobId = useSimulationStore((s) => s.jobId);
  const connectionStatus = useSimulationStore((s) => s.connectionStatus);
  const personas = useSimulationStore((s) => s.personas);
  const setStep = useSimulationStore((s) => s.setStep);

  // Opens the WebSocket for this job; messages populate the store as they arrive.
  useSimulationSocket(jobId);

  // Once personas start streaming in, move to the personas step.
  useEffect(() => {
    if (personas.length > 0) setStep("personas");
  }, [personas, setStep]);

  return (
    <div className="max-w-xl">
      <h2 className="text-xl font-semibold">Running simulation…</h2>
      <p className="mt-2 text-sm opacity-70">Connection: {connectionStatus}</p>
      {/* TODO: replace with real step-by-step progress once backend sends stage events */}
    </div>
  );
}
