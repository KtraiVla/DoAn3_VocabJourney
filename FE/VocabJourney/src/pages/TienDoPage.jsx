import Navbar from "../components/common/Navbar.jsx";
import ProgressHeader from "../components/TienDo/ProgressHeader.jsx";
import SummaryStats from "../components/TienDo/SummaryStats.jsx";
import WeeklyActivityChart from "../components/TienDo/WeeklyActivityChart.jsx";
import AccuracyChart from "../components/TienDo/AccuracyChart.jsx";
import TopicProgressList from "../components/TienDo/TopicProgressList.jsx";
import StudyDistributionCard from "../components/TienDo/StudyDistributionCard.jsx";
import InsightCards from "../components/TienDo/InsightCards.jsx";
import "./TienDoPage.css";

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
          <div className="topic-list-wrapper">
            <TopicProgressList></TopicProgressList>
          </div>
          <div className="distribution-wrapper">
            <StudyDistributionCard></StudyDistributionCard>
          </div>
        </div>
        <InsightCards></InsightCards>
      </div>
    </div>
  );
}
