"use client";

import { useState } from "react"

const kelasInput = "mt-1 w-full rounded-lg border border-input bg-card p-2";
const tombolKirim = "rounded-lg bg-aksen px-5 py-2 font-semibold text-white";

export default function FormKontak() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [telepon, setTelepon] = useState("");
    const [keperluan, setKeperluan] = useState("");
    const [pesan, setPesan] = useState("");
    const [error, setError] = useState({});
    const [berhasil, setBerhasil] = useState(false);

    function kirim(e) {
        e.preventDefault();
        const errorBaru = {};

        if (nama.trim() === "") {
            errorBaru.nama = "Nama wajib diisi.";
        }
        if (!email.includes("@")) {
            errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com.";
        }
        if (telepon.length < 10) {
            errorBaru.telepon = "Nomor HP minimal 10 angka.";
        } 
        if (keperluan === "") {
            errorBaru.keperluan = "Pilih salah satu keperluan.";
        }
        if (pesan.trim().length < 10) {
            errorBaru.pesan = "Pesan minimal 10 karakter.";
        }

        setError (errorBaru);
        setBerhasil(Object.keys(errorBaru).length === 0);
    }

    return (
      <div>
        <form onSubmit={kirim} noValidate className="space-y-4" >
            <div>
                <label htmlFor="nama" className="block font-semibold text-foreground">
                    Nama lengkap
                </label>
                <input 
                  type="text"
                  id="nama"
                  name="nama"
                  value={ nama }
                  onChange={ (e) => setNama (e.target.value)}
                  placeholder="Contoh: Shintya Eka"
                  className={kelasInput}
                />
                {error.nama && <p className="mt-1 text-sm text-aksen">{error.nama}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block font-semibold text-foreground">
                    Email
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={ (e) => setEmail (e.target.value)}
                  placeholder="nama@gmail.com"
                  className={kelasInput}
                />
                {error.email && <p className="mt-1 text-sm text-aksen">{error.email}</p>}
            </div>
            <div>
                <label htmlFor="telepon" className="block font-semibold text-foreground">
                    Nomor HP
                </label>
                <input 
                  type="tel"
                  id="telepon"
                  name="telepon"
                  value={telepon}
                  onChange={ (e) => setTelepon (e.target.value)}
                  placeholder="Contoh: 08123456789"
                  className={kelasInput}
                />
                {error.telepon && <p className="mt-1 text-sm text-aksen">{error.telepon}</p>}
            </div>
            <div>
                <label htmlFor="keperluan" className="block font-semibold text-foreground">
                    Keperluan
                </label>
                <select
                  id="keperluan"
                  name="keperluan"
                  value={keperluan}
                  onChange={ (e) => setKeperluan (e.target.value)}
                  className={kelasInput}
                >
                  <option value="">--- Pilih keperluan ---</option>
                  <option value="bertanya">Bertanya</option>
                  <option value="kerja-sama">Kerja sama proyek</option>
                  <option value="lainnya">Lainnya</option>
                </select>
                {error.keperluan && <p className="mt-1 text-sm text-aksen">{error.keperluan}</p>}
            </div>
            <div>
                <label htmlFor="pesan" className="block font-semibold text-foreground">
                    Pesan
                </label>
                <textarea 
                  id="pesan"
                  name="pesan"
                  value={pesan}
                  onChange={ (e) => setPesan (e.target.value)}
                  placeholder="Tulis pesan kamu..."
                  className={kelasInput}
                  rows={4}
                />
                {error.pesan && <p className="mt-1 text-sm text-aksen">{error.pesan}</p>}
            </div>

        </form>

        {berhasil && (
            <p className=" mb-4 rounded-lg bg-green-100 p-3 text-green-800 dark:bg-green-900 dark:text-green-100">
                Terima kasih, {nama}! Pesanmu sudah lolos pemeriksaan.
            </p>
        )}

            <button type="submit" className={tombolKirim}>
                Kirim Pesan
            </button>
    </div>
    );
}