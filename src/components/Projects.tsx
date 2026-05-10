import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Maximize } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoLink: string;
  githubLink: string;
  details: string;
  features: string[];
}

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'api', name: 'API' },
 
  ];
  
  const projects: Project[] = [
    {
      id: 1,
      title: "InventorySystem ",
      description: "A responsive admin dashboard for managing products, orders, and customers.",
      image: "https://t4.ftcdn.net/jpg/05/50/14/63/360_F_550146337_826DHUXoFx18MRTMUauX3fyRw9R7S1BO.jpg",
      tags: ["Laravel", "Mysql", "JQuery", "Tailwind"],
      category: "web",
      demoLink: "https://github.com/alawoddin/InventorySystem",
      githubLink: "https://github.com/alawoddin/InventorySystem",
      details: "A comprehensive e-commerce dashboard with real-time analytics, inventory management, and order processing capabilities. Built with performance and scalability in mind.",
      features: [
        "Real-time sales analytics and reporting",
        "Inventory management system",
        "Customer relationship management",
        "Order processing and tracking",
        "User authentication and role-based access control"
      ]
    },
    {
      id: 2,
      title: "studentproject",
      description: "A beautiful studentproject Software with interactive maps and custom animations.",
      image: "https://www.gettingsmart.com/wp-content/uploads/2016/09/PBWorld-students-Feature-Image.jpg",
      tags: ["Vue.js", "laravel", "mysql", "javascript"],
      category: "web",
      demoLink: "https://example.com",
      githubLink: "https://github.com/alawoddin/studentproject",
      details: "A modern studentproject platform with interactive maps, immersive experiences, and smooth animations. The platform allows users to discover destinations, compare prices, and book accommodations.",
      features: [
        "Interactive maps with custom markers",
        "Destination search and filtering",
        "Availability calendar with real-time updates",
        "studentproject management system",
        "Payment integration with multiple providers"
      ]
    },
    {
      id: 3,
      title: "cars-wash-with-laravel",
      description: "A comprehensive cars-wash-with-laravel for finance applications with 50+ components.",
      image: "https://media.istockphoto.com/id/1429577234/photo/a-vehicle-in-an-automatic-car-wash.jpg?s=612x612&w=0&k=20&c=6dHnpcYASNnH2TpGBuR3vSB9w6tASzrjakjQl3wDUqw=",
      tags: ["Figma", "Design System", "laravel" , "mysql" , "javascript"],
      category: "web",
      demoLink: "https://github.com/alawoddin/cars-wash-with-laravel",
      githubLink: "https://github.com/alawoddin/cars-wash-with-laravel",
      details: "A comprehensive UI kit specifically designed for financial applications and dashboards. The kit includes over 50 reusable components with various states and variations.",
      features: [
        "50+ reusable components",
        "Dark and light mode variants",
        "Financial chart and graph components",
        "Complete design system with color palettes",
        "Interactive prototypes and documentation"
      ]
    },
    {
      id: 4,
      title: "food-website",
      description: "A cross-platform food-website  for Order online the best food.",
      image: "https://t3.ftcdn.net/jpg/01/54/14/86/360_F_154148685_yvijeC6L2SFpvqFJ5H1lunPg40FzCAf1.jpg",
      tags: ["Laravel", "Mongodb", "javascript", "jquery"],
      category: "web",
      demoLink: "https://github.com/alawoddin/food-website",
      githubLink: "https://github.com/alawoddin/food-website",
      details: "A feature-rich fitness tracking application designed to help users monitor their workouts, nutrition, and overall progress. The app provides personalized recommendations based on user activities.",
      features: [
        "Custom workout creation and tracking",
        "Nutrition diary with calorie calculation",
        "Progress charts and statistics",
        "Social features for sharing achievements",
        "Integration with wearable devices"
      ]
    },
    {
      id: 5,
      title: "Saas Content Project",
      description: "A collaborative Saas Content Project tool with real-time updates.",
      image: "https://www.actualtechmedia.com/wp-content/uploads/2022/10/What-Makes-B2B-Marketing-SaaS-featured.jpg",
      tags: ["laravel", "Api", "WebSocket", "OpenAiKey"],
      category: "web",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      details: "A collaborative Sass Content Project platform designed for teams with real-time communication and project tracking capabilities. The platform helps teams organize work, track progress, and meet deadlines.",
      features: [
        "Real-time collaboration with WebSockets",
        "Kanban and list views for tasks",
        "Team and permission management",
        "File sharing and comments",
        "Automated reminders and notifications"
      ]
    },
    {
      id: 6,
      title: "laravel-insetia",
      description: "A laravel-insetia for Signal Page  application.",
      image: "https://web-id.fr/curator/articles/inertia-bg%201.png?fm=webp&h=auto&w=500&s=a402fe878f3c5055281e21734af9314b",
      tags: ["laravel", "mysql", "Tailwind", "Jquery"],
      category: "web",
      demoLink: "https://github.com/alawoddin/laravel-insetia",
      githubLink: "https://github.com/alawoddin/laravel-insetia",
      details: "A soothing and calming user interface design for a meditation and mindfulness application. The design focuses on creating a peaceful environment that encourages relaxation and focus.",
      features: [
        "Calming color palette and visual elements",
        "Intuitive meditation timer and tracker",
        "Custom illustrations and iconography",
        "Smooth transitions and micro-interactions",
        "Audio visualization components"
      ]
    },

     {
      id: 7,
      title: "chat-application",
      description: "A chat-application with nextjs application.",
      image: "https://blog.happyfox.com/wp-content/uploads/2019/05/in-app-chat-blog-cover-image.png",
      tags: ["nextjs", "antd", "socket", "clerk"],
      category: "api",
      demoLink: "https://github.com/alawoddin/chat-application",
      githubLink: "https://github.com/alawoddin/chat-application",
      details: "A  user interface design for a user and userinterface application. The design focuses on creating a peaceful environment that encourages relaxation and focus.",
      features: [
        "Calming color palette and visual elements",
        "Intuitive meditation timer and tracker",
        "Custom illustrations and iconography",
        "Smooth transitions and micro-interactions",
        "Audio visualization components"
      ]
    },

         {
      id: 8,
      title: "laravel-react",
      description: "A laravel-react for Signal Page application.",
      image: "https://webprogrammer.io/wp-content/uploads/2022/04/install-react-laravel-header.webp",
      tags: ["laravel", "mysql", "Tailwind", "react"],
      category: "api",
      demoLink: "https://github.com/alawoddin/laravel-react",
      githubLink: "https://github.com/alawoddin/laravel-react",
      details: "in this project the admin add the data in backend the restful api is show to frontend The design focuses on creating a peaceful environment that encourages relaxation and focus.",
      features: [
        "Calming color palette and visual elements",
        "Intuitive meditation timer and tracker",
        "Custom illustrations and iconography",
        "Smooth transitions and micro-interactions",
        "Audio visualization components"
      ]
    },

         {
      id: 9,
      title: "Ecommers-with-next",
      description: "A https://github.com/alawoddin/nextjs-project for Signal Page  application.",
      image: "https://www.datocms-assets.com/48401/1628644925-nextjsspae-commerce.png",
      tags: ["nextjs", "routedom", "useeffect", "hook"],
      category: "api",
      demoLink: "https://github.com/alawoddin/nextjs-project",
      githubLink: "https://github.com/alawoddin/nextjs-project",
      details: "A soothing and calming user interface design for a meditation and mindfulness application. The design focuses on creating a peaceful environment that encourages relaxation and focus.",
      features: [
        "Calming color palette and visual elements",
        "Intuitive meditation timer and tracker",
        "Custom illustrations and iconography",
        "Smooth transitions and micro-interactions",
        "Audio visualization components"
      ]
    },

  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <SectionHeading 
          title="My Projects" 
          subtitle="Recent work I've created"
        />
        
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="card overflow-hidden group"
                variants={itemVariants}
                layout
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden h-48 -mx-6 -mt-6 mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex space-x-3">
                      <a 
                        href={project.demoLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a 
                        href={project.githubLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                      aria-label="View Details"
                    >
                      <Maximize size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                >
                  <span>View Details</span>
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;