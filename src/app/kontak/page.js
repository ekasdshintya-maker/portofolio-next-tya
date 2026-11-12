import FormKontak from "@/components/FormKontak";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata  = {
    title: "Kontak",
    description: "Hubungi Shintya Eka melalui form kontak, email, dan GitHub.",
};

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">Hubungi Saya</h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-200">
                Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-2">
                    <CardContent>
                        <FormKontak />
                    </CardContent>
                </Card>

            {/* Tentang saya */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">
                        Temukan saya di
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <ul className="space-y-2">
                        <li>
                            <a
                             href="https://github.com/ekasdshintya"
                             target="_blank"
                             className="text-aksen hover:underline">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                              href="mailto:shintyaeka@example.com"
                              className="text-aksen hover:underline">
                                ekasdshintya@gmail.com
                              </a>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    </main>
    );
}