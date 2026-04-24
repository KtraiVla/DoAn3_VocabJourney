import Navbar from "../components/common/Navbar.jsx";
import RewardHeader from "../components/PhanThuong/RewardHeader.jsx";

export default function PhanThuongPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="phanthuongpage-body">
        <div className="container">
          <RewardHeader></RewardHeader>
        </div>
      </div>
    </>
  );
}
