import Image from "next/image";

export default function Hero({ nama, tagline }) {
  return (
    <section className=" mb-8 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
      <Image
        src="/fp2.jpeg"
        alt={`Foto profil ${nama}`}
        width={180}
        height={180}
        priority
        className="h-45 w-45 rounded-full border-4 border-cyan-400 object-cover"
      />

      <div>
        <h1 className="text-3xl font-bold text-primary md:text-5xl">
          Halo, saya {nama}!
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          {tagline}
        </p>
      </div>
    </section>
  );
}
