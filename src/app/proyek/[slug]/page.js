import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/lib/supabase";

async function ambilProyek(slug) {
    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

    if (error) {
        console.error("Gagal mengambil proyek:", error.message);
        return null;
    }
    return data;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const proyek = await ambilProyek(slug);

    if (!proyek) {
        return { title: "Proyek tidak ditemukan" };
    }
    return { title: proyek.judul, description: proyek.deskripsi };
}

export default async function DetailProyek({ params }) {
    const { slug } = await params;
    const proyek = await ambilProyek(slug);

    if (!proyek) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-3xl px-4 py-10">
            <Link href="/proyek" className="text-sm font-semibold text-aksen hover:underline">
              &larr; Kembali ke daftar proyek
            </Link>
            <h1 className="mt-4 text-3xl font-bold text-primary md:text-4xl">{proyek.judul}</h1>
            <div className="mt-3 flex items-center gap-3">
                <Badge>{proyek.kategori}</Badge>
                <span className="text-muted-foreground">Dibuat di{proyek.minggu}</span>
            </div>
            <Image
              src={proyek.gambar_url}
              alt={`Tangkapan layar ${proyek.judul}`}
              width={640}
              height={420}
              loading="eager"
              className="mt-6 h-auto w-full rounded-xl border border-border"
            />
            <p className="mt-6 text-lg">{proyek.deskripsi}</p>
            <h2 className="text-2xl font-bold text-primary">Yang Saya Pelajari</h2>
            <ul className="mt-3 list-disc pl-5">
                {(Array.isArray(proyek.fitur) ? proyek.fitur : []).map((f, index) => (
                    <li key={index}>{f}</li>
                ))}
            </ul>
        </main>
    );
}