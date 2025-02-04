import travel from "../../assets/image/content/plan/travel.png";
import kapal from "../../assets/image/content/plan/kapal.jpeg";
import paylate from "../../assets/image/content/plan/paylater.jpg";
import fun from "../../assets/image/content/plan/fun.png";

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
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Maksimalkan rencanamu sesukamu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {promos.map((promo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {promo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPlan;
