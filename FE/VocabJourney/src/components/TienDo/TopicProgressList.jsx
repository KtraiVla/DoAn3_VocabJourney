import "./TopicProgressList.css";
import { BookOpen, Briefcase, Coffee, Sun, Laptop } from "lucide-react";
import TopicProgressItem from "./TopicProgressItem.jsx";

export default function TopicProgressList() {
  const topics = [
    { name: "Du lịch", percentage: 75, color: "#06b6d4", icon: <BookOpen /> },
    {
      name: "Thương mại",
      percentage: 45,
      color: "#a855f7",
      icon: <Briefcase />,
    },
    { name: "Ẩm thực", percentage: 90, color: "#22c55e", icon: <Coffee /> },
    { name: "Hàng ngày", percentage: 30, color: "#f97316", icon: <Sun /> },
    { name: "Công nghệ", percentage: 15, color: "#ec4899", icon: <Laptop /> },
  ];

  return (
    <div className="topic-progress-card">
      <h3 className="topic-progress-title">Tiến Độ Theo Chủ Đề</h3>
      <div className="topic-progress-list">
        {topics.map((topic, index) => (
          <TopicProgressItem
            key={index}
            name={topic.name}
            percentage={topic.percentage}
            color={topic.color}
            icon={topic.icon}
          />
        ))}
      </div>
    </div>
  );
}
