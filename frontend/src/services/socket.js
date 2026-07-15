const WS_URL = import.meta.env.VITE_WS_URL;

// Placeholder path/protocol — confirm against the rebuilt backend's
// actual WebSocket route and message shape before wiring up real UI.
export function connectSimulationSocket(jobId, handlers = {}) {
  const socket = new WebSocket(`${WS_URL}/ws/simulation/${jobId}`);

  socket.onopen = () => handlers.onOpen?.();
  socket.onclose = () => handlers.onClose?.();
  socket.onerror = (err) => handlers.onError?.(err);
  socket.onmessage = (event) => {
    try {
      handlers.onMessage?.(JSON.parse(event.data));
    } catch (err) {
      console.error("Malformed WebSocket message:", event.data, err);
    }
  };

  return socket;
}
