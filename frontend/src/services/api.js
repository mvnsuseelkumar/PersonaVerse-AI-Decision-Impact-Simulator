const API_URL = import.meta.env.VITE_API_URL;

// Kicks off a simulation job on the backend.
// Expected response shape: { jobId: string }
// Confirm this against the actual FastAPI route once it's finalized.
export async function createSimulationJob(decisionText) {
  const res = await fetch(`${API_URL}/api/simulations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ decision: decisionText }),
  });
  if (!res.ok) {
    throw new Error(`Failed to create simulation job: ${res.status}`);
  }
  return res.json();
}

// Fetches the final report if the user reloads or navigates back in.
export async function fetchReport(jobId) {
  const res = await fetch(`${API_URL}/api/simulations/${jobId}/report`);
  if (!res.ok) {
    throw new Error(`Failed to fetch report: ${res.status}`);
  }
  return res.json();
}
