import Card from "./common/Card";
import mroImg from "../images/mro.png";

const data = [
  {
    title: "Fast",
    content:
      "Don't keep your users waiting. Solana has block times of 400 milliseconds - and as hardware gets faster, so will the network.",
    number: 4623,
    footer: "TRANSACTIONS PER SECOND",
    color: "sky-600",
  },
  {
    title: "Scalable",
    content:
      "Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.0025.",
    number: 364611957190,
    footer: "TOTAL TRANSACTIONS",
    color: "pink-800",
  },
  {
    title: "Decentralized",
    content:
      "The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.",
    number: 1409,
    footer: "VALIDATOR NODES",
    color: "yellow-800",
  },
  {
    title: "Energy Efficient",
    content:
      "Solana's proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.",
    number: "0%",
    footer: "NET CARBON IMPACT",
    color: "sky-600",
  },
];

export default function MrOculus() {
  return (
    <section id="Mr. Oculus" className="bg-[#2d1b55]/10 py-24">
      <div className="container mx-auto grid md:grid-cols-2 xl:gap-8">
        <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-0 lg:pr-12">
          <div className="flex flex-col flex-1 gap-8 lg:mt-24">
            {data.slice(0, 2).map((item) => (
              <Card key={item.title} data={item} />
            ))}
          </div>
          <div className="flex flex-col flex-1 gap-8">
            {data.slice(2, 4).map((item) => (
              <Card key={item.title} data={item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl md:text-xl xl:text-5xl">
              Made for mass adoption.
            </h2>
            <span className="flex items-center gap-2 mt-4">
              <span className={`h-2 w-2 bg-sky-700 rounded-full`}></span>
              LIVE DATA
            </span>
          </div>
          <img src={mroImg} alt="Eye Icon" className="w-2/3" />
        </div>
      </div>
    </section>
  );
}
