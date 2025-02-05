import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaStar, FaWifi } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { IoBed } from "react-icons/io5";
import { MdReceiptLong } from "react-icons/md";
import bird from "../../assets/logo-bird.png";
import logo from "../../assets/logo-travloka-black.svg";
import { RxLapTimer } from "react-icons/rx";
const BookingPage = () => {
  const images = [
    "https://media-hosting.imagekit.io//a7be024de06049f4/front-htl.jpeg?Expires=1833385353&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CFTIrKO9kf7uliZZWYU6iv6zuJXEv5peURPbKyNMnXsgr0Cqq6AF9WQe9PLXqD-Fld5l~MIEP48IDb8Hb09WDtYH9VQ11h0oRfp64D4JU8ZEunWJCy34RaxfAITslVHZz1gsm2UcpEyPCRFO6DjgIy-4pIiXZ1dIPGGYGR8WKsM1Yn~ik1e-50voBaZZFrve8cSMTsAAoB4OLn3Nt-ClZhT1b0KPP3VNFrwOaxVLmA0F4wzL2tK8fWTPKQKuyxvR750CYdXJRfwppqsL7a2g4SrpAuCO~88Fbmd3PO1lQjpwgQLOiK0B7PqK1I5GDK5iSLLiATjKlmsuTf5rJ8B8ag__",
    "https://media-hosting.imagekit.io//fae3876846ae4861/kmr-tdr.jpeg?Expires=1833385353&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cfLe-RldR4HMaCvIKVD9~T6fNnzvO38OPOVFJEZUxkvaL4N329-ntL-m5cI4jeh7gWYuFl15P78540Unlgl41qPy-SZq5vj4aIjY6dRDvo5zKQmtKGkrmrelMYY1-cANqCBx8EVUR86u54WhTPEXo0oNyKgxupMAp92Ck5mXxeDZrlzjvxHJi-ljOa0p-H1qmytWckJio7UriP95zrybBazTnUGaB6DG-tzR4PmvzllCeHVLeejp8aHoU4AX-n9VDIzEzcvjnsF3G~BzCzbFts~cT3KEX6gvtPhpI51d1qSi8BlOJrjs-Wa2iyCfgCFluWg0ABXMWGIAKyrS9YT3pw__",
    "https://media-hosting.imagekit.io//1bf59e71c0b34647/bathub.jpeg?Expires=1833385353&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vptDOF9LxczXlClKnbJqfMFxSMv60KUplcoapkvbPrPhLufI7dBvPSr9x4-ykn6LLJ0ocOIQe9odwfbZXMgfSmPNOsLV82tJLKRPx0EBodXPzUbjmmi9Zn6ombvgi3VGFXf875OF0UGTPW2ThGU8zky82CPX0LHyuX3t4cZc242UQtoGhtV5~hDp7xFUaJYkV4a9~VmUe7IRCSZagGRULf~6-VFLyhHxBKeChg2pi1u1muTlDYhY80S2TwkDmGP0Exrw3bsltg~~AAS-cc4uKKtnhijl10Z1~YgyaLEqj1MhtEVO2CTyYmoHXpWC6nwEqXg1NljEPhfSDpbNLuRXRQ__",
  ]
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <>
      <div className="container bg-white px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto items-center max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between py-4 border-b">
            {/* Logo */}
            <img src={logo} alt="logo" className="h-9 mb-4 sm:mb-0" />
            {/* Progress Steps */}
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              {/* Step 1 */}
              <div className="flex items-center gap-2">
                <span className="font-bold px-[5px] py-[1px] text-xs rounded-full bg-blue-500 text-white">
                  1
                </span>
                <p className="font-bold text-gray-800">Pesan</p>
              </div>
              {/* Divider */}
              <span className="text-gray-400">—</span>
              {/* Step 2 */}
              <div className="flex items-center gap-2">
                <span className="font-bold px-[5px] py-[1px] text-xs rounded-full bg-[#687176] text-white">
                  2
                </span>
                <p className="font-medium text-gray-600">Bayar</p>
              </div>
              {/* Divider */}
              <span className="text-gray-400">—</span>
              {/* Step 3 */}
              <div className="flex items-center gap-2">
                <span className="text-white font-bold px-[5px] py-[1px] text-xs rounded-full bg-[#687176]">
                  3
                </span>
                <p className="font-medium text-gray-600">Voucher Terkirim</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 bg-gray-50">
        <div className=" max-w-6xl mx-auto">
          <div className="flex flex-col gap-3 mb-3">
            <h1 className="text-2xl font-bold text-black">
              Pemesanan Akomodasi
            </h1>
            <p className="text-base text-gray-600 font-semibold">
              Pastikan kamu mengisi semua informasi di halaman ini benar sebelum
              melanjutkan ke pembayaran.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
            {/* Section Kiri */}
            <div className="md:col-span-7 space-y-6  h-auto min-h-full">
              {/* Profil Pengguna */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-sm font-bold text-blue-600">
                  Halo Faniadi Frihandoko!
                </p>
                <p className="text-sm text-gray-600">
                  Nikmati keuntungan Traveloka Bronze Priority Member: Login
                  sebagai Faniadi Frihandoko (Google)
                </p>
              </div>

              {/* Form Pemesanan */}
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <h2 className="text-lg font-bold text-black">
                  Data Pemesan (untuk E-voucher)
                </h2>
                <p className="text-sm text-gray-600 font-semibold">
                  Isi semua kolom dengan benar untuk memastikan kamu dapat
                  menerima voucher konfirmasi pemesanan di email yang
                  dicantumkan.
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1  gap-4">
                    {/* Nama Lengkap */}
                    <div className="w-full bg-">
                      <label className="text-sm font-medium text-gray-500">
                        Nama Lengkap (sesuai KTP/Paspor/SIM)
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: John Maeda"
                        className="w-full mt-1 p-2 border-1 border-gray-300 rounded-md text-sm"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Gunakan huruf alfabet (A-Z), tanpa tanda baca, dan
                        gelar.
                      </p>
                    </div>
                  </div>

                  {/* Email & Nomor Handphone */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Contoh: email@example.com"
                        className="w-full mt-1 p-2 border-1 border-gray-300 rounded-md text-sm"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        E-voucher akan dikirim ke email ini.
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Nomor Handphone
                      </label>
                      <div className="flex items-center gap-2 mt-1">
                        <select className="p-2 border-1 text-black border-gray-300 rounded-md text-sm">
                          <option value="+62">+62</option>
                        </select>
                        <input
                          type="text"
                          placeholder="812345678"
                          className="w-full mt-[2px] p-2 border-1 border-gray-300 rounded-md text-sm"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Contoh: +62812345678, untuk Kode Negara (+62) dan No.
                        Handphone 081234567
                      </p>
                    </div>
                  </div>

                  {/* Opsi Pemesan */}
                  <div className="flex items-center gap-4">
                    <label className="flex items-center text-black text-base">
                      <input
                        type="radio"
                        name="pemesan"
                        className="w-5 h-5 mr-2 border-gray-300 border-[2px] rounded-full bg-white appearance-none checked:bg-blue-500 checked:border-transparent"
                      />
                      <span>Sama dengan pemesan</span>
                    </label>
                    <label className="flex items-center text-black">
                      <input
                        type="radio"
                        name="pemesan"
                        className="w-5 h-5 mr-2 border-gray-300 border-[2px] rounded-full bg-white appearance-none checked:bg-blue-500 checked:border-transparent"
                      />
                      <span>Saya memesan untuk orang lain</span>
                    </label>
                  </div>
                </form>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-bold text-black">
                  Beri tahu di sini jika ada permintaan khusus
                </h2>
                {/* <p className="text-gray-600 text-sm mt-1"> */}
                <p className="text-sm text-gray-500 font-semibold mt-1">
                  Ketersediaan permintaanmu akan diinformasikan pada waktu
                  check-in. Biaya tambahan mungkin akan dikenakan tapi kamu
                  masih bisa membatalkannya nanti.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[
                    "Kamar Bebas Asap Rokok",
                    "Kamar dengan Pintu Penghubung",
                    "Lantai Atas",
                    "Tipe Ranjang",
                    "Waktu check-in",
                    "Waktu check-out",
                    "Lainnya",
                  ].map((item, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border-gray-300 border-[2px] rounded-full bg-white appearance-none checked:bg-blue-500 checked:border-transparent"
                      />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className=" mx-auto ">
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 space-y-4">
                  <h2 className="text-lg font-bold text-black">
                    Rincian harga
                  </h2>
                  <p className="text-sm text-[#00875a] font-medium">
                    Gunakan kupon di halaman pembayaran untuk harga yang lebih
                    murah
                  </p>

                  {/* Harga Kamar */}
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Harga Kamar</p>
                      <p className="text-gray-500 text-xs font-semibold mt-2">
                        (1x) Deluxe King With Balcony (23 malam)
                      </p>
                    </div>
                    <p className="font-medium text-gray-700">Rp 50.677.475</p>
                  </div>

                  {/* Pajak dan Biaya */}
                  <div className="flex justify-between text-sm border-b pb-4">
                    <div className="flex items-center gap-1">
                      <p className="font-medium text-gray-700">
                        Pajak dan Biaya
                      </p>
                      <span className="text-gray-400">&#9432;</span>
                    </div>
                    <p className="font-medium text-gray-700">Rp 11.199.725</p>
                  </div>

                  <div className="w-full h-[1px] bg-gray-300 rounded-full my-3"></div>

                  {/* Harga Total */}
                  <div className="flex justify-between text-lg font-semibold text-orange-600">
                    <p>Harga Total</p>
                    <p>Rp 61.877.200</p>
                  </div>

                  {/* Notifikasi */}
                  <div className=" text-blue-600 text-sm p-3 font-bold rounded-lg flex  w-full justify-center items-center gap-2">
                    <span className="text-blue-500">
                      <RxLapTimer size={20} className="rotate-12" />
                    </span>
                    Kamu tidak perlu bayar apa pun sekarang!
                  </div>

                  {/* Button */}
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium">
                    Lanjut ke Pembayaran
                  </button>

                  {/* Informasi Tambahan */}
                  <p className="text-xs text-gray-500 text-center">
                    Dengan lanjut ke pembayaran, kamu telah menyetujui
                    <span className="text-blue-500"> Syarat dan Ketentuan</span>
                    ,<span className="text-blue-500"> Kebijakan Privasi</span>,
                    dan
                    <span className="text-blue-500">
                      {" "}
                      Prosedur Refund Akomodasi
                    </span>{" "}
                    dari Traveloka.
                  </p>
                </div>

                {/* Bonus XP & Poin */}
              </div>
            </div>

            {/* Section Kanan */}
            <div className="bg-white  md:col-span-3 rounded-lg shadow-md space-y-2 w-full   mx-auto md:self-start">
              {/* Hotel Info */}
              <div className="px-4 py-2">
                <div className="flex items-center justify-between mt-1">
                  <h2 className=" font-bold text-black">
                    The Gaia Hotel Bandung
                  </h2>
                  <span className="text-yellow-300 flex text-lg">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center space-x-2 ">
                    <img src={bird} alt="bird" className="w-4 h-4" />
                    <p className="text-xs font-medium text-gray-600">
                      <span className="text-[#1aa0e5] font-semibold">9.0</span>{" "}
                      (2.049)
                    </p>
                  </div>
                  <p className="text-xs p-[2px] bg-[#e8fef5] font-medium text-[#00875f] rounded-lg">
                    Mendapatkan rating tinggi di kate
                  </p>
                </div>

                {/* Image Carousel */}
              </div>
              <div className="relative mt-4">
                <img
                  src={images[currentImage]}
                  alt="Hotel"
                  className="w-full h-40 object-cover "
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md"
                >
                  <BiChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 cursor-pointer top-1/2 transform -translate-y-1/2 bg-white   p-1 rounded-full shadow-md"
                >
                  <BiChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Detail Pemesanan */}
              <div className="flex items-center justify-center gap-1 p-4">
                {/* Check-In */}
                <div className="border border-gray-300 rounded-lg p-3 w-40 text-center">
                  <p className="text-xs text-gray-600">Check-In</p>
                  <p className="text-xs font-bold text-gray-900">
                    Jum, 7 Feb 2025
                  </p>
                  <p className="text-xs text-gray-600">Dari 15:00</p>
                </div>

                {/* Durasi Menginap */}
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-700 font-medium">
                    23 malam
                  </span>
                  <div className="w-16 h-[1px] bg-gray-300 rounded-full mt-1"></div>
                </div>

                {/* Check-Out */}
                <div className="border border-gray-300 rounded-lg p-3 w-40 text-center">
                  <p className="text-xs text-gray-600">Check-Out</p>
                  <p className="text-xs font-bold text-gray-900">
                    Min, 2 Mar 2025
                  </p>
                  <p className="text-xs text-gray-600">Sebelum 12:00</p>
                </div>
              </div>

              {/* Detail Kamar */}
              <div className="space-y-2    px-4">
                <h3 className="font-bold text-black">
                  (1x) Deluxe King With Balcony
                </h3>
                <div className="flex items-center space-x-2">
                  {/* <Users className="w-4 h-4 text-gray-600" /> */}
                  <FaBuildingUser className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600 font-medium">
                    2 Tamu
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <IoBed className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600 font-medium">
                    1 King Bed
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <ImSpoonKnife className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600 font-medium">
                    Termasuk sarapan untuk 1 orang
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {/* <Wifi className="w-4 h-4 text-gray-600" /> */}
                  <FaWifi className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600 font-medium">
                    Wi-Fi Gratis
                  </span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-gray-300 rounded-full my-3"></div>

              {/* Total Harga */}
              <div className="pb-4 px-4 ">
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <MdReceiptLong className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-bold text-gray-600">
                        Total Harga Kamar
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">
                      1 kamar, 23 malam
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-end text-gray-600 line-through">
                      Rp 78.293.599
                    </p>
                    <span className="text-lg font-bold text-red-500">
                      Rp 61.877.200
                    </span>
                    <p className="text-xs text-end text-[#00875a]">
                      Penawaran Terbaik
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
