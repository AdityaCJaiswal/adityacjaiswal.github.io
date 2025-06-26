import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../SocialLinks';
import './Menu.css';

const Menu = props => {
  const menuVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <motion.div 
        className="menu-items"
        variants={menuVariants}
        initial="hidden"
        animate={props.showMenu === 'active' ? "visible" : "hidden"}
      >
        <motion.ul variants={itemVariants}>
          <motion.li variants={itemVariants}>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              HOME
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href="#about" onClick={props.toggleMenu}>
              ABOUT
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href="#experience" onClick={props.toggleMenu}>
              EXPERIENCE
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href="#skills" onClick={props.toggleMenu}>
              SKILLS
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href="#projects" onClick={props.toggleMenu}>
              PORTFOLIO
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href="#contact" onClick={props.toggleMenu}>
              CONTACT
            </a>
          </motion.li>
        </motion.ul>
        <motion.div variants={itemVariants}>
          <SocialLinks />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Menu;