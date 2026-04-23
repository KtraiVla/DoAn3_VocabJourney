import "./TopicHero.css";

export default function TopicHero() {
  return (
    <div className="topics-hero">
      <div className="container">
        <div className="topics-hero-body">
          <div className="hero-avatar-container">
            <div className="hero-avatar-bg">🦉</div>
          </div>

          <div className="hero-text-content">
            <h1 className="hero-title">Chọn Chủ Đề Để Bắt Đầu Học!</h1>
            <p className="hero-subtitle">
              Chọn môn học yêu thích và bắt đầu hành trình của bạn 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
