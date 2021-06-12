import { useCallback, useEffect, useState } from "react";

import { IconButton } from "../../../@core/modules/Button";
import { ArrowIcon } from "../../../../assets/icons/ArrowIcon";

import * as styled from "./Arrow.styled";

type Props = {};

export const Arrow: React.FC<Props> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);	

  useEffect(() => window.addEventListener("scroll", () => setScrolled(window.scrollY > 0)), []);

  const scroll = useCallback(() => window.scrollTo({ top: scrolled ? 0 : window.innerHeight, behavior: 'smooth' }), [scrolled]);

  return (
    <styled.BodyWrapper data-scrolled={scrolled}>
      <IconButton onClick={scroll}>
        <ArrowIcon />
      </IconButton>
    </styled.BodyWrapper>
  );
};
