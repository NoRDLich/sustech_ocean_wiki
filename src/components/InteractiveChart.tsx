import React, { useRef, useEffect, useState } from "react";

interface InteractiveChartProps {
  htmlPath: string;
  title: string;
  height?: string;
  width?: string;
}

export const InteractiveChart: React.FC<InteractiveChartProps> = ({
  htmlPath,
  title,
  height = "500px",
  width = "100%",
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;

      iframe.onload = () => {
        setIsLoading(false);
        setHasError(false);
        try {
          // 尝试调整iframe内容大小
          if (iframe.contentWindow && iframe.contentDocument) {
            const body = iframe.contentDocument.body;
            if (body) {
              body.style.margin = "0";
              body.style.padding = "10px";
              body.style.overflow = "hidden";
            }
          }
        } catch (error) {
          console.log(
            "Cannot access iframe content due to security restrictions"
          );
        }
      };

      iframe.onerror = () => {
        setIsLoading(false);
        setHasError(true);
      };

      // 设置超时 - 对于大文件给予更多时间
      const timeout = setTimeout(() => {
        if (isLoading) {
          setIsLoading(false);
          setHasError(true);
        }
      }, 15000); // 15秒超时

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [htmlPath, isLoading]);

  return (
    <div
      style={{
        margin: "20px 0",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
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
        }}
      >
        {title}
      </div>
      <div style={{ position: "relative" }}>
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
            <div>正在加载...</div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}>
              大文件可能需要更长时间
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
            }}
          >
            图表加载失败，请稍后重试
          </div>
        ) : (
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
            }}
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default InteractiveChart;
