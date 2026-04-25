import { Zap } from "lucide-react";
import "./MotivationCard.css";


export default function MotivationCard() {
  return (
    <div className="motivation-card reward-card-base">
      <div className="motivation-icon">
        <Zap size={32} color="white" strokeWidth={2.5} />
      </div>
      <h3 className="motivation-title">Tiếp Tục Phát Huy! 💪</h3>
      <p className="motivation-text">
        Bạn đang tiến bộ thật tuyệt vời! Hoàn thành thử thách hôm nay để duy trì
        chuỗi và nhận thêm XP thưởng.
      </p>
    </div>
  );
}
