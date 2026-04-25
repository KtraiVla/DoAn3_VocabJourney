import "./ChallengesSection.css";
import { Zap } from "lucide-react";


export default function ChallengesSection() {
  const challenges = [
    {
      id: 1,
      type: "Hàng Ngày",
      typeColor: "#3b82f6",
      typeBg: "#eff6ff",
      xp: 100,
      title: "Nhà Vô Địch Hàng Ngày",
      description: "Hoàn thành 5 bài học hôm nay",
      current: 3,
      total: 5,
    },
    {
      id: 2,
      type: "Hàng Tuần",
      typeColor: "#a855f7",
      typeBg: "#f5f3ff",
      xp: 250,
      title: "Bậc Thầy Quiz",
      description: "Đạt điểm 100% trong 3 bài kiểm tra",
      current: 1,
      total: 3,
    },
    {
      id: 3,
      type: "Hàng Tuần",
      typeColor: "#a855f7",
      typeBg: "#f5f3ff",
      xp: 200,
      title: "Ôn Tập Đều Đặn",
      description: "Ôn tập 50 từ trong tuần này",
      current: 32,
      total: 50,
    },
  ];
  return (
    <section className="challenges-section reward-card-base">
      <div className="section-header">
        <div className="section-title">
          <Zap size={20} color="#f97316" />
          <h3>Thử Thách Đang Diễn Ra</h3>
        </div>
      </div>

      <div className="challenges-list">
        {challenges.map((challenge) => (
          <ChallengeProgressItem key={challenge.id} {...challenge} />
        ))}
      </div>
    </section>
  );
}
