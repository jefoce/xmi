import { DefaultTheme } from "styled-components";

import { colors } from "./colors";
import { fonts } from './fonts';
import { device, media } from "./media";

export const theme: DefaultTheme = {
  media,
  device,

  color: colors,
  font: fonts,

  layer: {
    level_0: 'z-index: 0;',
    level_1: 'z-index: 10;',
    level_2: 'z-index: 20;',
    level_3: 'z-index: 30;',
    level_4: 'z-index: 40;',
    level_5: 'z-index: 50;',
  },

  viewport: {
    height: '100vh',
    width: '100vw',
  },

  headerHeight: '120px',
};