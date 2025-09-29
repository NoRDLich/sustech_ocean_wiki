import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar, SidebarSection } from "../components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";

// 内联ProgressBar组件
const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "4px",
        backgroundColor: "#e9ecef",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          height: "100%",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          transition: "width 0.3s ease",
          width: `${progress}%`,
        }}
      />
    </div>
  );
};


export function Applications() {
  const sections: SidebarSection[] = [
    { id: "overview", title: "Overview", content: "Applications Overview" },
    {
      id: "agriculture",
      title: "Agriculture",
      content: "Agricultural Applications",
    },
    { id: "medicine", title: "Medicine", content: "Medical Applications" },
    {
      id: "environment",
      title: "Environment",
      content: "Environmental Applications",
    },
  ];

  const styles = {
    applicationsPage: {
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      paddingTop: "80px",
    },
    mainContent: {
      padding: "20px",
    },
    contentCard: {
      background: "white",
      borderRadius: "15px",
      padding: "30px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      minHeight: "600px",
    },
    contentSection: {
      marginBottom: "40px",
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "15px",
      border: "1px solid #e9ecef",
    },
    sectionTitle: {
      color: "#333",
      fontWeight: "600",
      marginBottom: "20px",
      fontSize: "1.8rem",
      borderBottom: "3px solid #007bff",
      paddingBottom: "10px",
    },
    sectionContent: {
      color: "#555",
      lineHeight: "1.6",
      fontSize: "1rem",
    },
  };

  return (
    <div style={styles.applicationsPage}>
      <ProgressBar />
      <Container fluid>
        <Row>
          {/* 侧边栏 */}
          <Sidebar sections={sections} />

          {/* 主内容区域 */}
          <Col lg={9} style={styles.mainContent}>
            <div style={styles.contentCard}>
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  style={styles.contentSection}
                >
                  <h2 style={styles.sectionTitle}>{section.content}</h2>
                  <div style={styles.sectionContent}>
                    {/* 这里添加具体的内容 */}
                    <p>这是 {section.title} 的内容...</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </div>
  );
}
