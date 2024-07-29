import React from "react";

function Bio() {
  return (
    <>
      <img src={"/About/profile-image.jpg"} alt="profile-image" />
      <h2 className="my-name text-2xl first-letter:text-5xl">
        Mahmoud Mohamed Hatim Suliman
      </h2>
      <p className="bio text-xl bg-[rgba(0,0,0,0.3)] p-5 rounded-2xl">
        I am a Front-End Web Developer 🔥. I am passionate about creating
        beautiful 💅 and functional web applications 🔧. I am always looking for
        new challenges and opportunities to improve my skills and knowledge 🔍.
        I am excited to be a part of this community 🤝 and contribute to the
        growth of the web development industry. 🚀
      </p>
    </>
  );
}

export default Bio;
