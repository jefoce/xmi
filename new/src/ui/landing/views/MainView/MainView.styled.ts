import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display        : flex;
  position       : sticky;
  justify-content: center;
  width          : 100%;
  top            : 0;
  left           : 0;
  z-index        : 1;
  height         : calc(var(--vh, 1vh) * 100);
  /* overflow-x: hidden; */
  overflow-y: hidden;
  background: radial-gradient(circle 50vh at 50% 20%, #383b46 0%, #1a1c20 100%);
  transition: 200ms;
  
  &[data-scroll=true] {
    filter: brightness(0.1);
    transform: scale(0.95);
    /* transition: 150ms 0ms; */
    /* border-radius: 10px; */

    /* ::after {
      opacity: 0.7;
    } */
  }

  /* ::after {
    position  : absolute;
    content   : '';
    top       : 0;
    left      : 0;
    width : 100vw;
    max-width : 100vw;

    height    : 100vh;
    background: #000;
    opacity   : 0;
    transition: 300ms;
    transform : scale(1.5);
  } */
`;

export const ContentWrapper = styled.div`
	display        : flex;
	flex-direction : column;
	align-items    : center;
	justify-content: space-between;
`;

export const AppImage = styled.img`
  display      : flex;
  object-fit   : contain;
  width        : 90%;
  max-height   : 65vh;
  flex         : 1;
  margin-top   : -5vh;
  margin-bottom: -5vh;
`;

export const DownloadWrapper = styled.div`
  display        : flex;
  flex-direction : column;
  justify-content: flex-start;
  flex           : 1;
`;
