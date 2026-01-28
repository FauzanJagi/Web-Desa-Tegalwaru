import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DataDesa() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-14">

        {/* JUDUL */}
        <div className="text-center" data-aos="fade-down">
          <h1 className="text-3xl font-bold text-green-800">
            Data Desa Tegalwaru
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Informasi resmi mengenai kondisi wilayah, kependudukan, pendidikan,
            serta sarana dan prasarana Desa Tegalwaru.
          </p>
        </div>

        {/* HEADLINE STATISTIK */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            ["Penduduk", "3.282"],
            ["Kepala Keluarga", "1.108"],
            ["RT", "13"],
            ["RW", "5"],
          ].map(([label, value], i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-white rounded-2xl shadow-sm p-6 text-center"
            >
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-3xl font-extrabold text-green-700 mt-1">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* DATA WILAYAH */}
        <section data-aos="fade-up">
          <h2 className="section-title">Data Wilayah</h2>
          <p className="mb-4">
            Desa Tegalwaru memiliki luas wilayah sebesar{" "}
            <strong>253 Ha</strong>.
          </p>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Jenis Lahan</th>
                  <th className="text-center">Luas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tanah Sawah", "42 Ha"],
                  ["Tegal / Ladang", "15 Ha"],
                  ["Pemukiman", "94 Ha"],
                  ["Perkebunan Umum", "99,5 Ha"],
                  ["Perkantoran Pemerintah", "539 m²"],
                  ["Lain-lain", "2,5 Ha"],
                ].map(([j, l], i) => (
                  <tr key={i}>
                    <td>{j}</td>
                    <td className="text-center">{l}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* KEPENDUDUKAN */}
        <section data-aos="fade-up">
          <h2 className="section-title">Data Kependudukan</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* JENIS KELAMIN */}
            <div>
              <h3 className="sub-title">Berdasarkan Jenis Kelamin</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Laki-laki</td>
                    <td className="text-center">1.675 Jiwa</td>
                  </tr>
                  <tr>
                    <td>Perempuan</td>
                    <td className="text-center">1.607 Jiwa</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* KELOMPOK USIA */}
            <div>
              <h3 className="sub-title">Berdasarkan Kelompok Usia</h3>
              <div className="overflow-x-auto max-h-[420px] border rounded-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Kelompok Usia</th>
                      <th className="text-center">Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["0 – 4 tahun", "223"],
                      ["5 – 9 tahun", "324"],
                      ["10 – 14 tahun", "302"],
                      ["15 – 19 tahun", "253"],
                      ["20 – 24 tahun", "233"],
                      ["25 – 29 tahun", "278"],
                      ["30 – 34 tahun", "280"],
                      ["35 – 39 tahun", "264"],
                      ["40 – 44 tahun", "247"],
                      ["45 – 49 tahun", "229"],
                      ["50 – 54 tahun", "190"],
                      ["55 – 59 tahun", "145"],
                      ["60 – 64 tahun", "134"],
                      ["65 – 69 tahun", "171"],
                      ["70 – 74 tahun", "39"],
                      ["≥ 75 tahun", "70"],
                      ["Total", "3.282"],
                    ].map(([u, j], i) => (
                      <tr
                        key={i}
                        className={u === "Total" ? "font-bold bg-green-50" : ""}
                      >
                        <td>{u}</td>
                        <td className="text-center">{j}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* PENDIDIKAN */}
        <section data-aos="fade-up">
          <h2 className="section-title">Tingkat Pendidikan</h2>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {[
                  ["Belum Sekolah", "968"],
                  ["Belum Tamat SD", "362"],
                  ["Tamat SD", "1.127"],
                  ["SLTP / Sederajat", "419"],
                  ["SLTA / Sederajat", "342"],
                  ["D3", "15"],
                  ["S1", "44"],
                  ["S2", "5"],
                ].map(([p, j], i) => (
                  <tr key={i}>
                    <td>{p}</td>
                    <td className="text-center">{j}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SARANA */}
        <section data-aos="fade-up">
          <h2 className="section-title">Sarana & Prasarana</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <ul className="list-disc ml-5">
              <li>Posyandu: 4 unit</li>
              <li>Bidan Desa: 1 orang</li>
            </ul>
            <ul className="list-disc ml-5">
              <li>Masjid: 4 unit</li>
              <li>Mushola: 21 unit</li>
            </ul>
            <ul className="list-disc ml-5">
              <li>PAUD: 1 unit</li>
              <li>SD/MI: 1 unit</li>
              <li>RA: 1 unit</li>
            </ul>
          </div>
        </section>

        <p className="text-xs text-gray-400 text-center">
          Sumber data: Pemerintah Desa Tegalwaru
        </p>
      </div>
    </div>
  );
}
