import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Links = {
  ethereumBot: "https://docs.oculus.bot/ethereum",
  solonaBot: "https://docs.oculus.bot/solona",
};

const cards = [
  {
    id: 1,
    bot: "/oculus-basic.png",
    title: "BASIC BOT",
    description:
      "Entry-level trading automation with smart contract analysis and basic cross-chain monitoring capabilities",
    features: "FOUNDATIONAL RECONNAISSANCE",
    tagline: "START YOUR JOURNEY WITH BASIC",
    bgColor: "bg-[#110A2B]",
  },
  {
    id: 2,
    bot: "/oculus-pro.png",
    title: "PRO BOT",
    description:
      "Advanced trading tools with real-time market analysis and automated cross-chain execution",
    features: "ENHANCED RECONNAISSANCE",
    tagline: "ELEVATE WITH PRO",
    bgColor: "bg-[#110A2B]",
  },
  {
    id: 3,
    bot: "/oculus-gold.png",
    title: "GOLD BOT",
    description:
      "Premium suite with AI-powered insights and priority execution across multiple chains",
    features: "SUPREME RECONNAISSANCE",
    tagline: "DOMINATE WITH GOLD",
    bgColor: "bg-[#110A2B]",
  },
];

function StackedCards2() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const stackAreaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stackAreaRef.current) return;
      const distance = window.innerHeight * 0.5;
      const topVal = stackAreaRef.current.getBoundingClientRect().top;
      const index = Math.floor(-1 * (topVal / distance + 1));
      setActiveCardIndex(Math.min(Math.max(index, 0), cards.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeCard = cards[activeCardIndex];

  return (
    <section
      id="Bots"
      ref={stackAreaRef}
      className="w-full h-[300vh] relative bg-[#2d1b55]/10 flex"
    >
      <div className="h-screen sticky top-0 left-0 basis-1/2 flex items-center justify-center gap-4 flex-col">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mb-8 md:mb-0"
        >
          <h1 className=" text-4xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-white">
            {activeCard.title}
          </h1>
          <p className=" text-xl md:text-2xl text-[#00f2ff] mb-8 tracking-wide">
            {activeCard.features}
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            {activeCard.tagline} WITH{" "}
            <span className="text-[#00f2ff]">$OCU</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="relative group bg-[#2d1b55]/80 text-white font-bold py-3 px-8 rounded-lg text-lg tracking-wider backdrop-blur-sm w-full sm:w-auto">
              <span className="relative z-10">
                <a target="_blank" href={Links.ethereumBot}>
                  ETHEREUM BOT
                </a>
              </span>
              <div className="absolute inset-0 bg-[#00f2ff] opacity-0 group-hover:opacity-20 blur-lg rounded-lg transition-all duration-300"></div>
            </button>
            <button className="relative group bg-[#00f2ff]/20 text-white font-bold py-3 px-8 rounded-lg text-lg tracking-wider backdrop-blur-sm w-full sm:w-auto">
              <span className="relative z-10">
                <a target="_blank" href={Links.solonaBot}>
                  SOLONA BOT
                </a>
              </span>
              <div className="absolute inset-0 bg-[#00f2ff] opacity-0 group-hover:opacity-20 blur-lg rounded-lg transition-all duration-300"></div>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="h-screen sticky top-0 basis-1/2">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`
              w-[600px] h-[600px] rounded-[25px] mb-2.5 absolute 
              top-[calc(50%-300px)] left-[calc(50%-350px)]
              transition-all duration-700 ease-in-out p-9
              flex justify-between flex-col items-center
              ${index < activeCardIndex ? "opacity-0 translate-y-[-100vh]" : ""}
              ${index > activeCardIndex ? "opacity-0" : "opacity-100"}
            `}
            style={{
              zIndex: cards.length - index,
              pointerEvents: index === activeCardIndex ? "auto" : "none",
            }}
          >
            <div className="font-poppins text-xl font-bold text-white">
              <img src={card.bot} alt={card.title} className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StackedCards2;
