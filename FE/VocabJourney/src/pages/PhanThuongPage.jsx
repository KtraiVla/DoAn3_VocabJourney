import Navbar from "../components/common/Navbar.jsx";
import RewardHeader from "../components/PhanThuong/RewardHeader.jsx";
import LevelProgressCard from "../components/PhanThuong/LevelProgressCard.jsx";
import StreakCard from "../components/PhanThuong/StreakCard.jsx";
import BagdeSection from "../components/PhanThuong/BagdeSection.jsx";

export default function PhanThuongPage() {
  return (
    <div className="reward-page">
      <Navbar></Navbar>
      <div className="reward-body">
        <div className="container">
          <RewardHeader></RewardHeader>
          <div className="reward-content">
            {/* cột bên trái */}
            <div className="reward-content-left">
              <LevelProgressCard></LevelProgressCard>
              <BagdeSection></BagdeSection>
            </div>
            {/* cột bên phải */}
            <div className="reward-sidebar">
              <StreakCard></StreakCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
