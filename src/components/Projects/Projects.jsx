// import "./projects.css";
import React from "react";
// import ImageSlider from "./ImageSlider/ImageSlider";
// // <ImageSlider url={"https://dummyjson.com/products?limit="} limit={"5"} />
// import QrCodeGenerator from "./QrCode/QrCode";
// import TicTacToe from "./TicTacToe/TicTacToe";
// import StarRating from "./StarRating/StarRating";
// import RandomColor from "./RandomColor/RandomColor";
// import Calculator from "./Calculator/Calculator";
// import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
const Projects = () => {
  const projects = [
    {
      title: "Image Slider",
      description: "A project that allows users to slide through images.",
      imageUrl: "/Projects/Image-slider.PNG",
      link: "./ImageSlider/ImageSlider/Projects/ImageSlider/ImageSlider",
    },
    {
      title: "QrCode Generator",
      description: "A project that generates QR codes based on user input.",
      imageUrl: "/Projects/qrCode.PNG",
      link: "./QrCode/QrCode",
    },
    {
      title: "Tic Tac Toe",
      description: "A classic game of tic tac toe.",
      imageUrl: "/Projects/tictactoe.PNG",
      link: "./TicTacToe/TicTacToe",
    },
    {
      title: "Star Rating",
      description: "A simple star rating system.",
      imageUrl: "/Projects/rate.PNG",
      link: "./StarRating/StarRating",
    },
    {
      title: "Random Color",
      description: "A project that generates random colors.",
      imageUrl: "/Projects/random-color.PNG",
      link: "./RandomColor/RandomColor",
    },
    {
      title: "Calculator",
      description:
        "A simple calculator that performs basic arithmetic operations.",
      imageUrl: "/Projects/calculator.PNG",
      link: "./Calculator/Calculator",
    },
    {
      title: "Expense Tracker",
      description:
        "A simple expense tracker that allows users to log their expenses.",
      imageUrl: "/Projects/expense-tracker.PNG",
      link: "./ExpenseTracker/ExpenseTracker",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <div className="project" key={project.title}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <img src={project.imageUrl} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
