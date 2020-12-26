import styled from "styled-components";

let color = {
  start: "var(--buttonStart)",
  end: "var(--buttonEnd)",
  block: "var(--buttonBlock)",
};

export const StyledBlock = styled.div`
  height: ${(props) => [props.height]}%;
  width: calc(100% / ${(props) => props.width});
  background-color: #4e8d7c;
  margin: 0 2px;
  border: 0.1px solid #d6e0f0;
`;
