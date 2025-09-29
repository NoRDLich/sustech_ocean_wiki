import React, { useState, useEffect, useRef } from "react";

interface ImageSequenceViewerProps {
  imagePaths: string[];
  title: string;
  height?: string;
  interval?: number; // 切换间隔，毫秒
  autoPlay?: boolean; // 是否自动播放
}

export const ImageSequenceViewer: React.FC<ImageSequenceViewerProps> = ({
  imagePaths,
  title,
  height = "400px",
  interval = 1000, // 默认1秒切换
  autoPlay = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 开始动画
  const startAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % imagePaths.length;
        return nextIndex;
      });
    }, interval);
  };

  // 检查图片加载状态
  useEffect(() => {
    if (imagePaths.length === 0) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setHasError(false);

    // 预加载所有图片
    const loadPromises = imagePaths.map((path) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          console.log(`Successfully loaded image: ${path}`);
          resolve(path);
        };
        img.onerror = (error) => {
          console.error(`Failed to load image: ${path}`, error);
          reject(new Error(`Failed to load ${path}`));
        };
        console.log(`Attempting to load image: ${path}`);
        img.src = path;
      });
    });

    Promise.all(loadPromises)
      .then(() => {
        setIsLoading(false);
        if (autoPlay) {
          startAnimation();
        }
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        setHasError(true);
        setIsLoading(false);
      });
  }, [imagePaths, autoPlay, interval]);

  // 清理定时器
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // 当加载完成且启用自动播放时，启动动画
  useEffect(() => {
    if (autoPlay && !isLoading && !hasError) {
      startAnimation();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [autoPlay, isLoading, hasError, interval]);

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
        alignItems: "center",
      }}
    >
      {/* 标题栏 */}
      <div
        style={{
          padding: "10px 15px",
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #e0e0e0",
          fontSize: "0.9rem",
          fontWeight: "500",
          color: "#495057",
          width: "100%",
          textAlign: "center",
        }}
      >
        {title}
        <span
          style={{
            fontSize: "12px",
            color: "#666",
            marginLeft: "8px",
            fontWeight: "normal",
          }}
        >
          ({currentIndex + 1}/{imagePaths.length})
        </span>
      </div>

      {/* 图片显示区域 */}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: height,
          backgroundColor: "#fff",
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
            <div>正在加载图片序列...</div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}>
              共 {imagePaths.length} 张图片
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
            <div>图片加载失败</div>
            <div
              style={{
                fontSize: "12px",
                marginTop: "8px",
                textAlign: "center",
              }}
            >
              请检查图片路径是否正确
            </div>
          </div>
        ) : (
          <img
            src={imagePaths[currentIndex]}
            alt={`${title} - 图片 ${currentIndex + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: height,
              objectFit: "contain",
              opacity: isLoading ? 0.5 : 1,
              transition: "opacity 0.3s ease",
              borderRadius: "4px",
            }}
            onLoad={() => {
              console.log(
                `Image displayed successfully: ${imagePaths[currentIndex]}`
              );
              if (currentIndex === 0) {
                setIsLoading(false);
              }
            }}
            onError={(error) => {
              console.error(
                `Image display failed: ${imagePaths[currentIndex]}`,
                error
              );
              setHasError(true);
              setIsLoading(false);
            }}
          />
        )}

        {/* 进度指示器 */}
        {!isLoading && !hasError && imagePaths.length > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "4px",
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: "4px 8px",
              borderRadius: "12px",
            }}
          >
            {imagePaths.map((_, index) => (
              <div
                key={index}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor:
                    index === currentIndex ? "#fff" : "rgba(255,255,255,0.5)",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSequenceViewer;
