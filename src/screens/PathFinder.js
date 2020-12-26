import React from "react";

import ButtonBoard from "../components/ButtonBoard";
import Stage from "../components/Stage";
import TitleBox from "../components/TitleBox";
import TriggerButton from "../components/TriggerButton";

import { aStarFindPath } from "../algorithms/aStar";

import { useOption } from "../hooks/pathFinder/useOption";
import { useLocation } from "../hooks/pathFinder/useLocation";
import { useStage } from "../hooks/pathFinder/useStage";

const PathFinder = () => {
  const [option, updateOption] = useOption();
  const [location, setLocation, updateLocation] = useLocation();
  const [stage, setStage, resetStage] = useStage(location, setLocation);

  return (
    <div>
      <TitleBox text="Path Finder" />
      <ButtonBoard callback={updateOption} />
      <div className="button-board justify-space">
        <TriggerButton
          text="Start"
          variant="primary"
          callback={() => {
            resetStage(false);
            aStarFindPath(
              location.start,
              location.end,
              stage,
              setStage,
              updateLocation
            );
          }}
        >
          Start
        </TriggerButton>
        <div class="select">
          <select name="todos" class="filter-todo">
            <option value="A Star">A Star</option>
            <option value="Dijsktra">Dijsktra</option>
          </select>
        </div>
        <TriggerButton
          text="Reset"
          variant="secondary"
          callback={() => {
            resetStage(true);
          }}
        ></TriggerButton>
      </div>

      <Stage stage={stage} option={option} callback={updateLocation} />
    </div>
  );
};

export default PathFinder;
