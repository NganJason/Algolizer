import React from "react";
import ButtonBox from "./ButtonBox";

const ButtonBoard = ({ callback }) => {
  return (
    <div className="button-board justify-center">
      <ButtonBox type="start" text="Start" callback={callback} />
      <ButtonBox type="end" text="End" callback={callback} />
      <ButtonBox type="block" text="Block" callback={callback} />
    </div>
  );
};

export default ButtonBoard;
