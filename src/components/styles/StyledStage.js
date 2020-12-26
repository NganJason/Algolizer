import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  margin: auto;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(100vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 0px;
  width: 100%;
  max-width: 100vw;
  max-height: 100vh;
  margin-bottom: 5rem;
`;
