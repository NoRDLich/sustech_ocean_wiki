// src/components/Loading.tsx (或者你的 Loading 文件所在路径)
// 复制并替换这个文件的全部内容

import React, { useEffect, useState } from "react";
import "./Loading.css";

// 使用动态base路径来确保在不同环境下都能正确加载图片
const baseUrl = import.meta.env.BASE_URL || "/";
const fishImgs = [
  `${baseUrl}static/pp/pp1.png`,
  `${baseUrl}static/pp/pp2.png`,
  `${baseUrl}static/pp/pp3.png`,
  `${baseUrl}static/pp/pp4.png`,
];
export const FISH_IMGS = fishImgs;
export const Loading: React.FC = () => {
  const [activeFish, setActiveFish] = useState(0);
  const [dots, setDots] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fishTimer = setInterval(() => {
      setActiveFish((prev) => (prev + 1) % fishImgs.length);
    }, 300);
    const dotsTimer = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 500);
    return () => {
      clearInterval(fishTimer);
      clearInterval(dotsTimer);
    };
  }, []);

  return (
    <div className="loading-container">
      <div className="pp-row">
        {fishImgs.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`pp ${idx + 1}`}
            style={{
              opacity: idx <= activeFish ? 1 : 0.3,
              transition: "opacity 0.2s",
              display: imageErrors.has(idx) ? "none" : "block",
            }}
            className="pp-img"
            onError={() => {
              console.warn(`Failed to load image: ${src}`);
              setImageErrors((prev) => new Set(prev).add(idx));
            }}
          />
        ))}
      </div>
      <div className="loading-text">Loading{".".repeat(dots)}</div>
    </div>
  );
};
