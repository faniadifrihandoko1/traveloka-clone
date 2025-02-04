import { useState } from "react";
import { BsFillGiftFill } from "react-icons/bs";
import { FaHotel, FaRegCopy } from "react-icons/fa";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const SectionCoupon = () => {
  const coupons = [
    {
      id: 1,
      title: "Diskon 50% Hotel",
      desc: "Berlaku untuk Pengguna Baru.",
      code: "HOTEL50",
      expiry: "30 Jun 2024",
    },
    {
      id: 2,
      title: "Tiket Pesawat 30%",
      desc: "Berlaku untuk Pengguna Baru.",
      code: "FLY30",
      expiry: "15 Jul 2024",
    },
    {
      id: 3,
      title: "Cashback 20%",
      desc: "Berlaku untuk Pengguna Baru.",
      code: "CASH20",
      expiry: "31 Agu 2024",
    },
    {
      id: 4,
      title: "Paket Liburan 40%",
      desc: "Berlaku untuk Pengguna Baru.",
      code: "TRIP40",
      expiry: "10 Sep 2024",
    },
    {
      id: 5,
      title: "Bus & Travel 25%",
      desc: "Berlaku untuk Pengguna lama.",
      code: "BUS25",
      expiry: "20 Okt 2024",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCoupons = coupons.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < coupons.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-[#c4e8fa] py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* header */}
        <div className="w-full flex items-center justify-between px-4">
          <h2 className="text-2xl    font-bold text-gray-800 mb-8 w-full   flex items-center gap-3">
            <BsFillGiftFill size={24} /> Daftar untuk Menggunakan Kupon
          </h2>

          <MdOutlineNavigateNext size={28} color="black" cursor={"pointer"} />
        </div>

        <div className="relative  w-full">
          <div className="flex items-center  overflow-hidden">
            {/* Tombol Previous */}
            {startIndex > 0 && (
              <button
                className="bg-white rounded-full drop-shadow-2xl shadow-2xl p-2 absolute left-0 z-10 cursor-pointer"
                onClick={handlePrev}
              >
                <MdOutlineNavigateBefore color="#0194f3" size={24} />
              </button>
            )}

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (100 / 3)}%)`,
              }}
            >
              {visibleCoupons.slice(0, 3).map((coupon) => (
                <div
                  key={coupon.id}
                  className="coupon-card bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow relative 
            overflow-hidden before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-6 
            before:rounded-full before:bg-[#c4e8fa] after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 
            after:w-6 after:h-6 after:rounded-full after:bg-[#c4e8fa]"
                >
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                  <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                      <div
                        // url random foto
                        className="px-4 py-1 rounded-full bg-[#194590] flex items-center justify-center"
                      >
                        <FaHotel size={16} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {coupon.title}
                        </h3>
                        <p className="text-sm text-gray-600">{coupon.desc}</p>
                      </div>
                    </div>

                    {/* Kode Kupon */}
                    <div className="flex items-center justify-between   rounded-lg mt-3">
                      <span className="text-sm flex items-center gap-2 font-medium text-gray-600 bg-gray-100 p-2 w-[75%] rounded-lg">
                        <FaRegCopy />
                        {coupon.code}
                      </span>
                      <button className="bg-[#d1f0ff] text-[#194590] p-1 cursor-pointer rounded-lg w-[20%] hover:bg-[#194590] hover:text-[#d1f0ff] transition">
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {startIndex + 4 < coupons.length && (
              <button
                className="bg-white rounded-full drop-shadow-2xl shadow-2xl p-2 absolute right-0 z-10 cursor-pointer"
                onClick={handleNext}
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

export default SectionCoupon;
