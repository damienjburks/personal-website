import React from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface Talk {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  thumbnail: string;
  link: string;
}

const TalkVideos: React.FC = () => {
  const talks: Talk[] = [
    {
      id: "1",
      title: "Come and See CCC",
      event: "OSFF 2024",
      date: "October 1st, 2024",
      location: "New York City, NY",
      thumbnail: "https://i.ytimg.com/vi/8hMRahzwK3k/maxresdefault.jpg",
      link: "https://youtu.be/8hMRahzwK3k?si=UniaLjEl87Xbz7UN",
    },
    {
      id: "2",
      title:
        "AWS re:Inforce 2023 - How Citi advanced their containment capabilities through automation (TDR201)",
      event: "AWS re:Inforce 2023",
      date: "July 19th, 2023",
      location: "Anaheim, CA",
      thumbnail: "https://i.ytimg.com/vi/rHUs61Te_JE/maxresdefault.jpg",
      link: "https://youtu.be/rHUs61Te_JE?si=M5ttlqjQuZkrr_Vk",
    },
    {
      id: "3",
      title: "How to Setup DevSecOps Pipeline for Amazon EKS with Terraform",
      event: "Cloud Security Podcast",
      date: "December 3rd, 2024",
      location: "Virtual Event",
      thumbnail: "https://i.ytimg.com/vi/otleFroshZU/maxresdefault.jpg",
      link: "https://youtu.be/otleFroshZU?si=qeuS94vtldR7ZlVe",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{" "}
            <span className="text-yellow-600 dark:text-yellow-400">Talks</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Sharing knowledge through speaking engagements
          </p>
          <div className="mt-4 h-1 w-20 bg-yellow-600 dark:bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talks.map((talk) => (
            <a
              key={talk.id}
              href={talk.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={talk.thumbnail}
                  alt={talk.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={48} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200 line-clamp-2">
                  {talk.title}
                </h3>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>{talk.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin size={16} />
                    <span>{talk.location}</span>
                  </div>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">
                    {talk.event}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://youtube.com/playlist?list=PLtvzZiZoMu4ZOFD7tmuZRQF7H24Xbhmx4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium transition-colors duration-200"
          >
            <span>View All Talks</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TalkVideos;
