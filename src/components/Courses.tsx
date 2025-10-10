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
      duration: "1h 30m",
      thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHkZU8rY1qMRg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731015598949?e=2147483647&v=beta&t=xQwXCWfTe5FtxJY_FzPhWDpV8aLF1sCy59T5YcMpfWU",
      link: "https://www.linkedin.com/learning/cloud-security-for-devsecops-engineers-from-security-models-to-api-protection",
      description: "Learn essential cloud security concepts and practices for DevSecOps engineers, covering security models, API protection, and practical implementation strategies.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{" "}
            <span className="text-green-600 dark:text-green-400">Courses</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Educational content to help you master cloud security
          </p>
          <div className="mt-4 h-1 w-20 bg-green-600 dark:bg-green-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-md">
            {courses.map((course) => (
              <a
                key={course.id}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={48} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                    <BookOpen size={14} />
                    {course.platform}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                    <Clock size={14} />
                    {course.duration}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200 line-clamp-2 mb-3">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {course.description}
                </p>
              </div>
            </a>
          ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/damienjburks/details/courses/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium transition-colors duration-200"
          >
            <span>View All Courses</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
