import { Link } from "react-router-dom";

export default function TentangDesa() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* ================= KIRI ================= */}
      <div className="space-y-8">

        {/* Card Sejarah */}
        <div
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          data-aos="fade-right"
        >
          <h1 className="text-3xl font-bold text-green-800 mb-4">
            Sejarah Desa Tegalwaru
          </h1>

          <p className="text-gray-700 leading-relaxed text-justify">
            Pada tahun 1980 berdiri Desa Tegalwaru hasil dari pemekaran Desa
            Citalang yang dimekarkan menjadi empat desa yaitu Desa Citalang,
            Desa Tegalwaru, Desa Batutumpang, dan Desa Tegalsari.
            <br /><br />
            Sejak saat itu Kampung Tegalwaru resmi menjadi Desa Tegalwaru yang
            dipimpin oleh seorang Kepala Desa dan dibantu oleh staf desa,
            kepala dusun, serta para ketua RT dan RW.
          </p>
        </div>

        {/* Card Tabel */}
        <div
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Daftar Kepala Desa Tegalwaru
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">No</th>
                  <th className="px-4 py-3 text-left">Nama Pejabat</th>
                  <th className="px-4 py-3 text-left">Masa Jabatan</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  ["1", "Saepudin Madloji", "1980 – 1989"],
                  ["2", "S. Nuhawi", "1990 – 1998"],
                  ["3", "Cecep Khaerudin", "1999 – 2006"],
                  ["4", "H. Ahmad Dimyati", "2007 – 2008"],
                  ["5", "Suhim Setiawan", "2008 – 2014"],
                  ["6", "Tono", "2014 – 2015"],
                  ["7", "Suhim Setiawan", "2015 – 2021"],
                  ["8", "Cecep Ahmad", "Juli – Agustus 2021"],
                  ["9", "Tono", "Agustus – Oktober 2021"],
                  ["10", "Suhim Setiawan", "2021 – 2027"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-2">{row[0]}</td>
                    <td className="px-4 py-2">{row[1]}</td>
                    <td className="px-4 py-2">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================= KANAN ================= */}
      <div
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center"
        data-aos="fade-left"
      >
        <img
          src="/images/Peta-Desa.jpg"
          alt="Peta Desa Tegalwaru"
          className="w-full max-w-md rounded-lg shadow"
        />

        <h2 className="text-2xl font-bold text-green-800 mt-5">
          Peta Wilayah Desa
        </h2>

        <p className="text-gray-600 mb-6">
          Peta administratif Desa Tegalwaru, Kecamatan Tegalwaru,
          Kabupaten Purwakarta.
        </p>

        <Link
          to="/lokasi"
          className="px-6 py-2 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md transition"
        >
          Lihat Peta Interaktif
        </Link>
      </div>
    </div>
  );
}
