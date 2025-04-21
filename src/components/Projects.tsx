import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData, ProjectType } from '../data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [animatedItems, setAnimatedItems] = useState<boolean>(true);

  const categories = ['all', 'web', 'mobile', 'design'];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  const handleFilterClick = (filter: string) => {
    setAnimatedItems(false);
    setActiveFilter(filter);
    
    setTimeout(() => {
      setAnimatedItems(true);
    }, 50);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Some of my recent work</p>
          <div className="mt-4 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`px-5 py-2 rounded-full capitalize transition-all duration-300 ${
                activeFilter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
                animatedItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-4 mb-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
                        aria-label="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                      
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-3 capitalize">
                  {project.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/damienjburks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 font-medium transition-colors duration-200"
          >
            <span>See More on GitHub</span>
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;