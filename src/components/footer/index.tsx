import { FaFacebook, FaInstagram, FaRegHandshake, FaTiktok, FaYoutube } from "react-icons/fa";
import asita from "../../assets/asita.svg";
import gopay from "../../assets/gopay.png";
import logo from "../../assets/logo-travloka.svg";
import googleplay from "../../assets/image/content/newsleatter/googleplay.svg"
const Footer = () => {
  return (
    <footer className="bg-[#1c2930] text-[#9aa0a3] pt-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-20">
        <div className="">
          <img src={logo} alt="Traveloka" className="mb-4 text-xl w-40" />
          <div className="flex items-center space-x-4">
            <img src={asita} alt="IATA" className="w-10" />
            <img src={asita} alt="IATA" className="w-10" />
            <img src={asita} alt="IATA" className="w-10" />
          </div>
          <button className="mt-6 bg-[#354148] hover:bg-[#1E1E1E] text-md text-white py-4 px-4 rounded-lg flex items-center gap-2">
            <FaRegHandshake size={20} />
            Jadi Partner Traveloka
          </button>

          <div>
            <h3 className="text-lg font-bold my-4 text-white">Partner Pembayaran</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>

              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img
                  src={gopay}
                  alt="TPayLater"
                  className="w-full h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" md:px-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Tentang Traveloka</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Cara Pesan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hubungi Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pusat Bantuan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Karier
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cicilan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Rilisan Fitur Terbaru
              </a>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-8 mb-2 text-white ">Follow kami di</h3>
          <div className="flex flex-col gap-1">
            <div className="flex text-lg items-center gap-4 hover:text-blue-600 hover:underline">
              <FaFacebook />
              <a href="">Facebook</a>
            </div>
            <div className="flex text-lg items-center gap-4 hover:text-purple-500 hover:underline">
              <FaInstagram />
              <a href="">Instagram</a>
            </div>
            <div className="flex text-lg items-center gap-4 hover:text-purple-500 hover:underline">
              <FaTiktok />
              <a href="">Tiktok</a>
            </div>
            <div className="flex text-lg items-center gap-4 hover:text-red-600 hover:underline">
              <FaYoutube />
              <a href="">Youtube</a>
            </div>
          </div>
        </div>

        <div className="md:px-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Produk</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Hotel
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tiket Pesawat
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tiket Kereta Api
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tiket Bus & Travel
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Antar Jemput Bandara
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Rental Mobil
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                JR Pass
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Xperience
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cruises
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Vila
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apartemen
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Asuransi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Internet Luar Negeri
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                TPaylater
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gift Voucher
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Lainnya</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Traveloka for Corporates
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Traveloka Affiliate
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog Traveloka
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pemberitahuan Privasi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Syarat & Ketentuan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Daftarkan Akomodasi Anda
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Traveloka Ads
              </a>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-8 mb-4 text-white">
            Download Traveloka App
          </h3>
          <div className="flex space-x-4">
            <img src={googleplay} alt="Google Play" className="w-32" />
            <img src={googleplay} alt="App Store" className="w-32" />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-white py-6 border-t border-gray-200">
        <p className="text-sm">
          Copyright © 2025 Traveloka. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
