import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

const hobi = [
  "Bermain Bola Voli",
  "Jalan-jalan",
  "Kulineran",
];

const rencana = [
  "Menjadi Junior Web Developer",
  "Meningkatkan Kemampuan Next.js",
  "Membuat Website yang Bermanfaat",
];

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain Poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const jadwal = [
  {
    hari: "Senin",
    waktu: "19.00 - 20.00",
    kegiatan: "Belajar HTML dan CSS",
  },
  {
    hari: "Selasa",
    waktu: "19.00 - 20.00",
    kegiatan: "Belajar JavaScript",
  },
  {
    hari: "Rabu",
    waktu: "19.00 - 20.00",
    kegiatan: "Latihan Membuat Website",
  },
  {
    hari: "Kamis",
    waktu: "19.00 - 20.00",
    kegiatan: "Belajar Next.js",
  },
  {
    hari: "Jumat",
    waktu: "19.00 - 20.00",
    kegiatan: "Evaluasi Proyek",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Profil utama */}
      <Hero
        nama="Shintya Eka"
        tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

      <section className="mt-8 space-y-6">
        {/* Tentang Saya */}
        <Kartu judul="Tentang Saya">
          <p className="leading-7 text-gray-700">
            Halo, saya Shintya Eka. Saya siswa jurusan Rekayasa
            Perangkat Lunak di SMKN 1 Pasuruan yang tertarik pada
            pengembangan website dan teknologi. Saya terus belajar
            meningkatkan kemampuan pemrograman dan membuat proyek
            yang bermanfaat.
          </p>
        </Kartu>

        {/* Hobi dan Cita-Cita */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Kartu judul="Hobi">
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              {hobi.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-Cita">
            <ol className="list-decimal space-y-2 pl-5 text-gray-700">
              {rencana.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Kartu>
        </section>

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

        {/* Jadwal Belajar */}
        <Kartu judul="Jadwal Belajar">
          <section className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-utama text-white">
                <tr>
                  <th className="px-4 py-3">Hari</th>
                  <th className="px-4 py-3">Waktu</th>
                  <th className="px-4 py-3">Kegiatan</th>
                </tr>
              </thead>

              <tbody>
                {jadwal.map((item) => (
                  <tr
                    key={item.hari}
                    className="border-b border-gray-200"
                  >
                    <td className="px-4 py-3">{item.hari}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item.waktu}
                    </td>
                    <td className="px-4 py-3">{item.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </Kartu>
      </section>
    </main>
  );
}
