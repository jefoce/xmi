import styled from 'styled-components';

export const BodyWrapper = styled.div`
  position      : relative;
  display       : flex;
  flex-direction: column;
  min-height    : 120vh;
  background    : ${({ theme }) => theme.color.gray[100]};
  z-index       : 9999;
  padding       : 40px;
`;

export const DownloadWrapper = styled.div`
  position   : absolute;
  width      : 100%;
  top        : -70px;
  margin-left: -40px;
`;

export const AlignArrow = styled.div`
  display: flex;
  align-self: center;

  svg * {
    fill: ${({ theme }) => theme.color.gray[60]};
  }
`;