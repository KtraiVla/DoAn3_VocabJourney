import React from 'react';
import { CheckSquare, Trophy, Book, Target, Zap } from 'lucide-react';
import ActivityItem from './ActivityItem';
import './RecentActivities.css';

const RecentActivities = () => {
  const activities = [
    { id: 1, title: 'Hoàn thành bài học "Tại sân bay"', time: '2 giờ trước', icon: CheckSquare, color: '#22c55e', bgColor: '#dcfce7' },
    { id: 2, title: 'Đạt huy hiệu "Chiến binh tuần"', time: '1 ngày trước', icon: Trophy, color: '#eab308', bgColor: '#fef9c3' },
    { id: 3, title: 'Học 15 từ mới trong Tiếng Anh Kinh doanh', time: '2 ngày trước', icon: Book, color: '#3b82f6', bgColor: '#dbeafe' },
    { id: 4, title: 'Đạt 100% trong bài kiểm tra Du lịch', time: '3 ngày trước', icon: Target, color: '#ec4899', bgColor: '#fce7f3' },
    { id: 5, title: 'Đạt Cấp độ 8', time: '5 ngày trước', icon: Zap, color: '#f97316', bgColor: '#ffedd5' },
  ];

  return (
    <div className="recent-activities-card">
      <h2 className="section-title">Hoạt động gần đây</h2>
      <div className="activities-list">
        {activities.map(activity => (
          <ActivityItem key={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
