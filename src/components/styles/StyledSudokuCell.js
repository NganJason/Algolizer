import styled from "styled-components";

let color = {
  start: "var(--buttonStart)",
  end: "var(--buttonEnd)",
  block: "var(--buttonBlock)",
};

export const StyledSudokuCell = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: ${(props) => (props.isDefault ? "#045762" : "#e9c496")};
  background: ${(props) => color[props.type]};
  border: 0.1px solid #d6e0f0;
  border-bottom-color: black, 0.5;
  &:hover {
    transform: ${(props) => (props.isDefault ? "" : "scale(1.05)")};
    box-shadow: ${(props) => (props.isDefault ? "" : "2px 2px #839b97")};
  }
`;
