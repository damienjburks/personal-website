import React from "react";
import { Calendar, MapPin, ExternalLink, FileText } from "lucide-react";

interface SpeakingEngagement {
  title: string;
  event: string;
  date: string;
  location: string;
  description: string;
  thumbnail?: string;
  videoLink?: string;
  videoLinkText?: string;
  slidesLink?: string;
  topics: string[];
}

const Speaking: React.FC = () => {
  const engagements: SpeakingEngagement[] = [
    {
      title: "Kiro in action: Red Team tactics at scale (DEV336)",
      event: "AWS re:Invent 2025",
      date: "December 1st, 2025",
      location: "Las Vegas, NV",
      description:
        "A re:Invent 2025 session demonstrating how Kiro accelerates Red Team operations in AWS by automating recon, improving multi-account visibility, and enabling spec-driven development for building custom pentesting toolkits.",
      thumbnail: "https://i.ytimg.com/vi/IU6FOTCJ2Qs/maxresdefault.jpg",
      videoLink: "https://youtu.be/IU6FOTCJ2Qs?si=p0b91ZC25t08Gmt6",
      topics: ["AI", "Cloud Security", "Security Development", "AWS", "Kiro"],
    },
    {
      title: "A YouTuber’s magic wand: Converting videos to blogs (DEV322)",
      event: "AWS re:Invent 2024",
      date: "December 1st, 2024",
      location: "Las Vegas, NV",
      description:
        "A re:Invent session showcasing how the DSB Blogging Assistant automates turning YouTube videos into polished blog posts using AWS. The workflow detects new uploads, processes them through Step Functions and Lambda, uses Amazon Bedrock to generate content, and publishes directly to GitHub. The talk covers the problem creators face, the end-to-end architecture, and how AI plus event-driven design enables scalable content automation.",
      thumbnail: "/images/speaking_engagements/reinvent_2024_dev_322.png",
      videoLink:
        "https://github.com/devsecblueprint/dsb-blogging-assistant/blob/main/docs/conferences/reinvent_2024/DEV322.pdf",
      topics: ["AI", "Cloud Security", "Security Development", "AWS", "Kiro"],
    },
    {
      title: "Come and See CCC",
      event: "OSFF 2024",
      date: "October 1st, 2024",
      location: "New York City, NY",
      description:
        "An OSFF 2024 talk exploring the FINOS Common Cloud Controls (CCC) and Compliant Financial Infrastructure (CFI) projects, showing how automation and standardized controls reduce the cost and complexity of achieving cloud compliance.",
      thumbnail: "https://i.ytimg.com/vi/8hMRahzwK3k/maxresdefault.jpg",
      videoLink: "https://youtu.be/8hMRahzwK3k?si=UniaLjEl87Xbz7UN",
      topics: ["Cloud Governance", "Open Source", "Cloud Security"],
    },
    {
      title:
        "How Citi advanced their containment capabilities through automation (TDR201)",
      event: "AWS re:Inforce 2023",
      date: "July 19th, 2023",
      location: "Anaheim, CA",
      description:
        "A re:Inforce 2023 session detailing how Citi built a scalable, automated incident response framework using Step Functions, Lambda, and NIST guidelines to improve containment and response time across their AWS environment.",
      thumbnail: "https://i.ytimg.com/vi/rHUs61Te_JE/maxresdefault.jpg",
      videoLink: "https://youtu.be/rHUs61Te_JE?si=M5ttlqjQuZkrr_Vk",
      topics: ["AWS Security", "Incident Response", "Automation"],
    },
    {
      title:
        "How Citi advanced their containment and forensic capabilities through automation",
      event: "fwd:cloudsec 2023",
      date: "July 18th, 2023",
      location: "Anaheim, CA",
      description:
        "A fwd:cloudsec session showing how Citi built a scalable, automated incident response framework across 28 AWS services. Using AWS Step Functions and Lambda to orchestrate NIST-based workflows, Citi reduced containment time by about 5 hours and eliminated human error. The talk includes real-world examples and a live demo demonstrating how teams can design efficient, scalable incident response solutions on AWS.",
      thumbnail: "https://i.ytimg.com/vi/DygEQUVZBjc/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=DygEQUVZBjc",
      topics: ["AWS Security", "Incident Response", "Automation"],
    },
    {
      title: "Minimizing AWS S3 bucket attack vectors at scale",
      event: "BSidesDFW 2022",
      date: "November 29th, 2022",
      location: "Fort Worth, TX",
      description:
        "A session focused on the security gaps in AWS Macie and Trend Micro Cloud One, which detect sensitive or malicious content in S3 but do not auto-remediate misconfigurations or quarantine malicious files. The talk introduces DataCop, an open-source tool that automates S3 remediation actions using findings from Macie and Cloud One. Attendees will see a breakdown of DataCop’s architecture—including services used, remediation flows, IAM considerations, and development tooling—and will leave with practical guidance on automating S3 risk remediation at scale.",
      thumbnail: "https://i.ytimg.com/vi/-vIJBvUA4hI/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=-vIJBvUA4hI",
      topics: ["AWS Security", "AWS Macie", "Trend Micro", "Data Protection", "Automation"],
    },
    {
      title: "Automated S3 Blocking with AWS Macie & DataCop",
      event: "DevOpsDays DFW 2022",
      date: "August 31st, 2022",
      location: "Dallas, TX",
      description:
        "A DevOpsDays DFW talk covering the automation gaps in AWS Macie, which detects sensitive data in S3 but does not prevent or remediate misconfigurations. The session introduces DataCop, an open-source solution that automates S3 risk remediation based on Macie findings. Attendees will see a deep dive into DataCop’s architecture—including AWS services used, S3 remediation flows, IAM considerations, and development tooling—and will leave with practical guidance on automating data-risk remediation in S3 environments.",
      thumbnail: "https://i.ytimg.com/vi/xPvfD-gsuo4/maxresdefault.jpg",
      videoLink: "https://www.youtube.com/watch?v=xPvfD-gsuo4",
      topics: ["AWS Security", "AWS Macie", "Data Protection", "Automation"],
    },
  ];

  return (
    <section id="speaking" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Speaking{" "}
            <span className="text-yellow-600 dark:text-yellow-400">
              Engagements
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Sharing insights on Cloud Security, DevSecOps, and automation at
            conferences and events worldwide.
          </p>
          <div className="mt-4 h-1 w-20 bg-yellow-600 dark:bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Engagements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {engagements.map((engagement, index) => (
            <a
              key={index}
              href={engagement.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail */}
              {engagement.thumbnail && (
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={engagement.thumbnail}
                    alt={engagement.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={48} className="text-white" />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200 mb-2">
                  {engagement.title}
                </h3>

                <p className="text-yellow-600 dark:text-yellow-400 font-semibold mb-3">
                  {engagement.event}
                </p>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {engagement.description}
                </p>

                {/* Meta Information */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="flex-shrink-0" />
                    <span>{engagement.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="flex-shrink-0" />
                    <span>{engagement.location}</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {engagement.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {engagement.slidesLink && (
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(engagement.slidesLink, "_blank");
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
                    >
                      <FileText size={16} />
                      <span>Slides</span>
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaking;
