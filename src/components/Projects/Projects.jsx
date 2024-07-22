import React from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
// <ImageSlider url={"https://dummyjson.com/products?limit="} limit={"5"} />
import QrCodeGenerator from "./QrCode/QrCode";
import TicTacToe from "./TicTacToe/TicTacToe";
import StarRating from "./StarRating/StarRating";
import RandomColor from "./RandomColor/RandomColor";
import Calculator from "./Calculator/Calculator";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";

const Projects = () => {
  const projects = [
    {
      title: "Image Slider",
      description: "A brief description of project 1.",
      imageUrl: "https://via.placeholder.com/150",
      link: "./ImageSlider/ImageSlider/Projects/ImageSlider/ImageSlider",
    },
    {
      title: "QrCode Generator",
      description: "A brief description of project 2.",
      imageUrl: "https://via.placeholder.com/150",
      link: "./QrCode/QrCode",
    },
    {
      title: "Tic Tac Toe",
      description: "A brief description of project 3.",
      imageUrl: "https://via.placeholder.com/150",
      link: "./TicTacToe/TicTacToe",
    },
    {
      title: "Star Rating",
      description: "A brief description of project 4.",
      imageUrl: "https://via.placeholder.com/150",
      link: "./StarRating/StarRating",
    },
    {
      title: "Random Color",
      description: "A brief description of project 5.",
      imageUrl: "https://via.placeholder.com/150",
      link: "./RandomColor/RandomColor",
    },
    {
      title: "Calculator",
      description: "A brief description of project 6.",
      imageUrl: "https://via.placeholder.com/150",
      link: "./Calculator/Calculator",
    },
    {
      title: "Expense Tracker",
      description: "A brief description of project 7.",
      imageUrl: "https://via.placeholder.com/150",
      link: "./ExpenseTracker/ExpenseTracker",
    },
  ];

  return <></>;
};

export default Projects;
