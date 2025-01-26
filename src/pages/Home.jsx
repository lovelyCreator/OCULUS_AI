import StackedCards from "../components/StackedCards/StackedCards";
import StackedCards2 from "../components/StackedCards/StackedCards2";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";
import Teaser from "../components/Teaser";
import Pricing from "../components/Pricing";
import Hero2 from "../components/Hero/Hero2";
import Hero3 from "../components/Hero/Hero3";
import Navbar from "../components/Navbar";
import Vision from "../components/Vision";
import Aperture from "../components/Aperture";
import GoldEye from "../components/GoldEye";
import MrOculus from "../components/MrOculus";
import Tires from "../components/Tiers";

const Home = () => {
  return (
    <div className=" min-h-screen bg-black text-white font-[Rajdhani]">
      <Navbar />
      <Hero />

      {/* <Vision /> */}
      <Aperture />
      <GoldEye />
      <MrOculus />

      {/* <Hero2 />
      <Hero3 />
      <StackedCards />
      <StackedCards2 /> */}
      {/* <Features /> */}
      {/* <Pricing /> */}
      <Tires />
      {/* <Statistics />
      <Teaser /> */}
      <Footer />
    </div>
  );
};

export default Home;
