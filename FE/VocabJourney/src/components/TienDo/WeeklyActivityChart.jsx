import "./WeeklyActivityChart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{`Ngày: ${label}`}</p>
        <p className="tooltip-value">{`Đã học: ${payload[0].value} từ`}</p>
      </div>
    );
  }
  return null;
};

function WeeklyActivityChart() {
  const data = [
    { day: "T2", value: 12 },
    { day: "T3", value: 15 },
    { day: "T4", value: 10 },
    { day: "T5", value: 18 },
    { day: "T6", value: 14 },
    { day: "T7", value: 21 },
    { day: "CN", value: 16 },
  ];

  return (
    <div className="activity-chart-card">
      <h3 className="activity-chart-title">Hoạt Động Học Tập Hàng Tuần</h3>

      <div className="chart-container-recharts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: -25,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              domain={[0, 25]}
              ticks={[0, 5, 10, 15, 20, 25]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f8fafc" }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={40}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#06b6d4" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-legend">
        <span className="legend-color-box"></span>
        <span className="legend-text">Từ Đã Học</span>
      </div>
    </div>
  );
}

export default WeeklyActivityChart;
