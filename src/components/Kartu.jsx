export default function Kartu({ judul, children }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold text-utama">
        {judul}
      </h2>

      <div className="text-gray-700">
        {children}
      </div>
    </section>
  );
}
