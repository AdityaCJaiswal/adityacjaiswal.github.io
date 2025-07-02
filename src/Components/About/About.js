import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';
import GitGraph from "./Graph.png";
import contri from "./contri.png";
import "./About.css";
import Skills from "./Skills.js";

const About = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to add your resume.pdf to the public folder
    link.download = 'Aditya_Jaiswal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" ref={ref}>
      <div className="wrapper">
        <motion.article
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="title" variants={itemVariants}>
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </motion.div>
          
          <motion.div className="desc full" variants={itemVariants}>
            <h4 className="subtitle">My name is Aditya.</h4>
            <p>
              I am a Passionate Web developer, Vibe Coder and AI enthusiast with a love for creating 
              innovative digital solutions that make a difference.
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty and easy to use. 
              I can't stop learning new things; the more, the better. I also love to play chess 
              and solve Rubik's Cube in my free time.
            </p>
            <p>
              I love to code because if I can think it, I can make it a reality. Every project 
              is an opportunity to learn something new and push the boundaries of what's possible.
            </p>
            
            <motion.button
              className="download-resume-btn"
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div className="title" variants={itemVariants}>
            <h3>What does he do?</h3>
            <p className="separator" />
          </motion.div>

          <motion.div className="desc" variants={itemVariants}>
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              I primarily work with JavaScript, building dynamic front-end experiences using React.js and Next.js.
              My projects follow a clean, component-driven architecture styled with Tailwind CSS, and I occasionally use Bootstrap
              for quick layouts. I focus on building scalable, responsive UIs as part of full-stack solutions.
            </p>
            <p>
              On the back-end, I work primarily with Node.js and Express, building RESTful APIs and scalable server-side logic.
              I integrate with MongoDB or MySQL, depending on the use case, and focus on creating secure, modular, and maintainable backends
              that power full-stack applications.
            </p>
          </motion.div>

          <motion.div className="desc" variants={itemVariants}>
            <h4 className="subtitle">Building for Impact.</h4>
            <p>
              I approach development with a problem-solving mindset — aiming to build systems that are practical, scalable, and meaningful. 
              It's not just about writing code; it's about creating solutions that improve real-world experiences.
            </p>
            <p>
              I enjoy crafting fullstack architectures that combine intuitive UIs, efficient APIs, and robust data handling. 
              My focus is always on clarity, performance, and long-term maintainability — because good software should evolve, not break.
            </p>
          </motion.div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="title">
            <h3>Tech Stack</h3>
            <p className="separator" />

            <div className="descTechS full">
              <div className="TechContainer">
                <motion.a 
                  href="https://www.mongodb.com" 
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=mongodb"
                    alt="Mongodb"
                  />
                </motion.a>
                <motion.a 
                  href="https://expressjs.com" 
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=express"
                    alt="Express js"
                  />
                </motion.a>
                <motion.a 
                  href="https://www.djangoproject.com/" 
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=django"
                    alt="Django"
                  />
                </motion.a>
                <motion.a 
                  href="https://react.dev" 
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=react"
                    alt="React js"
                  />
                </motion.a>
                <motion.a 
                  href="https://nodejs.org/en" 
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=nodejs"
                    alt="Node js"
                  />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="title">
            <div className="SkillsMargin">
              <h3>Skills</h3>
            </div>
            <p className="separatorSkills" />
          </div>
          <Skills />
        </motion.div>

        <motion.div 
          className="title" 
          style={{marginTop:"30px"}}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3>GitHub Contributions</h3>
          <p className="separatorGithub" />
        </motion.div>

        <motion.div 
          className="graph-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <a href="https://github.com/AdityaCJaiswal" target="_blank" rel="noopener noreferrer"> 
            <img className="GraphImg" src={GitGraph} alt="GitHub Contribution Graph" />
          </a>
        </motion.div>
        <motion.div 
          className="graph-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <a href="https://github.com/AdityaCJaiswal" target="_blank" rel="noopener noreferrer"> 
            <img className="GraphImg" src={contri} alt="GitHub Contribution Graph" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;