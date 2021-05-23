import React from 'react';

export const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='120' height='120' viewBox='0 0 120 120' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d)'>
        <path
          d='M60.004 100C37.9205 99.9758 20.0243 82.0814 20 60V59.2C20.4398 37.2182 38.5402 19.7119 60.5267 20.0036C82.5133 20.2953 100.143 38.2756 99.9991 60.2614C99.8555 82.2472 81.9925 99.9956 60.004 100ZM52.0032 42.0001V78L76.0056 60L52.0032 42.0001Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_d'
          x='0'
          y='0'
          width='120'
          height='120'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
          <feOffset />
          <feGaussianBlur stdDeviation='10' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>
  );
};
