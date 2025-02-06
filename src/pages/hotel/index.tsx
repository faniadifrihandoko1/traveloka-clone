import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsTextParagraph } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
  FaBuildingUser,
  FaLocationDot,
  FaMapLocationDot,
} from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import birdTraveloka from "../../assets/logo-bird.png";
import hotels from "../../utils/data";

const HotelPages = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Popularitas tertinggi");
  const [selectedPrice, setSelectedPrice] = useState("Exclude Tax");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get("destination");
  const navigate = useNavigate();

  const [search, setSearch] = useState(destination || "");
  const [searchQuery, setSearchQuery] = useState(destination || "");

  const handleSearch = () => {
    setSearchQuery(search); // Update searchQuery dengan nilai dari input
  };

  const handlePilihKamar = (id: number) => {
    navigate(`/hotel/detail/${id}`);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsPriceDropdownOpen(false); // Menutup dropdown harga jika dropdown urutkan dibuka
  };

  const handlePriceDropdownToggle = () => {
    setIsPriceDropdownOpen((prev) => !prev);
    setIsDropdownOpen(false); // Menutup dropdown urutkan jika dropdown harga dibuka
  };

  const handleSelectPrice = (priceOption: string) => {
    setSelectedPrice(priceOption);
    setIsPriceDropdownOpen(false);
  };
  const handleSelectSort = (sortOption: string) => {
    setSelectedSort(sortOption);
    setIsDropdownOpen(false);
  };

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchQuery?.toLowerCase() ?? "")
  );

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString("id-ID")}`;
  };

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (selectedSort === "Harga Terendah") {
      return a.discountedPrice - b.discountedPrice;
    } else if (selectedSort === "Harga Tertinggi") {
      return b.discountedPrice - a.discountedPrice;
    } else if (selectedSort === "Rating Tertinggi") {
      return b.rating - a.rating;
    }
    return 0;
  });

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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
            <button
              onClick={handleSearch}
              className="bg-[#0194f3]  text-white px-4 py-2 cursor-pointer rounded-xl font-bold flex items-center justify-center md:rounded-r-xl w-full md:w-auto"
            >
              <IoSearchSharp size={26} />
              <span className="ml-2">Cari Hotel</span>
            </button>
          </div>
        </div>
      </div>

      <div className={`bg-gray-100 py-6 px-4 ${isFixed ? "md:pt-40" : ""}`}>
        {sortedHotels.length > 0 ? (
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
            <div className="col-span-3 hidden md:block   p-4">
              <div className="bg-[#ecf8ff] p-6 rounded-lg  mb-4 w-full flex flex-col items-center justify-center ">
                <FaMapLocationDot color="#3180d5" size={34} />
                <div className="bg-[#3180d5] px-2 py-1 rounded-2xl font-bold mt-2">
                  <p>Eksplor Di Peta</p>
                </div>
              </div>
            </div>

            <div className="col-span-12   md:col-span-9 ">
              <div className="md:py-4 w-full mx-auto rounded-lg">
                <div className="flex flex-col md:flex-row md:justify-between w-full items-start md:items-center gap-4">
                  <div className="text-black w-full md:w-auto text-left md:text-left">
                    <h1 className="font-bold">{destination}</h1>
                    <p className="text-sm text-gray-500">
                      {filteredHotels.length} Properti Ditemukan
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="relative flex items-center gap-2 text-black w-full sm:w-auto">
                      <p className="text-xs font-semibold">
                        Urutkan Berdasarkan:
                      </p>
                      <button
                        className="flex items-center justify-between w-full sm:w-auto gap-2 px-3 py-2 text-[#0194f3] font-semibold rounded-2xl cursor-pointer text-sm bg-white"
                        onClick={handleDropdownToggle}
                      >
                        {selectedSort} <BiChevronDown size={16} />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute text-sm font-semibold top-10 right-0 mt-2 w-auto md:w-full sm:w-64 bg-white border-gray-300 rounded shadow-lg z-10">
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelectSort("Harga Terendah")}
                          >
                            Harga Terendah
                          </button>
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelectSort("Harga Tertinggi")}
                          >
                            Harga Tertinggi
                          </button>
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelectSort("Rating Tertinggi")}
                          >
                            Rating Tertinggi
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="relative flex items-center gap-2 text-black w-full sm:w-auto">
                      <p className="text-xs font-semibold">Tampilan Harga:</p>
                      <button
                        className="flex items-center justify-between w-full sm:w-auto gap-2 px-3 py-2 text-[#0194f3] font-semibold rounded-2xl cursor-pointer text-sm bg-white"
                        onClick={handlePriceDropdownToggle}
                      >
                        {selectedPrice} <BiChevronDown size={16} />
                      </button>
                      {isPriceDropdownOpen && (
                        <div className="absolute mt-2 text-sm font-semibold top-10  right-0  w-auto md:w-full sm:w-48 bg-white border-gray-300 rounded shadow-lg z-10">
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelectPrice("Include Tax")}
                          >
                            Include Tax
                          </button>
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelectPrice("Exclude Tax")}
                          >
                            Exclude Tax
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="relative flex justify-between md:justify-center items-center gap-2 text-black w-full sm:w-auto">
                      <p className="text-xs font-semibold">Tampilan:</p>
                      <button className="flex items-center gap-2 px-3 py-2 text-[#0194f3] font-semibold rounded-2xl text-sm bg-white">
                        <CgMenuGridO
                          size={18}
                          color="gray"
                          cursor={"pointer"}
                        />
                        <BsTextParagraph size={18} cursor={"pointer"} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                {sortedHotels?.map((hotel) => (
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden  md:grid md:grid-cols-10 md:gap-4">
                    <div className="md:col-span-3">
                      <img
                        src={hotel.imageMain}
                        alt="Hotel Image"
                        className="w-full h-40 object-cover"
                      />
                      <div className="grid grid-cols-3 gap-[2px] mt-[2px]">
                        {hotel.imageGallery.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Room ${index + 1}`}
                            className="w-full h-16 object-cover "
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 md:col-span-5 flex flex-col border-r-2  border-gray-200 px-3 py-2">
                      <div>
                        <div className="w-full flex flex-col md:flex-row md:justify-between items-start">
                          <h3 className="text-lg font-bold text-black">
                            {hotel.name}
                          </h3>
                          <div>
                            <div className="flex flex-row md:flex-col items-center gap-1">
                              <div className="flex items-center gap-1">
                                <img src={birdTraveloka} width={20} alt="" />
                                <span className="text-sm font-bold text-[#1ba0e2]">
                                  {hotel.rating}
                                </span>
                                <span className="text-sm text-gray-600">
                                  ({hotel.reviews})
                                </span>
                              </div>
                              <div className="w-auto md:w-full">
                                <p className="text-xs text-end font-semibold text-gray-600">
                                  {hotel.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="text-sm rounded-md px-2 font-semibold bg-[#ecf8ff] text-[#0264c8]">
                            {hotel.category}
                          </div>
                          <span className="text-yellow-500 text-lg">★★★★★</span>
                        </div>
                        <div className="font-semibold flex items-center gap-1">
                          <FaLocationDot color="gray" size={14} />
                          <p className="text-sm text-gray-600">
                            {hotel.location}
                          </p>
                        </div>
                        <ul className="flex flex-wrap gap-2 mt-2 text-xs text-gray-700">
                          {hotel.facilities.map((facility, index) => (
                            <li
                              className="bg-gray-200 px-2 py-1 rounded-lg"
                              key={index}
                            >
                              {facility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 md:col-span-2 flex flex-col justify-end text-right p-4">
                      <div className="text-green-600 font-semibold text-xs">
                        Best Value
                      </div>
                      <div className="flex items-center gap-2 justify-end">
                        <span className="font-bold text-xs text-green-700">
                          {hotel.discount}
                        </span>
                        <span className="text-gray-400 font-semibold line-through text-sm">
                          {formatPrice(hotel.originalPrice)}
                        </span>
                      </div>
                      <div className="text-[#ff5e1f] font-bold text-xl">
                        {formatPrice(hotel.discountedPrice)}
                      </div>
                      <div className="text-xs text-gray-600 font-semibold">
                        Diluar Pajak dan Biaya
                      </div>
                      <div>
                        <button
                          onClick={() => handlePilihKamar(hotel.id)}
                          className="bg-[#ff5e1f] text-white px-2 font-semibold py-1 rounded-lg cursor-pointer mt-4 w-auto "
                        >
                          Pilih Kamar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-52">
            <div className="flex flex-col items-center text-black">
              <h2 className="text-lg font-semibold">Data Kosong</h2>
              <p className="text-sm mt-2">Coba cari dengan kata kunci lain.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HotelPages;
