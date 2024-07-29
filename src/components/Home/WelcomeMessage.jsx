import React from "react";
import "./home-welcome.css";
function WelcomeMessage() {
  return (
    <div className="welcome-message text-3xl">
      <h1>Welcome to my Protfolio</h1>
      <p>Where I will be showing my skills and projects</p>
      <p className="quote">
        "Hard work beats talent when talent doesn't work hard."
        <br /> - Tim Notke
      </p>
    </div>
  );
}

export default WelcomeMessage;
