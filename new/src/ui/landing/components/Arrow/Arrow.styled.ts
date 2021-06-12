import styled from 'styled-components';

export const BodyWrapper = styled.div`
  margin-top: 20px;
  
  svg {
    transition: 0.5s;
    height: 8px;
    opacity: 0.5;
  }

	&[data-scrolled=true] {
    svg {
      opacity: 1;
      transform: rotate(180deg);
    }
  }
`;
