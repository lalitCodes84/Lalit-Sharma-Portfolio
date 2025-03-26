import HeroRightSection from "../components/HeroRightSection";
import HeroLeftSection from "../components/HeroLeftSection";
// import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div id="home" className="flex justify-around pt-16">
      <HeroLeftSection />
      <HeroRightSection />
    </div>
  );
}

export default HeroSection;
