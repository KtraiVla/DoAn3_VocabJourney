import { Crown } from "lucide-react";
import "./LevelProgressCard.css";

export default function LevelProgressCard() {
  return (
    <div className="level-progress-card reward-card-base">
      <div className="level-info-top">
        <div className="level-badge-container">
          <div className="level-icon-circle">
            <Crown size={28} color="white" />
          </div>
          <div className="level-text-info">
            <span className="label-text">Cấp Hiện Tại</span>
            <h2 className="level-display">Cấp 8</h2>
          </div>
        </div>
        <div className="total-xp-container">
          <span className="label-text">Tổng XP</span>
          <h2 className="xp-display">2450</h2>
        </div>
      </div>

      <div className="xp-progress-section">
        <div className="xp-labels">
          <span>Tiến độ lên Cấp 9</span>
          <span>
            450 / 500 XP
          </span>
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${50}%` }}
          ></div>
        </div>
        <p className="remaining-xp-text">
          Cần 2050 XP để lên cấp tiếp theo
        </p>
      </div>
    </div>
  );
}
