import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  /* justify-content: flex-end; */
  flex           : 1;

  @media ${({ theme }) => theme.media.tablet} {
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const SubName = styled.p`
  ${({ theme }) => theme.font.light.size_26};
  color: ${({ theme }) => theme.color.white};
`;

export const Name = styled.p`
  ${({ theme }) => theme.font.bold.size_60};
  color: ${({ theme }) => theme.color.white};
  margin-bottom: -1.5px;
`;

export const Version = styled.p`
  ${({ theme }) => theme.font.medium.size_14};
  color: ${({ theme }) => theme.color.gray[60]};
  text-align: center;
  margin-top: 20px;
`;