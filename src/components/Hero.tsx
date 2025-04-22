import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

import heroimg from "../assets/images/hero.png";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
    "Cloud DevSecOps Engineer",
    "Content Creator",
    "AWS Community Builder",
    "Educator",
    "Speaker",
    "Mentor",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const typingDelay = 150;
    const erasingDelay = 100;
    const wordDelay = 2000;

    const type = () => {
      const currentRole = roles[currentIndex];
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length - 1) {
          setTimeout(() => setIsDeleting(true), wordDelay);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 1) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timeout = setTimeout(type, isDeleting ? erasingDelay : typingDelay);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 flex flex-col justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-yellow-400 font-medium mb-4 animate-fadeIn">
            Hello, my name is
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeUp">
            Damien Burks
          </h1>

          <div className="min-h-[40px] md:min-h-[48px] mb-6">
            <h2 className="text-xl md:text-2xl text-gray-200">
              {displayText}
              <span className="animate-blink">|</span>
            </h2>
          </div>

          <div
            className={`transition-opacity duration-1000 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="mt-6 text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Breaking down silos, building up security.... one pipeline at a
              time.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll down" className="block p-2">
          <ArrowDown size={24} className="text-white/60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
