import Navbar from "../components/common/Navbar.jsx";
import HeroBanner from "../components/UserMain/HeroBanner.jsx";
import StatsSection from "../components/UserMain/StatsSection.jsx";
import ContinueCard from "../components/UserMain/ContinueCard.jsx";
import ReviewCard from "../components/UserMain/ReviewCard.jsx";

function MainUser() {
  return (
    <div className="homeuser-page">
      <Navbar />
      <main className="homeuser-page-content">
        <div className="container">
          <HeroBanner />
          <StatsSection></StatsSection>

          <div className="homeuser-grid">
            {/* bên phải */}
            <div className="homeuser-right">
              <ContinueCard />
              <ReviewCard />
            </div>

            <aside className="dashboard-sidebar"></aside>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainUser;
