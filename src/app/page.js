import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const dataJadwal = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  {
    hari: "Selasa",
    waktu: "19.00 - 21.00",
    kegiatan: "Mengerjakan tugas praktik",
  },
  {
    hari: "Rabu",
    waktu: "19.30 - 20.30",
    kegiatan: "Merekam video dan menulis laporan",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eaf5ed] p-6 font-sans text-gray-800 md:p-12">
      <div className="mx-auto max-w-3xl space-y-6">
        <Hero
          nama="Muhammad Resyan Azril Pratama"
          tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG"
        />

        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-bold text-gray-900">Tentang Saya</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Saya tinggal di Malang dan senang mencoba hal baru di dunia
            teknologi. Saya ingin bisa membuat website yang bermanfaat untuk
            sekolah dan UMKM di sekitar rumah.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-gray-900">Hobi</h2>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
              <li>Bermain Sepak Bola</li>
              <li>Bermain Game</li>
              <li>Mengoding</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-xl font-bold text-gray-900">Cita-cita</h2>
            <p className="mb-3 text-sm text-gray-600">
              Menjadi{" "}
              <strong className="font-semibold text-gray-800">
                Full Stack Web Developer
              </strong>
              . Langkah yang saya rencanakan:
            </p>
            <ol className="list-inside list-decimal space-y-1 text-sm text-gray-600">
              <li>Menuntaskan Kelas Industri UBIG</li>
              <li>Bekerja sebagai Web Developer</li>
            </ol>
          </section>
        </div>

        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Keahlian</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.nama}
                nama={skill.nama}
                level={skill.level}
              />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Jadwal Belajar
          </h2>
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <thead>
                <tr className="bg-blue-800 font-semibold text-white">
                  <th className="w-1/4 p-4">Hari</th>
                  <th className="w-1/4 p-4">Waktu</th>
                  <th className="p-4">Kegiatan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {dataJadwal.map((item) => (
                  <tr
                    key={item.hari}
                    className="transition-colors hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium text-gray-700">
                      {item.hari}
                    </td>
                    <td className="p-4">{item.waktu}</td>
                    <td className="p-4">{item.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
