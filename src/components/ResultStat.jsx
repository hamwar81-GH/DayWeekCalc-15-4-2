function ResultStat({ label, value }) {
  return (
    <div className="card p-4 text-center">
      <div className="font-display mb-1 text-xl font-bold text-white">{value}</div>
      <div className="text-xs text-slate-600">{label}</div>
    </div>
  );
}

export default ResultStat;
