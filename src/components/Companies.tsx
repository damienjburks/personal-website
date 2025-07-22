import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Companies: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    {
      src: "https://cdn.brandfetch.io/idVoqFQ-78/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      alt: "Amazon Web Services",
    },
    {
      src: "https://cdn.brandfetch.io/idr8xpMOko/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      alt: "Citi",
    },
    {
      src: "https://cdn.brandfetch.io/idW1Fn8k71/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
      alt: "Cloud Security Podcast",
    },
    {
      src: "https://cdn.brandfetch.io/idcm0sustl/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1684919445915",
      alt: "FICO",
    },
    {
      src: "https://cdn.brandfetch.io/idRfyoxqM5/w/543/h/126/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
      alt: "FINOS",
    },
    {
      src: "https://cdn.brandfetch.io/idaj7u6MtJ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      alt: "fwd:cloudsec",
    },
    {
      src: "https://cdn.brandfetch.io/idLk2nEmtT/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      alt: "Styra",
    },
    {
      src: "https://cdn.brandfetch.io/idXhrQrb5t/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      alt: "Verizon",
    },
    {
      src: "https://cdn.brandfetch.io/idh5Lm_qXI/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      alt: "Whizlabs",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          const isAtEnd =
            scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
            scrollRef.current.scrollWidth;

          if (isAtEnd) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scroll("right");
          }
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section id="companies" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-yellow-600 dark:text-yellow-400">
              Companies
            </span>{" "}
            I've Left My Mark On
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            From Fortune 100s to open-source stages, I’ve built, secured, and
            spoken where impact matters.
          </p>
          <div className="mt-4 h-1 w-20 bg-yellow-600 dark:bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-none w-[300px] md:w-[400px] snap-center"
              >
                <div className="group relative bg-white dark:bg-gray-200 rounded-lg overflow-hidden aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Companies;
