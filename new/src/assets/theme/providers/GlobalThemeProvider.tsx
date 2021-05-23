import { useViewport } from '../hooks/useViewport';
import { DefaultTheme, ThemeProvider } from 'styled-components';

type Props = {
  theme: DefaultTheme;
};

export const GlobalThemeProvider: React.FC<Props> = ({ theme, children }) => {
  const viewport = useViewport();

  return <ThemeProvider theme={{ ...theme, viewport }}>{children}</ThemeProvider>;
};
