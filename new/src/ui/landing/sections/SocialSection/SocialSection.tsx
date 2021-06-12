/* eslint-disable jsx-a11y/anchor-is-valid */
import { IconButton } from "../../../@core/modules/Button";

import { GoogleIcon } from "../../../../assets/icons/GoogleIcon";
import { InstagramIcon } from "../../../../assets/icons/InstagramIcon";
import { LinkedInIcon } from "../../../../assets/icons/LinkedInIcon";

import * as styled from "./SocialSection.styled";

type Props = {
  horizontal?: boolean;
  visible?: boolean;
};

export const SocialSection: React.VFC<Props> = ({ horizontal, visible = true }) => {
  return (
    <styled.BodyWrapper data-horizontal={horizontal} data-visible={visible}>
      <a href="https://www.instagram.com/s.nowtiger" target="_blank" rel="noreferrer">
        <IconButton children={<InstagramIcon />} />
      </a>
      <a href="mailto:jefoce23@gmail.com">
        <IconButton children={<GoogleIcon />} />
      </a>
      <a href="https://linkedin.com/in/vlad-egorov-code" target="_blank" rel="noreferrer">
        <IconButton children={<LinkedInIcon />} />
      </a>
    </styled.BodyWrapper>
  );
};
