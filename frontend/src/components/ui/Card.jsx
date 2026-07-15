export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border border-neutral-200 p-4 ${className}`}>
      {children}
    </div>
  );
}
