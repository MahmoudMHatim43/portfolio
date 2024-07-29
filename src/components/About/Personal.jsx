import React from "react";

function Personal({ personalInfo }) {
  return (
    <>
      <h2 className="text-2xl first-letter:text-5xl">Personal Information</h2>
      <ul className="personal-info bg-[rgba(0,0,0,0.3)] p-5 rounded-2xl">
        {personalInfo.map((info) => {
          return (
            <li className="info-item text-lg" key={info.key}>
              {info.key} : {info.value}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Personal;
