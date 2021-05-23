import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    font: Font;
    media: Media;
    device: Device;
    layer: Layers;
    viewport: Viewport;
    headerHeight: string;
  }

  export interface Color {
    black: string;
    white: string;
    yellow: string;
    blue: string;
    green: string;
    red: string;
    orange: HueColor;
    gray: HueColor;
  }

  export interface HueColor {
    10?: string;
    20?: string;
    40?: string;
    60?: string;
    80?: string;
    100?: string;
  }

  export interface Font {
    light: FontVariant;
    regular: FontVariant;
    medium: FontVariant;
    demi: FontVariant;
    bold: FontVariant;
  }

  export interface Device {
    mobile_small: number;
    mobile_medium: number;
    mobile_large: number;
    tablet: number;
    laptop_small: number;
    laptop_medium: number;
    laptop_large: number;
    desktop: number;
  }

  export interface Media {
    mobile_small: string;
    mobile_medium: string;
    mobile_large: string;
    tablet: string;
    laptop_small: string;
    laptop_medium: string;
    laptop_large: string;
    custom: (breakpoint: number) => string;
  }

  export interface Viewport {
    height: string;
    width: string;
  }
}

interface FontVariant {
  size_18: string;
  size_24: string;
  size_30: string;
  size_36: string;
  size_42: string;
  size_60: string;
  size: (size: number) => string;
}

interface Layers {
  level_0: string;
  level_1: string;
  level_2: string;
  level_3: string;
  level_4: string;
  level_5: string;
}
