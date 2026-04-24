import BagdeCard from "./BagdeCard.jsx";

export default function BagdeSection() {
  const badges = [
    {
      id: 1,
      name: "Bước Đầu Tiên",
      description: "Hoàn thành bài học đầu tiên",
      date: "16/12/2025",
      icon: "🎯",
      unlocked: true,
      bgColor: "#fffbeb",
      borderColor: "#fde68a",
    },
    {
      id: 2,
      name: "Chiến Binh 7 Ngày",
      description: "Duy trì chuỗi ngày học 7 ngày",
      date: "5/1/2026",
      icon: "🔥",
      unlocked: true,
      bgColor: "#fffbeb",
      borderColor: "#fde68a",
    },
    {
      id: 3,
      name: "Bậc Thầy Từ Vựng",
      description: "Học 100 từ vựng",
      date: "10/2/2026",
      icon: "📚",
      unlocked: true,
      bgColor: "#fffbeb",
      borderColor: "#fde68a",
    },
    {
      id: 4,
      name: "Nhà Vô Địch Quiz",
      description: "Đạt 100% trong 10 bài kiểm tra",
      date: null,
      icon: "🏆",
      unlocked: false,
    },
    {
      id: 5,
      name: "Bậc Thầy 30 Ngày",
      description: "Duy trì chuỗi ngày học 30 ngày",
      date: null,
      icon: "⭐",
      unlocked: false,
    },
    {
      id: 6,
      name: "Học Viên Siêu Đẳng",
      description: "Học 500 từ vựng",
      date: null,
      icon: "💎",
      unlocked: false,
    },
  ];
  return (
    <section className="badges-section reward-card-base">
      <div className="section-header">
        <div className="section-title">
          <Award size={20} color="#f59e0b" />
          <h3>Huy Hiệu & Thành Tích</h3>
        </div>
        <span className="badge-count">3 / 6 đã đạt</span>
      </div>

      <div className="badges-grid">
        {badges.map((badge) => (
          <BadgeCard key={badge.id} {...badge} />
        ))}
      </div>
    </section>
  );
}
