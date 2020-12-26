import React, { useEffect } from "react";
import CardGrid from "../components/CardGrid";
import Carousel from "../components/Carousel";
import TitleBox from "../components/TitleBox";

const Home = () => {
  return (
    <div className="homescreen-container">
      <div className="homescreen-banner">
        <video
          autoplay="autoplay"
          loop="true"
          muted="muted"
          className="banner-video"
        >
          <source src="video/galaxy.mp4" type="video/mp4" />
        </video>
        <div className="banner-caption">
          <div>
            <h1 className="banner-text">Algolizer</h1>
          </div>
        </div>
      </div>

      <CardGrid></CardGrid>
    </div>
  );
};

export default Home;

// <video
//   onMouseEnter={(e) => {
//     playVid();
//   }}
//   class="preview"
//   src="https://www.youtube.com/watch?v=KTkkXphS0f4&t=80s"
//   poster="img/pathfinder2.jpg"
//   preload
// ></video>;
