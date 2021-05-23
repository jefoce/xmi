import { Device, Media } from 'styled-components';

export const device: Device = {
  mobile_small: 320,
  mobile_medium: 375,
  mobile_large: 425,
  tablet: 768,
  laptop_small: 1024,
  laptop_medium: 1220,
  laptop_large: 1440,
  desktop: 1920,
};

export const media: Media = {
  mobile_small: `(max-width: ${device.mobile_small}px)`,
  mobile_medium: `(max-width: ${device.mobile_medium}px)`,
  mobile_large: `(max-width: ${device.mobile_large}px)`,
  tablet: `(max-width: ${device.tablet}px)`,
  laptop_small: `(max-width: ${device.laptop_small}px)`,
  laptop_medium: `(max-width: ${device.laptop_medium}px)`,
  laptop_large: `(max-width: ${device.laptop_large}px)`,
  custom: (breakpoint: number) => `(max-width: ${breakpoint}px)`,
};
