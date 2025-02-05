import { useState } from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBus, FaHotel, FaRegCalendarAlt } from "react-icons/fa";
import { FaBuildingUser, FaTrainSubway } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { MdAttractions, MdOutlineCarRental } from "react-icons/md";
import { TbBuildingAirport } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import bgTraveloka from "../../assets/bg-traveloka.jpg";

const SectionMain = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("Depok");
  const isMobile = window.innerWidth < 768;

  const handleSearch = () => {
    navigate(`/hotel?destination=${search}`);
  };
  return (
    <div className="relative py-10 md:py-0 md:min-h-[80vh] px-4 md:px-0">
      <div
        className="hidden md:block absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgTraveloka})` }}
      />

      <div className="container max-w-7xl mx-auto flex flex-col items-center pt-20 md:pt-40 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
          Wujudkan Perjalananmu dengan Caramu
        </h1>

        <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center gap-2 md:gap-3 pb-4 border-b mb-5 border-b-white">
          <div className="bg-white text-black font-bold flex flex-col justify-center items-center px-2 py-3 md:px-4 md:py-4 cursor-pointer rounded-xl md:rounded-3xl transition text-xs md:text-base">
            <FaHotel color="#235d9f" size={20} />
            Hotel
          </div>

          <div className="bg-transparent text-[#cdd0d1] hover:text-white font-bold flex flex-col gap-2 justify-center items-center px-2 py-3 md:px-4 md:py-4 rounded-xl md:rounded-3xl transition hover:border hover:border-white text-xs md:text-base cursor-pointer">
            <BiSolidPlaneAlt size={20} />
            Tiket Pesawat
          </div>

          <div className="bg-transparent text-[#cdd0d1] hover:text-white font-bold flex flex-col gap-2 justify-center items-center px-2 py-3 md:px-4 md:py-4 rounded-xl md:rounded-3xl transition hover:border hover:border-white text-xs md:text-base cursor-pointer">
            <FaTrainSubway size={20} />
            Tiket Kereta Api
          </div>

          {!isMobile && (
            <>
              <div className="bg-transparent text-[#cdd0d1] hover:text-white font-bold flex flex-col gap-2 justify-center items-center px-3 py-4 rounded-3xl  transition hover:border hover:border-white text-sm md:text-base md:px-6 cursor-pointer">
                <FaBus size={24} />
                Tiket Bus & Travel
              </div>
              <div className="bg-transparent text-[#cdd0d1] hover:text-white font-bold flex flex-col gap-2 justify-center items-center px-3 py-4 rounded-3xl  transition hover:border hover:border-white text-sm md:text-base md:px-6 cursor-pointer">
                <TbBuildingAirport size={28} />
                Antar Jemput <br /> Bandara
              </div>
              <div className="bg-transparent text-[#cdd0d1] hover:text-white font-bold flex flex-col gap-2 justify-center items-center px-3 py-4 rounded-3xl  transition hover:border hover:border-white text-sm md:text-base md:px-6 cursor-pointer">
                <MdOutlineCarRental size={28} />
                Tiket Bus & Travel
              </div>
              <div className="bg-transparent text-[#cdd0d1] hover:text-white font-bold flex flex-col gap-2 justify-center items-center px-3 py-4 rounded-3xl  transition hover:border hover:border-white text-sm md:text-base md:px-6 cursor-pointer">
                <MdAttractions size={28} />
                Atraksi dan <br /> Aktivitas
              </div>
              <div className="bg-transparent text-[#cdd0d1] hover:text-white font-bold flex flex-col gap-2 justify-center items-center px-3 py-4 rounded-3xl  transition hover:border hover:border-white text-sm md:text-base md:px-6 cursor-pointer">
                <BsFillGrid3X3GapFill size={24} />
                Lainnya
              </div>
            </>
          )}
        </div>

        <div className="w-full md:w-7xl">
          <div className="bg-white p-2 md:p-0 md:pl-2 min-h-14 rounded-2xl md:rounded-3xl shadow-md flex flex-col md:flex-row gap-2 md:gap-4 border-[2px] md:border-[3px] border-gray-500">
            <div className="flex items-center gap-2 flex-1 border-b md:border-b-0 md:border-r-2 border-gray-300">
              <GrLocation color="#0194f3" size={20} cursor="pointer" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Kota, tujuan, atau nama hotel"
                className="w-full outline-none text-gray-700 placeholder-gray-500 text-xs md:text-base"
              />
            </div>

            <div className="flex items-center gap-2 flex-1 border-b md:border-b-0 md:border-r-2 border-gray-300">
              <FaRegCalendarAlt color="#0194f3" size={20} cursor="pointer" />
              <input
                type="text"
                value="25 Jun 2023 - 30 Jun 2023"
                className="w-full outline-none text-gray-700 placeholder-gray-500 text-xs md:text-base"
              />
            </div>

            <div className="flex items-center gap-2 flex-1">
              <FaBuildingUser color="#0194f3" size={20} cursor="pointer" />
              <input
                type="text"
                value="1 Dewasa, 0 Anak, 1 Kamar"
                className="w-full outline-none text-gray-700 placeholder-gray-500 text-xs md:text-base"
              />
            </div>

            <div
              onClick={handleSearch}
              className="bg-orange-500 text-white p-2 md:px-4 md:py-2 cursor-pointer rounded-xl md:rounded-l-none md:rounded-r-3xl hover:bg-orange-600 flex items-center justify-center"
            >
              <IoSearchSharp size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMain;
