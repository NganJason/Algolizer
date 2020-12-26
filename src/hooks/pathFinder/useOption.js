import { useState } from "react";

export const useOption = () => {
  const [option, setOption] = useState("");

  const updateOption = (input) => {
    setOption(input);
  };

  return [option, updateOption];
};
