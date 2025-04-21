import React from 'react';
import { Shield, Cloud, Mic, Users, Github, Lock } from 'lucide-react';

const Specialties: React.FC = () => {
  const specialties = [
    {
      icon: <Shield className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "DevSecOps",
      description: "Integrating security practices throughout the development lifecycle, ensuring robust and secure applications from design to deployment."
    },
    {
      icon: <Cloud className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Cloud Security Development",
      description: "Building secure cloud infrastructure and applications with a focus on AWS security best practices and compliance standards."
    },
    {
      icon: <Mic className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Speaking",
      description: "Sharing knowledge and insights at tech conferences and events, focusing on cloud security, DevOps, and modern development practices."
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Mentoring",
      description: "Guiding and empowering developers to excel in cloud security and DevOps, sharing practical experience and best practices."
    },
    {
      icon: <Github className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Open Source Contributor and Maintainer",
      description: "Actively contributing to and maintaining open source projects, fostering collaboration and innovation in the developer community."
    },
    {
      icon: <Lock className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Secure Programming",
      description: "Implementing robust security measures and best practices in software development, focusing on code security, vulnerability prevention, and secure architecture design."
    }
  ];

  return (
    <section id="specialties" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-yellow-600 dark:text-yellow-400">Specialties</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Areas where I excel and make an impact</p>
          <div className="mt-4 h-1 w-20 bg-yellow-600 dark:bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                index >= 3 ? 'lg:col-span-3/2' : ''
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