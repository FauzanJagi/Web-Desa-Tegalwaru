import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DataDesa() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const Card = ({ title, children }) => (
    <section
      data-aos="fade-up"
      className="bg-white rounded-xl shadow p-5 space-y-4"
    >
      <h2 className="text-lg font-bold text-green-700">
        {title}
      </h2>
      {children}
    </section>
  );

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-6">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* HERO */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Data Desa Tegalwaru
          </h1>
          <p className="text-sm opacity-90 mt-2">
            Informasi resmi wilayah dan kependudukan desa
          </p>
        </div>

        {/* STATISTIK */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["Penduduk", "3.282"],
            ["KK", "1.108"],
            ["RT", "13"],
            ["RW", "5"],
          ].map(([label, value], i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-4 text-center"
            >
              <p className="text-xs text-gray-500">{label}</p>
              <p className="text-2xl font-bold text-green-700">{value}</p>
            </div>
          ))}
        </div>

        {/* DATA WILAYAH */}
        <Card title="📍 Data Wilayah">
          <p className="text-sm text-gray-600">
            Luas wilayah Desa Tegalwaru ± <strong>158,566 Ha</strong>.
          </p>

          <div className="space-y-2 text-sm">
            {[
              ["Tanah Sawah", "42 Ha"],
              ["Pemukiman", "94 Ha"],
              ["Perkebunan", "99,5 Ha"],
            ].map(([j, l], i) => (
              <div
                key={i}
                className="flex justify-between bg-gray-100 px-3 py-2 rounded"
              >
                <span>{j}</span>
                <span className="font-semibold">{l}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* KEPENDUDUKAN */}
        <Card title="👥 Kependudukan">
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-green-600 mb-1">
                Jenis Kelamin
              </p>
              <p>👨 Laki-laki: 1.675</p>
              <p>👩 Perempuan: 1.607</p>
            </div>

            <div>
              <p className="font-semibold text-green-600 mb-1">
                Kelompok Usia
              </p>
              <p>0–14 tahun: 849</p>
              <p>15–64 tahun: 2.190</p>
              <p>&gt; 65 tahun: 243</p>
            </div>
          </div>
        </Card>

        {/* PENDIDIKAN */}
        <Card title="🎓 Pendidikan">
          <div className="space-y-2 text-sm">
            {[
              ["Belum Sekolah", "968"],
              ["Tamat SD", "1127"],
              ["SLTP", "419"],
              ["SLTA", "342"],
              ["Sarjana", "49"],
            ].map(([p, j], i) => (
              <div
                key={i}
                className="flex justify-between bg-gray-100 px-3 py-2 rounded"
              >
                <span>{p}</span>
                <span className="font-semibold">{j}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* SARANA */}
        <Card title="🏥 Sarana & Prasarana">
          <ul className="list-disc ml-5 text-sm space-y-1">
            <li>Posyandu: 4 unit</li>
            <li>Bidan Desa: 1 orang</li>
            <li>PAUD / SD / RA tersedia</li>
            <li>Masjid: 4 unit</li>
            <li>Mushola: 21 unit</li>
            <li>Lapangan: 1 unit</li>
          </ul>
        </Card>

        {/* LEMBAGA */}
        <Card title="🏛️ Lembaga Desa">
          <ul className="list-disc ml-5 text-sm">
            <li>RT: 13</li>
            <li>RW: 5</li>
          </ul>
        </Card>

      </div>
    </div>
  );
}
