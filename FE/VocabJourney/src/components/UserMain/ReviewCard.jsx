import "./ReviewCard.css";
import { Clock } from "lucide-react";

export default function ReviewCard() {
  return (
    <div className="review-card">
      <div className="review-content-wrapper">
        <div className="review-top-part">
          <div className="review-icon-circle">
            <Clock size={24} color="white" />
          </div>
          <div className="review-text-info">
            <h3>Giờ Ôn Tập!</h3>
            <p>Đừng để từ vựng bị lãng quên</p>
          </div>
        </div>

        <div className="review-count-badge">
          <strong>23 từ vựng</strong>
          <span>cần ôn tập hôm nay</span>
        </div>
      </div>

      <button className="review-action-btn">
        Bắt Đầu Ôn Tập <span className="rocket-emoji">🚀</span>
      </button>
      
      {/* Decorative circles */}
      <div className="review-deco deco-top-right"></div>
      <div className="review-deco deco-bottom-left"></div>
    </div>
  );
}
