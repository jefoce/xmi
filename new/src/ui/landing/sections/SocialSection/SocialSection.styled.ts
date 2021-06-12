import styled from "styled-components";

export const BodyWrapper = styled.div`
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  margin-left    : -40px;
  margin-right   : 20px;
  z-index        : 9998;
  transition     : 500ms 100ms;

  & > * {
    transition: 250ms;
    opacity   : 0.5;
    margin    : 20px 0;
  }
  
  svg {
    object-fit: fill;
    width     : 20px;
  }
  
  & > *:hover {
    opacity: 1;
  }

  & > *:active {
    transition: 100ms;
    opacity   : 0.5;
  }

  &[data-visible="false"] {
    margin-left : 0px;
    margin-right: -20px;
  }

  &[data-horizontal="true"] {
    flex-direction: row;
    margin        : 0;

    & > * {
      opacity: 0.5;
      margin : 5vh 20px 20px 20px;
    }
  }
`;
