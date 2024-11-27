import React, { useState } from 'react';
import '../styles/Skills.css';

// Custom SVG Icons
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-blue-600">
    <path d="M16 18l6-6-6-6" />
    <path d="M8 6l-6 6 6 6" />
  </svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-blue-600">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-blue-600">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-blue-600">
    <circle cx="12" cy="8" r="7" />
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </svg>
);

const SkillCategory = ({ title, skills, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="skill-category">
      <div className="skill-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="skill-icon-title">
          <Icon />
          <h3 className="skill-title">{title}</h3>
        </div>
        <span className="expand-icon">{isExpanded ? '▼' : '►'}</span>
      </div>

      {isExpanded && (
        <div className="skill-details-container">
          <div className="skill-details">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C#', 'JavaScript', 'TypeScript'],
      icon: CodeIcon,
    },
    {
      title: 'Web Technologies',
      skills: ['.NET Core', 'React.js', 'Web API', 'Blazor', 'Entity Framework', 'Bootstrap'],
      icon: CodeIcon,
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Azure DevOps'],
      icon: CloudIcon,
    },
    {
      title: 'Databases',
      skills: ['MS SQL Server', 'MongoDB'],
      icon: DatabaseIcon,
    },
    {
      title: 'Certifications',
      skills: ['Azure Developer Associate', 'Azure Fundamentals'],
      icon: AwardIcon,
    },
  ];

  return (
    <div id="skills" className="skills-container">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skill-categories">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} title={category.title} skills={category.skills} icon={category.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;