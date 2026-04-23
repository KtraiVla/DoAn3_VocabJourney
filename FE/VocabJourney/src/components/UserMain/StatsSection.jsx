import React from "react";
import { Zap, Award, Flame, Target, Trophy } from "lucide-react";
import "./StatsSection.css";
import StatCard from "./StatCard.jsx";

export default function StatsSection() {
  const stats = [
    {
      icon: <Zap size={28} />,
      value: "2450",
      title: "Tổng Điểm XP",
      subtitle: "450 / 500 XP để đạt cấp 9",
      type: "purple",
      progress: 90
    },
    {
      icon: <Award size={28} />,
      value: "Lvl 8",
      title: "Cấp Độ Hiện Tại",
      badgeText: "🎓 Học Viên Nâng Cao",
      type: "blue",
    },
    {
      icon: <Flame size={28} />,
      value: "12",
      title: "Chuỗi Ngày 🔥",
      badgeText: "Hãy duy trì!",
      type: "orange",
    },
    {
      icon: <Target size={28} />,
      value: "65%",
      title: "Mục Tiêu Hàng Ngày",
      subtitle: "13 / 20 từ vựng hôm nay",
      type: "green",
      progress: 65
    },
  ];

  return (
    <div className="dashboard-progress-board">
      <div className="db-stats-header">
        <div className="db-stats-title">
          <Trophy className="trophy-icon" />
          <h2>Bảng Tiến Độ Của Bạn</h2>
        </div>
        <p className="db-stats-subtitle">Hãy tiếp tục phát huy nhé! 🎉</p>
      </div>

      <div className="dashboard-stats-grid">
        {stats.map((item, index) => (
          <StatCard
            key={index}
            icon={item.icon}
            value={item.value}
            title={item.title}
            subtitle={item.subtitle}
            badgeText={item.badgeText}
            type={item.type}
            progress={item.progress}
          />
        ))}
      </div>
    </div>
  );
}
