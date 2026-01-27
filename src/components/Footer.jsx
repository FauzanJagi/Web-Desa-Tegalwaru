export default function Footer() {
  return (
    <footer className="bg-green-800 text-gray-200 py-6">
      <div className="w-full px-[30px] flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <a href="/">
            <img
              src="/images/Tegalwaru-logo.png"
              alt="Logo Desa Tegalwaru"
              className="w-10 h-10 object-contain"
            />
          </a>

          <a href="https://www.unsika.ac.id/">
            <img
              src="/images/unsika-logo.png"
              alt="Logo UNSIKA"
              className="w-10 h-10 object-contain"
            />
          </a>

          <a href="https://www.instagram.com/kkn.tegalwaru2026/">
            <img
              src="/images/Kkn-Tegalwaru-logo.png"
              alt="Logo KKN Tegalwaru"
              className="w-12 h-12 object-contain"
            />
          </a>
        </div>

        {/* Text Section */}
        <div className="text-center sm:text-right">
          <p className="text-sm md:text-base">
            KKN UNSIKA 2026 &mdash; Desa Tegalwaru, Kecamatan Tegalwaru,
            Kabupaten Purwakarta
          </p>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} KKN Universitas Singaperbangsa
            Karawang
          </p>
        </div>
      </div>
    </footer>
  );
}
