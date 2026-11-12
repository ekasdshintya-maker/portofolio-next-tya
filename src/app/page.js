import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";
import { buttonVariants } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan Github", level: "Dasar" },
  { nama: "Desain Poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default async function Home() {
  const { data: proyekTerbaru, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(3);

    if (error) {
      console.error("Gagal mengambil data proyek:", error);
    }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Profil utama */}
      <Hero
        nama="Shintya Eka"
        tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

        {/* Keahlian */}
        <Kartu judul="Keahlian">
          <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.nama}
                nama={skill.nama}
                level={skill.level}
              />
            ))}
          </section>
        </Kartu>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-primary">Proyek Terbaru</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {proyekTerbaru.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
          <Link href="/proyek" className={ buttonVariants ({ size: "lg", className: "mt-6"})}>
            Lihat semua Proyek
          </Link>
        </section>
    </main>
  );
}
