function Heading({ title, subtitle, align = "center" }) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-4xl font-bold text-slate-100">{title}</h2>

      {subtitle && (
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

export default Heading;
