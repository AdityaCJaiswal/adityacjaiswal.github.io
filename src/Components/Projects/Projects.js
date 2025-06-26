import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';
import Project from './Project';
import './Projects.css';
import AdaptiveLearn from './Images/AdaptiveLearn.png';
import DocIntel from './Images/DocIntel.png';
import Time from './Images/Time.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: "AdaptiveLearn - Personalized Learning Platform",
      description: "Built AI-driven learning platform featuring personalized content delivery, real-time behavioral analytics, and adaptive learning paths. Integrated YouTube API for video analysis, custom recommendation algorithms, and interactive progress visualization with predictive modeling.",
      image: AdaptiveLearn,
      technologies: ["React", "Node.js", "Supabase", "AI/ML", "YouTube API"],
      liveLink: "https://adaptivelearn.vercel.app/",
      githubLink: "https://github.com/AdityaCJaiswal/Personalized-Video-Learning-Path",
      category: "Full Stack",
      featured: true
    },
    {
      id: 2,
      title: "DocIntel - AI Document Intelligence Platform",
      description: "Developed an AI-powered document analysis platform enabling users to upload and interactively query PDF/DOCX files using Retrieval-Augmented Generation. Implemented vector embeddings with SentenceTransformers and local LLM integration via LM Studio for cost-free operation.",
      image: DocIntel,
      technologies: ["Django REST", "React", "MySQL", "FAISS", "RAG", "AI"],
      liveLink: "https://fresh-fruit-hub.onrender.com/",
      githubLink: "https://github.com/AdityaCJaiswal/DocIntel-Document-Intelligence-Platform",
      category: "AI/ML",
      featured: true
    },
    {
      id: 3,
      title: "Time Capsule using Blockchain",
      description: "Built a DApp to store time-locked messages on the Ethereum blockchain using smart contracts. Ensured secure, delayed access via timestamp-based retrieval logic with immutable storage and cryptographic security.",
      image: Time,
      technologies: ["Solidity", "Ethereum", "React", "Web3.js", "Smart Contracts"],
      liveLink: "https://time-capsule-blockchain.vercel.app/",
      githubLink: "https://github.com/AdityaCJaiswal/Time-capsule-Blockchain",
      category: "Blockchain",
      featured: false
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          className="heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="title">Featured Projects</h3>
          <p className="separator" />
          <p className="subtitle">
            A showcase of my recent work and technical expertise across different domains
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
                <div className="project-category">
                  <Code size={16} />
                  {project.category}
                </div>
              </div>

              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h4>Want to see more?</h4>
          <p>Check out my GitHub for additional projects and contributions</p>
          <motion.a
            href="https://github.com/AdityaCJaiswal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            Visit GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;