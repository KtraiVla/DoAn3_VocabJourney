import "./TopicCard.css";

const overlayColors = {
  blue: "#3b82f6",
  yellow: "#d97706",
  green: "#059669",
};

export default function TopicCard({
  image,
  title,
  lessons,
  words,
  percent,
  overlay = "blue",
}) {
  const badgeBg = overlayColors[overlay] ?? "#6366f1";

  return (
    <div className={`topic-card overlay-${overlay}`}>
      <div className="topic-image-wrapper">
        <img src={image} alt={title} className="topic-image" />
        <div className={`topic-overlay topic-overlay-${overlay}`}></div>
        <div className="topic-badge" style={{ backgroundColor: badgeBg }}>
          <span className="topic-percent">{percent}%</span>
        </div>
      </div>

      <div className="topic-content">
        <h4>{title}</h4>
        <div className="topic-meta">
          <span className="topic-meta-item">📚 {lessons} bài học</span>
          <span className="topic-meta-item">✨ {words} từ vựng</span>
        </div>
        <div className="topic-progress-container">
          <div
            className="topic-progress-bar"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
