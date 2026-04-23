import "./ChallengeItem.css";

export default function ChallengeItem({
  title,
  desc,
  reward,
  progress,
  total,
}) {
  const width = `${(progress / total) * 100}%`;

  return (
    <div className="challenge-item">
      <div className="challenge-item-top">
        <div className="challenge-info">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
        <div className="challenge-reward-pill">{reward} XP</div>
      </div>

      <div className="challenge-progress-wrapper">
        <div className="challenge-progress-container">
          <div className="challenge-progress-bar" style={{ width }}></div>
        </div>
        <div className="challenge-count">
          {progress}/{total}
        </div>
      </div>
    </div>
  );
}
