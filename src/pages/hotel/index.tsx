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

  const handlePilihKamar = (id:number) => {
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
    hotel.name.toLowerCase().includes(destination?.toLowerCase() ?? "")
  );

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
          isFixed ? "fixed top-0 left-0 w-full z-50 shadow-lg" : ""
        }`}
        id="search-section"
      >
        <div className="max-w-7xl mx-auto px-4 py-6 bg-white">
          <div className="bg-white pl-2 min-h-14 rounded-xl shadow-md flex  md:flex-row gap-4 border border-gray-500 ">
            <div className="flex items-center gap-2 flex-1 border-r-2 border-gray-300 ">
              <GrLocation color="#0194f3" size={24} cursor={"pointer"} />
              <input
                type="text"
                value={destination ?? "Kota, tujuan, atau nama hotel"}
                placeholder="Kota, tujuan, atau nama hotel"
                className="w-full outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            <div className="flex items-center gap-2 flex-1 border-r-2 border-gray-300">
              {/* <BsCalendar className="text-gray-500 shrink-0" /> */}
              <FaRegCalendarAlt color="#0194f3" size={24} cursor={"pointer"} />
              <input
                type="text"
                value={"05 Feb 2025 - 06 Feb 2025"}
                placeholder=""
                className="w-full outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            <div className="flex items-center gap-2 flex-1">
              <FaBuildingUser color="#0194f3" size={24} cursor={"pointer"} />
              <input
                type="text"
                value={"1 Dewasa, 0 Anak, 1 Kamar"}
                placeholder="1 Dewasa, 0 Anak, 1 Kamar"
                className="w-full outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            <div className="bg-[#0194f3] text-white px-4 py-2 cursor-pointer rounded-r-xl  font-bold  flex items-center">
              <IoSearchSharp size={26} />
              Cari Hotel
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-gray-100 py-6 px-4 ${isFixed ? "md:pt-40" : ""}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
          <div className="col-span-3    p-4">
            <div className="bg-[#ecf8ff] p-6 rounded-lg  mb-4 w-full flex flex-col items-center justify-center ">
              <FaMapLocationDot color="#3180d5" size={34} />
              <div className="bg-[#3180d5] px-2 py-1 rounded-2xl font-bold mt-2">
                <p>Eksplor Di Peta</p>
              </div>
            </div>
          </div>

          <div className="col-span-9">
            <div className="py-4 w-full  mx-auto  rounded-lg ">
              <div className="flex  justify-between w-full  items-center">
                <div className="text-black">
                  <h1 className=" font-bold">{destination}</h1>
                  <p className="text-sm text-gray-500">3 Properti Ditemukan</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center gap-2 text-black">
                    <p className="text-xs font-semibold">
                      Urutkan Berdasarkan :
                    </p>
                    <button
                      className="flex items-center gap-2 px-3 py-2 text-[#0194f3] font-semibold rounded-2xl cursor-pointer text-sm bg-white"
                      onClick={handleDropdownToggle}
                    >
                      {selectedSort} <BiChevronDown size={16} />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute text-sm font-semibold top-8 right-0  mt-2 w-64 bg-white border-gray-300 rounded shadow-lg">
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

                  <div className="relative flex items-center gap-2 text-black">
                    <p className="text-xs font-semibold">Tampilan Harga : </p>
                    <button
                      className="flex items-center gap-2 px-3 py-2 text-[#0194f3] cursor-pointer font-semibold rounded-2xl text-sm bg-white"
                      onClick={handlePriceDropdownToggle}
                    >
                      {selectedPrice} <BiChevronDown size={16} />
                    </button>
                    {isPriceDropdownOpen && (
                      <div className="absolute mt-2 text-sm font-semibold top-8 right-0 w-48 bg-white border-gray-300 rounded shadow-lg">
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

                  <div className="relative flex items-center gap-2 text-black">
                    <p className="text-xs font-semibold">Tampilan : </p>
                    <button className="flex items-center gap-2 px-3 py-2 text-[#0194f3] font-semibold rounded-2xl text-sm bg-white">
                      <CgMenuGridO size={18} color="gray" cursor={"pointer"} />

                      <BsTextParagraph size={18} cursor={"pointer"} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {sortedHotels?.map((hotel) => (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden  grid grid-cols-10 gap-4">
                  <div className="col-span-3">
                    <img
                      src="https://media-hosting.imagekit.io//692087d0c0164331/20053243-cab50857832026c679f9ad91ce9e669d.jpeg?Expires=1833334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=p3TFjIuGDCJHmNYBeBCpiDnzdYOtnT5DZvKO1dLvtDv2ZSRrPB2awNXGMyGlegQlIW1CActq0fKhEkcCKeE22qJhNxl79G5Cszixj6cjjBd267YwRlJansgtEsIZN2348Gv1Au3M1PqNmm7VPxxbhcK1d~G2phxIVXA2ffRc4k7Gw~WhZlqX6OYHTrvqQGg0ELzuAAoRj9QmkcUuZziWuJBUS-W8LwhOJe4FjRTqX6YVd~WOAUGXD4jjgxssW97onSBN2BFgx5uArTzOEZgq8-ZkOIEJqV6he~coJRv~JlJanTExY7YzlENYRV6vZ6UeWddzWmTvFknY-yjBRL~F6w__"
                      alt="Hotel Image"
                      className="w-full h-48 object-cover "
                    />
                    <div className="grid grid-cols-3 gap-[2px]  mt-[2px]">
                      <img
                        src="https://media-hosting.imagekit.io//57e46eb9bd0a4d00/1525328182573-3236x2160-FIT_AND_TRIM-55c23eedb2d7234a9d57829a4d89c211.jpeg?Expires=1833334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cjsH34kD6WTkGCMDxWT7ajUmZuALdW3GH5X2HxRzejBny9wUO-55u4QmncWLdQs4xztdUgUTp2taN6sAWYu3sAktLxVdIKPGJf3zacGoj4bgEOkt7FFSlnN56-KYfQsJBwZkI18jNYMcAttcMhT~-R~txmODn9zELOehTp4LgVzTW3tNey0WDuC~1u7s8tinZR5bigxJMPOjBMaBXpze97GfT1lQVCUFeDICziNdWv0GJg7GgFeS8UaPkpIWhzUjeEjNmLR~Uae6SRbfhxEKMmqV8vMTE4qPFHQKbtw8pzWBCKhVWPBWNxwL2L0nYhRQ-1fYetrSt~wu2Pk7GcBF8Q__"
                        alt="Room Image 1"
                        className="w-full h-20 object-cover "
                      />
                      <img
                        src="https://media-hosting.imagekit.io//0aba5e78f92b489d/10004764-44e133170f803bd21a97c00031b7f341.jpeg?Expires=1833334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gwn9jIuiZMUwpAAGG1RHlO4-rfkxeapGUoz-KtIABfLw~g~ECPhjnvnWrsDBR1GkYQk00yZz9lp1MXXEcaHqM5TGrDtwSI6sasrjrXc2KPzyJahZozSXu3Qf2SKMLXZ0WOtTRcSQxwdnOkt~bdflHd5yncgHc9m5szYjghZTKWVcGuptRFMYY~pYJSPBzzIb4EAaEAZoDlclRy-ofpuraWSnO0CRelhiiJ6YvH8jmQ7Q5Rwmr7ZyZ~HzSFloGorZS8bxuTHRtM9bVwGIiMMhX8jD60o9UguedwLDE4AoEplvkB-mv-DeLXDkuFccyKeJjtOQH2sO2Hi2V0Fyyyjuxw__"
                        alt="Room Image 2"
                        className="w-full h-20 object-cover "
                      />
                      <img
                        src="https://media-hosting.imagekit.io//bb67d1aef0ba4284/10000287-2420x1615-FIT_AND_TRIM-16665eb87f763449226589a0cf9f0753.jpeg?Expires=1833334602&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TqHXVNag4dyN-gsP7CS-UKlcNg0KxBqRBa96Bnvh0mpjcPemLwdxXHsDovS0A--8hxH0UqLH-mTZjmj27S-oMzTwEYfD4SuCEp-uKpUyKj~XRGQGncoIl~1A3kYsCqY8uFPEIW5P5ke0BIfhczgL-7yKQdkBqvr1VOxzxRtloNGY-tv508xjzBs2KSeERC-KJ9t5Q08qmSUoSAjJV67fuONNzFpYlPkAudvzPrMRcerHaN71BX~LSbUx4oaN~XrJd~Kd-9GBjOUH1E6JxktxImfh-m4-QUbg0HmsmstIZIO7jRT3xEXZAU11gC2k-RdigG1CjXAxOBwbnqs430jUaA__"
                        alt="Room Image 3"
                        className="w-full h-20 object-cover "
                      />
                    </div>
                  </div>

                  <div className="col-span-5 flex flex-col justify-between border-r-2 border-gray-200 px-3 py-2 ">
                    <div>
                      <div className="w-full flex justify-between items-start">
                        <h3 className="text-lg font-bold text-black">
                          {hotel.name}
                        </h3>
                        <div>
                          <div className="flex items-center gap-1">
                            <img src={birdTraveloka} width={20} alt="" />
                            <span className="text-sm font-bold text-[#1ba0e2]">
                              {hotel.rating}
                            </span>
                            <span className="text-sm text-gray-600">
                              ({hotel.reviews})
                            </span>
                          </div>
                          <p className="text-xs text-end font-semibold text-gray-600">
                            {hotel.description}
                          </p>
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
                  </div>

                  <div className="col-span-2 flex flex-col   justify-end text-right p-4">
                    <div className="flex flex-col gap-1">
                      <div className="text-green-600 font-semibold text-xs">
                        Best Value
                      </div>
                      <div className="flex items-center gap-2 justify-end">
                        <div className="font-bold text-xs text-green-700 ">
                          {hotel.discount}
                        </div>
                        <div className="text-gray-400 font-semibold line-through text-sm">
                          {hotel.originalPrice}
                        </div>
                      </div>
                      <div className="text-[#ff5e1f] font-bold text-xl">
                        {hotel.discountedPrice}
                      </div>
                      <div className="text-xs text-gray-600 font-semibold">
                        Diluar Pajak dan Biaya
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-end">
                      <button
                        onClick={() => handlePilihKamar(hotel.id)}
                        className="bg-[#ff5e1f] text-white px-2 font-semibold py-1 rounded-lg cursor-pointer w-full md:w-auto"
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
      </div>
    </>
  );
};

export default HotelPages;
