import Image from "next/image";

export default function Hero({ nama, tagline }) {
  return (
    <section className="flex w-full flex-col items-center gap-6 py-2 text-center md:flex-row md:gap-6 md:text-left">
      <Image
        src="/foto-profil.png"
        alt={`Foto profil ${nama}`}
        width={160}
        height={160}
        loading="eager"
        className="h-40 w-40 shrink-0 rounded-full border-4 border-aksen object-cover"
      />

      <div>
        <h1 className="text-3xl font-bold text-utama md:text-4xl">
          Halo, saya {nama}!
        </h1>

        <p className="mt-3 text-lg text-gray-700">{tagline}</p>

        <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href="#tentang"
            className="rounded-lg bg-aksen px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Tentang Saya
          </a>

          <a
            href="#keahlian"
            className="rounded-lg border border-utama px-5 py-3 text-sm font-semibold text-utama transition hover:bg-utama hover:text-white"
          >
            Lihat Keahlian
          </a>
        </div>
      </div>
    </section>
  );
}
