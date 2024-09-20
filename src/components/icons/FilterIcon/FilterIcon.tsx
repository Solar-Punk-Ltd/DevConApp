import React from "react";
import "./FilterIcon.scss";

interface FilterIconProps {
  color?: string;
  backgroundColor?: string;
  onClick: () => void;
}

const FilterIcon: React.FC<FilterIconProps> = ({
  color,
  backgroundColor,
  onClick,
}) => {
  return (
    <div
      className="filter-icon"
      onClick={onClick}
      style={{ backgroundColor: backgroundColor || "#8c72ae" }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 13C0 12.5844 0.335938 12.25 0.75 12.25H2.61438C2.93313 11.2344 3.88125 10.5 5 10.5C6.11875 10.5 7.06563 11.2344 7.38438 12.25H15.25C15.6656 12.25 16 12.5844 16 13C16 13.4156 15.6656 13.75 15.25 13.75H7.38438C7.06563 14.7656 6.11875 15.5 5 15.5C3.88125 15.5 2.93313 14.7656 2.61438 13.75H0.75C0.335938 13.75 0 13.4156 0 13ZM6 13C6 12.4469 5.55312 12 5 12C4.44688 12 4 12.4469 4 13C4 13.5531 4.44688 14 5 14C5.55312 14 6 13.5531 6 13ZM11 5.5C12.1187 5.5 13.0656 6.23438 13.3844 7.25H15.25C15.6656 7.25 16 7.58437 16 8C16 8.41563 15.6656 8.75 15.25 8.75H13.3844C13.0656 9.76562 12.1187 10.5 11 10.5C9.88125 10.5 8.93438 9.76562 8.61563 8.75H0.75C0.335938 8.75 0 8.41563 0 8C0 7.58437 0.335938 7.25 0.75 7.25H8.61563C8.93438 6.23438 9.88125 5.5 11 5.5ZM12 8C12 7.44688 11.5531 7 11 7C10.4469 7 10 7.44688 10 8C10 8.55313 10.4469 9 11 9C11.5531 9 12 8.55313 12 8ZM15.25 2.25C15.6656 2.25 16 2.58594 16 3C16 3.41563 15.6656 3.75 15.25 3.75H8.38437C8.06562 4.76562 7.11875 5.5 6 5.5C4.88125 5.5 3.93437 4.76562 3.61562 3.75H0.75C0.335938 3.75 0 3.41563 0 3C0 2.58594 0.335938 2.25 0.75 2.25H3.61562C3.93437 1.23563 4.88125 0.5 6 0.5C7.11875 0.5 8.06562 1.23563 8.38437 2.25H15.25ZM5 3C5 3.55312 5.44688 4 6 4C6.55312 4 7 3.55312 7 3C7 2.44781 6.55312 2 6 2C5.44688 2 5 2.44781 5 3Z"
          fill={color ? color : "white"}
        />
      </svg>
    </div>
  );
};

export default FilterIcon;