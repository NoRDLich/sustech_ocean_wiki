# 页面头部模板使用说明

## 概述

新的页面头部模板已经创建，去除了绿色背景和开头文字，采用现代化的设计风格。

## 主要特性

- ✅ 去除了所有绿色背景
- ✅ 去除了开头描述文字
- ✅ 右上角波浪线分割设计
- ✅ 支持背景视频
- ✅ 支持自定义动画组件
- ✅ 现代字体设计（Inter字体）
- ✅ 响应式布局

## 组件结构

### 1. PageHeader 组件

位置：`src/components/PageHeader.tsx`

**Props:**

- `title: string` - 页面标题
- `animationComponent?: React.ReactNode` - 动画组件（可选）
- `backgroundVideo?: string` - 背景视频路径（可选）

### 2. PageAnimation 组件

位置：`src/components/PageAnimation.tsx`

**Props:**

- `type?: 'globe' | 'molecule' | 'wave' | 'custom'` - 动画类型
- `children?: React.ReactNode` - 自定义动画内容

**内置动画类型:**

- `globe` - 3D地球动画
- `molecule` - 分子结构动画
- `wave` - 波浪动画
- `custom` - 自定义动画

## 使用方法

### 基本使用

```tsx
import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";

<ProjectPageLayout title="页面标题" sidebarLinks={sidebarLinks}>
  {/* 页面内容 */}
</ProjectPageLayout>;
```

### 带动画的页面

```tsx
import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import { PageAnimation } from "../components/PageAnimation";

<ProjectPageLayout
  title="页面标题"
  sidebarLinks={sidebarLinks}
  animationComponent={<PageAnimation type="globe" />}
>
  {/* 页面内容 */}
</ProjectPageLayout>;
```

### 带背景视频的页面

```tsx
<ProjectPageLayout
  title="页面标题"
  sidebarLinks={sidebarLinks}
  backgroundVideo="/path/to/video.mp4"
  animationComponent={<PageAnimation type="molecule" />}
>
  {/* 页面内容 */}
</ProjectPageLayout>
```

### 自定义动画

```tsx
<ProjectPageLayout
  title="页面标题"
  sidebarLinks={sidebarLinks}
  animationComponent={
    <PageAnimation type="custom">
      <div>你的自定义动画内容</div>
    </PageAnimation>
  }
>
  {/* 页面内容 */}
</ProjectPageLayout>
```

## 已更新的页面

以下页面已经更新为新的头部模板：

- ✅ Problem
- ✅ Description
- ✅ Model
- ✅ Software
- ✅ Hardware（已添加分子动画示例）

## 待更新的页面

以下页面需要手动添加动画组件：

- Engineering
- Results
- Applications
- Contribution

## 样式特性

- 使用 Inter 现代字体
- 右上角渐变背景 + 波浪线分割
- 响应式设计，支持移动端
- 支持背景视频叠加
- 动画组件居中显示

## 注意事项

1. 所有页面的 `lead` 属性已移除
2. 绿色背景已完全去除
3. 页面标题现在居中显示，旁边可放置动画
4. 右上角区域预留给背景视频
5. 动画组件是可选的，不传则不显示
