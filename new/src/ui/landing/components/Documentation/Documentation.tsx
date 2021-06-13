import { useEffect, useRef, useState } from "react";
import { isIntoView } from "../../../utils";

import * as styled from "./Documentation.styled";

export type DocumentationProps = {
  title: string;
  src: {
    preview: string;
    main: string;
  };
  paragraphs?: string[];
};

export const Documentation: React.VFC<DocumentationProps> = ({ title, src, paragraphs }) => {
  const video = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!video?.current) return;
    const { current: player } = video; 
    
    let timeout: NodeJS.Timeout;   

    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setPlay(isIntoView(player));
      }, 500)
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [video]);

  return (
    <styled.BodyWrapper>
      <styled.Title>{title}</styled.Title>
      {paragraphs && (
        <styled.NumberList>
          {paragraphs?.map((value) => (
            <styled.Paragraph key={value} children={value} />
          ))}
        </styled.NumberList>
      )}
      <styled.VideoContainer ref={video}>
        <styled.Video data-play={play} src={src.main} />
        <img src={src.preview} alt='' />
      </styled.VideoContainer>
    </styled.BodyWrapper>
  );
};
