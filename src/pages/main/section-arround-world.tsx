import { FcBinoculars } from "react-icons/fc";
import bali from "../../assets/image/content/state/bali.jpg";
import bangkok from "../../assets/image/content/state/bangkok.jpg";
import instanbul from "../../assets/image/content/state/instanbul.jpg";
import liverpool from "../../assets/image/content/state/liverpool.jpg";
import seoul from "../../assets/image/content/state/seoul.jpg";

const destinations = [
  { id: 1, name: "Bali", country: "Indonesia", image: bali },
  { id: 2, name: "Bangkok", country: "Thailand", image: bangkok },
  { id: 3, name: "Seoul", country: "Korea Selatan", image: seoul },
  { id: 4, name: "Istanbul", country: "Turki", image: instanbul },
  { id: 5, name: "Liverpool", country: "United Kingdom", image: liverpool },
];

const SectionAroundWorld = () => {
  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FcBinoculars color="#375a8e" size={24} />
          Tamasya keliling dunia, cek panduannya!
        </h2>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 md:space-x-0 md:grid md:grid-cols-5 md:gap-4">
            {destinations.map((place) => (
              <div
                key={place.id}
                className="relative min-w-[85%] md:w-full h-[30vh] md:h-full sm:min-w-0 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-[30vh] md:w-full  md:h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">{place.name}</h3>
                  <p className="text-gray-200 text-sm">{place.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAroundWorld;
