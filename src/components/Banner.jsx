import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src="https://links.papareact.com/gi1" alt="" loading="lazy" />
        </div>
        <div>
          <img src="https://links.papareact.com/6ff" alt="" loading="lazy" />
        </div>
        <div>
          <img src="https://links.papareact.com/7ma" alt="" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
