import fun from "../../assets/image/content/plan/fun.png";
import kapal from "../../assets/image/content/plan/kapal.jpeg";
import paylate from "../../assets/image/content/plan/paylater.jpg";
import travel from "../../assets/image/content/plan/travel.png";

const SectionPlan = () => {
  const promos = [
    {
      title: "Kapal Pesiar",
      image: kapal,
    },
    {
      title: "Fun Activities",
      image: fun,
    },
    {
      title: "Travel Insurance",
      image: travel,
    },
    {
      title: "TPayLater",
      image: paylate,
    },
  ];

  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-2xl font-bold text-gray-800 mb-5">
          Maksimalkan rencanamu sesukamu
        </h2>
        <div className="overflow-x-auto scrollbar-hide py-2">
          <div className="flex space-x-4 md:space-x-0 md:grid md:grid-cols-4 md:gap-4">
            {promos.map((promo, index) => (
              <div
                key={index}
                className="min-w-[85%] sm:min-w-0 bg-white rounded-lg shadow-md overflow-hidden md:w-full"
              >
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-32 md:h-44 object-cover"
                />
                <div className="p-2 md:p-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {promo.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPlan;
