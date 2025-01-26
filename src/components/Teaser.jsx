import { useEffect, useRef } from "react";

const Teaser = () => {
  const CONFIG = {
    teaser: "/teaser.mp4",
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section id="Teaser" className="py-24 relative bg-[#2d1b55]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-WHITE tracking-wider">
          TEASER
        </h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-center">
          {/* Video Container - made smaller */}
          <div className="relative w-full md:w-1/3 aspect-[9/16] rounded-lg overflow-hidden group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              autoPlay
              muted
              loop
              src={CONFIG.teaser}
            ></video>
            <div className="absolute inset-0 bg-[#00f2ff]/5 group-hover:bg-[#00f2ff]/10 transition-all duration-300"></div>
          </div>

          {/* Text Content - adjusted width */}
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
        </div>
      </div>
    </section>
  );
};

export default Teaser;
