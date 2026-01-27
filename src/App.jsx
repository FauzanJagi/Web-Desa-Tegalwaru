import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import TentangDesa from "./pages/TentangDesa";
import Pemerintahan from "./pages/Pemerintahan";
import DataDesa from "./pages/DataDesaPage";
import Umkm from "./pages/UmkmPage";
import PetaWilayah from "./pages/LokasiPage";
import Lokasi from "./pages/LokasiPage";
import NotFound from "./pages/NotFoundPage";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// ✅ Layout Root dengan Flex
function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// ✅ Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "tentang-desa", element: <TentangDesa /> },
      { path: "pemerintahan", element: <Pemerintahan /> },
      { path: "data-desa", element: <DataDesa /> },
      { path: "umkm", element: <Umkm /> },
      { path: "peta-wilayah", element: <PetaWilayah /> },
      { path: "lokasi", element: <Lokasi /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

// ✅ App
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi (ms)
      once: true, // animasi hanya sekali
      offset: 100, // jarak sebelum trigger animasi
    });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
