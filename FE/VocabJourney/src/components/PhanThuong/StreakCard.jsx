import "./StreakCard.css"
import { Flame } from "lucide-react";


export default function StreakCard() {
  return (
    <div className="streak-card reward-card-base">
      <div className="streak-header">
        <div className="streak-icon-box">
          <Flame size={32} color="white" />
        </div>
        <div className="streak-title-info">
          <span className="streak-label">Chuỗi Hiện Tại</span>
          <h2 className="streak-count">12 Ngày</h2>
        </div>
      </div>

      <div className="streak-message-box">
        <p className="streak-title-msg">Tiếp tục phát huy!</p>
        <p className="streak-subtitle-msg">
          Bạn chỉ còn 3 ngày nữa để đạt chuỗi 2 tuần! 🔥
        </p>
      </div>
    </div>
  );
}
