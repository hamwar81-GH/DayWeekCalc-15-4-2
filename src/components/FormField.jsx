function FormField({ htmlFor, label, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-slate-400">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormField;
