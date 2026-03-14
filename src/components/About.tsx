import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code, GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = () => {
  const aboutData = {
    image: "public/image/a3.jpg",
    description: `Hi! I'm alawoddin khedmat. I'm a web developer with a serious love for teaching I am  a passionate Web Developer, Programmer & Instructor.`,
    bio: `I am working online for the last 4 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.`,
    stats: [
      { icon: <Code size={20} />, label: "Projects Completed", value: "40+" },
      { icon: <Briefcase size={20} />, label: "Years of Experience", value: "4+" },
      { icon: <Award size={20} />, label: "Satisfied Clients", value: "30+" },
      { icon: <GraduationCap size={20} />, label: "Certifications", value: "8" },
    ]
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.1 }
    })
  };

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12">
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={1}
          >
            <img 
              src={aboutData.image} 
              alt="Hashmatullah Portrait" 
              className="w-full h-full object-cover object-center"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold">Alawoddin</h3>
                <p className="text-gray-200">Full-Stuck-Web Developer</p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={2}
            >
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {aboutData.description}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {aboutData.bio}
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={3}
            >
              {aboutData.stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="card flex flex-col items-center text-center p-4"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-3">
                    {stat.icon}
                  </div>
                  <span className="font-bold text-2xl mb-1">{stat.value}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={4}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary px-6 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;