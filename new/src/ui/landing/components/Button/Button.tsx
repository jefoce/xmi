import { useCallback } from "react";
import * as styled from "./Button.styled";

type Props = {
  link?: string;
  blank?: boolean;
  onClick?: () => void;
  filled?: boolean;
};

export const Button: React.FC<Props> = ({ children, link, blank, filled, onClick }) => {
  const _onClick = useCallback(() => {
    if (link) {
      if (blank) window.open(link, '_blank');
      else {
        window.location.href = link;
        window.history.replaceState(null, 'XMI Watch', window.location.pathname);
      };
    };

    onClick && onClick();
  }, [blank, link, onClick]);

  return (
    <styled.BodyWrapper data-filled={filled}>
      <button onClick={_onClick}>{children}</button>
    </styled.BodyWrapper>
  );
};
