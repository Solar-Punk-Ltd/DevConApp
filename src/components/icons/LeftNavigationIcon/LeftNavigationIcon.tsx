import React from "react";

interface HomeIconProps {
  color?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ color }) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
        fill={color ? color : "var(--swarm-color)"}
      />
    </svg>
  );
};

export default HomeIcon;
