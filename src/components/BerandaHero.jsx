import KantorDesa from "../../public/images/Kantor-Desa.jpeg";
import KepalaDesa from "../../public/images/Kepala-Desa.jpeg";
import { ReactTyped } from "react-typed";

export default function BerandaHero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="
          relative
          min-h-[calc(100vh-4rem)]
          md:min-h-[100svh]
          flex
          items-center
          overflow-hidden
          pt-24
          pb-28
          md:pb-32
        "
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={KantorDesa}
            alt="Desa Tegalwaru"
            className="w-full h-full object-cover scale-105 md:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/85 to-black/70" />
        </div>

        {/* Ornamen blur */}
        <div className="absolute -top-24 -left-24 w-56 h-56 md:w-80 md:h-80 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-[420px] md:h-[420px] bg-green-700/20 rounded-full blur-3xl" />

        {/* Konten */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* TEXT */}
          <div className="text-center md:text-left">
            <span className="inline-block mb-5 px-4 py-2 rounded-full bg-white/15 backdrop-blur text-white text-xs sm:text-sm">
              Website Resmi Pemerintah Desa
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Desa Tegalwaru
            </h1>

            <p className="mt-4 text-base sm:text-xl md:text-2xl text-white/90 font-light">
              <ReactTyped
                strings={[
                  "Harmoni Alam dan Pemerintahan Digital",
                  "Desa Modern, Transparan, dan Melayani",
                ]}
                typeSpeed={45}
                backSpeed={25}
                backDelay={2500}
                loop
                showCursor={false}
              />
            </p>

            <p className="mt-5 text-white/80 max-w-xl mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
              Desa Tegalwaru merupakan bagian dari Kecamatan Tegalwaru,
              Kabupaten Purwakarta, yang berkomitmen menghadirkan pelayanan
              publik berbasis digital dengan tetap menjaga nilai budaya dan
              kearifan lokal.
            </p>

            {/* IDENTITAS WILAYAH - MOBILE */}
            <div className="mt-8 md:hidden">
              <div className="bg-white/15 backdrop-blur rounded-2xl p-5 border border-white/20 text-center">
                <p className="text-white font-semibold mb-1">
                  Identitas Wilayah
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Kecamatan Tegalwaru <br />
                  Kabupaten Purwakarta <br />
                  Provinsi Jawa Barat
                </p>
              </div>
            </div>
          </div>

          {/* IDENTITAS WILAYAH - DESKTOP */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <p className="text-white text-lg font-semibold mb-2">
                Identitas Wilayah
              </p>
              <p className="text-white/80 leading-relaxed">
                Kecamatan Tegalwaru <br />
                Kabupaten Purwakarta <br />
                Provinsi Jawa Barat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESA DALAM ANGKA ================= */}
      <section className="relative z-20 mt-10 md:-mt-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {[
            { label: "Luas Wilayah", value: "253", unit: "Ha" },
            { label: "Jumlah Penduduk", value: "3.282", unit: "Jiwa" },
            { label: "Jumlah Keluarga", value: "1.108", unit: "KK" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-xl hover:-translate-y-1 transition-all"
            >
              <p className="text-gray-500 text-sm md:text-lg">{item.label}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mt-2">
                {item.value}
              </h2>
              <span className="text-gray-400 text-sm">{item.unit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VIDEO PROFIL ================= */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-4">
              Video Profil Desa
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Saksikan gambaran singkat tentang kehidupan masyarakat,
              pemerintahan, serta potensi Desa Tegalwaru melalui video profil
              resmi berikut.
            </p>
          </div>

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute top-3 left-3 z-10 bg-green-700 text-white px-4 py-1 rounded-full text-xs sm:text-sm">
              Video Resmi
            </div>
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/nkQENV96s4Q"
                title="Video Profil Desa Tegalwaru"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEPALA DESA ================= */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <img
            src={KepalaDesa}
            alt="Kepala Desa Tegalwaru"
            className="w-full max-w-xs sm:max-w-md mx-auto rounded-2xl md:rounded-3xl shadow-2xl object-cover"
          />

          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-3">
              Sambutan Kepala Desa
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-green-700 mb-5">
              Suhim Setiawan
            </h3>

            <blockquote className="border-l-4 border-green-600 pl-5 text-gray-700 text-base sm:text-lg leading-relaxed italic">
              “Website Desa Tegalwaru kami hadirkan sebagai bentuk komitmen
              terhadap transparansi, pelayanan publik, dan keterbukaan
              informasi.”
            </blockquote>

            <p className="mt-5 font-semibold text-green-800">
              — Kepala Desa Tegalwaru
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
