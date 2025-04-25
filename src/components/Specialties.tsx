import React from "react";
import { Shield, Cloud, Mic, Users, Github, Lock } from "lucide-react";

const Specialties: React.FC = () => {
  const specialties = [
    {
      icon: <Shield className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "DevSecOps",
      description:
        "I bring security into every step of the pipeline. From Jenkins to GitHub Actions, I’ve embedded tools like Trivy and SonarQube to catch issues before they become problems. I am an advocate for building secure, automated workflows that scale across teams and environments.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Cloud Security Development",
      description:
        "I design and secure cloud infrastructure in AWS and GCP with a focus on doing things the right way. All things IAM hardening, compliance guardrails, and detection controls included. Whether it’s Terraform or Docker, I’m all about shipping secure by default.",
    },
    {
      icon: <Mic className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Speaking",
      description:
        "I’ve shared my journey and lessons learned at AWS re:Invent, re:Inforce, and on podcasts like Cloud Security Podcast, where I break down complex security topics and making them approachable for engineers, builders, and security pros alike.",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Mentoring",
      description:
        "I mentor BIPOC LGBTQ+ folks trying to break into cloud and security. I'm on open board - sharing everything I’ve learned, from building labs to navigating career moves. It’s personal, and it’s about opening doors for the next generation.",
    },
    {
      icon: <Github className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Open Source Contributor and Maintainer",
      description:
        "I lead and contribute to projects like Common Cloud Controls (CCC) and Open Policy Agent (OPA), where I help define controls, write OPA & Sentinel policies for Terraform, and push the envelope on cloud-native security.",
    },
    {
      icon: <Lock className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Secure Programming",
      description:
        "Whether it’s appsec, containers, or secure design, I bring a builder’s mindset to security. I’ve baked in SAST, dependency scanning, and secure coding checks into dev workflows, ensuring apps are solid before they hit prod.",
    },
  ];

  return (
    <section id="specialties" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-yellow-600 dark:text-yellow-400">
              Specialties
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Areas where I excel and make an impact
          </p>
          <div className="mt-4 h-1 w-20 bg-yellow-600 dark:bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                index >= 3 ? "lg:col-span-3/2" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                  {specialty.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {specialty.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
