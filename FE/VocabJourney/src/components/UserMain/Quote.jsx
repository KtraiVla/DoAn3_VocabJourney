import "./Quote.css";

export default function MotivationalQuote() {
  return (
    <div className="quote-card">
      <div className="quote-decoration circle-top"></div>
      <div className="quote-decoration circle-bottom"></div>
      
      <div className="quote-content">
        <div className="quote-icon-container">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="white" />
            <path d="M19 3L19.7 4.3L21 5L19.7 5.7L19 7L18.3 5.7L17 5L18.3 4.3L19 3Z" fill="white" />
            <path d="M5 17L5.7 18.3L7 19L5.7 19.7L5 21L4.3 19.7L3 19L4.3 18.3L5 17Z" fill="white" />
          </svg>
        </div>
        
        <h2 className="quote-main-text">
          "Kiên trì là chìa khóa để thành thạo từ vựng"
        </h2>
        
        <p className="quote-sub-text">
          Luyện tập mỗi ngày để đạt kết quả tuyệt vời! 🚀
        </p>
      </div>
    </div>
  );
}
