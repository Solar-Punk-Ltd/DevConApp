import React from "react";
import "./RecentSessionsItem.scss";
import ActiveVisitors from "../../ActiveVisitors/ActiveVisitors";
import PlaceIcon from "../../icons/PlaceIcon/PlaceIcon";

interface RecentSessionsItemProps {
  title?: string;
  stage?: string;
  activeVisitors?: number;
}

// TODO: maybe add hover effect to show full title
const RecentSessionsItem: React.FC<RecentSessionsItemProps> = ({
  title,
  stage,
  activeVisitors,
}) => {
  return (
    <div className="recent-sessions-item">
      <div className="recent-sessions-item__title">{title}</div>
      <div className="recent-sessions-item__stage">
        <PlaceIcon />
        {stage}
      </div>
      <ActiveVisitors number={activeVisitors} />
    </div>
  );
};

export default RecentSessionsItem;
