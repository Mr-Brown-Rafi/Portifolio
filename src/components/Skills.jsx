import React from "react";
import { 
  BookIcon, 
  CodeIcon, 
  DatabaseIcon, 
  GlobeIcon, 
  LayersIcon, 
  ServerIcon 
} from "lucide-react";
import "../styles/Skills.css"; // Importing the CSS file

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: <CodeIcon className="icon" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML5", "CSS3"],
    },
    {
      category: "Frontend Frameworks",
      icon: <GlobeIcon className="icon" />,
      skills: ["React", "Next.js", "Vue.js", "Angular", "Svelte"],
    },
    {
      category: "Backend Technologies",
      icon: <ServerIcon className="icon" />,
      skills: ["Node.js", "Express.js", "Django", "Flask", "Spring Boot"],
    },
    {
      category: "Databases",
      icon: <DatabaseIcon className="icon" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    },
    {
      category: "Cloud & DevOps",
      icon: <LayersIcon className="icon" />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    },
    {
      category: "Libraries & Tools",
      icon: <BookIcon className="icon" />,
      skills: ["Redux", "GraphQL", "Tailwind CSS", "Jest", "Webpack"],
    },
  ];

  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-card">
            <div className="skills-header">
              {category.icon}
              <h3 className="skills-category">{category.category}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skills-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
