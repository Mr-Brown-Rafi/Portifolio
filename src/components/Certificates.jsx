import React from "react";
import "../styles/Certificates.css"; 
import FSE from "../assets/FSE.jpg"
import AZ from "../assets/AZ204.png"

const Certificates = () => {
  const certificates = [
    {
      title: "React Developer Certificate",
      issuer: "Microsoft",
      date: "April 2022",
      image: AZ, 
    },
    {
      title: "Full Stack Developer Certificate",
      issuer: "IIHT",
      date: "November 2023",
      image: FSE, 
    },
  ];

  return (
    <div className="certificates-container" id="certs">
      <h2 className="certificates-title">Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-image"
            />
            <div className="certificate-info">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
