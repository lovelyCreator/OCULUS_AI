import { motion } from "framer-motion";

const Features = () => {
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
    <section id="Features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#2d1b55]/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Made for mass adoption.
            </h1>
            <p className="text-sm text-[#00f2ff] font-[Share+Tech+Mono]">
              LIVE DATA
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={item}
              className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/50 hover:border-[#00f2ff]/30 transition-colors duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="w-1 h-8 bg-[#00f2ff] mr-4"></div>
                <h3 className="text-2xl font-bold">Fast</h3>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Don&quot;t keep your users waiting. Our bot has response times under
                400 milliseconds — and as hardware gets faster, so will the
                performance.
              </p>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#00f2ff]">75ms</div>
                <div className="text-sm text-gray-500 font-[Share+Tech+Mono]">
                  AVERAGE RESPONSE TIME
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/50 hover:border-[#00f2ff]/30 transition-colors duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="w-1 h-8 bg-[#00f2ff] mr-4"></div>
                <h3 className="text-2xl font-bold">Decentralized</h3>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                The bot operates across multiple servers and nodes, ensuring
                uptime and reliability even during high-traffic periods.
              </p>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#00f2ff]">99.9%</div>
                <div className="text-sm text-gray-500 font-[Share+Tech+Mono]">
                  UPTIME GUARANTEED
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/50 hover:border-[#00f2ff]/30 transition-colors duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="w-1 h-8 bg-[#00f2ff] mr-4"></div>
                <h3 className="text-2xl font-bold">Scalable</h3>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Get big, quick. Our infrastructure is built to handle thousands
                of commands per second, with minimal latency and maximum
                reliability.
              </p>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#00f2ff]">10K+</div>
                <div className="text-sm text-gray-500 font-[Share+Tech+Mono]">
                  COMMANDS PER SECOND
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/50 hover:border-[#00f2ff]/30 transition-colors duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="w-1 h-8 bg-[#00f2ff] mr-4"></div>
                <h3 className="text-2xl font-bold">Energy Efficient</h3>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our optimized infrastructure ensures minimal resource usage
                while maintaining peak performance levels.
              </p>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#00f2ff]">90%</div>
                <div className="text-sm text-gray-500 font-[Share+Tech+Mono]">
                  RESOURCE OPTIMIZATION
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
