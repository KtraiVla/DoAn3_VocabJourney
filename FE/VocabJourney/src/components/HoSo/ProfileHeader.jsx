import { Mail, Calendar, Zap, Edit2 } from "lucide-react";
import "./ProfileHeader.css";

export default function ProfileHeader() {
  return (
    <div className="profile-header-card">
      <div className="profile-header-left">
        <div className="profile-avatar-wrapper">
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="Avatar"
            className="profile-avatar"
          />
          <button className="profile-avatar-edit" aria-label="Edit Avatar">
            <Edit2 size={14} />
          </button>
        </div>
        <div className="profile-info">
          <h1 className="profile-name">Nguyễn Văn An</h1>
          <div className="profile-meta">
            <span className="meta-item">
              <Mail size={16} /> nguyenvanan@example.com
            </span>
            <span className="meta-item">
              <Calendar size={16} /> Tham gia 15/12/2025
            </span>
          </div>
          <div className="profile-level-badge">
            <Zap size={16} className="level-icon" fill="currentColor" />
            <span>
              Cấp độ 8 <span className="level-separator">·</span> 2450 XP
            </span>
          </div>
        </div>
      </div>
      <div className="profile-header-right">
        <button className="profile-edit-btn">
          <Edit2 size={16} />
          Chỉnh sửa hồ sơ
        </button>
        <div className="profile-header-placeholder"></div>
      </div>
    </div>
  );
}
