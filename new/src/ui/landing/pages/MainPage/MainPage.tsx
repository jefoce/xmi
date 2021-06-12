import { InfoView } from "../../views/InfoView";
import { MainView } from "../../views/MainView";

import * as styled from "./MainPage.styled";

type Props = {};

export const MainPage: React.FC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <MainView />
      <InfoView />
    </styled.BodyWrapper>
  );
};
