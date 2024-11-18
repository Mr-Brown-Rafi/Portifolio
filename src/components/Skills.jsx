import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skills = ['.NET', 'React', 'DevOps', 'MongoDB', 'FluentValidation'];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
