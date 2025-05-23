import React from "react";
import {
  UserCircle2,
  Calendar,
  MapPin,
  Briefcase,
  Github,
  Youtube,
} from "lucide-react";

import headshot from "../assets/images/headshot.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About{" "}
            <span className="text-yellow-600 dark:text-yellow-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Get to know me better
          </p>
          <div className="mt-4 h-1 w-20 bg-yellow-600 dark:bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[11/9] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={headshot}
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-yellow-600 dark:bg-yellow-500 rounded-lg -z-10"></div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-12">
              <a
                href="https://twitter.com/damienjburks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-yellow-600 hover:text-white dark:hover:bg-yellow-600 dark:hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/damienjburks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-yellow-600 hover:text-white dark:hover:bg-yellow-600 dark:hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>

              <a
                href="https://github.com/damienjburks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-yellow-600 hover:text-white dark:hover:bg-yellow-600 dark:hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="https://youtube.com/@damienjburks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              A little about me
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Over the past several years, I’ve carved out a career at the
              intersection of cloud engineering, security, and automation. I
              specialize in Cloud DevSecOps and Cloud Security Engineering
              across regulated, large-scale environments. I've led initiatives
              that integrate preventive and detective controls into CI/CD
              pipelines, reduce technical debt through Infrastructure as Code,
              and enhance incident response through automation and
              observability.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              My work has supported Fortune 100 enterprises and high-impact
              financial institutions, with a focus on multi-cloud security,
              scalable infrastructure design, and enabling secure software
              delivery. I’ve contributed to open-source projects such as the
              Common Cloud Controls (CCC) initiative by FINOS and Open Policy
              Agent (OPA) to help advance industry standards for policy-as-code
              and compliance automation.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              In addition to engineering, I’m a content creator and educator. I
              founded{" "}
              <a
                href="https://www.devsecblueprint.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 dark:text-yellow-400 hover:underline"
              >
                The DevSec Blueprint
              </a>
              , an open-source platform and learning space dedicated to helping
              others break into Cloud Security and DevSecOps. I also run a
              growing YouTube channel and LinkedIn presence, where I share
              insights, tutorials, and career guidance for early to mid-career
              professionals.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Beyond the cloud, you’ll find me watching anime (Demon Slayer),
              playing story-rich games (Persona 5 Royal), or falling down
              YouTube rabbit holes about cars and DIY tech builds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium text-center transition-colors duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
