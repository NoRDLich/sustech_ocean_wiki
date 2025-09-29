import React, { useRef, useEffect, useState } from "react";

interface WordHtmlViewerProps {
  htmlPath: string;
  title: string;
  height?: string;
  width?: string;
}

export const WordHtmlViewer: React.FC<WordHtmlViewerProps> = ({
  htmlPath,
  title,
  height = "400px",
  width = "100%",
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPausedView, setShowPausedView] = useState(false);

  // 控制播放/停止的函数
  const togglePlayPause = () => {
    if (isPlaying) {
      // 停止动画 - 显示暂停视图
      setShowPausedView(true);
      setIsPlaying(false);
    } else {
      // 播放动画 - 隐藏暂停视图
      setShowPausedView(false);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;

      iframe.onload = () => {
        setIsLoading(false);
        setHasError(false);

        try {
          // 尝试修复Word HTML中的相对路径问题
          if (iframe.contentWindow && iframe.contentDocument) {
            const doc = iframe.contentDocument;

            // 修复所有相对路径的链接
            const links = doc.querySelectorAll('link[href*=".fld/"]');
            links.forEach((link: any) => {
              const href = link.getAttribute("href");
              if (href && href.startsWith("Doc")) {
                // 将相对路径转换为完整的GitHub Pages URL
                const baseUrl =
                  "https://nordlich.github.io/sustech_ocean_wiki/";
                link.setAttribute("href", baseUrl + href);
              }
            });

            // 修复图片路径
            const images = doc.querySelectorAll('img[src*=".fld/"]');
            images.forEach((img: any) => {
              const src = img.getAttribute("src");
              if (src && src.startsWith("Doc")) {
                const baseUrl =
                  "https://nordlich.github.io/sustech_ocean_wiki/";
                img.setAttribute("src", baseUrl + src);
              }
            });

            // 设置样式以确保内容正确显示
            const body = doc.body;
            if (body) {
              body.style.margin = "0";
              body.style.padding = "10px";
              body.style.overflow = "auto";
              body.style.backgroundColor = "#fff";
            }

            // 添加动画控制功能
            const style = doc.createElement("style");
            style.textContent = `
              .animation-paused * {
                animation-play-state: paused !important;
                -webkit-animation-play-state: paused !important;
                -moz-animation-play-state: paused !important;
                -o-animation-play-state: paused !important;
              }
              .animation-playing * {
                animation-play-state: running !important;
                -webkit-animation-play-state: running !important;
                -moz-animation-play-state: running !important;
                -o-animation-play-state: running !important;
              }
            `;
            doc.head.appendChild(style);

            // 根据播放状态设置动画
            if (isPlaying) {
              body.classList.remove("animation-paused");
              body.classList.add("animation-playing");
            } else {
              body.classList.remove("animation-playing");
              body.classList.add("animation-paused");
            }
          }
        } catch (error) {
          console.log("无法访问iframe内容，但文件可能仍然正常显示");
        }
      };

      iframe.onerror = () => {
        setIsLoading(false);
        setHasError(true);
      };

      // 设置超时
      const timeout = setTimeout(() => {
        if (isLoading) {
          setIsLoading(false);
          setHasError(true);
        }
      }, 20000); // 20秒超时，Word文件可能需要更长时间

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [htmlPath, isLoading, isPlaying]);

  // 专门处理动画控制的 useEffect
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentDocument) {
      try {
        const doc = iframeRef.current.contentDocument;
        const body = doc.body;

        if (body) {
          if (isPlaying) {
            body.classList.remove("animation-paused");
            body.classList.add("animation-playing");
          } else {
            body.classList.remove("animation-playing");
            body.classList.add("animation-paused");
          }
        }
      } catch (error) {
        console.log("无法控制iframe内的动画，但组件仍可正常工作");
      }
    }
  }, [isPlaying]);

  return (
    <div
      style={{
        margin: "20px 0",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // 整体居中
      }}
    >
      <div
        style={{
          padding: "10px 15px",
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #e0e0e0",
          fontSize: "0.9rem",
          fontWeight: "500",
          color: "#495057",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          {title}
          <span
            style={{
              fontSize: "12px",
              color: "#666",
              marginLeft: "8px",
              fontWeight: "normal",
            }}
          >
            (Word转换的循环动画)
          </span>
        </div>
        <button
          onClick={togglePlayPause}
          style={{
            padding: "8px 16px",
            fontSize: "13px",
            backgroundColor: isPlaying ? "#dc3545" : "#28a745",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontWeight: "500",
            transition: "all 0.2s ease",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
          }}
        >
          {isPlaying ? "⏸️ 停止动画" : "▶️ 播放动画"}
        </button>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: height,
        }}
      >
        {isLoading && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              backgroundColor: "rgba(255,255,255,0.9)",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <div>正在加载Word动画...</div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}>
              正在处理依赖文件，可能需要更长时间
            </div>
          </div>
        )}
        {showPausedView && !isLoading && !hasError && (
          <div
            style={{
              height,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f8f9fa",
              color: "#6c757d",
              flexDirection: "column",
              border: "2px dashed #dee2e6",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", marginBottom: "15px" }}>⏸️</div>
              <div style={{ fontSize: "16px", marginBottom: "8px" }}>
                动画已暂停
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#999",
                }}
              >
                点击"播放动画"按钮恢复播放
              </div>
            </div>
          </div>
        )}
        {hasError ? (
          <div
            style={{
              height,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f8f9fa",
              color: "#6c757d",
              flexDirection: "column",
            }}
          >
            <div>无法加载Word动画</div>
            <div
              style={{
                fontSize: "12px",
                marginTop: "8px",
                textAlign: "center",
              }}
            >
              请检查网络连接或稍后重试
              <br />
              如果问题持续存在，可能需要重新上传文件
            </div>
          </div>
        ) : !showPausedView ? (
          <div
            style={{
              width: "100%",
              height: height,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
            }}
          >
            <iframe
              ref={iframeRef}
              src={htmlPath}
              title={title}
              width={width}
              height={height}
              style={{
                border: "none",
                display: "block",
                opacity: isLoading ? 0.5 : 1,
                transition: "opacity 0.3s ease",
                backgroundColor: "#fff",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              allowFullScreen
              sandbox="allow-same-origin allow-scripts"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WordHtmlViewer;
