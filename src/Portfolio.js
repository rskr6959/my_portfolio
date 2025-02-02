import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome styles
import './Portfolio.css'; // Ensure you have this file for additional styling
import project1Image from './assets/images/project1.png';
import project2Image from './assets/images/project2.png';
import project3Image from './assets/images/project3.png';
import project4Image from './assets/images/project4.png';
import project5Image from './assets/images/project5.png';
import project6Image from './assets/images/project6.png';


const projects = [
    {
      id: 1,
      title: "Dynamic Cover-Letter Generator",
      image: project1Image,
      year: 2024,
      link: "https://github.com/rajupooja1211/cover-letter-generator.git"
    },
    {
      id: 2,
      title: "SanFrancisco_CrimeAnalysis",
      image: project3Image,
      year:  2024,
      link: "https://github.com/rajupooja1211/SanFransisco_CrimeAnalysis.git"
    },
    {
      id:3,
      title: "Stock Notification System",
      year: 2024,
      image: project5Image,
      link: "https://github.com/rajupooja1211/stocknotification_system.git"
      
    },
    
    {
      id: 4,
      title: "Real Vs Fake",
      year:   2023,
      image: project4Image,
      link: "https://github.com/rajupooja1211/Fake_vs_Real.git"
    },
    {
      id: 5,
      title: "E-Commerce Website",
      image: project2Image,
      year: 2023,
      link: "https://github.com/rajupooja1211/PopShop.git"

    },
    {
      id:6,
      title: "Teachers Automatic Timetable Generator",
      year: 2023,
      image: project6Image,
      link: "https://github.com/rajupooja1211/Teachers_automatic_timetable_generator.git"

    },
  ];
  const skills = [
    { name: "Java", icon: "fab fa-java" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Python", icon: "fab fa-python" },
    { name: "C#", icon: "fas fa-code" },
    { name: "TypeScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "NodeJS", icon: "fab fa-node-js" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" },
    { name: "JQuery", icon: "fas fa-code" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "MongoDB", icon: "fas fa-leaf" },
    { name: "Firebase", icon: "fas fa-fire" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "GCP", icon: "fas fa-cloud" },
    { name: "Django", icon: "fas fa-code" },
    { name: "Android Studio", icon: "fab fa-android" },
    { name: "Github", icon: "fab fa-github" },
    { name: "Swift", icon: "fab fa-swift" },
    { name: "Tableau", icon: "fas fa-chart-bar" },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Santa Clara University",
      year: "2023 - 2025",
      icon: "fas fa-graduation-cap"
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Visvesvaraya Technology University",
      year: "2019 - 2023",
      icon: "fas fa-university"
    }
  ];
  
  const experience = [
    {
      role: "Software Engineering Intern",
      company: "Life Stages",
      year: "2024",
      icon: "fas fa-laptop-code"
    },
    
    {
      role: "Android App Developer Intern",
      company: "SmartKnower",
      year: "2022",
      icon: "fab fa-android"
    }
  ];
  
  
const Portfolio = () => {
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleContactForm = () => {
    setShowContact(!showContact);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = () => {
    const { name, email, message } = formData;
    const mailtoLink = `mailto:poojaraju1211@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
    
    window.location.href = mailtoLink;
  };
  return (
    <div id="root">
      {/* Header Section with Background Video */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        
         
        <video autoPlay loop muted playsInline
          className="absolute top-0 left-0 w-full h-full object-cover">
  <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
</video>

        {/* GitHub Corner Ribbon */}
        <a
          href="https://github.com/rajupooja1211" // Replace with your GitHub profile URL
          className="github-corner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 250 250"
            className="github-icon"
            fill="currentColor"
          >
            {/* <path d="M0 0l115 115h15l12 27 108 108V0z" /> */}
            <path
              className="octo-arm"
              d="M128 109c-15 0-28 13-28 28 0 14 9 26 21 30 2 1 3-1 3-2v-6c-9 2-11-4-11-4-1-2-3-4-5-4-4-1 0-5 0-5 5-1 7 4 7 4 4 7 11 5 14 4 0-4 1-7 3-8-11-1-22-6-22-23 0-5 2-9 5-12 0-1-2-6 0-12 0 0 4-1 13 5a46 46 0 0 1 24 0c9-6 13-5 13-5 2 6 0 11 0 12 3 3 5 7 5 12 0 17-11 22-22 23 2 2 4 6 4 12v18c0 1 1 3 3 2 12-4 21-16 21-30 0-15-13-28-28-28z"
            />
          </svg>
        </a>
        {/* Contact Me Button */}
        <button className="contactButton" onClick={toggleContactForm}>
          CONTACT ME
        </button>

        {/* Contact Form Modal */}
        <div className={`contactModal ${showContact ? 'show' : ''}`}>
            <div className="contactForm">
              
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
              <div className="buttonContainer">
              <button onClick={handleSendEmail}>Send Email</button>

  <button className="closeButton" onClick={toggleContactForm}>Close</button>
</div>

            </div>
          </div>
        
      </div>


      {/* Projects Section */}
      <div className="projectsContainer">
      <h2 className="projectsTitle">Projects</h2> 
        
        <div className="projectsWrapper">
          {projects.map((project, index) => (
            <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard"
            key={index}
          >
            <img src={project.image} alt={project.title} className="projectImage" />
            
              <div className="projectYear">{project.year}</div>
              <h3 className="projectTitle">{project.title}</h3>
              </a>
             ))}
        </div>
      </div>

    {/* {skills section} */}
      <div className="skillsContainer">
  <h2 className="skillsTitle">Skills</h2>
  <div className="skillsWrapper">
    <div className="skillsMarquee">
      <div className="skillsList">
        {skills.concat(skills).map((skill, index) => (
          <div className="skillItem" key={index}>
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* Education Section */}
<div className="educationExperienceContainer">
        <h2 className="sectionTitle">Education</h2>
        <div className="eduExpWrapper">
          {education.map((edu, index) => (
            <div className="eduExpCard" key={index}>
              <i className={edu.icon}></i>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <span>{edu.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="educationExperienceContainer">
        <h2 className="sectionTitle">Experience</h2>
        <div className="eduExpWrapper">
          {experience.map((exp, index) => (
            <div className="eduExpCard" key={index}>
              <i className={exp.icon}></i>
              <h3>{exp.role}</h3>
              <p>{exp.company}</p>
              <span>{exp.year}</span>
            </div>
          ))}
        </div>
      </div>





      <div style={{ height: "0px" }}></div>
    </div>
  );
};

export default Portfolio;
