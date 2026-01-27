import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="bg-green-50 min-h-screen py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Judul */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-green-800 leading-tight">
          404 - Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl">
          Maaf, halaman yang Anda cari tidak tersedia. Mungkin halaman tersebut
          telah dihapus atau alamat URL yang dimasukkan salah.
        </p>

        {/* Ilustrasi Teks */}
        <div className="text-7xl sm:text-8xl">🚧</div>
        <p className="text-gray-500 text-md sm:text-lg italic">
          Ups! Sepertinya kamu tersesat di dunia digital...
        </p>

        {/* Tombol Kembali ke Beranda */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-green-600 text-white text-lg px-6 py-3 rounded-full hover:bg-green-700 transition-all shadow-md"
        >
          <FaHome className="text-xl" />
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
