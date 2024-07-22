import React from "react";

function Skills({ skills }) {
  return (
    <>
      <h2>Soft Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </>
  );
}

export default Skills;
