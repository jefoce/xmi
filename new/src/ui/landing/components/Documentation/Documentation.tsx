import { useEffect, useRef } from "react";
import { isIntoView } from "../../../utils";

// @ts-ignore
import ReactFreezeFrame from "react-freezeframe";

import * as styled from "./Documentation.styled";

export type DocumentationProps = {
  title: string;
  src: string;
  paragraphs?: string[];
};

export const Documentation: React.VFC<DocumentationProps> = ({ title, src, paragraphs }) => {
  // const video = useRef<any>(null);

  // useEffect(() => {
  //   if (!video?.current) return;
  //   const { current: player } = video;

  //   const onScroll = () => {
  //     const play = isIntoView(player);
  //     play ? player.start() : player.stop();
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, [video]);

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
      <styled.Video src={src}  />
    </styled.BodyWrapper>
  );
};
