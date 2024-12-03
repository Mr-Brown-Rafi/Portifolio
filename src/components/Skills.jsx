// SkillsSection.js
import React from "react";
import "../styles/Skills.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SkillsSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C#", "JavaScript"],
    },
    {
      category: "Web Frameworks & Technologies",
      items: [".NET Core", "React.js", "Blazor", "Entity Framework Core"],
    },
    {
      category: "Databases",
      items: ["MS SQL Server", "MongoDB"],
    },
    {
      category: "Cloud & DevOps",
      items: ["Azure", "Kubernetes", "Jenkins", "Docker"],
    },
    {
      category: "Tools & Version Control",
      items: ["Visual Studio", "Postman", "Git", "Jira"],
    },
    {
      category: "Methodologies",
      items: ["Agile", "Scrum"],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Enables spacing between slides
    centerPadding: "30px", // Adjust padding between slides
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="skills-section">
      <h2 className="skills-header">Technical Skills</h2>
      <Slider {...settings} className="skills-slider">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-header">{skillCategory.category}</h3>
            <ul className="skills-list">
              {skillCategory.items.map((item, idx) => (
                <li key={idx} className="skill-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsSection;
