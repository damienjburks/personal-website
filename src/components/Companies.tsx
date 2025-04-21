import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Companies: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const images = [
    {
      src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      alt: "Team collaboration"
    },
    {
      src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
      alt: "Business meeting"
    },
    {
      src: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg",
      alt: "Office workspace"
    },
    {
      src: "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg",
      alt: "Project discussion"
    },
    {
      src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
      alt: "Team planning"
    },
    {
      src: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
      alt: "Creative workspace"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          const isAtEnd = scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth;
          
          if (isAtEnd) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scroll('right');
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
            Photo <span className="text-yellow-600 dark:text-yellow-400">Gallery</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">A collection of memorable moments</p>
          <div className="mt-4 h-1 w-20 bg-yellow-600 dark:bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-none w-[300px] md:w-[400px] snap-center"
              >
                <div className="group relative bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden aspect-[4/3]">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
            onClick={() => scroll('right')}
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