import React from "react";
import { motion } from "framer-motion";

const CONFIG = {
  artwork: "/hero.png",
  teaser: "/teaser.mp4",
};

const Hero2 = () => {
  return (
    <section
      id="Hero"
      className="relative min-h-screen bg-[#2d1b55]/10 flex items-center overflow-hidden"
    >
      <div className="container px-4 relative z-10 flex flex-col md:flex-row mx-auto items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mb-8 md:mb-0"
        >
          <div className="w-full md:w-2/3 space-y-6 text-left">
            <h3 className="text-4xl font-bold text-[#00f2ff]">
              LAUNCHING SOON
            </h3>
            <div className="text-6xl text-[#00f2ff]">01.20.25</div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experience the next generation of Discord bot technology. Powered
              by advanced AI algorithms and featuring cutting-edge server
              management capabilities.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00f2ff] rounded-full"></div>
                Enhanced Security Protocols
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00f2ff] rounded-full"></div>
                Intuitive Command System
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00f2ff] rounded-full"></div>
                Real-time Analytics
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full md:w-[900px] h-[500px] md:h-[900px] md:mr-[-100px]"
        >
          <img
            src={CONFIG.artwork}
            alt="Oculus Character"
            className="w-full h-full object-contain relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero2;
