export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  github: string;
  demo: string;
}

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listing, cart, checkout, and admin dashboard.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/damienjburks/ecommerce-platform",
    demo: "https://ecommerce-example.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app to help teams manage tasks, deadlines, and collaboration.",
    image: "https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    tags: ["React", "Firebase", "Redux", "Tailwind"],
    github: "https://github.com/damienjburks/task-manager",
    demo: "https://taskmanager-example.com"
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description: "Interactive dashboard for tracking personal finances with visualizations and insights.",
    image: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    github: "https://github.com/damienjburks/finance-dashboard",
    demo: "https://finance-example.com"
  },
  {
    id: 4,
    title: "News Mobile App",
    description: "A mobile app for reading personalized news from various sources and categories.",
    image: "https://images.pexels.com/photos/7521172/pexels-photo-7521172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    tags: ["React Native", "Redux", "News API", "Firebase"],
    github: "https://github.com/damienjburks/news-app",
    demo: "https://news-app-example.com"
  },
  {
    id: 5,
    title: "Travel Companion App",
    description: "Mobile app for travelers to plan trips, find recommendations, and share experiences.",
    image: "https://images.pexels.com/photos/5430902/pexels-photo-5430902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    tags: ["React Native", "GraphQL", "MongoDB", "Maps API"],
    github: "https://github.com/damienjburks/travel-app",
    demo: "https://travel-example.com"
  },
  {
    id: 6,
    title: "Portfolio Website Redesign",
    description: "A modern redesign of a photographer's portfolio with gallery and booking system.",
    image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "design",
    tags: ["Figma", "UI Design", "UX Design", "Prototyping"],
    github: "https://github.com/damienjburks/portfolio-design",
    demo: "https://portfolio-example.com"
  }
];