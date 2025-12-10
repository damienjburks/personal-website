import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Menu, X, Moon, Sun, Github } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Speaking", href: "#speaking" },
    { name: "Blog", href: "https://blog.damienjburks.com", external: true },
    {
      name: "Projects",
      href: "https://github.com/damienjburks",
      external: true,
    },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-sm shadow-md" : "bg-black"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold text-yellow-600 dark:text-yellow-400"
          >
            Damien Burks
          </a>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-300 hover:text-yellow-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://github.com/damienjburks/personal-website"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-yellow-600 transition-colors duration-200"
              aria-label="View source on GitHub"
            >
              <Github size={20} />
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-gray-300" />
              ) : (
                <Moon size={20} className="text-gray-300" />
              )}
            </button>

            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-yellow-600 hover:bg-yellow-700 text-white transition-colors duration-200"
            >
              Let's Talk
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-gray-300" />
              ) : (
                <Moon size={20} className="text-gray-300" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              {isOpen ? (
                <X size={20} className="text-gray-300" />
              ) : (
                <Menu size={20} className="text-gray-300" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-300 hover:text-yellow-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 rounded-full bg-yellow-600 hover:bg-yellow-700 text-white text-center transition-colors duration-200"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
