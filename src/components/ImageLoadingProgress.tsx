import React, { useState, useEffect } from 'react';

interface ImageLoadingProgressProps {
  totalImages: number;
  loadedImages: number;
}

export const ImageLoadingProgress: React.FC<ImageLoadingProgressProps> = ({ 
  totalImages, 
  loadedImages 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const progress = (loadedImages / totalImages) * 100;

  useEffect(() => {
    if (loadedImages === totalImages) {
      // 所有图片加载完成后，延迟隐藏进度条
      setTimeout(() => setIsVisible(false), 1000);
    }
  }, [loadedImages, totalImages]);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      zIndex: 9999,
      textAlign: 'center',
      minWidth: '200px'
    }}>
      <div style={{ marginBottom: '10px' }}>
        加载图片中... {loadedImages}/{totalImages}
      </div>
      <div style={{
        width: '100%',
        height: '4px',
        background: '#333',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #4CAF50, #8BC34A)',
          transition: 'width 0.3s ease',
          borderRadius: '2px'
        }} />
      </div>
    </div>
  );
};

export default ImageLoadingProgress;
