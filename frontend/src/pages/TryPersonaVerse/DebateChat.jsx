import { useSimulationStore } from "../../store/simulationStore";
import Button from "../../components/ui/Button";

export default function DebateChat() {
  const debateMessages = useSimulationStore((s) => s.debateMessages);
  const setStep = useSimulationStore((s) => s.setStep);

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold">Debate</h2>
      <div className="mt-4 space-y-3">
        {debateMessages.map((msg, i) => (
          <div key={i} className="rounded-md border border-neutral-200 p-3 text-sm">
            <p className="font-medium">{msg.personaName}</p>
            <p className="mt-1 opacity-80">{msg.text}</p>
          </div>
        ))}
        {debateMessages.length === 0 && (
          <p className="text-sm opacity-60">Waiting for debate to start…</p>
        )}
      </div>
      <div className="mt-6">
        <Button onClick={() => setStep("report")}>View report</Button>
      </div>
    </div>
  );
}
