import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // ← tambahkan useLocation
import TegalwaruLogo from "../../public/images/Tegalwaru-Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ← ambil lokasi saat ini
  const currentPath = location.pathname;

  const menuItems = [
    { label: "Beranda", path: "/" },
    { label: "Tentang Desa", path: "/tentang-desa" },
    { label: "Pemerintah", path: "/pemerintahan" },
    { label: "Data Desa", path: "/data-desa" },
    { label: "UMKM", path: "/umkm" },
    { label: "Peta Wilayah", path: "/peta-wilayah" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-lg shadow-sm z-50">
      <div className="px-10 py-4 flex items-center w-full justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-3">
            <img src={TegalwaruLogo} alt="Tegalwaru Logo" className="h-10" />
            <span className="text-xl font-semibold text-gray-800">
              Desa Tegalwaru
            </span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden lg:flex gap-6 text-base font-medium">
          {menuItems.map((menu, index) => {
            const isActive = currentPath === menu.path;

            return (
              <Link
                key={index}
                to={menu.path}
                className={`relative transition duration-300 group ${
                  isActive
                    ? "text-green-700 font-semibold"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {menu.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                    isActive
                      ? "w-full bg-green-700"
                      : "w-0 group-hover:w-full bg-gray-800"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col px-6 py-4 space-y-3">
            {menuItems.map((menu, index) => {
              const isActive = currentPath === menu.path;

              return (
                <Link
                  key={index}
                  to={menu.path}
                  className={`transition ${
                    isActive
                      ? "text-green-700 font-semibold"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {menu.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
