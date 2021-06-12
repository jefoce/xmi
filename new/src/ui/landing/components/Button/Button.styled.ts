import styled from 'styled-components';

export const BodyWrapper = styled.div`
  & > * {
    ${({ theme }) => theme.font.regular.size_18};
    
    color        : ${({ theme }) => theme.color.white};
    background   : none;
    padding      : 8px;
    border-radius: 5px;
    transition   : 100ms;
    cursor       : pointer;
    width        : 30vw;
    max-width    : 200px;

    :active {
      opacity: 0.5;
    }
  }

  &[data-filled=true] > * {
    background: ${({ theme }) => theme.color.white};
    color     : ${({ theme }) => theme.color.gray[100]};
  }
`;
