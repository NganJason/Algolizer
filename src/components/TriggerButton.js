import React from "react";

const TriggerButton = ({ text, variant, callback }) => {
  return (
    <button className={`trigger-button variant-${variant}`} onClick={callback}>
      {text}
    </button>
  );
};

export default TriggerButton;
