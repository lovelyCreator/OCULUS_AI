import { motion } from "framer-motion";

const Statistics = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="Statistics" className="py-24 relative">
      <div className="absolute inset-0 bg-[#2d1b55]/10 backdrop-blur-3xl"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto w-full"
          >
            <motion.h2
              variants={item}
              className="text-4xl md:text-5xl font-bold max-w-md mb-8 md:mb-0 text-center md:text-left"
            >
              Join a community of trust.
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-12 w-full md:w-auto">
              <motion.div variants={item} className="text-center md:text-right">
                <div className="text-4xl md:text-6xl font-bold text-[#00f2ff]">
                  29.7M
                </div>
                <div className="text-sm text-gray-400 mt-2 font-[Share+Tech+Mono] tracking-wide">
                  ACTIVE USERS
                </div>
              </motion.div>
              <motion.div variants={item} className="text-center md:text-right">
                <div className="text-4xl md:text-6xl font-bold text-[#00f2ff]">
                  340M
                  <span className="text-[#00f2ff]/60">+</span>
                </div>
                <div className="text-sm text-gray-400 mt-2 font-[Share+Tech+Mono] tracking-wide">
                  COMMANDS EXECUTED
                </div>
              </motion.div>
              <motion.div variants={item} className="text-center md:text-right">
                <div className="text-4xl md:text-6xl font-bold text-[#00f2ff]">
                  $0.00
                  <span className="text-[#00f2ff]/60">064</span>
                </div>
                <div className="text-sm text-gray-400 mt-2 font-[Share+Tech+Mono] tracking-wide">
                  MEDIAN RESPONSE TIME
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
