import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../assets/carousel/jobprospects.webp';
import image2 from '../assets/carousel/w3cert.webp';
import image3 from '../assets/carousel/w3policy.webp';

function ImageGallary(props) {
  return (
    <Carousel showIndicators={false} showArrows={false} showStatus={false}>
      <div>
        <img src={props.courseImage}/>
      </div>
      <div>
        <img src={props.imgHover}/>
      </div>
      <div>
        <img src={image2}/>
      </div>
      <div>
        <img src={image1}/>
      </div>
      <div>
        <img src={image3}/>
      </div>
    </Carousel>
  )
};

export default ImageGallary;