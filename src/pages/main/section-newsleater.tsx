import aplikasi from "../../assets/image/content/newsleatter/aplikasi.png";
import barcode from "../../assets/image/content/newsleatter/barcode.png";
import bgNewsleatter from "../../assets/image/content/newsleatter/bg-newsleatter.jpg";
import googleplay from "../../assets/image/content/newsleatter/googleplay.svg";

const SectionNewsleater = () => {
  return (
    <section
      className="bg-cover bg-center hidden md:block py-10 px-4 relative"
      style={{ backgroundImage: `url(${bgNewsleatter})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-white ">
        {/* Informasi dan Form */}
        <div className="w-[45%] ">
          <h2 className="text-3xl  font-bold mb-4 text-left">
            Dapatkan info terbaru seputar tips perjalanan, rekomendasi, serta
            promo.
          </h2>
          <div className="flex   gap-3">
            <input
              type="email"
              placeholder="Alamat emailmu"
              className="px-4  bg-white rounded-lg text-black  w-[50%]"
            ></input>
            <button className="bg-[#ff5e1f] px-4 py-[5px] rounded-lg text-white font-bold">
              Berlangganan Newsletter
            </button>
          </div>
          <p className="mt-5 font-bold text-xl text-left">
            Semua pesanan dalam genggaman, selalu siap jalan-jalan. <br /> Pakai
            Traveloka App.
          </p>
        </div>

        {/* QR Code & Store Buttons */}
        <div className="flex w-[45%] items-center    gap-4 mt-6">
          <img src={barcode} alt="QR Code" className="w-18" />
          <div className="flex gap-2">
            <img src={googleplay} alt="Google Play" className="h-12" />
          </div>
        </div>

        {/* Gambar Aplikasi di Bawah */}
        <div className="absolute left-30 md:bottom-0 w-64">
          <img src={aplikasi} alt="Traveloka App" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default SectionNewsleater;
