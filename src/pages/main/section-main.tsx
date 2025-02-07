import { useEffect, useState } from "react";
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
import aii from "../../assets/image/content/trusted/aii.png";
import archi from "../../assets/image/content/trusted/archipelago.png";
import artotel from "../../assets/image/content/trusted/artotel.png";
import citytrans from "../../assets/image/content/trusted/cititrans.png";
import dprima from "../../assets/image/content/trusted/dprima.png";
import ihg from "../../assets/image/content/trusted/ihg.png";
import santika from "../../assets/image/content/trusted/santika.png";
import swiss from "../../assets/image/content/trusted/swiss.png";

const trusted = [
  { name: "Artotel", image: artotel },
  { name: "D'Prima", image: dprima },
  { name: "Santika", image: santika },
  { name: "Swiss", image: swiss },
  { name: "IHG", image: ihg },
  { name: "Citytrans", image: citytrans },
  { name: "Archipelago", image: archi },
  { name: "AIi", image: aii },
];

const SectionMain = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("Jakarta");
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = window.innerWidth < 768;

  const [visibleItems, setVisibleItems] = useState(trusted.slice(0, 4));
  const [fade, setFade] = useState(false);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        index = (index + 4) % trusted.length;
        setVisibleItems(trusted.slice(index, index + 4));
        setFade(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [trusted]);

  const handleSearch = () => {
    if (!search || isLoading) return; // Hindari pencarian kosong atau klik berulang

    setIsLoading(true); // Aktifkan loading
    const time = new Date().toISOString(); // Ambil waktu sekarang dalam format ISO

    setTimeout(() => {
      navigate(`/hotel?destination=${search}&time=${encodeURIComponent(time)}`);
      setIsLoading(false); // Matikan loading setelah navigasi
    }, 1500); // Delay 1.5 detik
  };
  return (
    <div className="relative py-10 md:py-0 md:min-h-[85vh] px-4 md:px-0">
      <div
        className="hidden md:block absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgTraveloka})` }}
      />

      <div className="container max-w-7xl mx-auto flex flex-col items-center pt-16 md:pt-40 text-center">
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

        <div className="flex w-full md:px-8 px-4  items-center gap-3 mb-4 ">
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

        <div className="w-full md:w-7xl md:px-8">
          <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-2 hidden">
            <div className="justify-self-start  ">Kota Tujuan Nama Hotel</div>
            <div className="justify-self-start  -ml-6">
              Tanggal Check-in & Check-out
            </div>
            <div className="justify-self-start  -ml-12">Tamu dan Kamar</div>
          </div>
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
              className={`bg-orange-500 text-white p-2 md:px-4 md:py-2 cursor-pointer rounded-xl md:rounded-l-none md:rounded-r-3xl hover:bg-orange-600 flex items-center justify-center ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
              ) : (
                <IoSearchSharp size={22} />
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-7xl md:px-8 h-8  mt-10 hidden md:block">
          <div className="flex items-center gap-2 justify-center">
            <h2 className="font-semibold text-white italic">Trusted By</h2>

            {visibleItems.map((item) => (
              <div
                key={item.name}
                className={`px-2 p-1 hover:bg-white text-white transition-all ${
                  fade ? "opacity-0 " : "opacity-100 "
                } duration-700`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  key={item.name}
                  className="h-7 filter brightness-0 invert saturate-0 hover:filter-none transition-all duration-300"
                  color="white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMain;
