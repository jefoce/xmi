import { useMediaQuery } from "../../../@core/hooks/useMediaQuery";
import { useEffect, useState } from "react";

import { NeonSection } from "../../sections/NeonSection";
import { NameSection } from "../../sections/NameSection";

import { SocialSection } from "../../sections/SocialSection";

import * as styled from "./MainView.styled";
import screenshot from "../../../../assets/images/app.png";

type Props = {};
type ProgramInfo = {
  ver: string; 
  link: string;
}

export const MainView: React.FC<Props> = () => {
  const toggleSocial = useMediaQuery(724);
  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollY } = window;
      if (scrollY > 50) return setScroll(true);
      if (scrollY < 50) return setScroll(false);
    });    
  }, []);

  return (
    <styled.BodyWrapper data-scroll={scroll}>
      <styled.ContentWrapper>
        <NeonSection visible={!scroll} />
        <NameSection />
        <styled.AppImage src={screenshot} />
        <styled.DownloadWrapper>
          {toggleSocial && <SocialSection horizontal />}
        </styled.DownloadWrapper>
      </styled.ContentWrapper>
      {!toggleSocial && <SocialSection visible={!scroll} />}
    </styled.BodyWrapper>
  );
};
