import React from "react";

const SliderBar = ({ sliderVal, setSliderVal, steps }) => {
  return (
    <div className="slidecontainer">
      <input
        type="range"
        min="0"
        max="100"
        step={steps}
        value={sliderVal}
        onChange={(e) => {
          setSliderVal(e.target.value);
        }}
        className="slider"
        id="myRange"
      />
    </div>
  );
};

export default SliderBar;
