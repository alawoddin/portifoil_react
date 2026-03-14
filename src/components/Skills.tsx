import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('core');
  
  const categories = [
    { id: 'core', name: 'Core Skills' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'libraries', name: 'Libraries' },
    { id: 'tools', name: 'Tools' },
  ];
  
  const skills = {
    core: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'Responsive Design', level: 95 },
      { name: 'CSS Grid', level: 88 },
      { name: 'Flexbox', level: 90 },
      { name: 'Web Accessibility', level: 85 },
      { name: 'Cross-Browser Compatibility', level: 88 },
    ],
    frameworks: [
      { name: 'React', level: 90 },
      { name: 'Bootstrap', level: 92 },
      { name: 'TailwindCSS', level: 85 },
      { name: 'Material UI', level: 82 },
      { name: 'Chakra UI', level: 80 },
      { name: 'Next.js', level: 78 },
      { name: 'Express.js', level: 75 },
      { name: 'jQuery', level: 85 },
    ],
    libraries: [
      { name: 'Redux', level: 85 },
      { name: 'React Router', level: 88 },
      { name: 'Axios', level: 90 },
      { name: 'Framer Motion', level: 82 },
      { name: 'React Query', level: 80 },
      { name: 'React Hook Form', level: 85 },
      { name: 'Styled Components', level: 83 },
      { name: 'GSAP', level: 75 },
    ],
    tools: [
      { name: 'Git', level: 88 },
      { name: 'npm/yarn', level: 90 },
      { name: 'VS Code', level: 92 },
      { name: 'Chrome DevTools', level: 90 },
      { name: 'Webpack', level: 80 },
      { name: 'Vite', level: 85 },
      { name: 'ESLint', level: 85 },
      { name: 'Jest', level: 78 },
    ],
  };

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
    <section id="skills" className="section">
      <div className="container-custom">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technologies I've mastered"
        />
        
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills[activeCategory as keyof typeof skills].map((skill, index) => (
              <motion.div 
                key={skill.name} 
                className="card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;