import SectionAroundWorld from "./section-arround-world";
import SectionCountry from "./section-country";
import SectionCoupon from "./section-coupon";
import SectionMain from "./section-main";
import SectionNews from "./section-news";
import SectionNewsleater from "./section-newsleater";
import SectionPlan from "./section-plan";
import SectionPromo from "./section-promo";
import SectionTrending from "./section-trending";
import SectionWhy from "./section-why";

const MainPage = () => {
  return (
    <>
      {/* <Navbar isScrolled={isScrolled} /> */}
      <SectionMain />
      <SectionCoupon />
      <SectionPlan />
      <SectionPromo />
      <SectionCountry />
      <SectionTrending />
      <SectionAroundWorld />
      <SectionNews />
      <SectionWhy />
      <SectionNewsleater />
      {/* <Footer /> */}
    </>
  );
};

export default MainPage;
