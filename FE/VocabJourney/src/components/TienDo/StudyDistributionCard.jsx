import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from "recharts";
import "./StudyDistributionCard.css";

function CustomTooltip({ active, payload, total }) {
  if (active && payload && payload.length > 0) {
    const data = payload[0].payload;
    const percent = ((data.value / total) * 100).toFixed(1);
    return (
      <div className="custom-tooltip">
        <p style={{ color: data.color }} className="tooltip-label">
          {data.name}
        </p>
        <p className="tooltip-value">{data.value}</p>
        <p className="tooltip-value">{percent}%</p>
      </div>
    );
  }
  return null;
}

export default function StudyDistributionCard() {
  const topics = [
    { name: "Du lịch", value: 75, color: "#06b6d4" }, // Màu xanh lơ
    { name: "Thương mại", value: 45, color: "#a855f7" }, // Màu tím
    { name: "Ẩm thực", value: 90, color: "#22c55e" }, // Màu xanh lá
    { name: "Hàng ngày", value: 30, color: "#f97316" }, // Màu cam
    { name: "Công nghệ", value: 15, color: "#ec4899" }, // Màu hồng
  ];

  const total = topics.reduce((acc, curr) => acc + curr.value, 0);
  return (
    <div className="study-distribution-card">
      <h3 className="distribution-title">Phân Bổ Học Tập</h3>
      <div className="distribution-content">
        <div className="donut-container-recharts">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={topics}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {topics.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={(props) => <CustomTooltip {...props} total={total} />}
              ></Tooltip>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="distribution-legend">
          {topics.map((topic, index) => (
            <div key={index} className="legend-item">
              <div className="legend-item-left">
                {/* Dấu chấm tròn thể hiện màu */}
                <span
                  className="legend-dot"
                  style={{ backgroundColor: topic.color }}
                ></span>
                {/* Tên chủ đề */}
                <span className="legend-name">{topic.name}</span>
              </div>
              {/* Giá trị phần trăm */}
              <span className="legend-percentage">{topic.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
