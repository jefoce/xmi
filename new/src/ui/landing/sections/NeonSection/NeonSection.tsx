/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import * as styled from "./NeonSection.styled";

type Props = {
  visible?: boolean;
}

export const NeonSection: React.VFC<Props> = ({ visible = true }) => {
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [resize, setResize] = useState(false);
  
  useEffect(() => window.addEventListener('resize', () => {
    setResize(true);
    setTimer((timer) => {
      timer && clearTimeout(timer);
      return setTimeout(() => setResize(false), 250) as any;
    })
  }), []);

  return (
    <styled.Container data-resize={resize} data-visible={visible} >
      <styled.NeonTop />
      <styled.NeonLeft className={'neon-horizontal'} />
      <styled.NeonRight className={'neon-horizontal'} />
    </styled.Container>
  );
};
