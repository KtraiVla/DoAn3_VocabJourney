import Navbar from "../components/common/Navbar.jsx";
import RewardHeader from "../components/PhanThuong/RewardHeader.jsx";
import LevelProgressCard from "../components/PhanThuong/LevelProgressCard.jsx";

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
            </div>
            {/* cột bên phải */}
          </div>
        </div>
      </div>
    </div>
  );
}
