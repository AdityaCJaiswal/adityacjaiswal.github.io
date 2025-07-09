import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "TypeScript", level: 75, icon: "🔷" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Next.js", level: 75, icon: "▲" },
        { name: "Tailwind CSS", level: 85, icon: "💨" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "Spring Boot", level: 60, icon: "🌱" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "Django", level: 65, icon: "🎯" }
      ]
    },
    {
      title: "Other Tools & Technologies",
      skills: [
        { name: "Git", level: 80, icon: "📝" },
       // { name: "Docker", level: 55, icon: "🐳" },
      //  { name: "AWS", level: 60, icon: "☁️" },
       // { name: "Firebase", level: 60, icon: "🔥" },
       { name: "Postman", level: 80, icon: "📮" },
       { name: "RAG", level: 75, icon: "📚" },       
       { name: "Blockchain", level: 65, icon: "⛓️" },
       { name: "DSA", level: 65, icon: "🧠" },

      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          className="heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="title">Technical Skills</h3>
          <p className="separator" />
          <p className="subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={categoryVariants}
            >
              <h4 className="category-title">{category.title}</h4>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1
                    }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;