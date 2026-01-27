import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Lokasi() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi
      once: true, // animasi hanya muncul sekali
    });
  }, []);

  return (
    <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Judul */}
        <div className="text-center" data-aos="fade-down">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-3">
            Peta Wilayah Desa Tegalwaru
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
            Kenali batas wilayah Desa Tegalwaru dan lihat lokasi langsung melalui
            peta interaktif.
          </p>
        </div>

        {/* Peta */}
        <div
        className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-xl overflow-hidden shadow-md ring-1 ring-green-300"
        data-aos="zoom-in"
        >
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.106682049336!2d107.3333551523559!3d-6.643609893614536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6906516059fdcd%3A0x81c8fe2df5938ac8!2sTegalwaru%2C%20Kec.%20Tegalwaru%2C%20Kabupaten%20Purwakarta%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1767368195379!5m2!1sid!2sid"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title="Peta Desa Tegalwaru"
          />
          </div>


        {/* Batas Wilayah */}
        <div
          className="bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-6"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold text-green-700">
            Batas wilayah Administratif Tegalwaru 
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base sm:text-lg">
            <li
              className="flex justify-between border-b pb-2"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <span className="font-medium text-green-600">Utara:</span>
              <span>Desa Sukamulya</span>
            </li>
            <li
              className="flex justify-between border-b pb-2"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <span className="font-medium text-green-600">Selatan:</span>
              <span>Desa Karoya</span>
            </li>
            <li
              className="flex justify-between border-b pb-2"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <span className="font-medium text-green-600">Timur:</span>
              <span>Desa Citalang</span>
            </li>
            <li
              className="flex justify-between border-b pb-2"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <span className="font-medium text-green-600">Barat:</span>
              <span>Desa Tegalsari</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
