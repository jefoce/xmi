import { BrowserRouter } from "react-router-dom";

export const AppContainer: React.FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
