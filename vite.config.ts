import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// 将 stringToSlug 函数的逻辑直接放在这里
const stringToSlug = (str: string): string => {
  if (!str) return ''; // 增加一个健壮性检查
  return str
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // 移除非字母数字、空格和横线
      .replace(/\s+/g, '-'); // 将空格替换为横线
};

// https://vitejs.dev/config/
export default () => {
  const env = loadEnv("dev", process.cwd());
  const teamName = env.VITE_TEAM_NAME || 'sustechocean'; // 提供默认值
  return defineConfig({
    base: `/${stringToSlug(teamName)}/`,
    plugins: [react()],
    server: {
      port: 5173,
      host: true,
      open: `/${stringToSlug(teamName)}/`, // 自动打开到正确的路径
    },
    build: {
      // 分块优化
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            katex: ['katex', 'react-katex'],
          },
        },
      },
      // 提高chunk大小警告限制
      chunkSizeWarningLimit: 1000,
      // 资源处理
      assetsInlineLimit: 4096, // 小于4kb的资源内联
      // 压缩选项
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    // 排除大文件
    publicDir: 'public',
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp', '**/*.svg'],
  });
};

