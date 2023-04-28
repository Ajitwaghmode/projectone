import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img12 from "../assets/12.jpg";
import img14 from "../assets/14.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img12} alt="Item1" />
          <p className="legend">Full Stack - React,Node.js </p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Cloud Computing</p>
        </div>
        <div>
          <img src={img1} alt="Item3" />
          <p className="legend">Data Science</p>
        </div>
        <div>
          <img src={img14} alt="Item3" />
          <p className="legend">HTML, CSS, javascript</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
