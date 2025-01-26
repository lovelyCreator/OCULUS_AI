import { motion } from "framer-motion";
import heroImg from "../../images/ascii-eye.png";
import solanaIcon from "../../images/icon/logo-solana.svg";
import ethereumIcon from "../../images/icon/ethereum-logo.svg";
import raydiumIcon from "../../images/icon/raydium-logo.svg";
import uniswapIcon from "../../images/icon/uniswap-logo.svg";

// const CONFIG = {
//   artwork: "/hero.png",
//   teaser: "/teaser.mp4",
// };

const Links = {
  ethereumBot: "https://t.me/OculusEthereum_Bot?start=web",
  solonaBot: "https://t.me/OculusSolana_Bot?start=web",
};

const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative min-h-screen bg-[#2d1b55]/10 flex items-center overflow-hidden px-4 sm:px-0"
    >
      <motion.div
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:block absolute top-0 left-0 w-1/5"
      >
        <img
          src="/corner_hero.png"
          alt="Decorative background"
          className="object-contain"
        />
      </motion.div>

      <div className="container relative z-10 flex flex-col md:flex-row mx-auto items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-1/2 mb-8 md:mb-0 text-center md:text-left flex flex-col items-center"
        >
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-white text-center sm:mt-20 mt-15 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0"> 
            APE THE BEST OF BOTH WORLDS THROUGH AI WITH OCULUS            
          </h1>
          <p className="text-base text-center sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
            AUTONOMOUS RECONNAISSANCE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button class="relative group border border-gradient-to-b from-black to-white bg-transparent text-transparent bg-clip-text font-bold py-2 px-4 rounded-lg text-base tracking-wider transition duration-300 ease-in-out hover:shadow-lg hover:shadow-[#ffffff50]">
              <span class="bg-gradient-to-b from-black to-white bg-clip-text text-transparent"> 
                <a target="_blank" href={Links.ethereumBot}>
                  LAUNCH ETHEREUM BOT
                </a>
              </span>
            </button>
            {/* <button className="relative group border border-gradient-to-r from-black to-white text-gradient-to-r from-black to-white font-bold py-2 sm:py-2 px-4 sm:px-6 rounded-lg text-base sm:text-lg tracking-wider w-full sm:w-auto hover:shadow-lg hover:shadow-pink-600/50"> */}
            {/* <button class="relative group border border-black bg-white text-black font-bold py-2 px-4 rounded-lg text-base tracking-wider transition duration-300 ease-in-out transform hover:bg-black hover:text-white hover:shadow-lg"> */}
            
            <button class="relative group border border-gradient-to-b from-black to-white bg-transparent text-transparent bg-clip-text font-bold py-2 px-4 rounded-lg text-base tracking-wider transition duration-300 ease-in-out hover:shadow-lg hover:shadow-[#ffffff50]">
              <span class="bg-gradient-to-b from-black to-white bg-clip-text text-transparent"> 
              {/* <span className="relative z-10"> */}
                <a target="_blank" href={Links.solonaBot}>
                  LAUNCH SOLONA BOT
                </a>
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-center mt-24">
            <p>
              POWERING TOOLS AND INTERGRATIONS FROM COMPANIES ALL AROUND THE
              WORLD
            </p>
            {/* icons- etherium, solana, unicorn, raydium,  */}
            {/* <div className="flex items-center justify-center">
              <img src={ethereumIcon} alt="Ethereum Icon" className="w-48" />
              <img src={uniswapIcon} alt="Uniswap Icon" className="w-48" />
              <img src={solanaIcon} alt="Solana Icon" className="w-48" />
              <img src={raydiumIcon} alt="Raydium Icon" className="w-48" />
            </div> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-1/2 relative flex justify-center md:justify-end"
        >
          <img
            src={heroImg}
            alt="Oculus Character"
            className="lg:w-2/3 object-contain relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

<style jsx>{`
  .gradient-border {
    background: linear-gradient(to right, black, white);
    -webkit-background-clip: border-box;
    background-clip: border-box;
    border: 4px solid transparent; /* Adjust border width as needed */
  }
`}</style>
