import FormProyek from "@/components/FormProyek";
import { tambahProyek } from "@/app/kelola/actions";

const proyekKosong = {
    id: "",
    judul: "",
    slug: "",
    kategori: "",
    minggu: "",
    deskripsi: "",
    fitur: [],
    gambar_url: "",
};

export default function HalamanProyekbaru() {
    return (
        <main className="mx-auto w-full max-w-3xl px-4 py-10">
            <h1 className="mb-6 text-center text-3xl font-bold text-primary">
                Tambah Proyek
            </h1>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
                <FormProyek
                    aksi={tambahProyek}
                    proyek={proyekKosong}
                    teksTombol="Simpan Proyek"
                />
            </div>
        </main>
    );
}