import { useEffect, useState } from "react";

import Navbar from "../../components";
import SectionCountry from "./section-country";
import SectionCoupon from "./section-coupon";
import SectionMain from "./section-main";
import SectionPlan from "./section-plan";
import SectionPromo from "./section-promo";
import SectionTrending from "./section-trending";

const MainPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <SectionMain />
      <SectionCoupon />
      <SectionPlan />
      <SectionPromo />
      <SectionCountry />
      <SectionTrending/>
    </>
  );
};

export default MainPage;
