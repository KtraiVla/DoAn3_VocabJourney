import "./TopicProgressItem.css";

function TopicProgressItem({ name, percentage, color, icon }) {
  return (
    <div className="topic-progress-item">
      <div className="topic-header">
        <div className="topic-name-group">
          <div
            className="topic-icon"
            style={{ color: color, backgroundColor: `${color}15` }}
          >
            {icon}
          </div>
          <span className="topic-name">{name}</span>
        </div>
        <span className="topic-percentage" style={{ color: color }}>
          {percentage}%
        </span>
      </div>
      <div className="topic-progress-bar-bg">
        <div
          className="topic-progress-bar-fill"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}

export default TopicProgressItem;
