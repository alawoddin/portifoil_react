import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Experience = () => {
  const experiences = [
    {
      company: "TechVision Inc.",
      position: "Senior Front-End Developer",
      duration: "2022 - Present",
      description: "Leading front-end development for enterprise web applications, implementing design systems, and mentoring junior developers.",
      achievements: [
        "Rebuilt the company's flagship product with React and TypeScript, improving performance by 60%",
        "Implemented automated testing that increased code coverage to 85%",
        "Established front-end architecture patterns used across multiple teams"
      ]
    },
    {
      company: "Backend Developer",
      position: "Front-End Developer",
      duration: "2022 - 2025",
      description: "Developed interactive web applications and e-commerce solutions for various clients using React, Vue, and modern CSS techniques.",
      achievements: [
        "Delivered 15+ client projects with 100% satisfaction rate",
        "Created a custom component library that reduced development time by 30%",
        "Optimized site performance achieving 95+ scores on Google PageSpeed"
      ]
    },
    {
      company: "WebSolve Solutions",
      position: "Developer",
      duration: "2022 - Present",
      description: "Designed and developed user interfaces for web applications focusing on usability and visual appeal.",
      achievements: [
        "Transformed static designs into fully functional, responsive interfaces",
        "Collaborated with UX designers to implement design systems",
        "Improved mobile experience across all company products"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey"
        />
        
        <motion.div 
          className="relative mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline center line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2" />
          
          {experiences.map((experience, index) => (
            <motion.div 
              key={index} 
              className={`relative flex flex-col md:flex-row ${
                index !== experiences.length - 1 ? 'mb-12' : ''
              }`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10" />
              
              {/* Content boxes with alternate layout */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <motion.div 
                  className="card"
                  whileHover={{ y: -5 }}
                >
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase size={18} className="text-primary-500" />
                    <h3 className="text-xl font-bold">{experience.company}</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {experience.position}
                  </h4>
                  
                  <div className={`flex items-center gap-1 text-gray-600 dark:text-gray-400 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar size={14} />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {experience.description}
                  </p>
                  
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;