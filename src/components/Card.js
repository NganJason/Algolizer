import React from "react";

const Card = ({ vid, title, subtitle }) => {
  const playVid = (e) => {
    let vid = document.getElementById(e.target.id);
    vid.play();
  };

  const pauseVid = (e) => {
    let vid = document.getElementById(e.target.id);
    vid.pause();
    vid.currentTime = 0;
  };
  return (
    <div className="card">
      <video
        id={title}
        width="100%"
        onMouseEnter={(e) => {
          playVid(e);
        }}
        onMouseOut={(e) => {
          pauseVid(e);
        }}
        muted="muted"
        preload
      >
        <source src={vid} type="video/mp4" />
      </video>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div className="card-subtitle">
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
