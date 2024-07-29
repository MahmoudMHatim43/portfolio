import React from "react";
import "./home-content-view.css";
function ContenOverview() {
  return (
    <div className="home-content-container">
      <h2 className="text-2xl first-letter:text-5xl mb-3">About</h2>
      <p className="m-2">
        In this Page you will find information about me if you would like to
        know who I am and know more about me feel free to visit.
      </p>
      <h2 className="text-2xl first-letter:text-5xl mb-3">Projects</h2>
      <p className="m-2">
        There you will find some of my projcts that I have been working on, I
        will appreciate any feedback if you have free time Contact me.
      </p>
      <h2 className="text-2xl first-letter:text-5xl mb-3">Contact</h2>
      <p className="m-2">
        There you will be able to contact me through different social media
        account, e-mail or even phone number.
      </p>
    </div>
  );
}

export default ContenOverview;
