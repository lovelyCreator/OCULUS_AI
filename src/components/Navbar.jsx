import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import logoIconImg from '../images/bw-eye.png'
import logoLetterImg from "../images/oculus-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    setActiveSection(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 ease-in-out z-50 ${
        hasScrolled
          ? "bg-[#050309] shadow-lg py-2 backdrop-blur-sm"
          : "bg-[#050309]"
      }`}
    >
      <div className="mx-4 md:px-12 xl:px-36 py-4 flex items-center justify-between md:justify-between md:gap-10">
        <div
          className={`flex items-center text-xl font-bold text-[#0F2E2F] transition-transform duration-300 md:text-2xl ${
            hasScrolled ? "scale-120" : "scale-100"
          }`}
        >
          <a
            href="#Hero"
            className="font-[Orbitron] text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#2d1b55] cursor-pointer flex items-center gap-2"
          >
            <img src={logoIconImg} alt="logo icon image" className="w-8" />
            <img src={logoLetterImg} alt="logo letter image" className="w-36" />
          </a>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden items-center space-x-2 md:flex lg:space-x-8">
          {["Vision", "Aperture", "God's Eye", "Mr. Oculus", "Tires", "Community", "Roadmap", "Socials"].map(
            (section) => (
              <a
                onClick={() => scrollToSection(section)}
                key={section}
                className="font-bold text-gray-200 hover:text-gray-900 transition-all duration-300 cursor-pointer"
              >
                {section}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 animate-fade-in" />
                )}
              </a>
            )
          )}
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-t bg-[#050309]/95 backdrop-blur-sm md:hidden">
            <div className="flex flex-col space-y-6 p-6">
              {["Bots", "Features", "Pricing", "Statistics", "Teaser"].map(
                (section) => (
                  <a
                    onClick={() => scrollToSection(section)}
                    key={section}
                    className="font-bold text-white hover:text-gray-300 transition-all duration-300 text-xl"
                  >
                    {section}
                    {activeSection === section && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 animate-fade-in" />
                    )}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
