import React from "react";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          {/* logo bên trái */}
          <div className="logo-section">
            <div className="logo-icon">
              <BookOpen size={24} color="white"></BookOpen>
            </div>
            <span className="logo-text">VocabJourney</span>
          </div>
          {/* cta bên phải */}
          <div className="nav-actions">
            <button>
              <Link className="btn-login" to="/dangnhap">
                Đăng nhập
              </Link>
            </button>
            <button>
              <Link className="btn-get-started" to="/dangky">
                Bắt đầu
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
