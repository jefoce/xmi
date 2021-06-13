import { Documentation } from "../../components/Documentation";
import { DownloadSection } from "../../sections/DownloadSection";
import { SocialSection } from "../../sections/SocialSection";
import { Arrow } from "../../components/Arrow";

import * as styled from "./InfoView.styled";
import { documentation } from "./InfoView.config";

type Props = {};

export const InfoView: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper id="docs">
      <styled.DownloadWrapper>
        <DownloadSection />
      </styled.DownloadWrapper>
      {documentation.map((props) => (
        <Documentation key={props.src.main} {...props} />
      ))}
      <styled.AlignArrow>
        <Arrow />
      </styled.AlignArrow>
      <SocialSection horizontal />
    </styled.BodyWrapper>
  );
};
