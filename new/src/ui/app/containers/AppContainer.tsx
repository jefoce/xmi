import { BrowserRouter } from "react-router-dom";
import { ThemeContainer } from "../../../assets/theme";

export const AppContainer: React.FC = ({ children }) => {
  return (
    <ThemeContainer>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeContainer>
  );
};
