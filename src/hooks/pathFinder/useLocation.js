import { useState } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState({
    start: null,
    end: null,
    block: {},
  });

  const updateLocation = (cell, option) => {
    switch (option) {
      case "start":
        setLocation((prev) => ({ ...prev, start: { ...cell, type: "start" } }));
        break;
      case "block":
        setLocation((prev) => ({ ...prev, block: { ...cell, type: "block" } }));
        break;
      case "end":
        setLocation((prev) => ({ ...prev, end: { ...cell, type: "end" } }));
        break;
      default:
        return;
    }
  };
  return [location, setLocation, updateLocation];
};
