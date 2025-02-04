import { HiBuildingOffice2 } from "react-icons/hi2";
import hongkong from "../../assets/image/content/country/hongkong.jpg";
import jepang from "../../assets/image/content/country/jepang.jpg";
import korsel from "../../assets/image/content/country/korsel.jpg";
import malaysia from "../../assets/image/content/country/malaysia.png";
import singapura from "../../assets/image/content/country/singapura.jpg";
import thailand from "../../assets/image/content/country/thailand.png";

const countries = [
  { name: "Singapura", image: singapura, accommodations: 644 },
  { name: "Malaysia", image: malaysia, accommodations: 8371 },
  { name: "Thailand", image: thailand, accommodations: 27449 },
  { name: "Korea Selatan", image: korsel, accommodations: 15929 },
  { name: "Jepang", image: jepang, accommodations: 28141 },
  { name: "Hong Kong", image: hongkong, accommodations: 960 },
];

const SectionCountry = () => {
  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <HiBuildingOffice2 color="#375a8e" size={24} />
          Temukan yang kamu suka di Asia hingga dunia
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {countries.map((country, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0   flex flex-col justify-start p-6">
                <h3 className="text-white text-xl font-bold">{country.name}</h3>
                <p className="text-white text-sm font-semibold">
                  {country.accommodations} accommodations
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCountry;
