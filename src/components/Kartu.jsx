export default function Kartu({ judul, children }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-bold text-utama dark:text-sky-300">
        {judul}
      </h2>

      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </section>
  );
}
