import React from "react";

export const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="36" height="12" viewBox="0 0 36 12" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
      <rect
        x="16.5869"
        y="10.4617"
        width="20.9235"
        height="1.77147"
        rx="0.885734"
        transform="rotate(-30 16.5869 10.4617)"
        fill="white"
      />
      <rect
        x="0.885742"
        y="0.00402832"
        width="20.9235"
        height="1.77147"
        rx="0.885734"
        transform="rotate(30 0.885742 0.00402832)"
        fill="white"
      />
    </svg>
  );
};
