import styled from "styled-components";

let color = {
  start: "var(--buttonstart)",
  end: "var(--buttonend)",
  block: "var(--buttonblock)",
};

export const StyledCell = styled.div`
  width: auto;
  background: ${(props) => color[props.type]};
  border: 0.1px solid #d6e0f0;
  border-bottom-color: black, 0.5;
  &:hover {
    transform: scale(1.1);
    box-shadow: 2px 2px #839b97;
  }
`;
