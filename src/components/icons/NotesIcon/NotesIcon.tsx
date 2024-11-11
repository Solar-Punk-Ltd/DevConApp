import React from 'react';

interface LikeProps {
  color?: string;
}

const NotesIcon: React.FC<LikeProps> = ({ color }) => {
  return (
    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H14.6897C14.8867 21.0003 15.0818 20.9616 15.2638 20.8862C15.4458 20.8107 15.611 20.7 15.75 20.5603L20.5603 15.75C20.7 15.611 20.8107 15.4458 20.8862 15.2638C20.9616 15.0818 21.0003 14.8867 21 14.6897V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM9 8.25H15C15.1989 8.25 15.3897 8.32902 15.5303 8.46967C15.671 8.61032 15.75 8.80109 15.75 9C15.75 9.19891 15.671 9.38968 15.5303 9.53033C15.3897 9.67098 15.1989 9.75 15 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9C8.25 8.80109 8.32902 8.61032 8.46967 8.46967C8.61032 8.32902 8.80109 8.25 9 8.25ZM12 15.75H9C8.80109 15.75 8.61032 15.671 8.46967 15.5303C8.32902 15.3897 8.25 15.1989 8.25 15C8.25 14.8011 8.32902 14.6103 8.46967 14.4697C8.61032 14.329 8.80109 14.25 9 14.25H12C12.1989 14.25 12.3897 14.329 12.5303 14.4697C12.671 14.6103 12.75 14.8011 12.75 15C12.75 15.1989 12.671 15.3897 12.5303 15.5303C12.3897 15.671 12.1989 15.75 12 15.75ZM9 12.75C8.80109 12.75 8.61032 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12C8.25 11.8011 8.32902 11.6103 8.46967 11.4697C8.61032 11.329 8.80109 11.25 9 11.25H15C15.1989 11.25 15.3897 11.329 15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303C15.3897 12.671 15.1989 12.75 15 12.75H9ZM15 19.1897V15H19.1906L15 19.1897Z"
          fill={color ? color : 'black'}
        />
      </svg>
    </div>
  );
};

export default NotesIcon;
