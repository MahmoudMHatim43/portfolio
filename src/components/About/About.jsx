import "./about.css";
import React from "react";
import Bio from "./Bio";
import Personal from "./Personal";
import LanguageList from "./LanguageList";
import Skills from "./Skills";
function About() {
  const personalInfo = [
    { key: "Name", value: "Mahmoud Mohamed Hatim Suliman" },
    { key: "Age", value: 25 },
    { key: "Nationality", value: "Sudanese" },
    { key: "Location", value: "Qatar, Doha" },
    { key: "Email", value: "mahmoudmhatim@gmail.com" },
    { key: "Phone", value: "+97466682112" },
  ];
  const pL = ["JavaScript", "React", "HTML", "CSS", "C", "Python", "SQLite"];
  const softSkills = [
    "Problem Solving",
    "Adaptability",
    "Time Management",
    "Multitasking",
    "Teamwork",
    "Attention to Detail",
    "Conflict Resolution",
  ];
  return (
    <div className="about-container">
      <Bio />
      <Personal personalInfo={personalInfo} />
      <LanguageList pL={pL} />
      <Skills skills={softSkills} />
    </div>
  );
}

export default About;
