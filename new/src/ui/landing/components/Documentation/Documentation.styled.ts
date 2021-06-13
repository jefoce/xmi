import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display        : flex;
	flex-direction : column;
	align-items    : center;
	justify-content: center;
	width          : 100%;
	height         : fit-content;

  /* :not(:last-child) { */
    border-bottom: 3px solid ${({ theme }) => theme.color.gray[60]};
    margin-bottom: 5vh;
    padding-bottom: 10vh;
  /* } */
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.demi.size_26};
  color: ${({ theme }) => theme.color.white};

  line-height  : 30px;
  margin-bottom: 15px;
  text-align   : center;
`;

export const NumberList = styled.div`
  display      : flex;
  flex-wrap    : wrap;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  ${({ theme }) => theme.font.light.size_18};

  color      : ${({ theme }) => theme.color.white};
  background : ${({ theme }) => theme.color.gray[40]};

  display      : flex;
  border-radius: 5px;
  width        : fit-content;
  padding      : 5px 15px;
  margin       : 5px;
  line-height  : 30px;

  :not(:last-child) {
    padding: 5px 0 5px 15px;

    ::after {
      display      : flex;
      content      : '';
      height       : 50%;
      right        : 0px;
      width        : 20px;
      margin-left  : 5px;
      align-self   : center;
      border-radius: 7px;
      clip-path    : polygon(20% 50%, 0 0, 50% 50%, 0% 100%);
      background   : ${({ theme }) => theme.color.gray[60]};
    }
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  
  img {
    display      : flex;
    max-height   : 75vh;
    max-width    : 100%;
    border-radius: 5px;
    object-fit   : contain;
  }
`;

export const Video = styled.img`
  position: absolute;
  top     : 0;
  left    : 0;

  &[data-play=false] {
    visibility: hidden;
  }
`;
