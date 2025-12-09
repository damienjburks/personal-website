import React from "react";
import { BookOpen, ExternalLink, Clock } from "lucide-react";

interface Course {
  id: string;
  title: string;
  platform: string;
  duration: string;
  thumbnail: string;
  link: string;
  description: string;
}

const Courses: React.FC = () => {
  const courses: Course[] = [
    {
      id: "1",
      title: "Cloud Security for DevSecOps Engineers: From Security Models to API Protection",
      platform: "LinkedIn Learning",
      duration: "2h 39m",
      thumbnail: "https://camo.githubusercontent.com/5ef5abe1d5b3ee397b308f56dd1a508b322ba8b506fe6a3befe470199dc2f666/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f76322f4434453044415148516f3033644a722d484f772f6c6561726e696e672d7075626c69632d63726f705f3637355f313230302f4234455a6d686668526e486741632d2f302f313735393335313031383931323f653d3231343734383336343726763d6265746126743d5475644c4745574f34723057515f4e34756e747273745f44794c793749777377424d743636584a6a4c3551",
      link: "https://www.linkedin.com/learning/cloud-security-for-devsecops-engineers-from-security-models-to-api-protection",
      description: "Designed for new and early-career DevSecOps engineers, this course introduces cloud security through a DevSecOps lens. Get started by learning the fundamentals of cloud computing, service models, and the shared responsibility model. Explore the importance of key security services and control types, such as identity and access management (IAM), encryption, logging, and network segmentation, as well as API security fundamentals in cloud-native environments. Along the way, instructor Damien Burks dives into the essentials of infrastructure as code (IaC), showing you how to identify common risks, enforce compliance with policy as code, and automate security checks at scale using tools like Trivy. By the end of this course, you’ll be prepared to effectively apply key DevSecOps principles and concepts within the cloud security space. This course is integrated with GitHub Codespaces, an instant cloud development environment that offers all the functionality of your favorite IDE without the need for any local machine setup. With GitHub Codespaces, you can get hands-on practice from any machine, at any time—all while using a tool that you’ll likely encounter in the workplace. Check out the “Using GitHub Codespaces with this course” video to learn how to get started."
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 pb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Featured{" "}
            <span className="text-yellow-600 dark:text-yellow-400">Courses</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Educational content to help you master Cloud Security & DevSecOps
          </p>
          <div className="mt-2 h-1 w-20 bg-yellow-600 dark:bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="w-full">
          {courses.map((course) => (
            <a
              key={course.id}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
                <div className="lg:col-span-2 md:col-span-1 relative overflow-hidden min-h-[260px] flex items-center justify-center">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={40} className="text-white" />
                  </div>
                </div>
                <div className="lg:col-span-4 md:col-span-2 p-4 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full font-medium">
                      <BookOpen size={14} />
                      {course.platform}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                      <Clock size={14} />
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                    {course.description}
                  </p>
                  <div>
                    <span className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-medium text-sm group-hover:gap-3 transition-all duration-200">
                      View Course
                      <ExternalLink size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
