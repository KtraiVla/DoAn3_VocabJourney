import Navbar from "../components/common/Navbar.jsx";
import RewardHeader from "../components/PhanThuong/RewardHeader.jsx";
import LevelProgressCard from "../components/PhanThuong/LevelProgressCard.jsx";
import StreakCard from "../components/PhanThuong/StreakCard.jsx";
import BadgeSection from "../components/PhanThuong/BadgeSection.jsx";
import "./PhanThuongPage.css";

export default function PhanThuongPage() {
  return (
    <div className="reward-page">
      <Navbar />
      <div className="reward-body">
        <div className="container">
          <RewardHeader />

          {/* Cấp độ hiện tại nằm trên cùng, full-width trong container */}

          <div className="reward-body-content">
            {/* Cột bên trái: Nội dung chính */}
            <div className="reward-main">
              <BadgeSection />
              <LevelProgressCard />

              {/* Thêm các section thử thách ở đây sau */}
            </div>

            {/* Cột bên phải: Sidebar */}
            <div className="reward-sidebar">
              <StreakCard />
              {/* Thêm các card thống kê, xếp hạng ở đây sau */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
