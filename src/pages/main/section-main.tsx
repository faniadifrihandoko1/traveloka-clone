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

  const handleSearch = () => {
    navigate(`/hotel?destination=${search}`);
  };
  return (
    <div className="relative min-h-[80vh]   ">
      <div
        className="hidden md:block absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgTraveloka})` }}
      />

      <div className="container max-w-7xl mx-auto flex flex-col items-center  pt-40 text-center">
        <h1 className="text-3xl  font-bold text-white mb-6">
          Wujudkan Perjalananmu dengan Caramu
        </h1>

        <div className="flex flex-wrap justify-center gap-3 pb-4 border-b mb-5 border-b-white ">
          <div className="bg-white text-black font-bold flex flex-col justify-center items-center px-4 py-4 cursor-pointer rounded-3xl  transition text-sm md:text-base md:px-6">
            <FaHotel color="#235d9f" size={24} />
            Hotel
          </div>

          <div className="bg-transparent text-[#cdd0d1] hover:text-white font-bold flex flex-col gap-2 justify-center items-center px-3 py-4 rounded-3xl  transition hover:border hover:border-white text-sm md:text-base md:px-6 cursor-pointer">
            <BiSolidPlaneAlt size={28} />
            Tiket Pesawat
          </div>
          <div className="bg-transparent text-[#cdd0d1] hover:text-white font-bold flex flex-col gap-2 justify-center items-center px-3 py-4 rounded-3xl  transition hover:border hover:border-white text-sm md:text-base md:px-6 cursor-pointer">
            <FaTrainSubway size={24} />
            Tiket Kereta Api
          </div>
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
        </div>
        <div className="flex w-full px-4  items-center gap-3 mb-4">
          <div className="bg-[#0194f3] flex items-center gap-1 font-bold rounded-2xl px-3 py-1 cursor-pointer">
            <FaHotel size={16} />
            Hotel
          </div>
          <div className="cursor-pointer bg-opacity-75 backdrop-blur-md backdrop-opacity-75 flex items-center gap-1 font-bold rounded-2xl px-3 py-1">
            <FaHotel size={16} />
            Villa
          </div>
          <div className="cursor-pointer bg-opacity-75 backdrop-blur-md backdrop-opacity-75 flex items-center gap-1 font-bold rounded-2xl px-3 py-1">
            <FaHotel size={16} />
            Appartemen
          </div>
        </div>

        <div className="px-4 md:w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-2">
            <div className="justify-self-start  ">Kota Tujuan Nama Hotel</div>
            <div className="justify-self-start  -ml-6">
              Tanggal Check-in & Check-out
            </div>
            <div className="justify-self-start  -ml-12">Tamu dan Kamar</div>
          </div>
          <div className="bg-white pl-2 min-h-14 rounded-3xl shadow-md flex  md:flex-row gap-4 border-[3px] border-gray-500 ">
            <div className="flex items-center gap-2 flex-1 border-r-2 border-gray-300 ">
              <GrLocation color="#0194f3" size={24} cursor={"pointer"} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Kota, tujuan, atau nama hotel"
                className="w-full outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            <div className="flex items-center gap-2 flex-1 border-r-2 border-gray-300">
              {/* <BsCalendar className="text-gray-500 shrink-0" /> */}
              <FaRegCalendarAlt color="#0194f3" size={24} cursor={"pointer"} />
              <input
                type="text"
                value={"25 Jun 2023 - 30 Jun 2023"}
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

            <div
              onClick={handleSearch}
              className="bg-orange-500 text-white px-4 py-2 cursor-pointer rounded-r-3xl hover:bg-orange-600  flex items-center"
            >
              <IoSearchSharp size={26} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMain;
