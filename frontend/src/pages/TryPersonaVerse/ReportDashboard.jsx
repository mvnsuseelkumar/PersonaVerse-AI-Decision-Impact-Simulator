import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useSimulationStore } from "../../store/simulationStore";

const COLORS = ["#16a34a", "#dc2626", "#94a3b8"]; // approve / reject / neutral

export default function ReportDashboard() {
  const report = useSimulationStore((s) => s.report);

  if (!report) {
    return <p className="text-sm opacity-60">Report not ready yet.</p>;
  }

  const chartData = [
    { name: "Approve", value: report.approvalPercent ?? 0 },
    { name: "Reject", value: report.rejectPercent ?? 0 },
    { name: "Neutral", value: report.neutralPercent ?? 0 },
  ];

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold">Impact Report</h2>
      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={chartData} dataKey="value" nameKey="name" outerRadius={90} label>
              {chartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        <p><span className="font-medium">Key concerns:</span> {report.concerns?.join(", ") || "—"}</p>
        <p><span className="font-medium">Recommendations:</span> {report.recommendations?.join(", ") || "—"}</p>
      </div>
    </div>
  );
}
