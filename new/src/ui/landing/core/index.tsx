import { ProgramInfoProvider } from "../../../business/providers/ProgramInfoProvider";
import { MainPage } from "../pages/MainPage";

export const Landing: React.FC = () => {
  return (
    <ProgramInfoProvider>
      <MainPage />
    </ProgramInfoProvider>
  );
};
