import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} Damien Burks. All rights reserved.
            </p>
          </div>

          <div className="flex items-center">
            <p className="text-gray-400 flex items-center gap-1">
              Made with{" "}
              <Heart size={16} className="text-red-500 animate-pulse" /> using
              React + Tailwind + Bolt.ai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
