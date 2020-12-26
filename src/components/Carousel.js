import React from "react";

const Carousel = () => {
  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img src="img/pathfinder.jpg" className="banner-img" />
        <div class="text">Caption Text</div>
      </div>
      <div className="mySlides fade">
        <img src="img/sorting.jpg" className="banner-img" />
        <div className="text">Caption Text</div>
      </div>
      <a
        className="prev"
        onClick={() => {
          //   plusSlides(-1);
        }}
      >
        &#10094;
      </a>
      <a
        className="prev"
        onClick={() => {
          //   plusSlides(1);
        }}
      >
        &#10095;
      </a>
    </div>
  );
};

export default Carousel;
