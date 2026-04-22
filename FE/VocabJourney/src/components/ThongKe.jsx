import "./ThongKe.css";

export default function ThongKe() {
  return (
    <section className="thongke">
      <div className="container">
        <div className="thongke-body">
          {/* các item */}
          <div className="thongke-item">
            <h2 className="thongke-title">10K+</h2>
            <div className="thongke-desc">Học Viên Tích Cực</div>
          </div>

          {/* các item */}
          <div className="thongke-item">
            <h2 className="thongke-title">50K+</h2>
            <div className="thongke-desc">Từ Vựng</div>
          </div>

          {/* các item */}
          <div className="thongke-item">
            <h2 className="thongke-title">100+</h2>
            <div className="thongke-desc">Chủ Đề Học Tập</div>
          </div>

          {/* các item */}
          <div className="thongke-item">
            <h2 className="thongke-title">95%</h2>
            <div className="thongke-desc">Tỷ Lệ Thành Công</div>
          </div>
        </div>
      </div>
    </section>
  );
}
