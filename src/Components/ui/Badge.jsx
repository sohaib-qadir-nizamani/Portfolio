function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
      {children}
    </span>
  );
}

export default Badge;
