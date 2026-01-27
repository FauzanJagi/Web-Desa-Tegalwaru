import  LoserBeton from "../../public/images/Loser-Beton.jpeg";
import { FaWhatsapp } from "react-icons/fa";

export default function Umkm() {
  return (
    <section className="relative bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-800 leading-snug">
            Loser Beton <span className="text-green-600">"URI"</span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg">
            Loster beton adalah elemen bangunan berbentuk blok beton berlubang
            yang berfungsi sebagai lubang angin (ventilasi) dan pencahayaan 
            alami, sekaligus elemen dekoratif untuk memperindah dinding, pagar, 
            atau fasad bangunan, terutama di iklim tropis.
          </p>

          <div className="space-y-1 text-gray-600 text-sm sm:text-base">
            <p>
              <strong>Pemilik:</strong> nanang
            </p>
            <p>
              <strong>Alamat:</strong> Desa Tegalwaru, Kec. Tegalwaru, Kabupaten Purwakarta RT.13/RW.02
            </p>
          </div>

          <a
            href="https://wa.me/6281805670400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 justify-center bg-green-600 text-white px-6 py-3 rounded-full text-base sm:text-lg hover:bg-green-700 transition-all shadow-md mt-4"
          >
            <FaWhatsapp className="text-xl sm:text-2xl" />
            Hubungi via WhatsApp
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-full">
            <img
              src={LoserBeton}
              alt="Loser Beton URI"
              className="w-full h-72 sm:h-80 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
