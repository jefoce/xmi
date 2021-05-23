import { Font } from 'styled-components';
import { FontVariant } from './styled';

const createFontProps = (weight: number) => (size: number) => `
  font-family: Avenir Next Cyr;
  font-style: normal;
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${size * 0.9}px;
`;

type FontVariantBuilder = (size: number) => string;

const buildFontVariant = (build: FontVariantBuilder): FontVariant => ({
  size_18: build(18),
  size_24: build(24),
  size_30: build(30),
  size_36: build(36),
  size_42: build(42),
  size_60: build(60),
  size   : build
});

const bold = createFontProps(800);
const demi = createFontProps(700);
const medium = createFontProps(600);
const regular = createFontProps(500);
const light = createFontProps(400);

export const fonts: Font = {
  light: buildFontVariant(light),
  regular: buildFontVariant(regular),
  medium: buildFontVariant(medium),
  demi: buildFontVariant(demi),
  bold: buildFontVariant(bold),
};
