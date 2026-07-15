import { useSimulationStore } from "../../store/simulationStore";

const STEPS = [
  { key: "input", label: "Decision" },
  { key: "loading", label: "Simulating" },
  { key: "personas", label: "Personas" },
  { key: "debate", label: "Debate" },
  { key: "report", label: "Report" },
];

export default function SidebarProgress() {
  const currentStep = useSimulationStore((s) => s.currentStep);

  return (
    <aside className="w-48 shrink-0 p-6">
      <ol className="space-y-3 text-sm">
        {STEPS.map((step) => (
          <li
            key={step.key}
            className={step.key === currentStep ? "font-semibold" : "opacity-60"}
          >
            {step.label}
          </li>
        ))}
      </ol>
    </aside>
  );
}
