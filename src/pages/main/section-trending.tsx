import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import ancol from "../../assets/image/content/trending/ancol.jpeg";
import atlantis from "../../assets/image/content/trending/atlantis.jpeg";
import dufan from "../../assets/image/content/trending/dufan.jpeg";
import keraton from "../../assets/image/content/trending/keraton-jogja.jpeg";
import museum from "../../assets/image/content/trending/museum-nasional.jpg";
import samudra from "../../assets/image/content/trending/samudra.jpeg";
import seaworld from "../../assets/image/content/trending/sea-world.jpeg";
import transnow from "../../assets/image/content/trending/trans-snow.jpeg";
import birdTraveloka from "../../assets/logo-bird.png";

const trendings = [
  {
    id: 1,
    location: "Ancol",
    title: "Tiket Dufan Ancol",
    discount: "Hemat 30%",
    rating: 9.2,
    reviews: 20149,
    oldPrice: "Rp 275.000",
    newPrice: "Rp 190.576",
    image: dufan,
  },
  {
    id: 2,
    location: "Ancol",
    title: "Tiket Pintu Gerbang Utama Ancol",
    discount: "Hemat 25%",
    rating: 9.4,
    reviews: 24635,
    oldPrice: "Rp 35.000",
    newPrice: "Rp 34.302",
    image: ancol,
  },
  {
    id: 3,
    location: "Ancol",
    title: "Tiket Sea World Ancol",
    discount: "Hemat 35%",
    rating: 9.1,
    reviews: 15532,
    oldPrice: "Rp 135.000",
    newPrice: "Rp 88.421",
    image: seaworld,
  },
  {
    id: 4,
    location: "Gambir",
    title: "Museum Nasional Indonesia",
    rating: 9.4,
    reviews: 1776,
    newPrice: "Rp 25.000",
    image: museum,
  },
  {
    id: 5,
    location: "Yogyakarta",
    title: "Tiket Keraton Jogja",
    discount: "Hemat 30%",
    rating: 9.2,
    reviews: 20149,
    oldPrice: "Rp 275.000",
    newPrice: "Rp 190.576",
    image: keraton,
  },
  {
    id: 6,
    location: "Gambir",
    title: "Atlantis Waterpark",
    discount: "Hemat 30%",
    rating: 9.2,
    reviews: 20149,
    oldPrice: "Rp 275.000",
    newPrice: "Rp 190.576",
    image: atlantis,
  },
  {
    id: 7,
    location: "Gambir",
    title: "Tiket Trans Snow",
    discount: "Hemat 30%",
    rating: 9.2,
    reviews: 20149,
    oldPrice: "Rp 275.000",
    newPrice: "Rp 190.576",
    image: transnow,
  },
  {
    id: 8,
    location: "Gambir",
    title: "Tiket Samudra Indonesia",
    discount: "Hemat 30%",
    rating: 9.2,
    reviews: 20149,
    oldPrice: "Rp 275.000",
    newPrice: "Rp 190.576",
    image: samudra,
  },
];

const SectionTrending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth < 768;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trendings.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + trendings.length) % trendings.length
    );
  };

  return (
    <section className="bg-white py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-2xl font-bold text-gray-800 mb-6">
          Aktivitas Trending
        </h2>
        <div className="overflow-x-auto flex gap-2 mb-4 md:p-2 whitespace-nowrap scrollbar-hide">
          <button className="bg-[#0770cd] text-white px-4 py-2 rounded-full cursor-pointer w-full md:w-auto">
            Atraksi
          </button>
          <button className="bg-[#f7f9fa] text-[#0194f3] font-semibold cursor-pointer px-4 py-2 rounded-full w-full md:w-auto">
            Tur
          </button>
          <button className="bg-[#f7f9fa] text-[#0194f3] font-semibold cursor-pointer px-4 py-2 rounded-full w-full md:w-auto">
            Taman Bermain
          </button>
          <button className="bg-[#f7f9fa] text-[#0194f3] font-semibold cursor-pointer px-4 py-2 rounded-full w-full md:w-auto">
            Spa & Kecantikan
          </button>
        </div>
        <div className="relative  w-full">
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
              className="grid grid-flow-col auto-cols-[calc(100%/1.3)] md:grid-cols-4 gap-4 py-2 w-full transition-transform duration-500 ease-in-out"
              style={{
                transform: !isMobile
                  ? `translateX(-${currentIndex * (100 / 4)}%)`
                  : "none",
              }}
            >
              {trendings
                .slice(currentIndex, currentIndex + 4)
                .map((trending, index) => (
                  <div
                    key={index}
                    className=" rounded-xl  transition-opacity duration-500 shadow-lg drop-shadow-lg "
                  >
                    <div className="relative">
                      <img
                        src={trending.image}
                        alt={trending.title}
                        className="w-full h-48 object-cover rounded-t-lg "
                      />
                      <span className="bg-[#ff6d70] text-white text-xs px-3 py-2 rounded-md  absolute top-0  flex items-center gap-1">
                        <IoLocationSharp size={16} />
                        {trending.location}
                      </span>
                      {trending.discount && (
                        <span className="bg-orange-500 text-xs py-1 px-2 font-semibold absolute bottom-5">
                          {trending.discount}
                        </span>
                      )}
                    </div>
                    <div className="p-2">
                      <h3 className="text-sm text-gray-800 font-bold mt-2">
                        {trending.title}
                      </h3>

                      <p className="text-[#0194f3] text-sm font-semibold my-1 flex items-center gap-1">
                        <img
                          src={birdTraveloka}
                          height={24}
                          width={24}
                          alt=""
                        />{" "}
                        {trending.rating}/10{" "}
                        <span className="text-gray-800 font-semibold">
                          ({trending.reviews})
                        </span>
                      </p>
                      {trending.oldPrice && (
                        <p className="text-gray-500 line-through text-xs font-semibold">
                          {trending.oldPrice}
                        </p>
                      )}
                      <p className="text-[#f96d01] font-bold text-sm">
                        {trending.newPrice}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {!isMobile && currentIndex + 7 < trendings.length && (
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
              Lihat Semua
              <MdOutlineNavigateNext color="#0194f3" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTrending;
