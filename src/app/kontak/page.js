import FormKontak from "@/components/FormKontak";

export const metadata  = {
    title: "Kontak",
    description: "Hubungi Shintya Eka melalui form kontak, email, dan GitHub.",
};

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama dark:text-cyan-600 md:text-4xl">Hubungi Saya</h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-200">
                Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-[#1b2b3a] md:col-span-2">
            <FormKontak />
            </section>

            {/* Tentang saya */}
            <aside className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-[#1b2b3a]">
                <h2 className="font-bold text-utama dark:text-white">
                    Temukan saya di 
                </h2>
                <div className="mt-3 space-y-2 text-sm">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-red-600 hover:underline dark:text-cyan-500"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:ekasdshintya@gmail.com"
                        className="block text-red-600 hover:underline dark:text-cyan-500"
                    >
                        ekasdshintya@gmail.com
                    </a>
                </div>
            </aside>
        </div>
    </main>
    );
}