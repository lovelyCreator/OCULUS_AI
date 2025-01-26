import { GoCheckCircle } from "react-icons/go";
import { RiCloseCircleLine } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import { useState } from "react";

const pricingData = [[
    { label: "AI Search Engine", value: [1, 1, 1] },
    { label: "Spectre AI Dapp", value: [1, 1, 1] },
    { label: "AI Lounge", value: [0, 1, 1] },
    { label: "AI Prediction Mainbot", value: [0, 1, 1] },
    { label: "Sentiment Analysis Basic", value: [1, 1, 1] },
    { label: "Sentiment Analysis Pro", value: [0, 1, 1] },
    { label: "Sentiment Analysis Charts", value: [0, 1, 1] },
    { label: "Technical Analysis Basic", value: [1, 1, 1] },
    { label: "SpectPulse - SocialFi", value: [1, 1, 1] },
    { label: "Revenue Share & Staking (35% pool)", value: [0, 0, 1] },
    { label: "Revenue Share & Staking (50% pool)", value: [0, 0, 0] },
  ],[
    { label: "AI Search Engine", value: [1, 1, 1] },
    { label: "Spectre AI Dapp", value: [1, 1, 1] },
    { label: "AI Lounge", value: [0, 1, 1] },
    { label: "AI Prediction Mainbot", value: [0, 1, 1] },
    { label: "Sentiment Analysis Basic", value: [1, 1, 1] },
    { label: "Sentiment Analysis Pro", value: [0, 1, 1] },
    { label: "Sentiment Analysis Charts", value: [0, 0, 1] },
    { label: "Technical Analysis Basic", value: [0, 1, 1] },
    { label: "SpectPulse - SocialFi", value: [0, 1, 1] },
    { label: "Revenue Share & Staking (35% pool)", value: [0, 0, 1] },
    { label: "Revenue Share & Staking (50% pool)", value: [0, 0, 0] },
  ],
];
export default function Tiers() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="Tires" className="bg-[#2d1b55]/10 py-48">
      <div className="w-full px-4 xl:w-2/3 2xl:w-1/2 container mx-auto">
        <div className="relative flex flex-col gap-8">
          <div className="px-20 pt-32 pb-8 border bg-neutral-950 border-gray-900 rounded-lg flex flex-col gap-4">
            {pricingData[activeTab].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="flex-1 text-lg">{item.label}</span>
                <div className="grid grid-cols-3 gap-36 mr-4">
                  {item.value.map((value, value_index) =>
                    value ? (
                      <GoCheckCircle
                        key={value_index}
                        className="text-2xl text-purple-400"
                      />
                    ) : (
                      <RiCloseCircleLine
                        key={value_index}
                        className="text-2xl text-gray-400"
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full absolute -top-28 left-0 z-20 flex items-center justify-between px-12">
            <div className="flex gap-5 text-2xl text-center font-normal mt-20">
              <span className="p-3 bg-neutral-950 border border-gray-900 rounded-lg text-pink-500" onClick={() => setActiveTab(0)}>Ethereum</span>
              <span className="p-3 bg-neutral-950 border border-gray-900 rounded-lg text-blue-500" onClick={() => setActiveTab(1)}>Solana</span>
            </div>
            <div className="flex items-center gap-10 mt-10">
              <div className="w-32 py-6 bg-neutral-950 border border-gray-900 rounded-lg flex flex-col items-center">
                <span className="text-white text-2xl font-bold">GLLIMPSE</span>
                <span className="text-purple-500">FREE</span>
              </div>
              <div className="w-32 py-6 bg-neutral-950 border border-gray-900 rounded-lg flex flex-col items-center">
                <span className="text-white text-2xl font-bold">APERTURE</span>
                <span className="text-purple-500">500 SPECTRE</span>
              </div>
              <div className="w-32 py-6 bg-neutral-950 border border-gray-900 rounded-lg flex flex-col items-center">
                <span className="text-white text-2xl font-bold">GOD'S EYE</span>
                <span className="text-purple-500">FREE</span>
              </div>
              {/* <div className="w-24 py-6 bg-neutral-950 border border-gray-900 rounded-lg flex flex-col items-center">
                <span className="text-white text-2xl font-bold">*Tire4</span>
                <span className="text-purple-500">FREE</span>
              </div> */}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-neutral-950 border border-gray-900 p-4 rounded-lg flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <IoStar className="text-purple-100 text-2xl" />
                <span className="text-xl">GLLIMPSE</span>
              </div>
              <span>Free-Spectre AI Search Engine is free at its core</span>
            </div>
            <div className="bg-neutral-950 border border-gray-900 p-4 rounded-lg flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <IoStar className="text-pink-400 text-2xl" />
                <span className="text-xl">APERTURE</span>
              </div>
              <span>Standard-0.005% of Tokens (500 SPECTRE tokens)</span>
            </div>
            <div className="bg-neutral-950 border border-gray-900 p-4 rounded-lg flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <IoStar className="text-green-200 text-2xl" />
                <span className="text-xl">GOD'S EYE</span>
              </div>
              <span>Advanced-0.01% of Tokens(1000 SPECTRE tokens)</span>
            </div>
            {/* <div className="bg-neutral-950 border border-gray-900 p-4 rounded-lg flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <IoStar className="text-green-500 text-2xl" />
                <span className="text-xl">*Tire4</span>
              </div>
              <span>Premium-0.07% of Tokens(7000 PECTRE tokens)</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
