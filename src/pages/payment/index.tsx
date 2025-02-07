import { FaCheck, FaUser, FaWifi } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { HiCreditCard, HiMiniBuildingOffice2 } from "react-icons/hi2";
import { ImSpoonKnife } from "react-icons/im";
import { IoBed } from "react-icons/io5";
import headerCard from "../../assets/header-card.svg";
import atm from "../../assets/image/content/payment/aatm-bersama.png";
import alfa from "../../assets/image/content/payment/alfa.png";
import alto from "../../assets/image/content/payment/alto.png";
import bca from "../../assets/image/content/payment/bca.png";
import bni from "../../assets/image/content/payment/bni.png";
import bri from "../../assets/image/content/payment/bri.png";
import dompet from "../../assets/image/content/payment/dompet.png";
import indomaret from "../../assets/image/content/payment/indomaret.png";
import jcb from "../../assets/image/content/payment/jcb.png";
import mandiri from "../../assets/image/content/payment/mandiri.png";
import mc from "../../assets/image/content/payment/mc.png";
import midi from "../../assets/image/content/payment/midi.png";
import prima from "../../assets/image/content/payment/prima.png";
import paylater from "../../assets/image/content/payment/tpaylate.png";
import visa from "../../assets/image/content/payment/visa.png";
import logo from "../../assets/logo-travloka-black.svg";
import { useEffect } from "react";

const PaymentPages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" bg-white px-4 md:pb-7">
        <div className="w-full mx-auto items-center max-w-6xl py-4">
          <img src={logo} alt="logo" className="h-9 mb-4 sm:mb-0" />
        </div>
      </div>
      <div className="mx-auto p-4  bg-white">
        <div className=" max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
            {/* Section Kiri */}
            <div className="md:col-span-7 space-y-6 h-auto min-h-full w-full order-2 md:order-1">
              <div className="bg-white w-full max-w-3xl shadow-lg rounded-lg">
                <div className="bg-[#0071ce] mb-4 flex items-center justify-center rounded-t-lg p-4">
                  <div className="text-white font-semibold">
                    Tenang, harganya tidak akan berubah. Yuk selesaikan
                    pembayaran dalam{" "}
                    <span className="text-green-500">00:12:30</span>
                  </div>
                </div>
                <div className="p-6">
                  <div>
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg md:text-xl font-bold mb-4 text-black">
                        Mau bayar pakai metode apa?
                      </h2>
                      <div className="text-gray-600 text-center text-xs  md:font-bold">
                        100% SECURITY
                        <br />
                        <span>GUARANTE</span>
                      </div>
                    </div>

                    <div className="mb-4 flex justify-between items-end border-b-[1px] pb-4 border-gray-300 ">
                      <label className="flex items-end space-x-3">
                        <input
                          type="radio"
                          name="payment-method"
                          className="w-5 h-5 mr-2 border-gray-300 border-[2px] rounded-full bg-white appearance-none checked:bg-blue-500 checked:border-transparent"
                        />
                        <div>
                          <div className="text-xs bg-[#d1f0ff] px-2 py-[1px] rounded-md  font-semibold text-[#0248a9]">
                            Cicilan hingga 12 x Rp 5.431.683
                          </div>
                          <div className="font-semibold text-black">
                            Cicilan Kartu Kredit
                          </div>
                        </div>
                      </label>
                      <div className="bg-[#0a416c] px-[5px] py-[3px] rounded-full flex items-center justify-center">
                        <HiCreditCard color="white" size={14} />
                      </div>
                    </div>

                    <div className="mb-4 flex justify-between items-center border-b-[1px] pb-4 border-gray-300">
                      <label className="flex items-end space-x-3">
                        <input
                          type="radio"
                          name="payment-method"
                          className="w-5 h-5 mr-2 border-gray-300 border-[2px] rounded-full bg-white appearance-none checked:bg-blue-500 checked:border-transparent"
                        />
                        <div className="font-semibold text-black">
                          Virtual Account
                        </div>
                      </label>
                      <div className="text-sm text-gray-500 flex items-center space-x-2">
                        <img src={bca} alt="bca" className="w-10 h-10" />
                        <img src={bni} alt="bni" className="w-10 h-10" />
                        <img
                          src={mandiri}
                          alt="mandiri"
                          className="w-12 h-10"
                        />
                        <img src={bri} alt="bri" className="w-14 h-10" />
                      </div>
                    </div>

                    <div className="mb-4 flex justify-between items-center border-b-[1px] pb-4 border-gray-300">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="payment-method"
                          defaultChecked
                          className="w-5 h-5 mr-2 border-gray-300 border-[2px] rounded-full bg-white appearance-none checked:bg-blue-500 checked:border-transparent"
                        />
                        <div className="font-semibold text-black">
                          Transfer Bank
                        </div>
                      </label>
                      <div className="text-sm text-gray-500 flex items-center space-x-2">
                        <img src={dompet} alt="bca" className="w-7 h-7" />
                        <img src={alto} alt="bca" className="w-10 h-10" />
                        <img src={prima} alt="bni" className="w-10 h-10" />
                        <img src={atm} alt="bca" className="w-10 h-10" />
                      </div>
                    </div>

                    <div className="mb-4 flex items-center justify-between border-b-[1px] pb-4 border-gray-300">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="payment-method"
                          className="w-5 h-5 mr-2 border-gray-300 border-[2px] rounded-full bg-white appearance-none checked:bg-blue-500 checked:border-transparent"
                        />
                        <div className="font-semibold text-black">
                          Kartu Kredit/Debit
                        </div>
                      </label>
                      <div className="flex items-center gap-1">
                        <img src={mc} alt="" className="w-9 h-9" />
                        <img src={visa} alt="" className="w-10 h-10" />
                        <img src={jcb} alt="" className="w-7 h-7" />
                      </div>
                    </div>

                    <div className="mb-4 flex justify-between items-center border-b-[1px] pb-4 border-gray-300">
                      <label className="flex items-start space-x-3">
                        <input
                          type="radio"
                          name="payment-method"
                          className="w-5 h-5 mr-2 border-gray-300 border-[2px] rounded-full bg-white appearance-none checked:bg-blue-500 checked:border-transparent"
                        />
                        <div className="-mt-1">
                          <div className="font-semibold text-black">
                            TPayLater
                          </div>
                          <div className="text-xs bg-[#f0f1f2] px-2 py-[1px] rounded-md md:max-w-full max-w-52 font-semibold text-[#4f5268]">
                            Ajukan via travelokaPay untuk diproses dalam 1 jam
                          </div>
                        </div>
                      </label>
                      <div>
                        <img src={paylater} alt="" className="w-7" />
                      </div>
                    </div>

                    <div className="mb-4 flex items-center justify-between border-b-[1px] pb-4 border-gray-300">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="payment-method"
                          className="w-5 h-5 mr-2 border-gray-300 border-[2px] rounded-full bg-white appearance-none checked:bg-blue-500 checked:border-transparent"
                        />
                        <div className="font-semibold text-black">
                          Minimarket
                        </div>
                      </label>
                      <div className="flex items-center gap-2">
                        <img src={midi} alt="" className="h-8 w-10" />
                        <img src={alfa} alt="" className="h-8 w-10" />
                        <img src={indomaret} alt="" className="h-8 w-10" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-black">Pakai Kupon</div>
                      <button className="text-blue-600 font-bold">Pakai</button>
                    </div>
                    <div className="text-xs font-semibold text-gray-500">
                      Masukkan kode kupon atau pilih kupon tersedia
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-lg font-semibold text-black">
                        Harga Total
                      </div>
                      <div className="text-lg font-semibold text-black">
                        Rp 59.525.200
                      </div>
                    </div>
                    <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition">
                      Bayar dengan Bank lainnya
                    </button>
                    <div className="text-sm text-center text-gray-500 mt-2">
                      By continuing to pay, you have agreed to travelokaPay’s{" "}
                      <span className="text-blue-600 font-medium">
                        Terms & Conditions
                      </span>{" "}
                      and Traveloka’s {""}
                      <span className="text-blue-600 font-medium">
                        Privacy Policy.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Section Kanan */}
            <div className="bg-white md:col-span-3 rounded-lg shadow-md space-y-2 w-full mx-auto md:self-start order-1 md:order-2">
              <div className="relative">
                <img
                  src={headerCard}
                  alt="header-card"
                  className="w-full rounded-t-lg "
                />
                <div className="absolute top-0 left-2 gap-6 flex items-center  p-1">
                  <HiMiniBuildingOffice2 color="white" size={30} />
                  <div>
                    <h2 className="font-bold text-black text-lg ">
                      Rincian Hotel
                    </h2>
                    <p className="text-xs font-bold text-gray-600">
                      No. Pesanan 092331222
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2  flex flex-col gap-2">
                <h2 className=" font-bold text-black">
                  The Gaia Hotel Bandung
                </h2>
                <div className="flex items-center justify-center gap-1 ">
                  {/* Check-In */}
                  <div className="border border-gray-300 rounded-lg p-3 w-40 text-center">
                    <p className="text-xs text-gray-600">Check-In</p>
                    <p className="text-xs font-bold text-gray-900">
                      Jum, 7 Feb 2025
                    </p>
                    <p className="text-xs text-gray-600">Dari 15:00</p>
                  </div>

                  {/* Durasi Menginap */}
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-700 font-medium">
                      23 malam
                    </span>
                    <div className="w-16 h-[1px] bg-gray-300 rounded-full mt-1"></div>
                  </div>

                  {/* Check-Out */}
                  <div className="border border-gray-300 rounded-lg p-3 w-40 text-center">
                    <p className="text-xs text-gray-600">Check-Out</p>
                    <p className="text-xs font-bold text-gray-900">
                      Min, 2 Mar 2025
                    </p>
                    <p className="text-xs text-gray-600">Sebelum 12:00</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2    px-4">
                <h3 className="font-bold text-black">
                  (1x) Deluxe King With Balcony
                </h3>
                <div className="flex items-center space-x-2">
                  {/* <Users className="w-4 h-4 text-gray-600" /> */}
                  <FaBuildingUser className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600 font-medium">
                    2 Tamu
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <IoBed className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600 font-medium">
                    1 King Bed
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <ImSpoonKnife className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600 font-medium">
                    Termasuk sarapan untuk 1 orang
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {/* <Wifi className="w-4 h-4 text-gray-600" /> */}
                  <FaWifi className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600 font-medium">
                    Wi-Fi Gratis
                  </span>
                </div>
              </div>

              <div className=" px-4">
                <h3 className="font-bold text-black">
                  Permintaan Khusus (jika ada)
                </h3>
                <p className="text-black">-</p>
              </div>

              <div className=" px-4">
                <h3 className="font-bold text-black">Nama Tamu</h3>
                <p className="text-gray-600 text-xs font-bold">
                  Fani Adi Frihandoko
                </p>
              </div>

              <div className="px-4">
                <div className="flex items-center gap-3 font-semibold text-gray-700">
                  <FaCheck color="#00875a" />
                  Pembatalan Gratis
                </div>
                <div className="flex items-center gap-3 font-semibold text-gray-700">
                  <FaCheck color="#00875a" />
                  Bisa Reschedule
                </div>
              </div>

              <div className="px-4">
                <div className="w-full h-[1px] bg-gray-300 rounded-full my-3"></div>
              </div>

              <div className="pb-4 px-4 ">
                <div className="flex gap-2 items-center">
                  <div className="px-2 py-2 bg-gray-200 rounded-full ">
                    <FaUser color="gray" size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-black font-semibold">
                      Fani Adi Frihandoko
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                      +6285155037656
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                      faniadifri1@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPages;
