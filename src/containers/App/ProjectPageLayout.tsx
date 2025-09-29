// src/containers/ProjectPageLayout.tsx
import React from "react";
import {
  Sidebar,
  SidebarSection,
  SidebarSubSection,
} from "../../components/Sidebar";
import { PageHeader } from "../../components/PageHeader";
import "./ProjectPageLayout.css";

interface SidebarLink {
  id: string;
  title: string;
  subsections?: SidebarSubSection[];
}

interface ProjectPageLayoutProps {
  title: string;
  sidebarLinks: SidebarLink[];
  children: React.ReactNode; // 用来接收具体页面内容
  animationComponent?: React.ReactNode; // 动画组件（可选）
  backgroundVideo?: string; // 背景视频路径（可选）
  // Engineering页面专用props
  activeCycle?: string;
  activeStep?: string;
  onCycleClick?: (cycle: string) => void;
  onStepClick?: (step: string) => void;
}

export const ProjectPageLayout: React.FC<ProjectPageLayoutProps> = ({
  title,
  sidebarLinks,
  children,
  animationComponent,
  backgroundVideo,
  activeCycle,
  activeStep,
  onCycleClick,
  onStepClick,
}) => {
  // 转换sidebarLinks为SidebarSection格式
  const sections: SidebarSection[] = sidebarLinks.map((link) => ({
    id: link.id,
    title: link.title,
    content: link.title, // 使用title作为content的默认值
    subsections: link.subsections, // 传递subsections数据
  }));

  // 如果是engineering页面，显示自定义侧边栏内容
  const isEngineeringPage = title === "Engineering";

  return (
    <>
      <PageHeader
        title={title}
        animationComponent={animationComponent}
        backgroundVideo={backgroundVideo}
      />
      <div
        className={`page-with-sidebar ${sections.length === 0 ? "no-sidebar" : ""}`}
      >
        {sections.length > 0 &&
          (isEngineeringPage ? (
            <div className="engineering-sidebar">
              <div className="sidebar-header">
                <h3>Design-Build-Test-Learn Cycle</h3>
              </div>
              <div className="cycle-diagram-sidebar">
                <img
                  src="/sustechocean/static/engineering/circle.svg"
                  alt="Design-Build-Test-Learn Cycle"
                  className="cycle-svg-sidebar"
                  onClick={() =>
                    onStepClick && onStepClick(activeStep || "design")
                  }
                />
              </div>

              {/* Cycle导航 */}
              <div className="cycle-navigation">
                <h4>Cycles</h4>
                <div className="cycle-list">
                  <button
                    className={`cycle-button ${activeCycle === "cycle-1" ? "active" : ""}`}
                    onClick={() => onCycleClick && onCycleClick("cycle-1")}
                  >
                    Cycle 1: Silencing
                  </button>
                  <button
                    className={`cycle-button ${activeCycle === "cycle-2" ? "active" : ""}`}
                    onClick={() => onCycleClick && onCycleClick("cycle-2")}
                  >
                    Cycle 2: Activation
                  </button>
                  <button
                    className={`cycle-button ${activeCycle === "cycle-3" ? "active" : ""}`}
                    onClick={() => onCycleClick && onCycleClick("cycle-3")}
                  >
                    Cycle 3: Amplification
                  </button>
                  <button
                    className={`cycle-button ${activeCycle === "cycle-4" ? "active" : ""}`}
                    onClick={() => onCycleClick && onCycleClick("cycle-4")}
                  >
                    Cycle 4: Safeguard
                  </button>
                </div>
              </div>

              {/* Step导航 */}
              <div className="step-navigation">
                <h4>Current Step</h4>
                <div className="step-list">
                  <button
                    className={`step-button ${activeStep === "design" ? "active" : ""}`}
                    onClick={() => onStepClick && onStepClick("design")}
                  >
                    Design
                  </button>
                  <button
                    className={`step-button ${activeStep === "build" ? "active" : ""}`}
                    onClick={() => onStepClick && onStepClick("build")}
                  >
                    Build
                  </button>
                  <button
                    className={`step-button ${activeStep === "test" ? "active" : ""}`}
                    onClick={() => onStepClick && onStepClick("test")}
                  >
                    Test
                  </button>
                  <button
                    className={`step-button ${activeStep === "learn" ? "active" : ""}`}
                    onClick={() => onStepClick && onStepClick("learn")}
                  >
                    Learn
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Sidebar sections={sections} />
          ))}
        <main className="page-content">{children}</main>
      </div>
    </>
  );
};
