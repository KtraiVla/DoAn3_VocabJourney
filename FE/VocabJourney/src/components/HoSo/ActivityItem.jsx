import React from 'react';
import './ActivityItem.css';

const ActivityItem = ({ title, time, icon: Icon, color, bgColor }) => {
  return (
    <div className="activity-item">
      <div className="activity-icon-wrapper" style={{ backgroundColor: bgColor, color: color }}>
        <Icon size={20} />
      </div>
      <div className="activity-info">
        <h3 className="activity-title">{title}</h3>
        <p className="activity-time">{time}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
