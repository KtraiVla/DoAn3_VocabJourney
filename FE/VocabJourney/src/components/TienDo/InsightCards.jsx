import InsightCard from "./InsightCard.jsx";
import { Layers, Target, TrendingUp } from "lucide-react";
import "./InsightCards.css";

export default function InsightCards() {
  const insights = [
    {
      title: "Ngày Học Nhiều Nhất",
      text: <>Bạn học nhiều nhất vào <b>Thứ Bảy</b> với trung bình 20 từ</>,
      icon: <Layers />,
      color: "#0ea5e9", // Blue
      bgColor: "#e0f2fe",
    },
    {
      title: "Chủ Đề Xuất Sắc Nhất",
      text: <>Chủ đề mạnh nhất của bạn là <b>Ẩm Thực & Nhà Hàng</b> với 90% hoàn thành</>,
      icon: <Target />,
      color: "#a855f7", // Purple
      bgColor: "#f3e8ff",
    },
    {
      title: "Tiến Bộ",
      text: <>Độ chính xác của bạn đã tăng <b>13%</b> trong tháng này</>,
      icon: <TrendingUp />,
      color: "#22c55e", // Green
      bgColor: "#dcfce7",
    },
  ];

  return (
    <div className="insight-cards-grid">
      {insights.map((insight, index) => (
        <InsightCard
          key={index}
          title={insight.title}
          text={insight.text}
          icon={insight.icon}
          color={insight.color}
          bgColor={insight.bgColor}
        />
      ))}
    </div>
  );
}
