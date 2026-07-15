import { useState } from "react";
import { useSimulationStore } from "../../store/simulationStore";
import { createSimulationJob } from "../../services/api";
import Button from "../../components/ui/Button";

export default function DecisionInput() {
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const setDecisionText = useSimulationStore((s) => s.setDecisionText);
  const setJobId = useSimulationStore((s) => s.setJobId);
  const setStep = useSimulationStore((s) => s.setStep);

  async function handleSubmit() {
    if (!text.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      const { jobId } = await createSimulationJob(text);
      setDecisionText(text);
      setJobId(jobId);
      setStep("loading");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-xl">
      <h2 className="text-xl font-semibold">Describe your decision</h2>
      <textarea
        className="mt-4 w-full rounded-md border border-neutral-300 p-3 text-sm"
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="e.g. We're raising our subscription price by 20%..."
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <div className="mt-4">
        <Button onClick={handleSubmit} disabled={submitting}>
          {submitting ? "Starting simulation..." : "Run simulation"}
        </Button>
      </div>
    </div>
  );
}
