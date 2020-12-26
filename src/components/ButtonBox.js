import React from "react";

const ButtonBox = ({ text, type, callback }) => {
  return (
    <div className="button-box">
      <div
        className={`box button-${type}`}
        onClick={() => {
          callback(type);
        }}
      />
      <div>{text}</div>
    </div>
  );
};

export default ButtonBox;
