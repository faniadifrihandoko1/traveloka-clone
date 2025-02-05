import { useState } from "react";
import { BiSolidDiscount } from "react-icons/bi";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import changi from "../../assets/image/content/promo/chang.jpg";
import domestik from "../../assets/image/content/promo/dalam-negeri.jpg";
import eva from "../../assets/image/content/promo/eva-air.jpg";
import international from "../../assets/image/content/promo/luar-negeri.jpg";
import singapore from "../../assets/image/content/promo/singapore.jpg";

const SectionPromo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth < 768;
  const promos = [
    { title: "Promo dalam Negeri", image: domestik },
    { title: "Promo Luar Negeri", image: international },
    { title: "eva air", image: eva },
    { title: "Diskon Singapura 300rb", image: singapore },
    { title: "changi", image: changi },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + promos.length) % promos.length
    );
  };

  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2 ">
          <BiSolidDiscount size={24} color="green" />
          Promo terbaik buat liburan irit!
        </h2>
        <div className="overflow-x-auto flex gap-2 mb-4 p-2 whitespace-nowrap scrollbar-hide">
          <button className="bg-blue-500 text-white px-4 py-2  text-sm md:text-base rounded-full cursor-pointer">
            Tiket Pesawat
          </button>
          <button className="bg-[#f7f9fa] text-[#0194f3] shadow font-semibold cursor-pointer px-4 py-2  text-sm md:text-base rounded-full">
            Hotel
          </button>
          <button className="bg-[#f7f9fa] text-[#0194f3] shadow font-semibold cursor-pointer px-4 py-2  text-sm md:text-base rounded-full">
            Tiket Kereta Api
          </button>
          <button className="bg-[#f7f9fa] text-[#0194f3] shadow font-semibold cursor-pointer px-4 py-2  text-sm md:text-base rounded-full">
            Tiket Bus & Travel
          </button>
          <button className="bg-[#f7f9fa] text-[#0194f3] shadow font-semibold cursor-pointer px-4 py-2  text-sm md:text-base rounded-full">
            Mobil
          </button>
          <button className="bg-[#f7f9fa] text-[#0194f3] shadow font-semibold cursor-pointer px-4 py-2  text-sm md:text-base rounded-full">
            Aktivitas
          </button>
        </div>
        <div className="relative w-full">
          <div
            className={`flex items-center space-x-4 md:space-x-0 ${
              isMobile ? "overflow-x-auto scrollbar-hide" : "md:overflow-hidden"
            }`}
          >
            {!isMobile && currentIndex > 0 && (
              <button
                className="bg-white rounded-full shadow-md p-2 absolute left-0 z-10 cursor-pointer"
                onClick={prevSlide}
              >
                <MdOutlineNavigateBefore color="#0194f3" size={24} />
              </button>
            )}
            <div
              className="grid grid-flow-col auto-cols-[calc(100%/1.3)]  sm:grid-cols-2 md:grid-cols-3 gap-4 w-full transition-transform duration-500 ease-in-out"
              style={{
                transform: !isMobile
                  ? `translateX(-${currentIndex * (100 / 3)}%)`
                  : "none",
              }}
            >
              {isMobile
                ? promos.map((promo, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <img
                        src={promo.image}
                        alt={promo.title}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  ))
                : promos
                    .slice(currentIndex, currentIndex + 3)
                    .map((promo, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <img
                          src={promo.image}
                          alt={promo.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
            </div>
            {!isMobile && currentIndex + 4 < promos.length && (
              <button
                className="bg-white rounded-full drop-shadow-2xl p-2 absolute right-0 z-10 cursor-pointer"
                onClick={nextSlide}
              >
                <MdOutlineNavigateNext color="#0194f3" size={24} />
              </button>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-[#f7f9fa] text-[#0194f3] font-bold px-6 py-2 rounded-md cursor-pointer flex items-center gap-2">
              Lihat Semua Promo
              <MdOutlineNavigateNext color="#0194f3" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPromo;
