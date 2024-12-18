import React from "react";
import "./ProjectInfoCard.css";
import ImageGrey from "../assets/ImageGrey.jpeg";
import GitIconWhite from "../assets/GitIconWhite.svg";
import WebIconWhite from "../assets/WebIconWhite.svg";

const ProjectInfoCard = ({ project }) => {
  const handleDemoClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  const handleCodeClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="project-wrapper">
      <div className="project-card">
        <img 
          src={ImageGrey}
          alt={`${project.name} screenshot`} 
          className="project-image" 
        />
        <div className="project-info">
          <div className="project-content">
            <div className="project-tags">
              {project.tags && project.tags.map((tag, index) => (
                <span key={index} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <h3>{project.name}</h3>
            <p className="project-description">
            The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.
            </p>
          </div>
          <div className="project-links">
            <button 
              className="demo-button"
              onClick={() => handleDemoClick(project.netlify)}
            >
              <img src={WebIconWhite} alt="Demo Icon" className="button-icon" /> {/* Icon for Demo button */}
              Live Demo
            </button>
            <button 
              className="code-button"
              onClick={() => handleCodeClick(project.github)}
            >
              <img src={GitIconWhite} alt="Code Icon" className="button-icon" /> {/* Icon for Code button */}
              View Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoCard;
