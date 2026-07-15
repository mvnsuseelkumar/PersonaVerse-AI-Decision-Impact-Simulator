import { useSimulationStore } from "../../store/simulationStore";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function PersonaGrid() {
  const personas = useSimulationStore((s) => s.personas);
  const opinions = useSimulationStore((s) => s.opinions);
  const setStep = useSimulationStore((s) => s.setStep);

  return (
    <div>
      <h2 className="text-xl font-semibold">Personas</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {personas.map((persona) => (
          <Card key={persona.id}>
            <p className="font-medium">{persona.name}</p>
            <p className="text-sm opacity-70">{persona.background}</p>
            <p className="mt-2 text-sm">
              {opinions[persona.id]?.summary ?? "Opinion pending…"}
            </p>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <Button onClick={() => setStep("debate")}>View debate</Button>
      </div>
    </div>
  );
}
