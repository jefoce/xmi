import styled from "styled-components";

export const Container = styled.div`
  --neon-height: 0.3vh;
  width: 100%;
  
  .neon-horizontal {
    bottom: calc(100vh / 2);
    width: 100vh;
    transform: rotate(-90deg);
  }
  
  &[data-resize=true] {
    div {
      transition: none;
    }
  }

  &[data-visible=false] {
    div {
      opacity: 0;
      transition: none;
    }
  }

  div {
    position: absolute;
    transition: 1s 0.5s;
    height: var(--neon-height);
  }
`;

export const NeonTop = styled.div`
  top: 0;
  width: 100vw;
  background: radial-gradient(50% 20480001.12% at 50% 33.81%, #7caaff 0%, rgba(85, 139, 255, 0) 100%);
`;

export const NeonRight = styled.div`
  right: calc((-100vh / 2) + var(--neon-height) / 2);
  background: radial-gradient(50% 6479999.74% at 50% 49.69%, #ffc888 0%, rgba(255, 200, 136, 0) 100%);
`;

export const NeonLeft = styled.div`
  left: calc((-100vh / 2) + var(--neon-height) / 2);
  background: radial-gradient(50% 6479999.94% at 50% 33.33%, #88ff9b 0%, rgba(86, 255, 114, 0) 100%);
`;
