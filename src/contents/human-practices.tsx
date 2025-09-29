import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import ScrollToTop from "../components/ScrollToTop";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// 导入专家图片
import chuanlunzhangImg from "/public/static/ihp/chuanlunzhang.png";
import zhiruizengImg from "/public/static/ihp/zhiruizeng.png";
import bowangImg from "/public/static/ihp/bowang.png";
import zhiqiangliuImg from "/public/static/ihp/zhiqiangliu.png";
import liguangjiangImg from "/public/static/ihp/liguangjiang.png";
import yongtianImg from "/public/static/ihp/yongtian.png";
import bingkaiyuImg from "/public/static/ihp/bingkaiyu.png";
import zengyueyuImg from "/public/static/ihp/zengyueyu.png";
import unnamedImg from "/public/static/ihp/Unnamed.png";
import guzhangliImg from "/public/static/ihp/guzhangli.png";
import synbio1Img from "/public/static/ihp/synbio1.png";
import synbio2Img from "/public/static/ihp/synbio2.png";
import shenlanyimaiImg from "/public/static/ihp/shenlanyimai.png";
import huananImg from "/public/static/ihp/huanan.png";
import CCiCImg from "/public/static/ihp/CCiC.png";
import yuwangImg from "/public/static/ihp/yuwang.png";
import xuliuImg from "/public/static/ihp/xuliu.png";
import bookImg from "/public/static/ihp/book.png";

// 专家图片映射
const expertImageMap: { [key: string]: string } = {
  "Prof. Chuanlun Zhang": chuanlunzhangImg,
  "Prof. Zhirui Zeng": zhiruizengImg,
  "Dr. Bo Wang": bowangImg,
  "Prof. Zhiqiang Liu": zhiqiangliuImg,
  "Prof. Liguang Jiang": liguangjiangImg,
  "Prof. Yong Tian": yongtianImg,
  "Bingkai Yu": bingkaiyuImg,
  "Zengyue Yu": zengyueyuImg,
  "Unnamed Expert": unnamedImg,
  "Unnamed Staff": unnamedImg,
  "Gu Zhang Li": guzhangliImg,
  "Synbio1 (The First SUSTech-SynBio Meetup)": synbio1Img,
  "Synbio2 Meetup": synbio2Img,
  "Shenlanyimai Charity Sale": shenlanyimaiImg,
  "Huanan Meetup": huananImg,
  "CCiC (Conference of China iGEMer Community)": CCiCImg,
  "We Wrote an Ethics Paper Ourselves": bookImg,
  "Prof. Yu Wang": yuwangImg,
  "Global Questionnaire Survey": bookImg,
  "Prof. Xu Liu": xuliuImg,
};

// 定义侧边栏链接
const sidebarLinks = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "ocean-system",
    title: "The OCEAN System iHP Closed Loop",
  },
  {
    id: "project-phases",
    title: "Project Development Phases",
    subsections: [
      { id: "project-design", title: "Project Design" },
      { id: "model-iteration", title: "Model Iteration" },
      { id: "application", title: "Application" },
      { id: "community-collaboration", title: "Community Collaboration" },
      { id: "ethical-exploration", title: "Ethical Exploration" },
      { id: "education", title: "Education" },
    ],
  },
];

// 模态框组件
interface ExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
  expert: {
    name: string;
    affiliation: string;
    tags: string[];
    takeouts: string[];
    whatWeObserved: string;
    howWeWereEducated: string;
    howWeTookAction: string;
  };
  accentColor: string;
}

const ExpertModal: React.FC<ExpertModalProps> = ({
  isOpen,
  onClose,
  expert,
  accentColor,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        animation: "fadeIn 0.3s ease",
        fontFamily: "Montserrat, sans-serif",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "40px",
          maxWidth: "600px",
          width: "90%",
          maxHeight: "80vh",
          overflow: "auto",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          animation: "slideIn 0.3s ease",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            backgroundColor: "#666",
            border: "none",
            color: "white",
            fontSize: "0.9rem",
            fontWeight: "600",
            cursor: "pointer",
            padding: "8px 16px",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#333";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#666";
          }}
        >
          Close
        </button>

        {/* 专家信息 */}
        <div style={{ marginBottom: "30px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            {/* 专家头像 */}
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: accentColor,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "20px",
                fontWeight: "bold",
                color: "white",
                fontSize: "1.5rem",
                backgroundImage: expertImageMap[expert.name]
                  ? `url('${expertImageMap[expert.name]}')`
                  : `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${accentColor}"/><text x="50" y="60" text-anchor="middle" fill="white" font-size="30" font-family="Arial">${expert.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}</text></svg>')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onError={(e) => {
                console.log(
                  "Image failed to load for:",
                  expert.name,
                  expertImageMap[expert.name]
                );
                e.currentTarget.style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${accentColor}"/><text x="50" y="60" text-anchor="middle" fill="white" font-size="30" font-family="Arial">${expert.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}</text></svg>')`;
              }}
            />
            <div>
              <h3
                style={{
                  margin: "0 0 5px 0",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#2C3E50",
                }}
              >
                {expert.name}
              </h3>
              <p
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.4",
                }}
              >
                {expert.affiliation}
              </p>
              <div>
                {expert.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    style={{
                      display: "inline-block",
                      backgroundColor: accentColor,
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      marginRight: "8px",
                      marginBottom: "5px",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4
              style={{
                margin: "0 0 10px 0",
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "#2C3E50",
              }}
            >
              Key Takeaways
            </h4>
            <ul
              style={{
                margin: "0 0 25px 0",
                paddingLeft: "20px",
                fontSize: "1rem",
                color: "#666",
                lineHeight: "1.5",
              }}
            >
              {expert.takeouts.map((takeout, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  {takeout}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What We Observed and Concerned 部分 */}
        <div style={{ marginBottom: "30px" }}>
          <h3
            style={{
              margin: "0 0 15px 0",
              fontSize: "1.3rem",
              fontWeight: "700",
              color: "#2C3E50",
            }}
          >
            What We Observed and Concerned:
          </h3>
          <hr
            style={{
              border: "none",
              height: "2px",
              backgroundColor: accentColor,
              margin: "0 0 20px 0",
            }}
          />
          <p
            style={{
              margin: "0",
              fontSize: "1rem",
              color: "#666",
              lineHeight: "1.6",
              textAlign: "justify",
            }}
          >
            {expert.whatWeObserved}
          </p>
        </div>

        {/* How We Were Educated and Inspired 部分 */}
        <div style={{ marginBottom: "30px" }}>
          <h3
            style={{
              margin: "0 0 15px 0",
              fontSize: "1.3rem",
              fontWeight: "700",
              color: "#2C3E50",
            }}
          >
            How We Were Educated and Inspired:
          </h3>
          <hr
            style={{
              border: "none",
              height: "2px",
              backgroundColor: accentColor,
              margin: "0 0 20px 0",
            }}
          />
          <p
            style={{
              margin: "0",
              fontSize: "1rem",
              color: "#666",
              lineHeight: "1.6",
              textAlign: "justify",
            }}
          >
            {expert.howWeWereEducated}
          </p>
        </div>

        {/* How We Took Action and Noted the Change 部分 */}
        <div>
          <h3
            style={{
              margin: "0 0 15px 0",
              fontSize: "1.3rem",
              fontWeight: "700",
              color: "#2C3E50",
            }}
          >
            How We Took Action and Noted the Change:
          </h3>
          <hr
            style={{
              border: "none",
              height: "2px",
              backgroundColor: accentColor,
              margin: "0 0 20px 0",
            }}
          />
          <p
            style={{
              margin: "0",
              fontSize: "1rem",
              color: "#666",
              lineHeight: "1.6",
              textAlign: "justify",
            }}
          >
            {expert.howWeTookAction}
          </p>
        </div>
      </div>

      {/* CSS 动画样式 */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { 
              opacity: 0;
              transform: translateY(-50px) scale(0.9);
            }
            to { 
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </div>,
    document.body
  );
};

// 项目阶段卡片组件
interface ProjectPhaseCardProps {
  id: string;
  title: string;
  description: string;
  experts: Array<{
    name: string;
    affiliation: string;
    tags: string[];
    takeouts: string[];
    whatWeObserved: string;
    howWeWereEducated: string;
    howWeTookAction: string;
  }>;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
}

const ProjectPhaseCard: React.FC<ProjectPhaseCardProps> = ({
  id,
  title,
  description,
  experts,
  backgroundColor,
  textColor,
  accentColor,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState<number | null>(null);
  return (
    <div
      id={id}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: "20px",
        padding: "40px",
        margin: "30px 0",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        fontFamily: "Montserrat, sans-serif",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
      }}
    >
      {/* 装饰性元素 */}
      <div
        style={{
          position: "absolute",
          top: "-20px",
          right: "-20px",
          width: "100px",
          height: "100px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30px",
          left: "-30px",
          width: "80px",
          height: "80px",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
        }}
      />

      {/* 标题 */}
      <h2
        style={{
          margin: "0 0 20px 0",
          fontSize: "2rem",
          fontWeight: "700",
          color: textColor,
          textAlign: "center",
        }}
      >
        {title}
      </h2>

      {/* 描述内容 */}
      <p
        style={{
          margin: "0 0 30px 0",
          lineHeight: "1.7",
          color: textColor,
          fontSize: "1.1rem",
          textAlign: "justify",
        }}
      >
        {description}
      </p>

      {/* 专家卡片区域 */}
      <div
        style={{
          marginTop: "25px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "25px",
        }}
      >
        {experts.map((expert, index) => {
          const openModal = () => {
            setSelectedExpert(index);
            setIsModalOpen(true);
          };
          return (
            <div
              key={index}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "20px",
                padding: "25px",
                transition: "all 0.3s ease",
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* 左侧专家信息 */}
              <div style={{ flex: "0 0 150px" }}>
                {/* 标签 */}
                <div style={{ marginBottom: "15px", textAlign: "right" }}>
                  {expert.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      style={{
                        display: "inline-block",
                        backgroundColor: accentColor,
                        color: "white",
                        padding: "3px 8px",
                        borderRadius: "10px",
                        fontSize: "0.7rem",
                        fontWeight: "500",
                        marginLeft: "5px",
                        marginBottom: "3px",
                      }}
                    >
                      #{tag}
                    </div>
                  ))}
                </div>

                {/* 专家头像 */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: accentColor,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto 15px auto",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "1.3rem",
                    backgroundImage: expertImageMap[expert.name]
                      ? `url('${expertImageMap[expert.name]}')`
                      : `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${accentColor}"/><text x="50" y="60" text-anchor="middle" fill="white" font-size="28" font-family="Arial">${expert.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}</text></svg>')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onError={(e) => {
                    console.log(
                      "Image failed to load for:",
                      expert.name,
                      expertImageMap[expert.name]
                    );
                    e.currentTarget.style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${accentColor}"/><text x="50" y="60" text-anchor="middle" fill="white" font-size="28" font-family="Arial">${expert.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}</text></svg>')`;
                  }}
                />

                {/* 专家姓名 */}
                <h4
                  style={{
                    margin: "0 0 8px 0",
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: textColor,
                    textAlign: "center",
                  }}
                >
                  {expert.name}
                </h4>

                {/* 所属机构 */}
                <p
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: "0.8rem",
                    color: textColor,
                    opacity: 0.9,
                    textAlign: "center",
                    lineHeight: "1.3",
                  }}
                >
                  {expert.affiliation}
                </p>
              </div>

              {/* 右侧反思内容 */}
              <div style={{ flex: "1" }}>
                <h4
                  style={{
                    margin: "0 0 15px 0",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: textColor,
                  }}
                >
                  Key Takeaways
                </h4>
                <ul
                  style={{
                    margin: "0 0 15px 0",
                    paddingLeft: "20px",
                    fontSize: "0.85rem",
                    color: textColor,
                    lineHeight: "1.5",
                  }}
                >
                  {expert.takeouts.map((takeout, takeoutIndex) => (
                    <li key={takeoutIndex} style={{ marginBottom: "8px" }}>
                      {takeout}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openModal}
                  style={{
                    backgroundColor: accentColor,
                    border: "none",
                    color: "white",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = textColor;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = accentColor;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  READ MORE
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 使用新的模态框组件 */}
      <ExpertModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        expert={selectedExpert !== null ? experts[selectedExpert] : experts[0]}
        accentColor={accentColor}
      />
    </div>
  );
};

export function HumanPractices() {
  // 调试信息
  console.log("Expert image map:", expertImageMap);
  console.log("Available images:", Object.keys(expertImageMap));

  return (
    <ProjectPageLayout
      title="Integrated Human Practices"
      sidebarLinks={sidebarLinks}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <hr className="heading-divider" />
        <p style={{ fontFamily: "Montserrat, sans-serif" }}>
          "Concern for man and his fate must always form the chief interest of
          all technical endeavors." - Albert Einstein
        </p>
        <p style={{ fontFamily: "Montserrat, sans-serif" }}>
          The core inspiration for our Human Practices work stems from this
          famous quote by Albert Einstein. This statement lays the foundation
          for our project—we aim not just to interpret the world, but to take
          action to change it.
        </p>
        <p style={{ fontFamily: "Montserrat, sans-serif" }}>
          Driven by this mission, our Integrated Human Practices (iHP) work
          seeks to deeply understand how people from different backgrounds
          interpret the complex challenge of red tides (harmful algal blooms),
          an issue that is INTERNATIONAL, INTERCULTURAL, and INTERDISCIPLINARY.
          We firmly believe that to build a responsible solution, we must
          comprehensively consider a diverse range of stakeholders. Throughout
          the season, we engaged in in-depth communication with over [XX]
          individuals from the scientific community, corporations, government
          organizations, and frontline communities, and we established
          collaborations with [XX] institutions and [XX] iGEM teams. The true
          wealth of our iGEM journey lies not just in the knowledge from
          literature, but in the countless dialogues, consultations, and
          collaborations with people from academia, industry, government
          organizations, and the communities most profoundly affected by red
          tides.
        </p>
        <p style={{ fontFamily: "Montserrat, sans-serif" }}>
          These cross-disciplinary exchanges have driven the continuous
          evolution and iteration of our project. From the initial technical
          concept to redefining its application scenarios after communicating
          with stakeholders, and to constantly refining our safety designs in
          response to public concerns, our iHP work has always been closely
          intertwined with our experimental design, modeling, and hardware
          development. Ultimately, we hope to create a solution that is not only
          scientifically effective but also user-friendly, accessible, and
          cost-effective, thereby truly responding to the needs of society.
        </p>
      </section>

      <section id="ocean-system">
        <h2>The OCEAN System iHP Closed Loop</h2>
        <hr className="heading-divider" />
        <p style={{ fontFamily: "Montserrat, sans-serif" }}>
          Starting in April, we developed and implemented a unique OCEAN System
          iHP closed loop. This system—through Observe, Concern, Educate,
          Action, and Note—ensures that our project continuously interacts with
          society, integrates feedback, and adjusts our technical solutions
          based on real-world needs.
        </p>

        <div style={{ margin: "30px 0" }}>
          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "15px",
              color: "#2C3E50",
            }}
          >
            🔍 Observe
          </h3>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "1.6",
              marginBottom: "25px",
              color: "#666",
            }}
          >
            Our first step is to observe. Through literature reviews, news
            reports, and initial field visits, we observed the devastating
            impact of red tides on coastal fisheries and the limitations of
            existing remediation methods. This step ensures our project begins
            with a keen insight into real-world problems.
          </p>

          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "15px",
              color: "#2C3E50",
            }}
          >
            💭 Concern
          </h3>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "1.6",
              marginBottom: "25px",
              color: "#666",
            }}
          >
            Next is to show concern. We took the problems we observed and
            engaged in in-depth dialogues with fishermen, aquaculture experts,
            and marine scientists. We were concerned about their economic
            losses, the secondary pollution caused by existing chemical methods,
            and the practical difficulties they encounter. These firsthand
            concerns led us to re-evaluate our initial technical concept.
          </p>

          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "15px",
              color: "#2C3E50",
            }}
          >
            📚 Educate
          </h3>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "1.6",
              marginBottom: "10px",
              color: "#666",
            }}
          >
            The third step is education, which is a two-way process. We educate
            the public and students about the causes and harms of red tides to
            raise their environmental awareness. At the same time, we were also
            educated by our stakeholders: fishermen taught us what makes a
            solution "practical" and "down-to-earth," while policymakers helped
            us understand the real-world barriers to technological
            implementation.
          </p>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "1.6",
              marginBottom: "25px",
              color: "#888",
              fontStyle: "italic",
            }}
          >
            See more in{" "}
            <a
              href="#education"
              style={{ color: "#3498DB", textDecoration: "underline" }}
            >
              Education
            </a>
          </p>

          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "15px",
              color: "#2C3E50",
            }}
          >
            ⚡ Action
          </h3>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "1.6",
              marginBottom: "25px",
              color: "#666",
            }}
          >
            Then, we move to the action phase. We translate the feedback we've
            collected into concrete project improvements. For example, after
            learning about the high cost and significant harm of chemical
            agents, we solidified our resolve to develop an environmentally
            friendly biological agent. After discussions with fish farmers, we
            began to modify the product's form from a simple liquid to
            slow-release granules that are easier to apply and control.
          </p>

          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "15px",
              color: "#2C3E50",
            }}
          >
            📝 Note
          </h3>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "1.6",
              marginBottom: "25px",
              color: "#666",
            }}
          >
            The final step is to note. We responsibly document how all feedback,
            whether positive validation or negative critique, has influenced our
            experimental design and project direction. For instance, positive
            feedback from experts led us to explore the resource utilization of
            degradation byproducts, while negative feedback regarding biosafety
            prompted us to focus more on on-site simulation tests to ensure the
            solution's safety in real-world applications.
          </p>

          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "15px",
              color: "#2C3E50",
            }}
          >
            🔄 Continuous Improvement Cycle
          </h3>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "1.6",
              marginBottom: "25px",
              color: "#666",
            }}
          >
            After "Note," we take our iterated plan and begin a new round of
            "Observation," forming a continuously upward-spiraling loop. This
            ensures our project remains closely connected to real-world needs
            and continuously evolves based on stakeholder feedback and changing
            circumstances.
          </p>
        </div>
      </section>

      <section id="project-phases">
        <h2>Project Development Phases</h2>
        <hr className="heading-divider" />
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1.1rem",
            color: "#666",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Below are the six key phases of our project development, each refined
          and optimized through in-depth communication with experts from
          different fields.
        </p>

        <ProjectPhaseCard
          id="project-design"
          title="Project Design"
          description="To establish our project as a systemic solution capable of tackling complex ecological challenges, we sought insights from a wide range of interdisciplinary experts. While our initial concept centered on remediation through synthetic biology, discussions with marine science professors revealed a critical conclusion: without precise predictive capabilities, any intervention would be merely reactive. This realization guided us to develop an intelligent response system driven by a dual-track approach, combining 'AI-powered prediction' with 'targeted biological intervention.' This valuable input ultimately focused the core of our project on creating a complete, closed-loop system for the proactive warning and precise response to red tides."
          experts={[
            {
              name: "Prof. Chuanlun Zhang",
              affiliation:
                "Professor at Department of Marine Science and Engineering, Southern University of Science and Technology",
              tags: ["Marine Science", "AI Integration"],
              takeouts: [
                "Suggested integrating Artificial Intelligence (AI) technology into the project for prediction and data analysis",
              ],
              whatWeObserved:
                "In the initial stages of conceptualizing our project, our research focus was centered on using synthetic biology tools to develop a biological remediation plan for red tides. We reviewed a great deal of literature in synthetic biology but struggled to find an experimental innovation. As we delved deeper into the problem of red tides, we observed a phenomenon: red tide outbreaks are a highly complex process involving multiple environmental and biological factors, and the difficulty of their remediation far exceeds that of a typical biological problem. This discovery led to our Concern: would a solution focused solely on remediation truly help the fishermen whose daily lives are affected by water pollution? We were worried that our project would not be able to provide a solution that was genuinely useful to society and the natural environment.",
              howWeWereEducated:
                "With this uncertainty, we sought advice from Professor Chuanlun Zhang, an expert in marine science and engineering. After listening to our experimental design, Professor Zhang pointed out that a modern solution for the marine environment must possess predictive and early-warning capabilities. He explained to us that integrating big data and artificial intelligence is not an optional 'add-on,' but a necessary paradigm for addressing such complex ecological issues. This conversation educated us, making us realize that with the advent of the AI era, true innovation would shift towards combining precise prediction with efficient biological intervention.",
              howWeTookAction:
                "We immediately took Action. We shifted the project from a single biological pathway to a dual-track strategy driven by both 'AI Prediction' and 'Biological Remediation.' Our modeling team also began to collect relevant datasets and design algorithms. We noted this new project philosophy. Our project evolved from a simple 'environmental remediation tool' into a comprehensive 'intelligent early-warning and precise intervention system.' It was during this interview that we first considered linking the effectiveness of our methods to true environmental data and real-life impact.",
            },
            {
              name: "Prof. Zhirui Zeng",
              affiliation:
                "Associate Professor, Department of Marine Science and Engineering, Southern University of Science and Technology",
              tags: ["Synthetic Biology", "Lab Safety"],
              takeouts: [
                "Provided guidance on the selection of the engineered bacterial strain",
                "Proposed a construction strategy for a composite plasmid",
                "Emphasized laboratory biosafety",
              ],
              whatWeObserved:
                "As the project entered the experimental design phase, we observed a difficult problem: choosing which bacterium to use as our initial chassis and how to design the most efficient and safest plasmid. This uncertainty led to our Concern: we were worried that the approach we chose after spending significant time and effort would not be scientifically sound or would be fraught with difficulties in practical operation. We hoped to avoid unnecessary setbacks and ensure that the entire project could proceed smoothly on a solid and reliable foundation.",
              howWeWereEducated:
                "We brought these concerns to Professor Zeng, and our discussion profoundly educated us. He analyzed the viability, genetic stability, and safety of different bacterial species in the marine environment. More importantly, he suggested that through a 'plasmid fusion' strategy, we could make a plasmid that was originally non-functional in Bacillus subtilis work by 'grafting' on the key replication fragment from a native B. subtilis plasmid to create a new 'composite plasmid.' He also repeatedly stressed the importance of lab safety, especially ensuring that sterilization procedures for Gram-positive bacteria were foolproof.",
              howWeTookAction:
                "Following this discussion, we immediately took action. Based on Professor Zeng's recommendations, we finalized our target bacterial strain and adopted his proposed design for the composite plasmid. Our wet lab team promptly began their work and successfully fused and modified the two plasmids. The success of this critical step directly guided and ensured the smooth progress of all our subsequent molecular cloning experiments. From this, we solemnly noted: the selection of the chassis organism and core components must be backed by a feasibility analysis from an expert in the field; this is crucial for ensuring the wet lab is heading in the right direction.",
            },
            {
              name: "Dr. Bo Wang",
              affiliation:
                "Laboratory Technician, School of Medicine, Southern University of Science and Technology",
              tags: ["Protocol", "Experimental Design"],
              takeouts: [
                "Provided a detailed experimental protocol for Bacillus subtilis",
              ],
              whatWeObserved:
                "During the project's progression, the efficient genetic modification of Bacillus subtilis was a core part of our experiments. However, we observed that due to our team's lack of a mature, standardized protocol for this strain, our experimental results had poor reproducibility, and transformation efficiency was highly inconsistent. This raised our deep concern: we worried that we would be unable to construct an effective organism for red tide remediation and were therefore eager to master this key strain modification technique quickly.",
              howWeWereEducated:
                "To solve this problem, we consulted the experienced Dr. Wang, and this exchange profoundly educated us. She reminded us that the electroporation efficiency of Bacillus subtilis is inherently low, and we couldn't expect success on the first try. Instead, we must run multiple parallel experiments to ensure a higher success rate and could also try different voltages to find the optimal conditions. Furthermore, she suggested that, after the electroporation step in our original protocol, we should immediately apply a 42℃ heat shock treatment.",
              howWeTookAction:
                "We immediately took action. We adopted the protocol she provided as our team's standard procedure and specifically relayed the advice to 'run more parallels' and 'apply a 42℃ heat shock' to our wet lab team, adding it to our experimental steps. In subsequent experiments, we strictly followed this protocol, and both the success rate and efficiency of our experiments improved significantly. From this, we noted: a standardized experimental protocol is the cornerstone of ensuring research reproducibility. However, for an exploratory team project like iGEM, the valuable 'unwritten' experience from senior researchers—the kind not found in textbooks—is a priceless asset for optimizing procedures and breaking through bottlenecks.",
            },
          ]}
          backgroundColor="#FFF8DC"
          textColor="#2C3E50"
          accentColor="#FFD700"
        />

        <ProjectPhaseCard
          id="model-iteration"
          title="Model Iteration"
          description="Initially, our approach to predictive modeling was based on the vague concept of 'predicting the probability of red tides.' To support our wet lab team and provide precise warnings, we realized it was essential to gain a deep understanding of the various dynamic models in oceanography. This need motivated us to consult with experts in ocean remote sensing to evaluate our idea's feasibility, understand potential challenges, and define key scientific metrics. Subsequently, we engaged in in-depth discussions with several modeling experts, exploring various technical approaches from traditional neural networks to advanced deep learning. Ultimately, we shifted our predictive target from the abstract concept of 'probability' to the scientifically recognized metric of 'chlorophyll concentration,' thereby laying a solid theoretical foundation for our intelligent system."
          experts={[
            {
              name: "Prof. Zhiqiang Liu",
              affiliation:
                "Assistant Professor, Department of Marine Science and Engineering, Southern University of Science and Technology",
              takeouts: [
                "Guided the modeling approach to shift from using a single fully connected neural network for predicting red tide probability to using sea surface chlorophyll concentration as the key indicator",
                "Recommended adopting a more complex and precise deep learning technical route for prediction",
                "When the project stalled, provided guidance to appropriately reduce model complexity and adopt a more mature solution to ensure deliverable results",
              ],
              whatWeObserved:
                "In the initial phase of our project's modeling, we attempted to use a single fully connected neural network to directly predict the probability of a red tide occurrence. However, during our preliminary exploration, we quickly observed a fundamental flaw in this approach: 'red tide probability' is itself a vague metric that lacks a clear scientific definition. This made our model-building process akin to fumbling in a 'black box.' This discovery led to our deep concern: a model built on an imprecise target would likely produce unexplainable and unverifiable predictions. We did not want our project to remain at a conceptual level; rather, we aspired to create a tool with genuine scientific rigor and practical application value.",
              howWeWereEducated:
                "To address this issue, we consulted with Professor Zhiqiang Liu, and this exchange profoundly educated us. He pointed out that a powerful and reliable predictive model must be founded on solid, quantifiable scientific indicators, not on vague phenomenological descriptions. He guided us to shift our focus from the abstract 'phenomenon' to a concrete 'indicator'—using sea surface chlorophyll concentration to characterize the extent of a red tide. This guidance from Professor Liu helped us understand that defining a good problem is far more important than finding a good model.",
              howWeTookAction:
                "This meeting prompted a reframing of our modeling direction. We immediately took action, abandoning the original red tide probability prediction plan and switching our objective to chlorophyll concentration prediction. To this end, we designed an advanced and complex deep learning technical route: a two-stage UNet+ConvLSTM spatio-temporal prediction model. However, in practice, this highly complex model demanded immense computational power and data, and our lack of experience led to the project stalling. At this point, following Professor Liu's guidance to 'find a balance between the ideal and the real,' we pragmatically developed a parallel solution: a model based on a deep feedforward neural network (FNN) using 16 easily obtainable in-situ water quality parameters to directly perform a classification prediction of red tide risk. This more mature solution ensured that we could produce a practical tool with high accuracy (nearly 94% on the validation set) and strong generalization capabilities.",
              tags: ["Model Design", "Deep Learning"],
            },
            {
              name: "Prof. Liguang Jiang",
              affiliation:
                "Assistant Professor, School of Environmental Science and Engineering, Southern University of Science and Technology",
              takeouts: [
                "Provided a specific and actionable technical approach for our problem of having incomplete high-resolution data and complete low-resolution data",
                "The specific method: first, resample the 25km low-resolution data to 4km. Then, use the existing measured high-resolution data to establish a 'mapping relationship' model between the resampled data and the true data to correct the data, and use this as a basis for extrapolation",
              ],
              whatWeObserved:
                "During the model optimization phase, we observed a technical problem: we had two types of data—one was precise but incomplete high-resolution (4 km²) observational data, and the other was complete but lower-resolution (25 km²) algorithm-derived data. We were concerned about how to scientifically fuse these two datasets, fearing that improper handling would not only fail to leverage the precision of the high-resolution data but also sacrifice overall accuracy due to the lower-resolution data.",
              howWeWereEducated:
                "Professor Liguang Jiang educated us that for this type of data problem, a clever engineering approach of 'resampling + mapping correction' could be used. The idea is to first 'align' the two datasets in terms of resolution and then use the existing precise data to 'correct' and 'guide' the less precise data, thereby building a reliable conversion model.",
              howWeTookAction:
                "The method provided by Professor Jiang was translated into action by our modeling team. We immediately adopted this 'mapping correction' scheme as an important strategy and began preliminary programming, planning to use it as our baseline model to measure the effectiveness of subsequent methods. We noted that when solving complex scientific problems, a logically clear engineering solution with a well-defined implementation path is no less valuable than a cutting-edge but complex algorithm.",
              tags: ["Data Fusion", "Engineering Solution"],
            },
            {
              name: "Prof. Yong Tian",
              affiliation:
                "Research Associate Professor, School of Environmental Science and Engineering, Southern University of Science and Technology",
              takeouts: [
                "Systematically outlined the cutting-edge methodologies in the field of high/low-resolution remote sensing data fusion for us",
                "Provided three main categories of fusion methods to try: 1. Weight function-based (e.g., STARFM, ESTARFM); 2. Decomposition-based (e.g., MMT, STDFA); 3. Deep learning-based (e.g., STFDCNN, BiaSTF, EDCSTFN, GANs)",
                "Mentioned that his team is currently debugging a high-resolution dataset for the relevant sea area",
              ],
              whatWeObserved:
                "We observed that 'remote sensing data fusion' is itself a vast academic field, with a plethora of algorithms and models we had never heard of. We were concerned that we might blindly choose an outdated or unsuitable method, thus wasting a significant amount of time, and we urgently needed an expert with deep experience in this field to guide our direction.",
              howWeWereEducated:
                "Professor Yong Tian systematically educated us with a panoramic overview of the field's knowledge. He not only clearly categorized the mainstream methods into three schools of thought but also listed the specific names of the most classic and cutting-edge algorithm models under each category (such as STARFM, STFDCNN, etc.). This greatly broadened our academic horizons.",
              howWeTookAction:
                "Professor Tian's feedback was translated into an efficient action plan for our modeling team. Using the algorithm keywords he provided, we conducted in-depth and highly targeted literature research, evaluating the pros and cons, implementation difficulty, and suitability of different methods. This consultation allowed us to avoid a needle-in-a-haystack search for a technical solution and move directly to the validation phase. We noted that when facing an unfamiliar and complex technical problem, seeking a systematic overview from an expert is the most efficient learning path. These 'keywords' were like keys that unlocked treasure troves of knowledge, ensuring that our model optimization work was built upon a solid understanding of the field's forefront.",
              tags: ["Remote Sensing", "Algorithm Selection"],
            },
          ]}
          backgroundColor="#E6F3FF"
          textColor="#2C3E50"
          accentColor="#3498DB"
        />

        <ProjectPhaseCard
          id="application"
          title="Application"
          description="We believe that the value of a technical solution is ultimately measured by its ability to solve real-world problems. To gain a deep understanding of the impact of red tides on the aquaculture and fishery sectors, we visited aquaculture companies of various scales, a national fisheries research institute, and local government regulatory bodies. We consulted these stakeholders to explore the necessity, relevance, and feasibility of our 'intelligent early-warning and biological remediation' concept in real-world scenarios. While they endorsed our technical direction, we also gained insight into critical real-world constraints, including cost, scale, and existing operational procedures. This invaluable feedback drove us to continuously refine our solution's application model to ensure it more closely aligns with the actual needs of end-users."
          experts={[
            {
              name: "Bingkai Yu",
              affiliation:
                "Chief Executive Officer of Shanwei Hanhai Breeding Co.",
              takeouts: [
                "Red tides cause huge economic losses for the Babylonia areolata (whelk) farming industry; the impact is not limited to the outbreak period but also includes the food chain collapse due to water quality deterioration and hypoxia",
                "Our remediation idea, while good, is too costly for a private enterprise covering thousands of meters of sea area to bear",
                "Believes that such environmental issues require unified governance at the government level",
              ],
              whatWeObserved:
                "To understand the real-world impact of red tides on the industry frontline, we interviewed Mr. Bingkai Yu, the CEO of Shanwei Hanhai Breeding Co. Through our conversation, we observed that the destruction caused by red tides is systemic. It not only directly kills the company's core product, the Babylonia areolata whelks, during an outbreak but also deteriorates water quality beforehand and causes the death of baitfish due to hypoxia afterward, completely severing the aquaculture ecological chain. Mr. Yu's description made us concerned about the immense economic pressure faced by frontline practitioners. More importantly, we began to grapple with a more poignant question: faced with such a large scale of farming and immense cost pressures, is our proposed technical solution truly feasible in reality?",
              howWeWereEducated:
                "When we enthusiastically presented our biological remediation solution, Mr. Yu's feedback profoundly educated us. He frankly pointed out that although our idea was good, for a private company managing thousands of meters of sea area, the cost of deploying our solution would be 'prohibitively expensive.' He stated that unless there is unified governance at the government level, individual farmers simply cannot afford it. This feedback was a wake-up call, making us realize that a technology's value lies not only in its scientific effectiveness but also in its economic accessibility within a specific commercial context.",
              howWeTookAction:
                "This interview directly prompted us to take fundamental action by adjusting our project's market positioning. We realized that marketing our solution directly to individual farmers was an unviable path. Therefore, we decisively shifted our potential target user group from individual practitioners to government environmental protection departments, large fishery corporations, or marine management agencies, which have greater financial capacity and a need for macro-level management. We noted this critical cognitive shift: 'Technical Feasibility ≠ Market Feasibility.' The successful implementation of a project must be precisely matched with the end-user's ability to pay and their specific use case.",
              tags: ["Aquaculture", "Economic Impact"],
            },
            {
              name: "Zengyue Yu",
              affiliation:
                "Shanwei Xinsheng Aquaculture Reproduction Co., Ltd.",
              takeouts: [
                "Factory-style aquaculture models (e.g., for sea urchins) have stronger resilience against red tides",
                "They primarily avoid losses by paying attention to early warnings and using defensive measures like water reservoirs",
              ],
              whatWeObserved:
                "During our ongoing investigation of different aquaculture models, our visit to Shanwei Xinsheng Aquaculture Reproduction Co., Ltd. provided a completely different perspective compared to open-sea farming. We observed that their factory-style sea urchin farming model demonstrated significantly stronger resilience against red tides. This stark contrast triggered a core concern: had we oversimplified our target market? We began to worry that a 'one-size-fits-all' remediation plan might not meet the actual needs of all participants in the industry, and we recognized the need to deeply understand their existing and effective defensive strategies.",
              howWeWereEducated:
                "The staff at the company vividly educated us, detailing their proactive defense strategy. They explained that by closely monitoring red tide warnings, they can switch their aquaculture system's water source to large reservoirs pre-filled with clean seawater in a timely manner, effectively isolating the entire farming environment from the contaminated external seawater. For a high-investment, industrialized farming model, the best solution is not necessarily a biological 'treatment,' but an engineered 'physical isolation' system combined with precise information—which is exactly what our hardware team is working on.",
              howWeTookAction:
                "This profound insight directly prompted us to take important action by adjusting our project's value proposition. We realized that for clients like Xinsheng, our biological remediation agent might have limited appeal, but our AI-powered early warning system could create immense value—it could provide the critical lead time needed to activate their reservoir system. Therefore, we began to envision it as a modular service that could be offered independently. From this, we noted a key principle: our solution should not be monolithic, but modular.",
              tags: ["Factory Aquaculture", "Defense Strategy"],
            },
            {
              name: "Unnamed Expert",
              affiliation:
                "South China Sea Fisheries Research Institute, Chinese Academy of Fishery Sciences",
              takeouts: [
                "For small-scale red tides, their smart aquaculture farms might be towed away by tugboats for evasion",
                "This method is costly and limited by speed, making it not an ideal solution",
              ],
              whatWeObserved:
                "To understand the strategies employed by national-level research institutions, we consulted with an expert from the South China Sea Fisheries Research Institute. During our discussion, we observed a surprising yet flawed solution: when faced with small-scale red tides, their advanced smart aquaculture farms might be physically towed away by tugboats for evasion. This strategy immediately sparked our deep concern: if even the most technologically advanced research institutions are resorting to such a 'cumbersome' and expensive method, it highlights a significant technological gap in the current field of red tide prevention and control.",
              howWeWereEducated:
                "The experts at the institute educated us on the harsh reality behind this evasion tactic. They detailed the challenges, the high cost of chartering powerful tugboats, and the slow relocation speed, which might be completely ineffective against a rapidly developing red tide. In the vastness of the ocean, physical movement is not a panacea. Their experience powerfully demonstrated the urgent market demand for efficient and economical 'in-situ' remediation technology.",
              howWeTookAction:
                "This conversation greatly validated our project's direction and prompted us to take action to precisely define our project's value. It strengthened our confidence and determination to develop an 'in-situ, low-cost, active remediation' technology. We realized our biological control solution does not compete with physical evasion methods but perfectly complements their weaknesses. We thus noted our project's more precise technological niche: our goal is not to completely replace existing strategies, but to serve as a key 'supplement and upgrade' to current prevention and control measures.",
              tags: ["Research Institute", "Evasion Strategy"],
            },
            {
              name: "Unnamed Staff",
              affiliation:
                "Shenzhen Longkeyuan Aquaculture Co., LTD and Shenzhen Haizhi Fishing Net Development Co., LTD",
              takeouts: [
                "The company uses advanced post-treatment purification technology to ensure water quality",
              ],
              whatWeObserved:
                "Our discussions with Shenzhen Longkeyuan Aquaculture Co., LTD and Haizhi Fishing Net Development Co., LTD provided an opportunity to understand the strategies of technology-driven enterprises. During the interviews, we observed that these companies rely on advanced internal post-treatment purification systems to guarantee their water quality, effectively creating a technological 'firewall' against external environmental fluctuations. This recurring phenomenon in high-investment enterprises sparked a core concern: if the high-end market already possesses effective hardware solutions, where does our biological remediation method fit in? We worried that our project might be trying to solve a problem that some users have already 'solved' through other means.",
              howWeWereEducated:
                "The company staff educated us on a crucial point: for high-value aquaculture, water purification is itself a mature and sophisticated industry. Our technology is not entering a vacuum but an existing and competitive technological ecosystem. This lesson was vital. It shifted our thinking from being an 'independent solution' to a 'potential participant in a vast industrial ecosystem.' We understood that we must find a way to either compete with or (more promisingly) complement it.",
              howWeTookAction:
                "This realization prompted us to take immediate action by actively conceiving new application models. We no longer considered solely replacing existing solutions. Instead, we began to explore whether our engineered bacteria could be integrated into their current water purification processes as a 'biological pretreatment agent' or an 'efficacy-enhancing auxiliary agent.' Could we, in this way, help them reduce the use of chemical agents, save on operational costs, or more efficiently process specific organic loads? We solemnly noted this major expansion of our project's application scenarios.",
              tags: ["Technology Integration", "Purification Systems"],
            },
            {
              name: "Gu Zhang Li",
              affiliation: "Head of Fisheries Department, Nan'ao Island",
              takeouts: [
                "Through government-led regular water quality monitoring, Nan'ao Island has had no red tides in nearly 20 years, proving the importance of prevention",
                "Existing detection methods are costly and infrequent (quarterly testing), unable to provide real-time monitoring and thus lack sufficient preventive capability",
                "Expressed appreciation for our unmanned monitoring and control vessel design but raised practical questions about its 'operational lifecycle' and 'effective prediction range'",
                "Expressed hope for a finished product to be available for field testing in the future",
              ],
              whatWeObserved:
                "To understand the practical needs and pain points of government regulatory bodies, we conducted a field visit to Nan'ao Island and spoke with Mr. Li, the Head of the Fisheries Department. During the interview, we observed an interesting situation: on one hand, through proactive government-led management, Nan'ao Island has been free of red tides for nearly 20 years, demonstrating the immense value of 'prevention.' On the other hand, their current preventive measure—commissioning a third-party company for quarterly offshore sampling—is costly and not real-time, offering limited warning capability for sudden outbreaks. This sparked our concern: we saw a clear and urgent need for a low-cost, high-frequency monitoring solution, but we also worried whether our solution could truly meet the pragmatic considerations of a government department regarding budget, maintenance, and reliability.",
              howWeWereEducated:
                "When we presented our design for an unmanned red tide monitoring and control vessel to Mr. Li, the ensuing discussion was a lesson in 'public productization.' After praising the novelty of our technology, he raised two core questions from a manager's perspective: 'operational lifecycle' and 'effective prediction range.' He made us deeply understand that for a government department, a tool's long-term operational costs, ease of maintenance, and effective coverage are far more important than its technical specifications. In turn, we showed him how automation could significantly reduce monitoring costs and fill the real-time data gap.",
              howWeTookAction:
                "Mr. Li's feedback directly spurred action from our hardware team. Immediately after the meeting, we established 'operational lifecycle (endurance, maintenance)' and 'effective coverage range' as Key Performance Indicators (KPIs) for our hardware design and began optimizing around them. Mr. Li's hope for a finished product for future field testing also laid important groundwork for our project's next implementation step: finding pilot partners. We solemnly noted the lesson from this exchange: communication with final decision-makers transforms technical parameters into concrete 'product requirements.'",
              tags: ["Government", "Monitoring Systems"],
            },
          ]}
          backgroundColor="#FFE6F2"
          textColor="#2C3E50"
          accentColor="#E91E63"
        />

        <ProjectPhaseCard
          id="community-collaboration"
          title="Community Collaboration"
          description="We firmly believe that innovation is born from open communication and collaboration. Throughout our iGEM journey, we actively engaged with the broader synthetic biology community, participating in numerous meetups from regional to national levels. These platforms for intellectual exchange became catalysts for our project's continuous evolution. We learned cutting-edge modeling techniques, data processing strategies, and biosafety designs from leading teams, while also gaining invaluable experience in science communication, artistic integration, and integrated Human Practices design. Every question, suggestion, and critique from our peers served as a driving force for our project's iteration, pushing us to continually refine our technical approaches and practical strategies."
          experts={[
            {
              name: "Synbio1 (The First SUSTech-SynBio Meetup)",
              affiliation:
                "Various iGEM teams: CJUH-JLU-China, Central Academy of Fine Arts, SZU-China, SUSTechMed, etc.",
              takeouts: [
                "HP Design: Learned clearer strategies for designing iHP activities (from CJUH-JLU-China)",
                "Science Communication: Gained inspiration to integrate artistic design into science communication to enhance appeal (from the Central Academy of Fine Arts)",
                "Storytelling: Learned to introduce a project using vivid stories and picture books to increase resonance (from SZU-China)",
                "Tiered Education: Learned to precisely categorize educational audiences into technical, policy-making, and public circles, and to adopt targeted strategies for each (from SUSTechMed)",
                "White Paper: Got the idea to write a project white paper to clarify project boundaries and thinking (from SZU-China)",
              ],
              whatWeObserved:
                "At the first SUSTech-SynBio Meetup we hosted, we had the opportunity to engage in deep conversations with many excellent iGEM teams. While observing and learning, we **Observed** the sophistication of other teams in their Human Practices (HP) design, the creativity in their science communication, and the systematic nature of their educational activities. This sparked our **Concern**: we worried that our own work at the time was not systematic enough and lacked sufficient impact. We were unsure how to tell a complex scientific story in a compelling way or how to make our educational activities truly precise and effective.",
              howWeWereEducated:
                "The meetup was an intensive and profound process of mutual learning; we were greatly **Educated** and inspired by the creativity and rigor of other teams. For example: Team SZU-China introduced their project with a vivid storybook, showing us the power of narrative and inspiring us to write a project 'white paper' to clarify our own ideas. The team from the Central Academy of Fine Arts demonstrated how to cleverly integrate artistic design into science communication, significantly enhancing the content's appeal. Team SUSTechMed introduced us to the advanced concept of precisely dividing educational audiences into technical, policy-making, and public circles and adopting different strategies for each, while team CJUH-JLU-China provided us with clearer iHP activity design frameworks.",
              howWeTookAction:
                "This valuable inspiration acted as a catalyst, prompting us to take immediate **Action**. After the meetup, we translated the ideas we learned into concrete project plans: we immediately started creating a project picture book, re-organized and stratified our educational audiences, and began drafting our project white paper. These new additions later became highlights of our HP work. From this, we solemnly **Noted**: cross-team communication is the best way to spark creativity and self-reflection. It is essential to always maintain an open mind, actively learn from the strengths of others, and quickly convert those learnings into momentum for one's own team.",
              tags: ["SynBio", "Innovation", "HP Design"],
            },
            {
              name: "Synbio2 Meetup",
              affiliation:
                "Shanghai Jiao Tong University (SJTU), iZJU, Nanjing University (NJU), SJTU-software, Zhejiang University (ZJU)",
              takeouts: [
                "Modeling Ideas: From our discussions with SJTU and ZJU, we learned about the application of time-series models (like LSTM) in continuous prediction and that classic chemical kinetics models can sometimes achieve excellent predictive results",
                "Data Processing: Team SJTU-software shared advanced experience in handling multi-source heterogeneous biological data, including creating a unified data access layer, resolving identifier inconsistencies across different databases, and automatically completing metabolic networks",
                "AI Applications: We learned about the deep applications of AI in synthetic biology, such as SJTU-software's use of Graph Neural Networks (GNNs) to predict enzyme parameters from protein sequences",
                "Biosafety and Frontier Tech: We consulted with team iZJU on the biosafety of DNA origami and precision targeting, which pushed us to think more deeply about our project's safety design",
              ],
              whatWeObserved:
                "At the Synbio2 Meetup with top domestic iGEM teams like Shanghai Jiao Tong University and Zhejiang University, we **Observed** the frontier technologies in synthetic biology, such as AI-driven metabolic engineering, advanced bioinformatics pipelines, and highly sophisticated biosafety designs. While seeing the rapid development of the field, this exchange also made us **Concerned** about the technical depth of our own project. Particularly in modeling and the integration of massive heterogeneous data, we recognized the gap between us and these excellent teams and were eager to enhance our project's technical rigor.",
              howWeWereEducated:
                "At this meeting, team SJTU-software systematically presented a complete AI-powered metabolic pipeline and their methods for handling multi-source heterogeneous data, which was highly instructive for our processing of marine remote sensing and environmental data. Discussions with the SJTU and ZJU teams **Educated** us on a modeling approach we had never considered: while time-series models (like LSTM) are powerful, classic chemical kinetics models can sometimes achieve excellent results. The key is to select the model that best matches the problem itself. Additionally, consulting team iZJU about the biosafety of cutting-edge technologies like DNA origami inspired us to think more deeply about specific safety verification methods, such as targeting specificity and off-target effects.",
              howWeTookAction:
                "These profound technical insights prompted us to take concrete **Action**. After the meeting, we re-evaluated the characteristics and limitations of our existing data and formed a dedicated biosafety discussion group. Drawing from our discussion with iZJU, we reviewed and strengthened our project's safety protocols. Team SJTU-software's point that data scarcity is a common challenge in the field also solidified our resolve to seek advice from data fusion experts. We **Noted** that high-level academic exchange is key for self-positioning and finding inspiration. It clarified our next steps: before modeling, we must first establish a robust data preprocessing pipeline and actively explore the immense potential of cutting-edge AI applications like sequence-based deep learning.",
              tags: ["Modeling", "AI", "Biosafety"],
            },
            {
              name: "Shenlanyimai Charity Sale",
              affiliation:
                "Students and faculty from various departments at SUSTech",
              takeouts: [
                "Model/Experiment: Designs should consider real-world variables like ocean currents",
                "HP: Interviews should engage more deeply with frontline stakeholders (fishermen)",
                "Safety: Additional toxicity experiments on common commercial seafood (prawns, oysters) should be conducted",
                "Evaluation: The effectiveness of educational activities should be quantified using pre- and post-activity questionnaires",
              ],
              whatWeObserved:
                "At the 'Shenlanyimai Charity Sale,' an open event for the entire university, our project underwent its first 'stress test' from people with diverse academic backgrounds. In our interactions with faculty and students from various departments, we **Observed** that some experimental plans and HP activities we had considered well-designed revealed room for improvement in rigor when questioned about real-world application scenarios and effectiveness evaluation. This sparked our deep **Concern**: we worried our project design was overly idealistic and disconnected from the complex real world. We were concerned about whether our biosafety assessments were comprehensive enough, and even more concerned that our HP work was merely 'done' without being scientifically proven to be 'effective.'",
              howWeWereEducated:
                "This event was a valuable educational experience; faculty and students from different disciplinary backgrounds **Educated** us with their sharp and constructive questions. They inspired us to consider key real-world variables like ocean currents in our model and experimental designs, and to engage more deeply with frontline stakeholders like fishermen during HP interviews. Crucially, they emphasized the importance of 'quantitative thinking'—for example, suggesting we design pre- and post-activity questionnaires to quantify the impact of our educational events and conduct additional toxicity tests on local commercial seafood (like prawns and oysters) to obtain more convincing safety data.",
              howWeTookAction:
                "We treated these valuable suggestions as a detailed 'project improvement checklist' and quickly translated them into tangible **Action**. We adopted all the recommendations: the modeling team began incorporating hydrodynamic parameters; the HP team increased the weight of interviews with aquaculturists; and the wet lab team immediately designed and launched safety tests of our engineered bacteria on prawns and oysters, which later became key supporting data for our project's safety design. We also designed pre- and post-activity questionnaires and implemented them in all subsequent educational events. We thus **Noted**: rigorous quantitative evaluation is key to enhancing a project's scientific credibility, and the sharp critiques and specific suggestions from peers are invaluable assets for driving project iteration.",
              tags: ["Evaluation", "Safety", "Real-world"],
            },
            {
              name: "Huanan Meetup",
              affiliation: "Various iGEM teams from the South China region",
              takeouts: [
                "Received feedback on many previously unconsidered issues, providing valuable direction for project optimization",
                "Gained a deep appreciation that good science communication requires a clear story and sincere interaction",
              ],
              whatWeObserved:
                "At the meetup for iGEM teams in South China, we presented our project to peers from diverse academic backgrounds. During the Q&A session, we **Observed** that students from other teams had varied points of focus and asked questions from all sorts of angles. This made us realize that our original presentation style, which focused more on 'showing what we did,' was somewhat unprepared to handle in-depth technical questions and inquiries about potential risks. We became deeply **Concerned** about whether we could 'tell our story well,' and not just 'showcase our technology.'",
              howWeWereEducated:
                "The questions from other teams served as an extremely vivid and profound **Education**. On a technical level, they were concerned about 'how to improve the efficiency and concentration of the product output?' and pressed us for specific details about our 'light-control system' and 'NAD-consuming enzyme' designs and their metabolic burden. On the biosafety front, they bluntly raised a series of questions we had to face: 'When do your engineered bacteria die?', 'How do you precisely regulate cell suicide?', 'Will your c14 element affect other organisms?'. Many technical details we had taken for granted required clear explanation from another's perspective, and potential risks we may have overlooked were precisely what the public and our peers cared about most.",
              howWeTookAction:
                "This meetup exposed the shortcomings in our communication strategy and prompted us to take immediate **Action**. After the conference, we conducted a comprehensive review and discussion of all the questions we were asked. We completely revamped our project's overall presentation logic, moving away from a mere display of results to a narrative built around a clear storyline, and added dedicated modules to proactively address potential questions about biosafety, off-target effects, and efficiency optimization. We thus **Noted**: communicating with peers from different backgrounds is the best way to test the effectiveness of project communication. These sharp questions are precious gifts; they force us to re-examine our project from others' perspectives and are a critical part of optimizing our entire project narrative and communication strategy.",
              tags: ["Communication", "Feedback", "Presentation"],
            },
            {
              name: "CCiC (Conference of China iGEMer Community)",
              affiliation: "iGEM teams from across China",
              takeouts: [
                "Project Inspiration: Learned about the AI platformization concept (from YNNU-China), a new perspective on dynamic tracking (from XJTLU-China), and vivid thematic packaging (from UCAS-China)",
                "Frontier Trends: Learned that AI-driven automated design and engineered microbial consortia are frontier directions in synthetic biology",
                "Team Management: Recognized the importance of internal division of labor and dynamic task allocation within a team",
              ],
              whatWeObserved:
                "As a grand event for all Chinese iGEMers, CCiC gave us the opportunity to **Observe** the macro-level development trends in synthetic biology and the most cutting-edge project design concepts in the country on a larger stage. We saw the huge potential of frontier directions like AI-driven automated design and engineered microbial consortia. While this was greatly inspiring, it also sparked a bit of **Concern**: we began to reflect on whether our project was closely aligned with the forefront of the field and whether we should be thinking about the environmental ethics in the context of synthetic biology.",
              howWeWereEducated:
                "CCiC was like a massive **Education** hub, from which we learned about new technical directions and project packaging strategies. We were inspired by the brilliant ideas of many teams: the vivid and interesting thematic packaging from UCAS-China showed us another way to tell a scientific story; the new perspective on dynamic tracking from XJTLU-China provided new ideas for our research; and the AI platformization concept from YNNU-China was particularly enlightening, inspiring us to think about how to elevate our own project from a 'tool' to the strategic level of a 'platform.'",
              howWeTookAction:
                "This inspiration from a national platform prompted us to start thinking about our project's development from a more long-term perspective. We immediately organized a special discussion to seriously consider whether our AI model could be developed into a more general 'marine environment prediction platform,' rather than just serving our current project. At the same time, this event made us realize the importance of efficient management, and we reviewed and optimized our internal meeting and task allocation mechanisms. We thus **Noted**: a team must periodically 'look up at the road ahead' to understand the macro trends of its entire field. This not only brings valuable inspiration for the current project but also points the way for the future development of its team members.",
              tags: ["Platform", "Management", "Future"],
            },
          ]}
          backgroundColor="#F3E5F5"
          textColor="#2C3E50"
          accentColor="#9B59B6"
        />

        <ProjectPhaseCard
          id="ethical-exploration"
          title="Ethical Exploration"
          description="We deeply recognize that the success of a technology aimed at serving society and the environment depends not only on scientific breakthroughs but also on the prudent consideration of complex ethical issues. As our technical path became clearer, we realized that a synthetic biology technology aimed at environmental remediation inevitably involves complex ethical, legal, and social issues (ELSI). Rather than simply proposing idealized solutions, we took the initiative to act as the chief editorial team, collaborating with several iGEM teams to co-author the Ethical Opinion Paper on Synthetic Biology for Water Environment Treatment. This paper explores the ethical challenges across various aquatic environmental application scenarios, from wastewater treatment and marine ecological intervention to red tide prevention and control. After completing the initial draft, we conducted an in-depth interview with Professor Yu Wang, seeking professional academic review and critical feedback. This process not only profoundly deepened our understanding of the ethical, legal, and social implications but also shifted our core goal from 'providing answers' to 'profoundly revealing the problems.'"
          experts={[
            {
              name: "We Wrote an Ethics Paper Ourselves",
              affiliation:
                "Collaborative effort with SCU-China, XJTLU-China, ZJU-China, and other iGEM teams",
              takeouts: [
                "Built a panoramic understanding of ethical issues in the aquatic environment: By collaborating with multiple iGEM teams focused on different aspects of water governance (wastewater treatment, marine ecological intervention, pollution monitoring), we were able to place the ethical issues of our own project into a much broader framework and systematically understand the common challenges",
                "Shifted the core goal of ethical exploration from solutions to dilemmas: The process of writing and integrating different chapters led us to realize that simply proposing idealized solutions was insufficient. This prompted us to shift the core of our ethics work from 'providing answers' to 'profoundly revealing the problems'",
                "Responsible innovation is more than a safety patch for technology: It is about proactively and bravely embracing and exploring the complex world beyond the technology itself—a world filled with value judgments, competing interests, and demands for fairness",
              ],
              whatWeObserved:
                "As the technical path of our project became clearer, a deeper question emerged. We **Observed** that a synthetic biology technology aimed at environmental remediation inevitably involves complex ethical, legal, and social issues (ELSI). Initially, we envisioned ensuring the project's 'responsibility' through mechanisms like a 'multi-stakeholder governance' system or by establishing an 'eco-compensation fund'. However, these concepts seemed to be merely idealized models from textbooks. This sparked our deep **Concern**: Are these idealized solutions feasible in the real world? We worried that a technology that is 'perfect' only in the laboratory might introduce unknown risks and social equity issues when applied in reality. We were eager to find a truly responsible path for innovation, rather than being content with theoretical solutions.",
              howWeWereEducated:
                "This desire to find answers prompted us to initiate and co-author the *Ethical Opinion Paper on Synthetic Biology for Water Environment Governance*. We collaborated with several outstanding iGEM teams, including SCU-China, XJTLU-China, and ZJU-China, and served as the chief editorial team, hoping to systematically explore the ethical challenges of synthetic biology in various water governance scenarios through this cross-team effort. During the process of co-authoring the first draft, we **Educated** and inspired one another. We saw how team SCU-China conducted an in-depth analysis of the rights and responsibilities of stakeholders in wastewater treatment; how team XJTLU-China warned of the ecological risks and horizontal gene transfer associated with marine intervention; and how team ZJU-China explored the data ethics and social equity issues behind various monitoring technologies. This process allowed our understanding of ethical issues to become systematic and concrete for the first time, and we realized that a responsible solution must be built upon a deep understanding of these specific dilemmas.",
              howWeTookAction:
                "This valuable collaborative experience prompted us to take directional **Action** in our own ethical exploration. We decided to shift the core objective of Chapter Four of our *Ethical Opinion Paper* away from simply proposing a 'multi-stakeholder governance' framework and towards a more profound revelation and analysis of the ethical dilemmas latent in our red tide remediation project. We focused on the issues of data ownership and privacy boundaries that could be triggered by our AI prediction model, as well as the environmental justice challenges that our engineered bacteria might pose in practical application. This was our response to the systematic thinking we had learned through the collaboration. From this experience, we **Noted**: responsible innovation means actively embracing the complexity of the real world and bravely engaging in self-reflection. The deeper requirement of iGEM's Human Practices (iHP) is to guide us to understand the broader world beyond the technology—a world filled with value judgments, competing interests, and demands for fairness.",
              tags: ["Collaboration", "Ethics Paper", "Systematic Thinking"],
            },
            {
              name: "Prof. Yu Wang",
              affiliation:
                "Associate Professor, Social Science Center, Southern University of Science and Technology",
              takeouts: [
                "Deconstructed idealized governance models: Gained a deep understanding of the limitations of common models like 'polluter pays' and 'multi-stakeholder governance,' recognizing that real-world environmental governance is a complex public administration process filled with inter-departmental rivalries, regional conflicts, and practical constraints, for which there is no simple 'standard formula'",
                "Established a critical understanding of monetized solutions: Developed a more cautious view of solutions reliant on money, such as 'eco-compensation funds' and 'technology sharing,' understanding the potential 'environmental neoliberalism' tendency behind them, where complex social equity issues might be oversimplified or existing injustices obscured",
                "Clarified the core task of ethics research: Realized that the core of ethics work is not to provide a universal solution for systemic problems, but to clearly articulate the specific ethical dilemmas that may arise during the R&D and application of a technology, thereby promoting self-reflection among the scientific community",
                "Reflected on the potential 'techno-elite bias' of scientists: Recognized that public concerns about technology should not be simply dismissed as a 'knowledge gap to be filled by science communication.' These concerns are often rooted in deeper values related to fairness and justice, and scientists must be wary of their own potential biases",
                "Learned the core ethical principles for researchers: Clarified two fundamental principles for young students in scientific research: first, integrity, to ensure the authenticity of the research; and second, a commitment to the public interest, to consider how technology can better serve society",
              ],
              whatWeObserved:
                "As the technical path of our project became clearer, a deeper question emerged. We observed that a synthetic biology technology aimed at environmental remediation inevitably involves complex ethical, legal, and social issues (ELSI). We initially envisioned ensuring the project's 'responsibility' through mechanisms like a 'multi-stakeholder governance' system or by establishing an 'eco-compensation fund.' However, these concepts seemed to be merely idealized models from textbooks. This sparked our deep concern: Are these idealized solutions feasible in the real world? We worried that the development of the technology would bring unknown risks and social equity issues, and we were eager to find a truly responsible path for innovation.",
              howWeWereEducated:
                "The in-depth interview with Professor Yu Wang was a powerful lesson in science and technology ethics that profoundly educated and inspired us. He began by deconstructing our original idealized concepts, pointing out incisively that real-world environmental governance is far more complex than models like 'polluter pays' or 'multi-stakeholder governance.' It is a public administration challenge fraught with inter-departmental rivalries, regional conflicts, and practical constraints, with no 'standard formula' to apply. He offered a deeper critique of using money to solve environmental problems, viewing it as a tendency towards 'environmental neoliberalism' which, while seemingly reasonable, might oversimplify complex social equity issues or even exacerbate injustice. Most importantly, Professor Wang inspired us to re-examine our role as scientists. He challenged the potential 'techno-elite bias' in our subconscious—the idea that 'the technology is good, and public concerns just need to be persuaded away by science communication.' He reminded us that behind public 'techno-phobia' lies a genuine demand for fairness and justice. He educated us that the core value of an ethics paper is not to provide answers to all problems, but to clearly articulate the ethical dilemmas a technology may trigger in its development and application, and to foster deep self-reflection within the scientific community.",
              howWeTookAction:
                "This interview completely changed our understanding of ethical exploration and prompted us to take immediate directional action. We decided to shift the core goal of our *Ethical Opinion Paper* from 'proposing solutions' to 'deeply revealing and analyzing the potential ethical dilemmas in our project.' We no longer vaguely discussed 'multi-stakeholder governance' but instead focused on the data ownership and privacy boundary issues that our AI prediction model might raise, as well as the environmental justice challenges our engineered bacteria could pose in practical application. At the same time, we adopted Professor Wang's suggestion to add a chapter to the paper on the 'core ethical principles for young students in scientific research,' incorporating his teachings on 'integrity' and 'commitment to the public interest.' From this, we noted: responsible innovation means actively embracing the complexity of the real world and bravely engaging in self-reflection. The deeper requirement of iHP is to understand the broader world beyond technology—a world filled with value judgments, competing interests, and demands for fairness.",
              tags: ["Ethics", "Governance", "Critical Thinking"],
            },
          ]}
          backgroundColor="#FFF2E6"
          textColor="#2C3E50"
          accentColor="#FF8C00"
        />

        <ProjectPhaseCard
          id="education"
          title="Education"
          description="The core goal of our team's educational work is to create a scientifically-based, inclusive, and holistic program that complements existing science education, aiming to provide unique opportunities for everyone to engage in environmental science. Our practice began with a global questionnaire survey covering more than 10 countries to precisely identify the knowledge gaps and primary concerns of different communities, which served as the foundation for our customized educational content. To fulfill our ambition of enhancing the impact of science education, we critically reviewed our educational concepts with experts in the field of education. This appraisal helped us identify the most impactful aspects of our program that set it apart from traditional lecture-based teaching, allowing us to deeply understand how our initiatives can make a meaningful contribution to improving the STEM educational landscape in the field of environmental science."
          experts={[
            {
              name: "Global Questionnaire Survey",
              affiliation: "Public from over 10 countries",
              takeouts: [
                "The public has a high awareness of the term 'red tide' but a low awareness of the more scientific term 'Harmful Algal Blooms (HABs)'",
                "The public generally knows very little about the scientific principles, ecological risks, and specific control measures related to red tides",
                "Coastal and non-coastal residents have different points of concern (economic loss vs. cost of governance)",
              ],
              whatWeObserved:
                "To ensure our education and communication efforts could genuinely connect with the public, we first needed to understand their true perspectives. To this end, we launched a global questionnaire survey covering more than 10 countries. From the collected data, we clearly **Observed** a global 'knowledge gap': on one hand, the public has a high awareness of the phenomenon 'red tide'; on the other hand, they are generally unfamiliar with the more scientific term 'Harmful Algal Blooms (HABs)' and the science, ecological risks, and specific control measures behind it. This discovery raised our **Concern**: we were worried that this knowledge gap could lead to public misunderstanding or even lack of support for scientific governance solutions. We were also concerned that a 'one-size-fits-all' approach to science communication would fail to address the different needs of people from various regions.",
              howWeWereEducated:
                "The results of this questionnaire, in turn, became our team's most direct 'teacher.' The data powerfully **Educated** us: in science communication, one must never assume the audience's prior knowledge. Our outreach work had to start with the most basic concepts (e.g., 'What are HABs?') to actively bridge this knowledge gap. More importantly, the survey's finding that coastal and non-coastal residents had different concerns regarding 'economic loss' and 'governance costs' deeply **Inspired** us: effective communication requires building empathy with the audience. We must approach the topic from the perspective they care about most, rather than simply instilling scientific facts one-sidedly.",
              howWeTookAction:
                "Driven by these data-informed insights, we immediately took **Action**. We systematically adjusted all of our educational materials, adding more introductory content on the scientific principles and ecological impacts of red tides to ensure they were easy to understand. At the same time, we developed differentiated communication strategies: when interacting with coastal residents, we would focus on the impact on the fishing economy; when communicating with the inland public, we would discuss the cost-effectiveness of environmental governance more. From this, we **Noted**: data is the foundation for understanding public perception. Before conducting education and communication, it is essential to first carry out research to precisely identify 'knowledge gaps' so that our outreach can be targeted, effective, and truly resonate with people.",
              tags: ["Global Survey", "Knowledge Gap", "Public Perception"],
            },
            {
              name: "Prof. Xu Liu",
              affiliation:
                "Associate Researcher and Doctoral Supervisor at Southern University of Science and Technology",
              takeouts: [
                "Sought advice on how to improve the current PPT lecture method for primary and secondary school students",
              ],
              whatWeObserved:
                "In our initial educational practices, especially when doing science outreach for primary and secondary school students, we **Observed** a phenomenon: despite our well-prepared and detailed content, the singular method of a PPT lecture fell short in sparking the children's interest, and the on-site interaction was weak. This observation led to our deep **Concern**: we worried that such educational activities only achieved the 'instilling' of knowledge but failed to achieve the goal of 'inspiration.' We were eager to truly ignite the children's curiosity for science, rather than just completing a formal outreach task.",
              howWeWereEducated:
                "To make our science education more professional and effective, we consulted with Professor Xu Liu, an education expert at Southern University of Science and Technology. This cross-disciplinary consultation profoundly **Educated** us. From a professional pedagogical perspective, Professor Liu analyzed the cognitive patterns and learning psychology of adolescents, helping us understand why interactivity and a sense of participation are crucial for scientific enlightenment. He **Inspired** us to try transforming abstract scientific knowledge into activities that children could experience and participate in firsthand, such as hands-on experiments, classroom games, or even skits, to create a more vivid and diverse learning environment.",
              howWeTookAction:
                "After receiving this valuable professional advice, we immediately took **Action** to comprehensively upgrade our educational programs. Based on Professor Liu's feedback, we began to design and plan a series of more diversified teaching formats, with plans to officially introduce hands-on experiments, classroom games, and science communication skits in our subsequent courses. From this, we **Noted**: science education is a science in itself. To improve the quality of our Education activities, working in isolation is far from enough. Proactively seeking advice from experts in the field of education is a necessary step to move our science communication activities from 'adequate' to 'excellent.'",
              tags: ["Pedagogy", "Interactive Learning", "Expert Consultation"],
            },
          ]}
          backgroundColor="#E8F5E8"
          textColor="#2C3E50"
          accentColor="#27AE60"
        />
      </section>

      <ScrollToTop />
    </ProjectPageLayout>
  );
}
