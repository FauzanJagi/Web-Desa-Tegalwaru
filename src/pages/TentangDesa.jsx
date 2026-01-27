import { Link } from "react-router-dom";
import PetaDesa from "../../public/images/peta-desa.png";

export default function TentangDesa() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Kiri: Konten */}
      <div className="space-y-6 text-gray-800" data-aos="fade-right">
        {/* Sejarah */}
        <div data-aos="fade-up">
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            Sejarah Desa Tegalwaru
          </h1>
          <p className="leading-relaxed text-justify">
            Pada tahun 1980 berdiri Desa Tegalwaru hasil dari pemekaran Desa Citalang yang 
            dimekarkan menjadi 4 desa yaitu, Desa Citalang, Desa Tegalwaru, Desa batutumpang dan Desa Tegalsari. 
            Berawal dari situlah maka Kampung Tegalwaru di jadikan sebuah Desa yaitu Desa 
            Tegalwaru Yang di Pimpin oleh seorang Kepala Desa dan di bantu oleh staf desa, 
            Kepala dusun dan para ketua RT/RW.
          </p>
        </div>

        {/* Daftar Kepala Desa */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Daftar Kepala Desa Tegalwaru Sebelum dan Sesudah
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-gray-300 rounded-md">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">No</th>
                  <th className="px-4 py-2 text-left">Nama Pejabat</th>
                  <th className="px-4 py-2 text-left">Masa Jabatan</th>
                  <th className="px-4 py-2 text-left">Keterangan</th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-800">
                {[
                  ["1", "Saepudin Madloji", "1980 – 1989"],
                  ["2", "S. Nuhawi", "1990 – 1998"],
                  ["3", "Cece Khaerudin", "1999 – 2006"],
                  ["4", "H. Ahmad Dimyati", "2007 – 2008"],
                  ["5", "Suhim Setiawan", "2008 – 2014"],
                  ["6", "Tono", "2014 – 2015"],
                  ["7", "Suhim Setiawan", "2015 – 2021"],
                  ["8", "Cece Ahmad", "Juli – Agustus 2021"],
                  ["9", "Tono", "Agustus – Oktober 2021", "Kepala Desa"],
                  ["10", "Suhim Setiawan", "2021 – 2027",],
                ].map(([no, nama, masa, ket], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    data-aos="fade-up"
                    data-aos-delay={300 + i * 50} // animasi tabel berurutan
                  >
                    <td className="px-4 py-2">{no}</td>
                    <td className="px-4 py-2">{nama}</td>
                    <td className="px-4 py-2">{masa}</td>
                    <td className="px-4 py-2">{ket}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Kanan: Peta */}
      <div
        className="flex flex-col items-center text-center"
        data-aos="fade-left"
      >
        <img
          src={PetaDesa}
          alt="Peta Desa Tegalwaru"
          className="w-full max-w-md rounded-xl shadow-md"
        />
        <h2
          className="text-2xl font-bold text-green-800 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Peta Wilayah
        </h2>
        <p
          className="text-gray-600 mb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Peta Administratif Desa Tegalwaru.
        </p>
        <Link
          to="/lokasi"
          className="px-6 py-2 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md transition"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Lihat Peta Interaktif
        </Link>
      </div>
    </div>
  );
}
