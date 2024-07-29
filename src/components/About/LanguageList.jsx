import React from "react";

function LanguageList({ pL }) {
  return (
    <>
      <h2 className="text-2xl first-letter:text-5xl">Programming Languages</h2>
      <ul className="p-languages">
        {pL.map((lan) => {
          return (
            <>
              <li className={`lan-item ${lan}`} key={lan}>
                {lan}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default LanguageList;
