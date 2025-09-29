import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";

export interface SidebarSubSection {
  id: string;
  title: string;
  content?: string;
}

export interface SidebarSection {
  id: string;
  title: string;
  content?: string;
  subsections?: SidebarSubSection[];
}

interface SidebarProps {
  sections: SidebarSection[];
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  title = "目录",
  className = "",
  style = {},
}) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubSectionClick = (subsectionId: string) => {
    setActiveSection(subsectionId);
    const element = document.getElementById(subsectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSectionMouseEnter = (sectionId: string) => {
    setHoveredSection(sectionId);
    setExpandedSections((prev) => new Set(prev).add(sectionId));
  };

  const handleSectionMouseLeave = (sectionId: string) => {
    setHoveredSection(null);
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      newSet.delete(sectionId);
      return newSet;
    });
  };

  // 监听滚动，自动更新激活状态
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight * 0.3 &&
          rect.top >= -rect.height * 0.7
        ) {
          current = section.id;
        }
      });

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始化

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const styles = {
    sidebar: {
      position: "sticky" as const,
      top: "100px",
      height: "fit-content",
      marginLeft: "0",
      paddingLeft: "0",
      width: "240px",
      flexShrink: 0,
      ...style,
    },
    sidebarCard: {
      border: "none",
      borderRadius: "15px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      background: "white",
      position: "relative" as const,
    },
    logoContainer: {
      position: "absolute" as const,
      top: "-30px",
      right: "10px",
      width: "60px",
      height: "60px",
      zIndex: 10,
    },
    logo: {
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      borderRadius: "50%",
      animation: "shipRocking 3s ease-in-out infinite",
    },
    sidebarTitle: {
      color: "#333",
      fontWeight: "600",
      marginBottom: "20px",
      fontSize: "1.2rem",
      marginTop: "20px", // 为logo留出空间
    },
    sidebarMenu: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    sidebarItem: (isActive: boolean, isHovered: boolean) => ({
      padding: "12px 16px",
      marginBottom: "8px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      backgroundColor: isActive
        ? "#0077b6"
        : isHovered
          ? "#e3f2fd"
          : "transparent",
      color: isActive ? "white" : "#333",
      fontWeight: isActive ? "600" : "400",
      display: "flex",
      alignItems: "center",
      fontSize: "0.95rem",
      transform: isActive
        ? "translateX(16px)"
        : isHovered
          ? "translateX(8px)"
          : "translateX(0)",
      position: "relative" as const,
    }),
    sidebarIcon: {
      marginRight: "8px",
      fontSize: "0.8rem",
      transition: "transform 0.3s ease",
    },
    subMenu: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      marginLeft: "20px",
      marginTop: "8px",
      maxHeight: "0",
      overflow: "hidden",
      transition: "max-height 0.3s ease",
    },
    subMenuVisible: {
      maxHeight: "200px",
    },
    subMenuItem: (isActive: boolean) => ({
      padding: "8px 12px",
      marginBottom: "4px",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      backgroundColor: isActive ? "#0056b3" : "transparent",
      color: isActive ? "white" : "#666",
      fontSize: "0.85rem",
      display: "flex",
      alignItems: "center",
    }),
    subMenuIcon: {
      marginRight: "6px",
      fontSize: "0.7rem",
    },
  };

  // 添加CSS动画
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes shipRocking {
        0%, 100% {
          transform: rotate(-2deg) translateY(0px);
        }
        25% {
          transform: rotate(1deg) translateY(-3px);
        }
        50% {
          transform: rotate(2deg) translateY(0px);
        }
        75% {
          transform: rotate(-1deg) translateY(3px);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Col lg={3} style={styles.sidebar} className={className}>
      <Card style={styles.sidebarCard}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <img
            src="/sustechocean/static/logo.jpg"
            alt="Logo"
            style={styles.logo}
            onError={(e) => {
              // 如果图片加载失败，显示一个默认的船图标
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <Card.Body>
          <h5 style={styles.sidebarTitle}>{title}</h5>
          <ul style={styles.sidebarMenu}>
            {sections.map((section) => (
              <li
                key={section.id}
                onMouseEnter={() => handleSectionMouseEnter(section.id)}
                onMouseLeave={() => handleSectionMouseLeave(section.id)}
              >
                <div
                  style={styles.sidebarItem(
                    activeSection === section.id,
                    hoveredSection === section.id
                  )}
                  onClick={() => handleSectionClick(section.id)}
                >
                  <span style={styles.sidebarIcon}>►</span>
                  {section.title}
                </div>

                {/* 二级标题 */}
                {section.subsections && section.subsections.length > 0 && (
                  <ul
                    style={{
                      ...styles.subMenu,
                      ...(expandedSections.has(section.id)
                        ? styles.subMenuVisible
                        : {}),
                    }}
                  >
                    {section.subsections.map((subsection) => (
                      <li
                        key={subsection.id}
                        style={styles.subMenuItem(
                          activeSection === subsection.id
                        )}
                        onClick={() => handleSubSectionClick(subsection.id)}
                      >
                        <span style={styles.subMenuIcon}>▸</span>
                        {subsection.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Sidebar;
