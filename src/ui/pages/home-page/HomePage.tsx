import { PATHS } from "@domain";
import { FC } from "react";
import { RoutingButton } from "@ui";
import { HeroSection } from "./components/hero-section";
import { MeSection } from "./components/me-section";

export const HomePage: FC = () => {
  const scrollByVH = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:px-[115px] lg:px-[125px] overflow-x-hidden ">
      {/* Hero Section with Scroll down starts*/}
      <HeroSection onClick={scrollByVH} />
      <MeSection />
      <RoutingButton to={PATHS.PORTFOLIO} text={"Portfolio"} left={false} />
    </div>
  );
};

export default HomePage;
