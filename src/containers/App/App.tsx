// src/containers/App/App.tsx
// 复制并替换这个文件的全部内容

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { NotFound } from "../../components/NotFound";
import { Footer } from "../../components/Footer";
// 注意：请确保这里的 Loading 组件路径是正确的
import { Loading } from "./Loading.tsx"; // 确保路径正确指向 Loading 组件

import ProgressBar from "../../components/ProgressBar";
// 1. 引入所有特殊布局的页面组件，包括新的
import { Description } from "../../contents/description";
import { Model } from "../../contents/model";
import { Software } from "../../contents/software";
import { Hardware } from "../../contents/hardware";
import { Engineering } from "../../contents/engineering";
import { Results } from "../../contents/results";
import { Contribution } from "../../contents/contribution";
import { Problem } from "../../contents/problem";
import { Applications } from "../../contents/applications";
// 引入 Wet Lab 子页面组件
import { Experiments } from "../../contents/experiments";
import { Notebook } from "../../contents/notebook";
import { Measurement } from "../../contents/measurement";
import { Parts } from "../../contents/parts";
import { SafetyAndSecurity } from "../../contents/safety-and-security";
// 引入 Human Practices 相关页面组件
import { HumanPractices } from "../../contents/human-practices";
import { Education } from "../../contents/education";
import { Inclusivity } from "../../contents/inclusivity";
import { Sustainability } from "../../contents/sustainability";

// --- 改动开始 (1/2): 添加预加载逻辑 ---
const imagesToPreload = [
  "/static/pp/pp1.png",
  "/static/pp/pp2.png",
  "/static/pp/pp3.png",
  "/static/pp/pp4.png",
];
// --- 改动结束 (1/2) ---

const App = () => {
  const location = useLocation();
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // --- 改动开始 (2/2): 使用 useEffect 执行图片预加载 ---
  useEffect(() => {
    // 这个 effect 会在 App 组件首次渲染后执行一次，将图片下载到浏览器缓存
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []); // 空依赖数组保证只执行一次
  // --- 改动结束 (2/2) ---

  // 2. 定义特殊布局的路径列表，加入新的路径
  const specialLayoutRoutes = [
    "/problem",
    "/description",
    "/model",
    "/software",
    "/hardware",
    "/engineering",
    "/results",
    "/applications",
    "/contribution",
    // Wet Lab 子页面
    "/experiments",
    "/notebook",
    "/measurement",
    "/parts",
    "/safety-and-security",
    // Human Practices 相关页面
    "/human-practices",
    "/education",
    "/inclusivity",
    "/sustainability",
  ];

  return (
    <>
      <Navbar />
      <ProgressBar />

      {loading ? (
        <Loading />
      ) : (
        <>
          <Routes>
            {/* START: 为所有带侧边栏的页面设置路由 */}
            {/* 3. 添加新页面的路由 */}
            <Route path="/problem" element={<Problem />} />
            <Route path="/description" element={<Description />} />
            <Route path="/model" element={<Model />} />
            <Route path="/software" element={<Software />} />
            <Route path="/hardware" element={<Hardware />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/results" element={<Results />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/contribution" element={<Contribution />} />
            {/* Wet Lab 子页面路由 */}
            <Route path="/experiments" element={<Experiments />} />
            <Route path="/notebook" element={<Notebook />} />
            <Route path="/measurement" element={<Measurement />} />
            <Route path="/parts" element={<Parts />} />
            <Route
              path="/safety-and-security"
              element={<SafetyAndSecurity />}
            />
            {/* Human Practices 相关页面路由 */}
            <Route path="/human-practices" element={<HumanPractices />} />
            <Route path="/education" element={<Education />} />
            <Route path="/inclusivity" element={<Inclusivity />} />
            <Route path="/sustainability" element={<Sustainability />} />
            {/* END: 为所有带侧边栏的页面设置路由 */}

            {/* 下面是你原来的路由逻辑，它会自动排除上面已经定义的特殊路由 */}
            {Object.entries(pathMapping)
              .filter(([path]) => !specialLayoutRoutes.includes(path))
              .map(([path, pageData]) => {
                const Component = pageData.component;
                if (path === "/") {
                  return (
                    <Route key={path} path={path} element={<Component />} />
                  );
                }
                return (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <div className="container">
                        <Component />
                      </div>
                    }
                  />
                );
              })}

            {/* 404 页面路由 */}
            <Route
              path="*"
              element={
                <div className="container">
                  <NotFound />
                </div>
              }
            />
          </Routes>
        </>
      )}

      <Footer />
    </>
  );
};

export default App;
