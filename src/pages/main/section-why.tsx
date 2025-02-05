import save from "../../assets/icon-aman.png";
import troli from "../../assets/icon-koper.png";
import pesan from "../../assets/icon-pemesanan.png";

const SectionWhy = () => {
  return (
    <section className="bg-white pt-6 pb-6 md:pb-14  px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
          Kenapa pesan di Traveloka?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-md p-4 rounded-lg flex flex-col md:flex-row items-center md:items-center gap-3 text-center md:text-left">
            <img
              src={troli}
              alt="icon-koper"
              className="w-12 h-12 md:w-14 md:h-14"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                Semua keperluanmu di satu tempat
              </h3>
              <p className="text-gray-600 text-sm">
                Dari tiket pesawat, penginapan, sampai aktivitas, Traveloka
                punya <strong>produk lengkap</strong> dan{" "}
                <strong>Panduan Wisata</strong> yang pas.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg flex flex-col md:flex-row items-center  gap-3 text-center md:text-left">
            <img
              src={pesan}
              alt="icon-pemesanan"
              className="w-12 h-12 md:w-14 md:h-14"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                Opsi pemesanan fleksibel
              </h3>
              <p className="text-gray-600 text-sm">
                Perlu Jaga-Jaga buat yang tak terduga? Tenang, ada{" "}
                <strong>Easy Reschedule & Refund.</strong>
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg flex flex-col md:flex-row items-center  gap-3 text-center md:text-left">
            <img
              src={save}
              alt="icon-aman"
              className="w-12 h-12 md:w-14 md:h-14"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                Pembayaran aman dan nyaman
              </h3>
              <p className="text-gray-600 text-sm">
                Nikmati transaksi dengan keamanan berlapis, serta beragam opsi
                pembayaran global & nasional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhy;
