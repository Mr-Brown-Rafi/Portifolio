import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    { name: 'Portfolio Website', description: 'A personal portfolio showcasing my skills and projects.' },
    { name: 'Lookup Service API', description: 'A scalable API using .NET Core for device lookups.' },
    { name: 'React Todo App', description: 'A task management application with state management.' }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
