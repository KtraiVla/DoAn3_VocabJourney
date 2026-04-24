import { Trophy } from "lucide-react";
import "./RewardHeader.css";

export default function RewardHeader() {
  return (
    <section className="reward-header">
      <h1 className="reward-header-title">
        <Trophy size={30} color="#f59e0b"></Trophy>
        Phần Thưởng & Thành Tích
      </h1>
      <p className="reward-header-desc">
        Theo dõi thành tích, thu thập huy hiệu, và thăng cấp!
      </p>
    </section>
  );
}
