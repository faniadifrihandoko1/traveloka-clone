import { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import ancol from "../../assets/image/content/trending/ancol.jpeg";
import atlantis from "../../assets/image/content/trending/atlantis.jpeg";
import dufan from "../../assets/image/content/trending/dufan.jpeg";
import keraton from "../../assets/image/content/trending/keraton-jogja.jpeg";
import museum from "../../assets/image/content/trending/museum-nasional.jpg";
import samudra from "../../assets/image/content/trending/samudra.jpeg";
import seaworld from "../../assets/image/content/trending/sea-world.jpeg";
import transnow from "../../assets/image/content/trending/trans-snow.jpeg";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const trending = [
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trending.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + trending.length) % trending.length
    );
  };

  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Aktivitas Trending
        </h2>
        <div className="relative  w-full">
          <div className="flex items-center space-x-4 overflow-hidden">
            {currentIndex > 0 && (
              <button
                className="bg-white rounded-full shadow-md p-2 absolute left-0 z-10 cursor-pointer"
                onClick={prevSlide}
              >
                <MdOutlineNavigateBefore color="#0194f3" size={24} />
              </button>
            )}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full overflow-hidden">
              {trending.map((activity, index) => (
                <div
                  key={activity.id}
                  className={`p-4 rounded-xl shadow-lg transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md inline-block mt-2">
                    {activity.location}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">
                    {activity.title}
                  </h3>
                  {activity.discount && (
                    <span className="text-orange-500 text-sm font-semibold">
                      {activity.discount}
                    </span>
                  )}
                  <p className="text-blue-600 text-sm mt-1">
                    ⭐ {activity.rating}/10 ({activity.reviews})
                  </p>
                  {activity.oldPrice && (
                    <p className="text-gray-400 line-through text-sm">
                      {activity.oldPrice}
                    </p>
                  )}
                  <p className="text-red-500 font-bold">{activity.newPrice}</p>
                </div>
              ))}
            </div>

            {currentIndex + 4 < trending.length && (
              <button
                className="bg-white rounded-full drop-shadow-2xl p-2 absolute right-0 z-10 cursor-pointer"
                onClick={nextSlide}
              >
                <MdOutlineNavigateNext color="#0194f3" size={24} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTrending;
