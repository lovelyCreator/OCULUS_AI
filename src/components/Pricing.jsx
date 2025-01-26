import React from "react";
import {
  Check,
  Eye,
  Database,
  Vote,
  Briefcase,
  Crown,
  Rocket,
  User,
} from "lucide-react";

const PricingCard = ({ tier, price, features }) => {
  return (
    <div className="bg-black/80 backdrop-blur-sm border border-gray-800/50 hover:border-[#00f2ff]/30 rounded-xl p-6 flex flex-col h-full transform transition-all duration-300 hover:scale-105 ">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>
        <div className="text-[#00f2ff]">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm ml-1 text-gray-400">SEYEBOT</span>
        </div>
      </div>

      <div className="flex-grow">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              {feature.included ? (
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
              ) : (
                <div className="w-5 h-5 mr-3" />
              )}
              <span className={!feature.included ? "text-gray-500" : ""}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-8 w-full bg-[#00f2ff]/20 hover:bg-green-500/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
        Select Plan
      </button>
    </div>
  );
};

function Pricing() {
  const tiers = [
    {
      tier: "BRONZE",
      price: "10,000",
      features: [
        { name: "Revenue Share", included: true },
        { name: "Exclusive Bot Access", included: false },
        { name: "Voting Rights", included: false },
        { name: "Pro Trader Mode", included: false },
        { name: "Elite Trader Group Access", included: false },
        { name: "Revshare Boost Promos", included: false },
        { name: "Elon Mode", included: false },
      ],
    },
    {
      tier: "TITANIUM",
      price: "250,000",
      features: [
        { name: "Revenue Share", included: true },
        { name: "Exclusive Bot Access", included: true },
        { name: "Voting Rights", included: true },
        { name: "Pro Trader Mode", included: false },
        { name: "Elite Trader Group Access", included: false },
        { name: "Revshare Boost Promos", included: false },
        { name: "Elon Mode", included: false },
      ],
    },
    {
      tier: "PLATINUM",
      price: "500,000",
      features: [
        { name: "Revenue Share", included: true },
        { name: "Exclusive Bot Access", included: true },
        { name: "Voting Rights", included: true },
        { name: "Pro Trader Mode", included: true },
        { name: "Elite Trader Group Access", included: true },
        { name: "Revshare Boost Promos", included: true },
        { name: "Elon Mode", included: true },
      ],
    },
  ];

  return (
    <section id="Pricing" className="min-h-screen bg-[#2d1b55]/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-6xl font-bold text-white">Pricing</h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect tier to unlock advanced trading features and
            maximize your potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <PricingCard key={tier.tier} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
