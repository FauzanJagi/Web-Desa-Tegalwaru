import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pemerintahan() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const kepalaDesa = {
    nama: "SUHIM SETIAWAN",
    jabatan: "Kepala Desa",
  };

  const bamusdes = {
    nama: "ASUY SUTIJAH",
    jabatan: "BADAN MUSYAWARATAN DESA",
  };

  const sekretaris = {
    nama: "CECEP AHMAD",
    jabatan: "SEKRETARIS DESA",
  };

  const perangkatDesa = [
    { nama: "RANI MUNGGARANI", jabatan: "Kaur Keuangan" },
    { nama: "RENI NURAENI", jabatan: "Kaur Tata Usaha & Umum" },
    { nama: "RONI FAIZAL", jabatan: "Kaur Perencanaan" },
    { nama: "NURYANAH", jabatan: "Kasi Pemerintahan" },
    { nama: "PINI PITRIANI", jabatan: "Kasi Kesejahteraan" },
    { nama: "RATNA MINTARSIH", jabatan: "Kasi Pelayanan" },
  ];

  const kepalaDusun = [
    { nama: "UGUN GUNAWAN", jabatan: "Dusun I" },
    { nama: "AHMAD SAEP.K", jabatan: "Dusun II" },
    { nama: "SUPYAN SURI", jabatan: "Dusun III" },
  ];

  const Card = ({ nama, jabatan, variant = "default", aos }) => {
    let style = "";

    if (variant === "kepala") {
      style = "bg-green-700 text-white shadow-lg hover:bg-green-800";

    } else if (variant === "bamusdes") {
      style =
        "bg-green-500 border-green-500 text-green-900 shadow-md hover:bg-green-600";
    
    } else if (variant === "sekretaris") {
      style =
        "bg-green-300 border-green-300 text-green-900 shadow-md hover:bg-green-400";
    } else {
      style =
        "bg-white border border-green-200 text-gray-800 shadow-sm hover:shadow-lg hover:scale-105";
    }

    return (
      <div
        data-aos={aos}
        className={`${style} rounded-xl px-6 py-4 text-center w-full max-w-xs transition duration-300`}
      >
        <h3 className="text-lg font-bold">{nama}</h3>
        <p className="text-sm opacity-90">{jabatan}</p>
      </div>
    );
  };

  const Section = ({ title, children, aos }) => (
    <div className="mb-16" data-aos={aos}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-green-700">{title}</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mt-2 rounded"></div>
      </div>
      {children}
    </div>
  );

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Judul Halaman */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-800">
            Struktur Organisasi Pemerintah Desa
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Pemerintah Desa Tegalwaru
          </p>
        </div>

        {/* Kepala Desa */}
        <Section title="Kepala Desa" aos="fade-up">
          <div className="flex justify-center">
            <Card {...kepalaDesa} variant="kepala" aos="zoom-in" />
          </div>
        </Section>

         {/* Bamusdes */}
        <Section title="Badan musyawaratan Desa" aos="fade-up">
          <div className="flex justify-center">
            <Card {...bamusdes} variant="bamusdes" aos="zoom-in" />
          </div>
        </Section>

        {/* Sekretaris Desa */}
        <Section title="Sekretaris Desa" aos="fade-up">
          <div className="flex justify-center">
            <Card {...sekretaris} variant="sekretaris" aos="zoom-in" />
          </div>
        </Section>

        {/* Perangkat Desa */}
        <Section title="Perangkat Desa" aos="fade-up">
          <div className="flex flex-wrap justify-center gap-6">
            {perangkatDesa.map((orang, i) => (
              <Card key={i} {...orang} aos="fade-up" />
            ))}
          </div>
        </Section>

        {/* Kepala Dusun */}
        <Section title="Kepala Dusun" aos="fade-up">
          <div className="flex flex-wrap justify-center gap-6">
            {kepalaDusun.map((orang, i) => (
              <Card key={i} {...orang} aos="fade-up" />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
