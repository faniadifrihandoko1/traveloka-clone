import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components";
import Footer from "../components/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Cek jika di halaman "index"
    const isHomePage = location.pathname === "/";

    if (isHomePage) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      // Tambahkan event listener scroll
      window.addEventListener("scroll", handleScroll);

      // Cleanup event listener saat component unmount
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Jika bukan halaman index, set isScrolled menjadi true
      setIsScrolled(true);
    }
  }, [location.pathname]); // Hanya berjalan ketika `location.pathname` berubah

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
