import "./projects.css";
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
      title: "Full Stack Blog App",
      description:
        "A dynamic blog app with Express, Nodemon, Mongoose, and CORS. Features include creating, editing, and deleting blogs, smooth page transitions, and an engaging loading indicator.",
      imageUrl: "/Projects/full-stack-blog-app.PNG",
      link: "",
    },
    {
      title: "Expense Tracker V2.0",
      description:
        "Advanced tracker with dynamic charts and transaction modals.",
      imageUrl: "/Projects/express-app-v2.0.PNG",
      link: "",
    },
    {
      title: "Food Recipe App",
      description: "Fetches recipes and includes a favorites feature.",
      imageUrl: "/Projects/food-recipe-app.PNG",
      link: "./ExpenseTracker/ExpenseTracker",
    },
    {
      title: "Shop Cart with React-Redux",
      description: "A shopping cart built using React-Redux.",
      imageUrl: "/Projects/redux-shop-cart-app.PNG",
      link: "./ExpenseTracker/ExpenseTracker",
    },
    {
      title: "Image Slider",
      description: "An interactive image slider application.",
      imageUrl: "/Projects/Image-slider.PNG",
      link: "./ImageSlider/ImageSlider/Projects/ImageSlider/ImageSlider",
    },
    {
      title: "QR Code Generator",
      description: "Generates QR codes from user input.",
      imageUrl: "/Projects/qrCode.PNG",
      link: "./QrCode/QrCode",
    },
    {
      title: "Tic Tac Toe",
      description: "The classic Tic Tac Toe game.",
      imageUrl: "/Projects/tictactoe.PNG",
      link: "./TicTacToe/TicTacToe",
    },
    {
      title: "Star Rating",
      description: "A simple and intuitive star rating system.",
      imageUrl: "/Projects/rate.PNG",
      link: "./StarRating/StarRating",
    },
    {
      title: "Random Color Generator",
      description: "Generates random colors with each click.",
      imageUrl: "/Projects/random-color.PNG",
      link: "./RandomColor/RandomColor",
    },
    {
      title: "Calculator",
      description: "Performs basic arithmetic operations.",
      imageUrl: "/Projects/calculator.PNG",
      link: "./Calculator/Calculator",
    },
    {
      title: "Expense Tracker",
      description: "Logs and tracks expenses efficiently.",
      imageUrl: "/Projects/expense-tracker.PNG",
      link: "./ExpenseTracker/ExpenseTracker",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-heading text-3xl first-letter:text-5xl p-2">
        Projects
      </h1>
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <div className="project" key={project.title}>
              <h2 className="p-2">{project.title}</h2>
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
