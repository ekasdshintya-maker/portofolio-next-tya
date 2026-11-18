import FormBukuTamu from "@/components/FormBukuTamu";
import { supabase } from "@/lib/supabase";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
    title: "Buku Tamu",
    description: "Tinggalkan kesan atau sapaan untuk Shintya Eka.",
};

export default async function BukuTamu() {
    const { data: daftarPesan, error } = await supabase
        .from("buku_tamu")
        .select("*")
        .order("disematkan", { ascending: false })
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Gagal mengambil pesan:", error.message);
    }

    return (
        <main className="mx-auto w-full max-w-3xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">
                Buku Tamu
            </h1>

            <p className="mt-3 text-lg text-muted-foreground">
                Tinggalkan kesan atau sapaan. Pesanmu langsung tampil di bawah.
            </p>

            {/* Form Buku Tamu */}
            <div className="mt-8">
                <FormBukuTamu />
            </div>

            {/* Daftar Pesan Terbaru */}
            <h2 className="mt-10 text-2xl font-bold text-primary">
                Pesan Terbaru
            </h2>

            <div className="mt-4 space-y-4">
                {daftarPesan && daftarPesan.length > 0 ? (
                    daftarPesan.map((item) => (
                        <Card key={item.id}>
                            <CardHeader>
                                <CardTitle>{item.nama}</CardTitle>
                                <CardDescription>
                                    {new Date(item.created_at).toLocaleDateString(
                                        "id-ID"
                                    )}
                                </CardDescription>
                                {item.disematkan && <Badge>Disematkan</Badge>}
                            </CardHeader>

                            <CardContent>
                                {item.pesan}
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className="text-muted-foreground">
                        Belum ada pesan yang masuk.
                    </p>
                )}
            </div>
        </main>
    );
}
