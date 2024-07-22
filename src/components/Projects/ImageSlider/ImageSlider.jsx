import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./image-slider.css";
function ImageSlider({ url, limit }) {
  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    if (url !== "") getImages(url, limit);
  }, [url]);

  async function getImages(url, limit) {
    try {
      setLoading(true);
      const promise = await fetch(url + limit);
      const data = await promise.json();
      if (data) {
        setImages(data.products);
        console.log(images);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.message);
    }
  }

  function slideImage(direction, slide) {
    const slider = document.querySelector(".images");
    switch (direction) {
      case "right":
        slide == 9
          ? (slider.style.left = `0%`)
          : (slider.style.left = `-${(slide + 1) * 100}%`);
        slide == 9 ? setSlide(0) : setSlide((prevSlide) => prevSlide + 1);
        break;
      case "left":
        slide == 0
          ? (slider.style.left = `-${(images.length - 1) * 100}%`)
          : (slider.style.left = `-${(slide - 1) * 100}%`);
        slide == 0
          ? setSlide(images.length - 1)
          : setSlide((prevSlide) => prevSlide - 1);
        break;
    }
  }

  if (loading) {
    return <h1 className="image-slider-loading">Loading..</h1>;
  }
  if (errorMessage !== null) {
    return (
      <div className="image-slider-error">
        <h1>Error Occurd:</h1>${errorMessage}
      </div>
    );
  }
  return (
    <div className="container">
      <button
        className="right"
        onClick={() => {
          slideImage("right", slide);
        }}>
        <FaArrowAltCircleRight />
      </button>
      <div className="images">
        {images.map((image) => {
          return (
            <div
              style={{ backgroundImage: `url(${image.images[0]})` }}
              key={image.id}></div>
          );
        })}
      </div>
      <button
        className="left"
        onClick={() => {
          slideImage("left", slide);
        }}>
        <FaArrowAltCircleLeft />
      </button>
    </div>
  );
}
export default ImageSlider;
