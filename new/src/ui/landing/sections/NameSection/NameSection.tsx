import { useProgramInfo } from "../../../../business/hooks/useProgramInfo";
import * as styled from "./NameSection.styled";

export const NameSection: React.VFC = () => {
  const { version } = useProgramInfo();

  return (
    <styled.BodyWrapper>
      <styled.NameContainer>
        <styled.SubName>XMI</styled.SubName>
        <styled.Name>Watch</styled.Name>
      </styled.NameContainer>
			<styled.Version>Version {version}</styled.Version>
    </styled.BodyWrapper>
  );
};
