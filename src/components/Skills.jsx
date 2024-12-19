import React from "react";
import { 
  BookIcon, 
  CodeIcon, 
  DatabaseIcon, 
  SettingsIcon, 
  LayersIcon, 
  ServerIcon 
} from "lucide-react";
import "../styles/Skills.css"; // Importing the CSS file

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: <CodeIcon className="icon" />,
      skills: ["C#","JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
    },
    {
      category: "Web Technologies",
      icon: <ServerIcon className="icon" />,
      skills: [".NET Core", "React.js", "Blazor", "Entity Framework Core", "xUnit"],
    },
    {
      category: "Databases",
      icon: <DatabaseIcon className="icon" />,
      skills: ["MongoDB", "MS SQL Server", "MySQL", "Redis"],
    },
    {
      category: "Cloud & DevOps",
      icon: <LayersIcon className="icon" />,
      skills: ["Azure", "Docker", "Kubernetes", "CI/CD", "Jenkins"],
    },
    {
      category: "Tools & Version Control",
      icon: <BookIcon className="icon" />,
      skills: ["Visual Studio", "VS Code","Postman", "SSMS", "Git", "Jira"],
    },
    {
      category: "Methodologies",
      icon: <SettingsIcon className="icon" />,
      skills: ["Agile", "Scrum"],
    }
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
