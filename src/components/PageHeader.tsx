import React from "react";
import "./PageHeader.css";

interface PageHeaderProps {
  title: string;
  animationComponent?: React.ReactNode;
  backgroundVideo?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  animationComponent,
  backgroundVideo,
}) => {
  return (
    <div className="page-header">
      {/* 右上角波浪线分割区域 */}
      <div className="header-background">
        <div className="wave-divider"></div>
        {/* 几何装饰元素 */}
        <div className="computer-display"></div>
        <div className="cube-3d"></div>
        {backgroundVideo && (
          <video className="background-video" autoPlay muted loop playsInline>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        )}
      </div>

      {/* 主要内容区域 */}
      <div className="header-content">
        <div className="header-title-container">
          <h1 className="header-title">{title}</h1>
          {animationComponent && (
            <div className="header-animation">{animationComponent}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
