import { useProgramInfo } from "../../../../business/hooks/useProgramInfo";

import { Arrow } from "../../components/Arrow";
import { Button } from "../../components/Button";

import * as styled from "./DownloadSection.styled";

type Props = {};

export const DownloadSection: React.FC<Props> = ({ children }) => {
  const { link } = useProgramInfo();

  return (
    <styled.BodyWrapper>
      <styled.Container>
        <styled.Buttons>
          <Button children={"Docs"} link="#docs" />
          <Button children={"Download"} filled link={link} />
          <Button children={"Donuts"} link="https://www.donationalerts.com/r/jefoces" blank />
        </styled.Buttons>
        <Arrow />
      </styled.Container>
    </styled.BodyWrapper>
  );
};
