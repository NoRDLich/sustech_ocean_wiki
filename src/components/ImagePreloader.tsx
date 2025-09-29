import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
  onAllLoaded?: () => void;
}

export const ImagePreloader: React.FC<ImagePreloaderProps> = ({ images, onAllLoaded }) => {
  useEffect(() => {
    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = src;
      });
    };

    const preloadAllImages = async () => {
      try {
        await Promise.all(images.map(preloadImage));
        onAllLoaded?.();
      } catch (error) {
        console.warn('Some images failed to preload:', error);
        onAllLoaded?.(); // 即使部分失败也调用回调
      }
    };

    preloadAllImages();
  }, [images, onAllLoaded]);

  return null;
};

export default ImagePreloader;
