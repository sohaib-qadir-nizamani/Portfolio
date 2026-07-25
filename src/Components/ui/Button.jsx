function Button({ children, onClick, variant = "primary" }) {
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",

    secondary: "border border-slate-700 hover:bg-slate-800 text-slate-200",
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-6 py-3 font-medium transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
