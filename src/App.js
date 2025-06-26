import React, { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import './App.css';

class App extends Component {
  state = {
    menuState: false,
    isLoading: true
  };

  componentDidMount() {
    // Simulate loading time
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);

    this.setupParallax();
    this.setupSmoothScrolling();
  }

  toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
        ? 'active'
        : state.menuState === 'deactive'
          ? 'active'
          : 'deactive'
    }));
  };

  setupParallax = () => {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        if (silhouette) silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        if (forest) forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (header) {
        if (scrollPos - 100 <= window.innerHeight)
          header.style.visibility = header.style.visibility === 'hidden' ? 'visible' : 'visible';
        else header.style.visibility = 'hidden';
      }

      if (navbar) {
        if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
        else navbar.classList.remove('bg-active');
      }
    };
  };

  setupSmoothScrolling = () => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    for (let i in internalLinks) {
      if (internalLinks.hasOwnProperty(i)) {
        internalLinks[i].addEventListener('click', e => {
          e.preventDefault();
          const target = document.querySelector(internalLinks[i].hash);
          if (target) {
            target.scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          }
        });
      }
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loading-screen">
          <motion.div
            className="loading-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="loading-spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Loading Portfolio...
            </motion.h2>
          </motion.div>
        </div>
      );
    }

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Header />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default App;