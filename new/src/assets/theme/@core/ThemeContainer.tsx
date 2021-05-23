import React from "react";

import { GlobalThemeProvider } from "../providers";
import { theme } from "../default-theme";

type Props = {};

export const ThemeContainer: React.FC<Props> = ({ children }) => {
  return <GlobalThemeProvider theme={theme}>{children}</GlobalThemeProvider>;
};
