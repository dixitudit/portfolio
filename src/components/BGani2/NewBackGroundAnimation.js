import React from "react";

const NewBackgroundAnimation = () => (
  <div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M301 150C301 233.064 233.064 301 150 301C66.9359 301 -1.37761e-05 233.064 -1.41977e-05 150C-1.46192e-05 66.9359 66.9359 -1.4608e-05 150 -1.4608e-05C233.064 -1.4608e-05 301 66.9359 301 150Z"
          stroke="url(#new_paint0_radial)"
        />
        <path
          d="M502 452C562.627 452 612 502.373 612 563C612 623.627 562.627 673 502 673C441.373 673 392 623.627 392 563C392 502.373 441.373 452 502 452Z"
          stroke="url(#new_paint1_radial)"
        />
        <path
          d="M452 152C508.627 152 552 195.373 552 252C552 308.627 508.627 352 452 352C395.373 352 352 308.627 352 252C352 195.373 395.373 152 452 152Z"
          stroke="url(#new_paint2_radial)"
        />
      </g>
      <ellipse cx="450" cy="250" rx="20" ry="20" fill="#FF6B6B">
        <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#new_path_0" />
        </animateMotion>
      </ellipse>
      <ellipse cx="150" cy="150" rx="15" ry="15" fill="#4ECDC4">
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#new_path_1" />
        </animateMotion>
      </ellipse>
      <ellipse cx="500" cy="550" rx="25" ry="25" fill="#FFD93D">
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#new_path_2" />
        </animateMotion>
      </ellipse>
      <defs>
        <radialGradient
          id="new_paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(150 150) rotate(90) scale(150)"
        >
          <stop offset="0.5" stopColor="#FF6B6B" />
          <stop offset="1" stopColor="#FF6B6B" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="new_paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(502 563) rotate(90) scale(111)"
        >
          <stop offset="0.5" stopColor="#4ECDC4" />
          <stop offset="1" stopColor="#4ECDC4" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="new_paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(452 252) rotate(90) scale(100)"
        >
          <stop offset="0.5" stopColor="#FFD93D" />
          <stop offset="1" stopColor="#FFD93D" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

export default NewBackgroundAnimation;
