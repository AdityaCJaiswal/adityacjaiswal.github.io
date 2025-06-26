import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../SocialLinks';
import './Footer.css';

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3 className="footer-title">Aditya Jaiswal</h3>
            <p className="footer-subtitle">Full Stack Developer & AI Enthusiast</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <SocialLinks />
            <p className="footer-email">adityajaiswal.codes@gmail.com</p>
          </div>
        </motion.div>
        
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Aditya Jaiswal. Made with ❤️ and lots of ☕</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;