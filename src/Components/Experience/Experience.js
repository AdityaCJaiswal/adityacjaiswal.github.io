import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    // {
    //   id: 1,
    //   title: "Full Stack Developer",
    //   company: "Tech Innovators Inc.",
    //   period: "2023 - Present",
    //   description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    //   technologies: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"],
    //   type: "work"
    // },
    // {
    //   id: 2,
    //   title: "Frontend Developer Intern",
    //   company: "StartupXYZ",
    //   period: "2022 - 2023",
    //   description: "Developed responsive user interfaces and improved application performance by 40%. Collaborated with design team to implement pixel-perfect designs.",
    //   technologies: ["React", "JavaScript", "CSS3", "Git"],
    //   type: "work"
    // },
    {
      id: 1,
      title: "Bachelor of Technology",
      company: "Shri Ramdeobaba College of Engineering and Management, Nagpur",
      period: "2023 - present",
      description: "Pursuing Information Technology with focus on fullstack development, core CS concepts, and real-world project building",
      technologies: ["Data Structures", "Algorithms", "DBMS", "OS"],
      type: "education"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" ref={ref}>
      <div className="experience-container">
        <motion.div
          className="heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="title">Experience & Education</h3>
          <p className="separator" />
          <p className="subtitle">
            My journey through professional experience and academic achievements
          </p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${exp.type}`}
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4 className="timeline-title">{exp.title}</h4>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h5 className="timeline-company">{exp.company}</h5>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;