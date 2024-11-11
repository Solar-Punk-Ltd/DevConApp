import React from 'react';

interface VisitorsIconProps {
  color?: string;
}

const VisitorsIcon: React.FC<VisitorsIconProps> = ({ color }) => {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.75 6C7.40703 6 8.75 4.6568 8.75 3C8.75 1.3432 7.40703 0 5.75 0C4.09297 0 2.75 1.3432 2.75 3C2.75 4.6568 4.09297 6 5.75 6ZM5.75 1.125C6.78383 1.125 7.625 1.96617 7.625 3C7.625 4.03383 6.78383 4.875 5.75 4.875C4.71617 4.875 3.875 4.03359 3.875 3C3.875 1.96617 4.71641 1.125 5.75 1.125ZM6.93828 7.125H4.56172C2.31805 7.125 0.5 8.94375 0.5 11.1867C0.5 11.6367 0.86375 12 1.31234 12H10.1867C10.6367 12 11 11.6367 11 11.1867C11 8.94375 9.18125 7.125 6.93828 7.125ZM1.64164 10.875C1.79797 9.40078 3.04766 8.25 4.56172 8.25H6.93828C8.45258 8.25 9.68281 9.40148 9.85859 10.875H1.64164ZM11.7289 7.5H9.99805C11.075 8.38359 11.75 9.70547 11.75 11.1867C11.75 11.4867 11.6609 11.7633 11.5156 12H14.75C15.1648 12 15.5 11.6625 15.5 11.2289C15.5 9.17813 13.8219 7.5 11.7289 7.5ZM10.625 6C12.0758 6 13.25 4.82578 13.25 3.375C13.25 1.92422 12.0758 0.75 10.625 0.75C10.0365 0.75 9.49906 0.950508 9.06125 1.27758C9.33125 1.79602 9.5 2.37656 9.5 3C9.5 3.8325 9.22039 4.59703 8.75961 5.21977C9.23516 5.7 9.89375 6 10.625 6Z"
        fill={color ? color : '#4A2875'}
      />
    </svg>
  );
};

export default VisitorsIcon;
