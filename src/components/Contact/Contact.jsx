import "./contact.css";
import React from "react";
import { useState } from "react";
function Contact() {
  const [txt, setTxt] = useState("");
  const condition = txt.length < 10 ? true : false;
  const accounts = [
    {
      title: "Facebook",
      link: "https://www.facebook.com/mahmoud.mhatim",
    },
    { title: "GitHub", link: "https://github.com/MahmoudMHatim43" },
    { title: "X", link: "https://x.com/7oota43" },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/mahmoud-mohamed-hatim-suliman-2300832a8/",
    },
    { title: "Instagram", link: "https://www.instagram.com/hootam22/" },
  ];
  function handleSubmit(e) {
    e.preventDefault();
    setTxt("");
  }
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="scoial-media-accounts">
        {accounts.map((account) => {
          return (
            <a
              href={account.link}
              key={account.title}
              className={account.title.toLowerCase()}>
              {account.title}
            </a>
          );
        })}
      </div>
      <form className="protfolio-form" onSubmit={handleSubmit}>
        <label htmlFor="message">Please Write your Message Here</label>
        <textarea
          name="message"
          value={txt}
          onChange={(e) => {
            setTxt(e.target.value);
          }}
          placeholder="I appreciate any feedback 😊"></textarea>
        <button disabled={condition}>Send</button>
      </form>
    </div>
  );
}

export default Contact;
