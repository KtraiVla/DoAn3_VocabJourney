import "./ProgressHeader.css";
import { TrendingUp } from "lucide-react";

export default function ProgressHeader() {
  return (
    <div className="progress-header">
      <div className="progress-header-title">
        <TrendingUp size={32} className="progress-header-icon"></TrendingUp>
        <h1>Tiến Độ & Thống Kê Của Bạn</h1>
      </div>
      <p className="progress-header-desc">
        Theo dõi hành trình học tập và xem bạn đã tiến độ đến đâu
      </p>
    </div>
  );
}

