export default function Pemerintahan() {
  const kepalaDesa = {
    nama: "SUHIM SETIAWAN",
    jabatan: "Kepala Desa",
  };

  const bamusdes = {
    nama: "ASUY SUTIJAH",
    jabatan: "Badan Musyawarah Desa",
  };

  const sekretaris = {
    nama: "CECEP AHMAD",
    jabatan: "Sekretaris Desa",
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
    { nama: "UGUN GUNAWAN", jabatan: "Kepala Dusun I" },
    { nama: "AHMAD SAEP.K", jabatan: "Kepala Dusun II" },
    { nama: "SUPYAN SURI", jabatan: "Kepala Dusun III" },
  ];

  const Card = ({ nama, jabatan, variant = "default" }) => {
    const base =
      "rounded-xl text-center transition shadow hover:shadow-lg";

    const style = {
      kepala:
        "bg-green-700 text-white px-10 py-6 text-lg",
      pimpinan:
        "bg-green-100 text-green-900 px-6 py-4",
      default:
        "bg-white border border-green-200 px-5 py-4",
    };

    return (
      <div
        data-aos="fade-up"
        className={`${base} ${style[variant]}`}
      >
        <h3 className="font-bold">{nama}</h3>
        <p className="text-sm mt-1">{jabatan}</p>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* JUDUL */}
        <div className="text-center mb-20" data-aos="fade-down">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-800">
            Struktur Organisasi Pemerintah Desa
          </h1>
          <p className="text-gray-600 mt-2">
            Desa Tegalwaru
          </p>
        </div>

        {/* KEPALA DESA */}
        <div className="flex justify-center mb-14">
          <Card {...kepalaDesa} variant="kepala" />
        </div>

        {/* GARIS */}
        <div className="w-px h-10 bg-green-400 mx-auto mb-10"></div>

        {/* BAMUSDES & SEKDES */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          <Card {...bamusdes} variant="pimpinan" />
          <Card {...sekretaris} variant="pimpinan" />
        </div>

        {/* PERANGKAT DESA */}
        <div className="mb-20">
          <h2 className="section-title text-center">
            Perangkat Desa
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {perangkatDesa.map((p, i) => (
              <Card key={i} {...p} />
            ))}
          </div>
        </div>

        {/* KEPALA DUSUN */}
        <div>
          <h2 className="section-title text-center">
            Kepala Dusun
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {kepalaDusun.map((d, i) => (
              <Card key={i} {...d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
