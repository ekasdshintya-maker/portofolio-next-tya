export default function Kartu({ judul, children }) {
  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-primary">
        {judul}
      </h2>

      <div className="text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
