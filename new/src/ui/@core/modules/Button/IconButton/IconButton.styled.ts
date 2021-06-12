import styled from 'styled-components';

export const IconWrapper = styled.button`
  display   : flex;
  background: none;
  cursor    : pointer;
  transition: 100ms;

  :disabled {
    opacity: 0.3 !important;
    cursor : auto;
  }

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.5;
  }
`;