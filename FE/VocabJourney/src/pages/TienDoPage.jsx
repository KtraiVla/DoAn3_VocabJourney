import Navbar from "../components/common/Navbar.jsx";
import ProgressHeader from "../components/TienDo/ProgressHeader.jsx";

export default function TienDoPage() {
  return (
    <div className="progress-page">
      <Navbar></Navbar>
      <div className="progress-page-content container">
        <ProgressHeader></ProgressHeader>
      </div>
    </div>
  );
}
