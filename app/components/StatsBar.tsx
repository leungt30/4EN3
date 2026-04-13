"use client";

interface StatsBarProps {
  count: number;
}

export default function StatsBar({ count }: StatsBarProps) {
  return (
    <div className="stats-bar">
      <div className="stats-bar-inner">
        <div className="stat-item">
          <span className="stat-number">{count.toLocaleString()}</span>
          <span className="stat-label">Residents Signed Up</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">1</span>
          <span className="stat-label">Community</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Monitoring</span>
        </div>
      </div>
    </div>
  );
}
