import { Trophy } from "lucide-react";
import "./RankCard.css";

export default function RankCard() {
  return (
    <div className="weekly-rank-card reward-card-base">
      <div className="rank-header">
        <Trophy size={18} color="#f59e0b" />
        <h3>Xếp Hạng Tuần Này</h3>
      </div>

      <div className="rank-display-container">
        <div className="rank-circle">
          <span className="rank-number">#8</span>
        </div>
        <p className="rank-subtitle">Thứ Hạng Toàn Cầu Của Bạn</p>
      </div>

      <div className="rank-footer">
        <div className="rank-pill">
          Bạn nằm trong top <span>15%</span> người học tuần này!
        </div>
      </div>
    </div>
  );
}
