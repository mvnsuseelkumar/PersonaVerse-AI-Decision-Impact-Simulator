export default function Button({ children, onClick, variant = "primary", type = "button", disabled = false }) {
  const base = "px-4 py-2 rounded-md text-sm font-medium transition-colors";
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-700 disabled:opacity-50",
    secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
