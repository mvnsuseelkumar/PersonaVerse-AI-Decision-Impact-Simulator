import { useSimulationStore } from "../../store/simulationStore";
import SidebarProgress from "./SidebarProgress";
import DecisionInput from "./DecisionInput";
import ProgressTracker from "./ProgressTracker";
import PersonaGrid from "./PersonaGrid";
import DebateChat from "./DebateChat";
import ReportDashboard from "./ReportDashboard";

const STEP_COMPONENTS = {
  input: DecisionInput,
  loading: ProgressTracker,
  personas: PersonaGrid,
  debate: DebateChat,
  report: ReportDashboard,
};

export default function TryPersonaVerse() {
  const currentStep = useSimulationStore((s) => s.currentStep);
  const StepComponent = STEP_COMPONENTS[currentStep] ?? DecisionInput;

  return (
    <div className="flex">
      <SidebarProgress />
      <div className="flex-1 p-6">
        <StepComponent />
      </div>
    </div>
  );
}
