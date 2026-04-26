import Navbar from "../components/common/Navbar.jsx";
import ProgressHeader from "../components/TienDo/ProgressHeader.jsx";
import SummaryStats from "../components/TienDo/SummaryStats.jsx";
import WeeklyActivityChart from "../components/TienDo/WeeklyActivityChart.jsx";
import AccuracyChart from "../components/TienDo/AccuracyChart.jsx";

export default function TienDoPage() {
  return (
    <div className="progress-page">
      <Navbar></Navbar>
      <div className="progress-page-content container">
        <ProgressHeader></ProgressHeader>
        <SummaryStats></SummaryStats>

        <div className="progress-charts-grid">
            <div className="chart-wrapper">
              <WeeklyActivityChart></WeeklyActivityChart>
            </div>
            <div className="chart-wrapper">
              <AccuracyChart></AccuracyChart>
            </div>
        </div>
        <div className="progress-topics-grid">
            
        </div>
      </div>
    </div>
  );
}
