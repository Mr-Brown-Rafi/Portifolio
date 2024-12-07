import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    { 
      name: 'Product Assessment Toolkit', 
      industry: 'Retail', 
      type: 'Scratch Application', 
      description: 'This application helps assess returned products from customers. Each product follows a specific procedure, and some may lack accessories. The application ensures product quality, records missing or faulty parameters, and consolidates data from various locations. It presents visuals to aid decisions for secondary markets.' 
    },
    { 
      name: 'Device Lookup Service', 
      industry: 'Retail', 
      type: 'Scratch Project', 
      description: 'An abstraction service over external APIs to determine the lock status of electronic devices connected to cellular networks. It checks whether a device is carrier-locked or user-locked by communicating with respective device company services.' 
    },
    { 
      name: 'Eclipse', 
      industry: 'Banking', 
      type: 'Migrated Legacy App to .NET Core', 
      description: 'A credit card processing application for new consumers. It adjusts credit limits based on FICO scores, blocks credit cards failing certain criteria, and supports lending and underwriting operations.' 
    },
    { 
      name: 'CLAOps', 
      industry: 'Banking and Finance Sector', 
      type: 'Migration', 
      description: 'A centralized software for logging and monitoring the health of applications and services. It provides detailed visualizations based on collected logs to ensure system stability and performance.' 
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-industry"><strong>Industry:</strong> {project.industry}</p>
            <p className="project-type"><strong>Type:</strong> {project.type}</p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
