import { useEffect, useState } from "react";
import { FaAward, FaRegCalendarAlt } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { GrFormNext, GrLocation } from "react-icons/gr";
import { IoLocationSharp, IoSearchSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import birdLogo from "../../../assets/logo-bird.png";
import hotels from "../../../utils/data";

const HotelDetail = () => {
  const { id } = useParams();
  const [isFixed, setIsFixed] = useState(false);

  console.log(id);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const findData = hotels.find((item: any) => item.id.toString() === id);
  console.log(findData);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`bg-white shadow-2xl transition-all duration-300 ${
          isFixed ? "md:fixed top-0 left-0 w-full z-50 shadow-lg" : ""
        }`}
        id="search-section"
      >
        <div className="max-w-7xl mx-auto px-4 py-6 bg-white">
          <div className="bg-white p-4 md:min-h-14 md:p-0 rounded-xl shadow-md border border-gray-500 flex flex-col md:flex-row gap-4">
            <div className="flex  items-center gap-2 md:px-2 flex-1 border-b md:border-b-0 md:border-r-2 border-gray-300 pb-2 md:pb-0 ">
              <GrLocation color="#0194f3" size={24} cursor="pointer" />
              <input
                type="text"
                value={"Jakarta"}
                placeholder="Kota, tujuan, atau nama hotel"
                className="w-full outline-none text-gray-700 placeholder-gray-500"
              />
            </div>
            <div className="flex items-center gap-2  md:px-2 flex-1 border-b md:border-b-0 md:border-r-2 border-gray-300 pb-2 md:pb-0">
              <FaRegCalendarAlt color="#0194f3" size={24} cursor="pointer" />
              <input
                type="text"
                value="05 Feb 2025 - 06 Feb 2025"
                className="w-full outline-none text-gray-700 placeholder-gray-500"
              />
            </div>
            <div className="flex items-center gap-2 md:px-2 flex-1 pb-2 md:pb-0">
              <FaBuildingUser color="#0194f3" size={24} cursor="pointer" />
              <input
                type="text"
                value="1 Dewasa, 0 Anak, 1 Kamar"
                className="w-full outline-none text-gray-700 placeholder-gray-500"
              />
            </div>
            <div className="bg-[#0194f3] text-white px-4 py-2 cursor-pointer rounded-xl font-bold flex items-center justify-center md:rounded-r-xl w-full md:w-auto">
              <IoSearchSharp size={26} />
              <span className="ml-2">Cari Hotel</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 pt-6 overflow-x-auto md:overflow-hidden ">
          <div className="flex gap-5">
            <div className="px-4 py-2 border-b-4 border-blue-500 text-black font-bold cursor-pointer">
              Info Umum
            </div>
            <div className="px-4 py-2  border-blue-500 text-black font-bold cursor-pointer">
              Kamar{" "}
            </div>
            <div className="px-4 py-2  border-blue-500 text-black font-bold cursor-pointer">
              Lokasi
            </div>
            <div className="px-4 py-2  border-blue-500 text-black font-bold cursor-pointer">
              Fasilitas
            </div>
            <div className="px-4 py-2  border-blue-500 text-black font-bold cursor-pointer">
              Kebijakan
            </div>
            <div className="px-4 py-2  border-blue-500 text-black font-bold cursor-pointer">
              Review
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-gray-100 py-6 px-4 ${isFixed ? "md:pt-40" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4">
            {/* Large Main Image - 40% Width */}
            <div className="md:col-span-5 h-[400px] md:h-[400px]">
              <img
                src="https://media-hosting.imagekit.io//692087d0c0164331/20053243-cab50857832026c679f9ad91ce9e669d.jpeg?Expires=1833334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=p3TFjIuGDCJHmNYBeBCpiDnzdYOtnT5DZvKO1dLvtDv2ZSRrPB2awNXGMyGlegQlIW1CActq0fKhEkcCKeE22qJhNxl79G5Cszixj6cjjBd267YwRlJansgtEsIZN2348Gv1Au3M1PqNmm7VPxxbhcK1d~G2phxIVXA2ffRc4k7Gw~WhZlqX6OYHTrvqQGg0ELzuAAoRj9QmkcUuZziWuJBUS-W8LwhOJe4FjRTqX6YVd~WOAUGXD4jjgxssW97onSBN2BFgx5uArTzOEZgq8-ZkOIEJqV6he~coJRv~JlJanTExY7YzlENYRV6vZ6UeWddzWmTvFknY-yjBRL~F6w__"
                alt="Hotel Main Image"
                className="rounded-xl w-full h-full object-cover cursor-pointer hover:brightness-50 transition-all duration-300"
              />
            </div>

            {/* Small Images Grid */}
            <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              {/* Column 1 */}
              <div className="grid grid-rows-2 gap-2">
                <img
                  src="https://media-hosting.imagekit.io//57e46eb9bd0a4d00/1525328182573-3236x2160-FIT_AND_TRIM-55c23eedb2d7234a9d57829a4d89c211.jpeg?Expires=1833334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cjsH34kD6WTkGCMDxWT7ajUmZuALdW3GH5X2HxRzejBny9wUO-55u4QmncWLdQs4xztdUgUTp2taN6sAWYu3sAktLxVdIKPGJf3zacGoj4bgEOkt7FFSlnN56-KYfQsJBwZkI18jNYMcAttcMhT~-R~txmODn9zELOehTp4LgVzTW3tNey0WDuC~1u7s8tinZR5bigxJMPOjBMaBXpze97GfT1lQVCUFeDICziNdWv0GJg7GgFeS8UaPkpIWhzUjeEjNmLR~Uae6SRbfhxEKMmqV8vMTE4qPFHQKbtw8pzWBCKhVWPBWNxwL2L0nYhRQ-1fYetrSt~wu2Pk7GcBF8Q__"
                  alt="Hotel Pool"
                  className="w-full h-auto md:h-full object-cover cursor-pointer hover:brightness-50 transition-all duration-300"
                />
                <img
                  src="https://media-hosting.imagekit.io//0aba5e78f92b489d/10004764-44e133170f803bd21a97c00031b7f341.jpeg?Expires=1833334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gwn9jIuiZMUwpAAGG1RHlO4-rfkxeapGUoz-KtIABfLw~g~ECPhjnvnWrsDBR1GkYQk00yZz9lp1MXXEcaHqM5TGrDtwSI6sasrjrXc2KPzyJahZozSXu3Qf2SKMLXZ0WOtTRcSQxwdnOkt~bdflHd5yncgHc9m5szYjghZTKWVcGuptRFMYY~pYJSPBzzIb4EAaEAZoDlclRy-ofpuraWSnO0CRelhiiJ6YvH8jmQ7Q5Rwmr7ZyZ~HzSFloGorZS8bxuTHRtM9bVwGIiMMhX8jD60o9UguedwLDE4AoEplvkB-mv-DeLXDkuFccyKeJjtOQH2sO2Hi2V0Fyyyjuxw__"
                  alt="Hotel Lobby"
                  className="w-full h-auto md:h-full object-cover cursor-pointer hover:brightness-50 transition-all duration-300"
                />
              </div>

              {/* Column 2 */}
              <div className="grid grid-rows-2 gap-2">
                <img
                  src="https://media-hosting.imagekit.io//57e46eb9bd0a4d00/1525328182573-3236x2160-FIT_AND_TRIM-55c23eedb2d7234a9d57829a4d89c211.jpeg?Expires=1833334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cjsH34kD6WTkGCMDxWT7ajUmZuALdW3GH5X2HxRzejBny9wUO-55u4QmncWLdQs4xztdUgUTp2taN6sAWYu3sAktLxVdIKPGJf3zacGoj4bgEOkt7FFSlnN56-KYfQsJBwZkI18jNYMcAttcMhT~-R~txmODn9zELOehTp4LgVzTW3tNey0WDuC~1u7s8tinZR5bigxJMPOjBMaBXpze97GfT1lQVCUFeDICziNdWv0GJg7GgFeS8UaPkpIWhzUjeEjNmLR~Uae6SRbfhxEKMmqV8vMTE4qPFHQKbtw8pzWBCKhVWPBWNxwL2L0nYhRQ-1fYetrSt~wu2Pk7GcBF8Q__"
                  alt="Hotel Pool"
                  className="w-full h-auto md:h-full object-cover cursor-pointer hover:brightness-50 transition-all duration-300"
                />
                <img
                  src="https://media-hosting.imagekit.io//0aba5e78f92b489d/10004764-44e133170f803bd21a97c00031b7f341.jpeg?Expires=1833334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gwn9jIuiZMUwpAAGG1RHlO4-rfkxeapGUoz-KtIABfLw~g~ECPhjnvnWrsDBR1GkYQk00yZz9lp1MXXEcaHqM5TGrDtwSI6sasrjrXc2KPzyJahZozSXu3Qf2SKMLXZ0WOtTRcSQxwdnOkt~bdflHd5yncgHc9m5szYjghZTKWVcGuptRFMYY~pYJSPBzzIb4EAaEAZoDlclRy-ofpuraWSnO0CRelhiiJ6YvH8jmQ7Q5Rwmr7ZyZ~HzSFloGorZS8bxuTHRtM9bVwGIiMMhX8jD60o9UguedwLDE4AoEplvkB-mv-DeLXDkuFccyKeJjtOQH2sO2Hi2V0Fyyyjuxw__"
                  alt="Hotel Lobby"
                  className="w-full h-auto md:h-full object-cover cursor-pointer hover:brightness-50 transition-all duration-300"
                />
              </div>

              {/* Column 3 */}
              <div className="grid grid-rows-2 gap-2">
                <img
                  src="https://media-hosting.imagekit.io//57e46eb9bd0a4d00/1525328182573-3236x2160-FIT_AND_TRIM-55c23eedb2d7234a9d57829a4d89c211.jpeg?Expires=1833334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cjsH34kD6WTkGCMDxWT7ajUmZuALdW3GH5X2HxRzejBny9wUO-55u4QmncWLdQs4xztdUgUTp2taN6sAWYu3sAktLxVdIKPGJf3zacGoj4bgEOkt7FFSlnN56-KYfQsJBwZkI18jNYMcAttcMhT~-R~txmODn9zELOehTp4LgVzTW3tNey0WDuC~1u7s8tinZR5bigxJMPOjBMaBXpze97GfT1lQVCUFeDICziNdWv0GJg7GgFeS8UaPkpIWhzUjeEjNmLR~Uae6SRbfhxEKMmqV8vMTE4qPFHQKbtw8pzWBCKhVWPBWNxwL2L0nYhRQ-1fYetrSt~wu2Pk7GcBF8Q__"
                  alt="Hotel Pool"
                  className="w-full h-auto md:h-full object-cover cursor-pointer hover:brightness-50 transition-all duration-300"
                />
                <img
                  src="https://media-hosting.imagekit.io//0aba5e78f92b489d/10004764-44e133170f803bd21a97c00031b7f341.jpeg?Expires=1833334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gwn9jIuiZMUwpAAGG1RHlO4-rfkxeapGUoz-KtIABfLw~g~ECPhjnvnWrsDBR1GkYQk00yZz9lp1MXXEcaHqM5TGrDtwSI6sasrjrXc2KPzyJahZozSXu3Qf2SKMLXZ0WOtTRcSQxwdnOkt~bdflHd5yncgHc9m5szYjghZTKWVcGuptRFMYY~pYJSPBzzIb4EAaEAZoDlclRy-ofpuraWSnO0CRelhiiJ6YvH8jmQ7Q5Rwmr7ZyZ~HzSFloGorZS8bxuTHRtM9bVwGIiMMhX8jD60o9UguedwLDE4AoEplvkB-mv-DeLXDkuFccyKeJjtOQH2sO2Hi2V0Fyyyjuxw__"
                  alt="Hotel Lobby"
                  className="w-full h-auto md:h-full object-cover cursor-pointer hover:brightness-50 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 ">
            <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
              <div className="text-black text-xl font-bold flex flex-col gap-1">
                <h3>The Gaia Hotel Bandung</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="text-sm rounded-md px-2 font-semibold bg-[#ecf8ff] text-[#0264c8]">
                    {"hotel"}
                  </div>
                  <span className="text-yellow-500 text-lg">★★★★★</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <FaAward color="#0264c8" className="hidden md:block" />
                  <p className="text-sm text-black">
                    Traveloka Hotel Appreciation 2023: Excellent Performance
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center gap-2">
                  <div>
                    <p className="text-black text-xs md:text-right">
                      Harga total mulai dari
                    </p>
                    <h3 className="text-orange-600 text-xl font-bold">
                      Rp 60.740.000
                    </h3>
                  </div>
                  <button className="bg-orange-600 text-white font-bold px-2 py-2 rounded-lg">
                    Pilih Kamar
                  </button>
                </div>
              </div>
            </div>
            <div className="container mx-auto mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Review Section */}
                <div className="bg-white p-4 shadow-md rounded-lg md:col-span-1">
                  <div className="flex items-center space-x-2">
                    <div className="text-xl font-bold border-blue-300 border-2 rounded-md p-2  text-blue-500">
                      9.0
                    </div>
                    <div className="w-full">
                      <h2 className="font-bold text-black text-lg">
                        Mengesankan
                      </h2>
                      <div className="w-full flex justify-between items-center">
                        <p className="text-blue-500 text-sm font-bold ">
                          Dari 200 review tamu yang terverifikasi
                        </p>
                        <GrFormNext color="#0264c8" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-black ">
                      Kesan Menginap Tamu Lain
                    </h3>
                    <div className="mt-2  p-3 rounded-lg border-[1px] border-gray-300">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-black text-xs">Yani M.</p>
                        <div className="flex bg-[#ecf8ff] p-1 items-center space-x-2 rounded-md">
                          <img src={birdLogo} className="h-4" alt="" />
                          <p className="text-xs font-bold text-[#1fa2e3]">
                            8.5 / 10
                          </p>
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-black mt-2">
                        Pemandangannya Bagus sekali asri, Sejuk dan banyak
                        sekali pepohonan yang menambah kenyamanan. Pokoknya
                        Rekomen bgt nginep disini
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Accommodation & Facilities */}
                <div className="md:col-span-2 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Accommodation Section */}
                    <div className="bg-white p-4 shadow-md rounded-lg">
                      <div className="flex items-center justify-between space-x-2">
                        <h2 className="font-bold text-black">Area Akomodasi</h2>
                        <span className="hidden md:flex items-center ">
                          <p className="font-bold text-sm text-[#1fa2e3]">
                            Lihat Peta
                          </p>
                          <GrFormNext color="#1fa2e3" size={20} />
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <IoLocationSharp
                          className="hidden md:block"
                          color="black"
                          size={24}
                        />
                        <p className="text-sm font-semibold text-gray-600">
                          Jl. Dr.Setia Budi No.140 ,Ledeng, Kecamatan Pancoran
                          Mas, Kota Depok, 1641{" "}
                        </p>
                      </div>
                      <div className="mt-2 font-bold text-blue-700 text-sm">
                        Lokasi Strategis
                      </div>
                      <div className="mt-2 flex-col flex gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <IoLocationSharp color="black" size={14} />
                            <p className="text-black text-sm font-semibold">
                              Lembang
                            </p>
                          </div>
                          <p className="text-gray-600 text-xs font-semibold">
                            1.33 km
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Facilities Section */}
                    <div className="bg-white p-4 shadow-md rounded-lg">
                      <div className="flex items-center justify-between space-x-2">
                        <h2 className="font-bold text-black">
                          Fasilitas Utama
                        </h2>
                        <span className="hidden md:flex items-center ">
                          <p className="font-bold text-sm text-[#1fa2e3]">
                            Selengkapnya
                          </p>
                          <GrFormNext color="#1fa2e3" size={20} />
                        </span>
                      </div>
                      <ul className="mt-3 text-sm text-gray-600 grid grid-cols-2 gap-2">
                        <li>AC</li>
                        <li>Parkir</li>
                        <li>Restoran</li>
                        <li>Lift</li>
                        <li>Kolam Renang</li>
                        <li>WiFi</li>
                        <li>Resepsionis 24 Jam</li>
                      </ul>
                    </div>
                  </div>

                  {/* Hotel Description Section */}
                  <div className="bg-white p-4 shadow-md rounded-lg">
                    <p className="text-sm text-gray-600">
                      The Gaia Hotel Bandung adalah hotel di lokasi yang baik,
                      tepatnya berada di Setiabudi. Resepsionis siap 24 jam
                      untuk melayani proses check-in, check-out dan kebutuhan
                      Anda yang lain. Jangan ragu untuk menghubungi resepsionis,
                      kami siap melayani Anda. WiFi tersedia di seluruh area
                      publik properti untuk membantu Anda tetap terhubung dengan
                      keluarga dan teman.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-6" id="section-tipe-kamar">
              <h1 className="text-lg md:text-xl font-bold text-black">
                Tipe Kamar yang Tersedia di The Gaia Hotel Bandung
              </h1>
              <div className="bg-white shadow-md border-gray-200 rounded-lg border-[1px] mt-4 p-4">
                <h1 className="text-lg md:text-xl font-bold text-black text-center sm:text-left">
                  Deluxe Twin With Balcony Mountain View
                </h1>
                <div className="mt-2 border rounded-lg flex flex-col sm:flex-row">
                  <img
                    src="https://media-hosting.imagekit.io//692087d0c0164331/20053243-cab50857832026c679f9ad91ce9e669d.jpeg?Expires=1833334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=p3TFjIuGDCJHmNYBeBCpiDnzdYOtnT5DZvKO1dLvtDv2ZSRrPB2awNXGMyGlegQlIW1CActq0fKhEkcCKeE22qJhNxl79G5Cszixj6cjjBd267YwRlJansgtEsIZN2348Gv1Au3M1PqNmm7VPxxbhcK1d~G2phxIVXA2ffRc4k7Gw~WhZlqX6OYHTrvqQGg0ELzuAAoRj9QmkcUuZziWuJBUS-W8LwhOJe4FjRTqX6YVd~WOAUGXD4jjgxssW97onSBN2BFgx5uArTzOEZgq8-ZkOIEJqV6he~coJRv~JlJanTExY7YzlENYRV6vZ6UeWddzWmTvFknY-yjBRL~F6w__"
                    alt="Deluxe Twin With Balcony Mountain View"
                    className="w-full sm:w-1/3 max-h-64 rounded-lg"
                  />
                  <div className="w-full sm:w-2/3 mt-4 sm:mt-0 sm:ml-4">
                    <div className="border rounded-lg overflow-hidden shadow-sm overflow-x-auto">
                      <table className="w-full border border-gray-300 border-collapse text-xs sm:text-sm min-w-max">
                        <thead>
                          <tr className="bg-gray-100 text-black border-b border-gray-300">
                            <th className="p-2 sm:p-3 font-semibold border-r border-gray-300">
                              Pilihan Kamar
                            </th>
                            <th className="p-2 sm:p-3 font-semibold border-r border-gray-300">
                              Tamu
                            </th>
                            <th className="p-2 sm:p-3 font-semibold border-r border-gray-300">
                              Harga total
                            </th>
                            <th className="p-2 sm:p-3 font-semibold">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-gray-300">
                            <td className="p-2 sm:p-3 border-r border-gray-300 space-y-1">
                              <p className="text-xs font-semibold text-gray-600">
                                Deluxe Twin Mountain View With Balcony
                              </p>
                              <p className="font-bold text-sm text-black">
                                Termasuk sarapan untuk 1 orang
                              </p>
                              <p className="text-sm flex items-center text-gray-600">
                                <span className="mr-2">🛏</span> 1 ranjang twin
                              </p>
                              <p className="text-green-600 font-semibold text-sm">
                                ✅ Gratis Pembatalan sebelum 06 Feb 2025
                              </p>
                            </td>
                            <td className="p-2 sm:p-3 border-r border-gray-300 text-center">
                              <span className="text-lg">👥</span>
                            </td>
                            <td className="p-2 sm:p-3 text-right border-r border-gray-300">
                              <p className="text-gray-500 text-xs font-semibold line-through">
                                Rp 74.989.603
                              </p>
                              <p className="text-lg font-bold text-orange-600">
                                Rp 60.740.000
                              </p>
                              <p className="text-xs font-semibold text-gray-500">
                                Termasuk pajak & biaya
                              </p>
                            </td>
                            <td className="p-2 sm:p-3 text-center">
                              <button className="bg-blue-600 cursor-pointer text-white font-semibold px-2 py-1 rounded-lg hover:bg-blue-700 text-xs sm:text-sm">
                                Pilih
                              </button>
                              <p className="text-red-600 font-medium text-xs sm:text-sm mt-2">
                                Terjual cepat!
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="mt-2 p-4">
                  <h3 className="text-md font-semibold text-gray-800">
                    Fasilitas
                  </h3>
                  <div className="w-full w-1/2 md:w-1/3">
                    <ul className="text-sm text-gray-600 mt-2 grid grid-cols-2 sm:grid-cols-2">
                      <li>✅ Shower</li>
                      <li>✅ Balkon / teras</li>
                      <li>✅ Kulkas</li>
                      <li>✅ Area tempat duduk</li>
                      <li>✅ Air panas</li>
                      <li>✅ AC</li>
                    </ul>
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

export default HotelDetail;
