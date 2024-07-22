import React from "react";

function Personal({ personalInfo }) {
  return (
    <>
      <h2>Personal Information</h2>
      <ul className="personal-info">
        {personalInfo.map((info) => {
          return (
            <li className="info-item" key={info.key}>
              {info.key} : {info.value}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Personal;
