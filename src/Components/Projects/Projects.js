import React from 'react';
import Project from './Project';
import './Projects.css';
import AdaptiveLearn from './Images/AdaptiveLearn.png';
import DocIntel  from './Images/DocIntel.png';
import Time  from './Images/Time.png';

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working .
          </p>
        </div>
        <div className="projects-wrapper">
         

          
          <Project
            title="AdaptiveLearn - Personalized Learning Platform"
            img={AdaptiveLearn}
            tech="React, Node.js, Supabase, AI/ML"
            link="https://adaptivelearn.vercel.app/"
            repo="https://github.com/AdityaCJaiswal/Personalized-Video-Learning-Path"
          >
            <small>
              Built using React, Node.js, Supabase, AI/ML
            </small>
            <p>
            "Built AI-driven learning platform featuring personalized content delivery, real-time behavioral analytics, and adaptive
learning paths. Integrated YouTube API for video analysis, custom recommendation algorithms, and interactive
progress visualization with predictive modeling 
            </p>
          </Project>

          <Project
            title="DocIntel - AI Document Intelligence Platform"
            img={DocIntel}
            tech="Django REST  React  MySQL, FAISS, RAG"
            link="https://fresh-fruit-hub.onrender.com/"
            repo="https://github.com/AdityaCJaiswal/DocIntel-Document-Intelligence-Platform"
          >
            <small>
              Built using Django REST, React, MySQL, FAISS, RAG
            </small>
            <p>
            Developed an AI-powered document analysis platform enabling users to upload and interactively query PDF/DOCX
files using Retrieval-Augmented Generation. Implemented vector embeddings with SentenceTransformers and local
LLM integration via LM Studio for cost-free operation.
            </p>
          </Project>

          
          <Project
            title="Time Capsule using Blockchain"
            img={Time}
            tech=""
            link="https://time-capsule-blockchain.vercel.app/"
            repo="https://github.com/AdityaCJaiswal/Time-capsule-Blockchain"
          >
            <small>
              Built with Solidity, Ethereum, MERN Stack.
            </small>
            <p>
            Built a DApp to store time-locked messages on the Ethereum blockchain using smart contracts. Ensured secure,
delayed access via timestamp-based retrieval logic.
            </p>
          </Project>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;


