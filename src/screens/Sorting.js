import React, { useState, useEffect } from "react";
import "./styles/sortingStyles.css";
import { StyledBlock } from "../components/styles/StyledBlock";
import TitleBox from "../components/TitleBox";
import { createBlocks } from "../utils";
import {
  bubbleSort,
  mergeSort,
  quickSort,
  selectionSort,
  insertionSort,
} from "../algorithms/sortingAlgo";
import TriggerButton from "../components/TriggerButton";
import { resetBlockHeight } from "../utils";
import SliderBar from "../components/SliderBar";

const Sorting = () => {
  const [width, setWidth] = useState(100);
  const [speed, setSpeed] = useState(5);
  const [blocks, setBlocks] = useState(createBlocks(width));
  const [widthSlider, setWidthSlider] = useState(60);
  const [speedSlider, setSpeedSlider] = useState(20);
  const [option, setOption] = useState("bubble");

  useEffect(() => {
    let newWidth = widthSlider * 2;
    setWidth(newWidth);
    setBlocks(createBlocks(newWidth));
  }, [widthSlider]);

  useEffect(() => {
    let newSpeed = Math.floor(speedSlider / 7);
    console.log(newSpeed);
    setSpeed(newSpeed);
  }, [speedSlider]);

  const optionHandler = (e) => {
    resetBlockHeight(blocks);
    setBlocks(createBlocks(width));
    setOption(e.target.value);
  };

  const algoHandler = () => {
    var time_counter = [1];
    var blocks_copy = [...blocks];
    switch (option) {
      case "bubble":
        bubbleSort(blocks_copy, time_counter, speed);
        break;
      case "insertion":
        insertionSort(blocks_copy, time_counter, speed);
        break;
      case "merge":
        mergeSort(blocks_copy, time_counter, speed);
        break;
      case "quick":
        quickSort(blocks_copy, 0, blocks_copy.length - 1, time_counter, speed);
        break;
      case "selection":
        selectionSort(blocks_copy, time_counter, speed);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <TitleBox text="Sorting"></TitleBox>
      <div className="select-board">
        <div class="select">
          <select
            name="todos"
            class="filter-todo"
            onChange={(e) => {
              optionHandler(e);
            }}
          >
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="merge">Merge Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="selection">Selection Sort</option>
          </select>
        </div>
      </div>
      <div className="slider-board">
        <div className="slider-box">
          <label className="slider-label">No. of blocks</label>
          <SliderBar
            sliderVal={widthSlider}
            setSliderVal={setWidthSlider}
            variant="primary"
            steps="5"
          />
          <label className="slider-label">{2 * widthSlider} blocks</label>
        </div>
        <div className="slider-box">
          <label className="slider-label">Speed</label>
          <SliderBar
            sliderVal={speedSlider}
            setSliderVal={setSpeedSlider}
            variant="secondary"
            steps="1"
          />
          <label className="slider-label">{speedSlider} %</label>
        </div>
      </div>

      <div className="sorting-box">
        {blocks.map((block, idx) => {
          return (
            <StyledBlock
              style={{}}
              id={`block-${idx}`}
              height={block.height}
              width={width}
            ></StyledBlock>
          );
        })}
      </div>
      <div className="button-board justify-space">
        <TriggerButton
          text="Sort"
          variant="primary"
          callback={() => {
            algoHandler();
          }}
        ></TriggerButton>
        <TriggerButton
          text="Reset"
          variant="secondary"
          callback={() => {
            resetBlockHeight(blocks);
            setBlocks(createBlocks(width));
          }}
        ></TriggerButton>
      </div>
    </div>
  );
};

export default Sorting;
