import { useState } from "react";
import { IoNewspaper } from "react-icons/io5";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import newsPalmer from "../../assets/image/content/news/news-cole-palmer.jpg";
import newsDubai from "../../assets/image/content/news/news-dubai.jpg";
import newsBali from "../../assets/image/content/news/news-hotel-bali.jpg";
import newsRestaurant from "../../assets/image/content/news/news-restaurant.jpg";
import newsVisa from "../../assets/image/content/news/news-visa.jpg";

const newsData = [
  {
    image: newsPalmer,
    title: "Profil Cole Palmer: Talenta Muda yang Bersinar di Premier League",
    author: "Xperience Team",
  },
  {
    image: newsRestaurant,
    title: "10 Rekomendasi Hotel dengan Bar Terbaik di Bandung",
    author: "Mas Bellboy",
  },
  {
    image: newsVisa,
    title: "13 Syarat Foto Visa yang Harus Dipenuhi Pemohon",
    author: "Xperience Team",
  },
  {
    image: newsBali,
    title: "10 Pilihan Hotel dengan Sauna di Bali Terbaik",
    author: "Mas Bellboy",
  },
  {
    image: newsDubai,
    title: "10 Rekomendasi Hotel di Dubai Terbaik",
    author: "Mas Bellboy",
    createdAt: "les than 1 min read",
  },
];

const SectionNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth < 768;

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  };

  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <IoNewspaper size={22} />
          Baca dan bangkitkan semangat liburanmu
        </h2>
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
              className="grid grid-flow-col auto-cols-[calc(100%/1.3)] md:grid-cols-4 gap-4 py-2 w-full transition-transform duration-500 ease-in-out"
              style={{
                transform: !isMobile
                  ? `translateX(-${currentIndex * (100 / 4)}%)`
                  : "none",
              }}
            >
              {newsData
                .slice(currentIndex, currentIndex + 4)
                .map((news, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500`}
                  >
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <h3 className="font-semibold text-gray-700 mt-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-500">{news.author}</p>
                  </div>
                ))}
            </div>
            {!isMobile && currentIndex + 4 < newsData.length && (
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
              Baca Artikel Inspirasi
              <MdOutlineNavigateNext color="#0194f3" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNews;
