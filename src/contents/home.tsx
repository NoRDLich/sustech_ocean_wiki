import {useEffect, useMemo, useRef, useState} from "react";
import pp1 from "../../public/static/pp/pp1.png";
import pp2 from "../../public/static/pp/pp2.png";
import pp3 from "../../public/static/pp/pp3.png";
import pp4 from "../../public/static/pp/pp4.png";


export function Home() {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [, setActiveSection] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // 定义赤潮红到海洋蓝的渐变颜色序列
    const colorPalette = useMemo(() => [{start: "#f54754", end: "#e36f6f"}, // 背景与挑战
        {start: "#e36f6f", end: "#e1987b"}, {start: "#e1987b", end: "#9d8f94"}, {
            start: "#9d8f94", end: "#6096ba"
        }, {start: "#6096ba", end: "#2760b0"}, {start: "#2760b0", end: "#460b59"}, {
            start: "#460b59", end: "#000c33"
        }], []);

    // 动态添加样式
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      /* 基础布局 */
      body, html {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        overflow-y: auto;
      }
      
      /* 气泡生成逻辑 */
      .bubble-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 3;
      }
      
      .home-container {
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-attachment: fixed;
        background-size: 100% 600vh;
        background-position: 0 0;
        transition: background-position 0.5s ease;
        box-sizing: border-box; /* Ensure padding and borders are included in width/height calculations */
      }
      
      /* 全屏页面部分 */
      .page {
        height: 100vh;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-shadow: 0 2px 8px rgba(0,0,0,0.7);
        overflow: hidden; /* Prevent child elements from overflowing */
        border-radius: 10px;
        padding: 20px;
      }
      
      /* 内容容器 */
      .content-wrapper {
        max-width: 80%;
        text-align: center;
        background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
        z-index: 10;
        padding: 2rem;
        border-radius: 16px;
      }
      
      /* 标题样式 */
      .section-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
        position: relative;
        cursor: pointer;
      }
      
      .section-title:hover {
        color: #ffcc00; /* Highlight color */
        text-decoration: underline;
        transform: scale(1.05);
        transition: all 0.3s ease;
      }
      
      .section-title::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 2px;
        background: #ffcc00;
        transition: width 0.3s ease;
      }

      .section-title:hover::after {
        width: 100%;
      }

      .section-subtitle {
        font-size: 1.8rem;
        font-weight: 400;
        margin-bottom: 2rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out 0.2s;
      }
      
      .section-text {
        font-size: 1.3rem;
        line-height: 1.8;
        max-width: 800px;
        margin: 0 auto;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out 0.4s;
        position: relative;
        padding: 1rem;
        border-radius: 8px;
      }

      .section-text:hover {
        background: rgba(200, 255, 200, 0.2); /* Highlight background */
        transition: background 0.3s ease;
      }
      
      /* 动画类 */
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }

      /* 页面图片和文字动画 */
      .page-image {
        position: absolute;
        width: 40%;
        max-width: 500px;
        opacity: 0;
        transform: translateY(30px);
        animation: img-float 8s ease-in-out infinite; /* Ensure infinite looping */
      }

      .page-image.left {
        left: 5%;
      }

      .page-image.right {
        right: 5%;
      }

      .content-wrapper.left {
        margin-right: 50%;
        text-align: left;
      }

      .content-wrapper.right {
        margin-left: 50%;
        text-align: left;
      }

      @keyframes img-float {
        0% {
          transform: translate(0, 0) rotate(0deg);
        }
        20% {
          transform: translate(calc(var(--random-x, 1) * 5px), calc(var(--random-y, 1) * 5px)) rotate(-3deg) scale(1.02);
        }
        40% {
          transform: translate(calc(var(--random-x, 1) * -4px), calc(var(--random-y, 1) * -3px)) rotate(2deg) scale(0.98);
        }
        60% {
          transform: translate(calc(var(--random-x, 1) * 6px), calc(var(--random-y, 1) * -2px)) rotate(-2deg) scale(1.03);
        }
        80% {
          transform: translate(calc(var(--random-x, 1) * -3px), calc(var(--random-y, 1) * 4px)) rotate(3deg) scale(0.97);
        }
        100% {
          transform: translate(0, 0) rotate(0deg) scale(1);
        }
      }
      
      /* 进度条 */
      .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 5px;
        z-index: 100;
      }
      
      /* 真实感气泡效果 - 改进版 */
      .bubble {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.6);
        box-shadow: 
          0 0 8px rgba(255, 255, 255, 0.4),
          inset 0 0 10px rgba(255, 255, 255, 0.3);
        z-index: 3;
        animation: float 5s linear forwards;
      }
      
      @keyframes float {
        0% {
          transform: translateY(0) scale(0.5);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) scale(1.2);
          opacity: 0;
        }
      }
      
      /* 气泡高光效果 - 更自然 */
      .bubble::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, var(--highlight-opacity));
        filter: blur(1px);
        width: var(--highlight-size);
        height: var(--highlight-size);
        top: var(--highlight-top);
        left: var(--highlight-left);
        transform: rotate(var(--highlight-rotation));
      }
      
      @keyframes float {
        0% { 
            transform: translateY(0) translateX(0) scale(0.8); 
            opacity: 0.7;
        }
        50% { 
            transform: translateY(-150px) translateX(var(--x-offset)) scale(1.1); 
            opacity: 0.4;
        }
        100% { 
            transform: translateY(-300px) translateX(calc(var(--x-offset)*1.5)) scale(0.8); 
            opacity: 0;
        }
      }
      
      /* 响应式设计 */
      @media (max-width: 768px) {
        .section-title {
          font-size: 2.5rem;
        }
        
        .section-subtitle {
          font-size: 1.4rem;
        }
        
        .section-text {
          font-size: 1.1rem;
        }
        
        .side-nav {
          display: none;
        }
        
        .earth {
          width: 350px;
          height: 350px;
          margin-top: -175px;
          margin-left: -175px;
        }
        
        .content-wrapper {
          padding: 1.5rem;
          max-width: 90%;
        }
      }
    `;

        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    // 滚动监听和动画触发
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const scrollY = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollY / totalHeight, 1);
            setScrollProgress(progress);

            // 更新活动导航项
            const sections = sectionRefs.current;
            sections.forEach((section) => {
                if (!section) return;

                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionHeight = rect.height;

                // 仅当图片进入屏幕中心区域时触发动画
                if (sectionTop <= window.innerHeight * 0.5 && sectionTop >= -sectionHeight * 0.5) {
                    setActiveSection(section.id);

                    // 触发内部元素动画
                    const title = section.querySelector('.section-title');
                    const subtitle = section.querySelector('.section-subtitle');
                    const text = section.querySelector('.section-text');
                    const image = section.querySelector('.page-image');

                    if (title) title.classList.add('animate-in');
                    if (subtitle) subtitle.classList.add('animate-in');
                    if (text) text.classList.add('animate-in');
                    if (image) image.classList.add('animate-in');
                }
            });

            // 更新背景渐变位置
            const bgPosition = progress * 500; // 0% to 500%
            containerRef.current.style.backgroundPosition = `0 ${bgPosition}%`;
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 初始化

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 生成真实感气泡 - 改进版
    useEffect(() => {
        const bubblesContainer = containerRef.current;
        if (!bubblesContainer) return;

        const createBubble = () => {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            const size = Math.random() * 40 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.bottom = `${Math.random() * 500}%`; // Start from the bottom

            bubble.style.setProperty('--x-offset', `${(Math.random() * 100 - 50) * 2}px`);
            bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
            bubble.style.opacity = `${0.5 + (size / 50) * 0.5}`;

            const bubbleRadius = size / 2;
            const angle = Math.random() * Math.PI * 2;
            const highlightSize = (size / 50) * 15;
            const distance = highlightSize / 2 + Math.random() * (bubbleRadius - highlightSize);

            const highlightX = bubbleRadius + Math.cos(angle) * distance;
            const highlightY = bubbleRadius + Math.sin(angle) * distance;

            const highlightTop = (highlightY / size) * 100;
            const highlightLeft = (highlightX / size) * 100;
            const highlightOpacity = 0.5 + (size / 50) * 0.3;
            const highlightRotation = `${Math.random() * 360}deg`;
            bubble.style.setProperty('--highlight-size', `${highlightSize}%`);
            bubble.style.setProperty('--highlight-top', `${highlightTop}%`);
            bubble.style.setProperty('--highlight-left', `${highlightLeft}%`);
            bubble.style.setProperty('--highlight-opacity', `${highlightOpacity}`);
            bubble.style.setProperty('--highlight-rotation', highlightRotation);

            bubble.addEventListener('animationend', () => {
                bubble.remove(); // Remove bubble after animation ends
            });

            containerRef.current?.appendChild(bubble);
        };

        const interval = setInterval(() => {
            createBubble();
        }, 10); // Generate a bubble every 10ms

        return () => clearInterval(interval);
    }, []);

    // 根据滚动进度创建渐变背景
    useEffect(() => {
        if (!containerRef.current) return;
        let gradientString = "linear-gradient(to bottom, ";
        colorPalette.forEach((color, index) => {
            const startPercent = (index / colorPalette.length) * 100;
            const endPercent = ((index + 1) / colorPalette.length) * 100;
            gradientString += `${color.start} ${startPercent}%, ${color.end} ${endPercent}%`;
            if (index < colorPalette.length - 1) gradientString += ", ";
        });
        gradientString += ")";
        containerRef.current.style.background = gradientString;
        containerRef.current.style.backgroundSize = "100% 598vh";
    }, [colorPalette]);

    // 计算进度条背景色
    const getProgressBarColor = () => {
        const startIndex = Math.floor(scrollProgress * (colorPalette.length - 1));
        const endIndex = Math.min(startIndex + 1, colorPalette.length - 1);
        return `linear-gradient(90deg, ${colorPalette[startIndex].start}, ${colorPalette[endIndex].end})`;
    };

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    return (<div className="home-container" ref={containerRef}>
        {/* 滚动进度条 */}
        <div
            className="scroll-progress"
            style={{
                width: `${scrollProgress * 100}%`, background: getProgressBarColor()
            }}
        ></div>

        <div id="background" ref={addToRefs} className="page">
            <div className="content-wrapper">
                <h2 className="section-title">Harmful Algal Blooms</h2>
                <div className="section-text">
                    Harmful algal blooms (HABs), or red tides, are explosive algal growth under favorable conditions.
                    They disrupt marine ecosystems, reduce oxygen, release toxins, kill fish/shellfish, and harm
                    aquaculture, tourism and public health.
                </div>
            </div>
        </div>

        <div id="methodology" ref={addToRefs} className="page">
            <img src={pp1} className="page-image right" alt="Methodology"/>
            <div className="content-wrapper left">
                <h2 className="section-title">Monitoring Challenges</h2>
                <div className="section-text">
                    Monitoring and early response are key issues. Clouds often block satellite imagery, creating
                    observation gaps. Ecosystem and economic damage may become irreversible before HABs are visible.
                </div>
            </div>
        </div>

        <div id="stage-one" ref={addToRefs} className="page">
            <img src={pp2} className="page-image left" alt="Stage One"/>
            <div className="content-wrapper right">
                <h2 className="section-title">Traditional Methods</h2>
                <div className="section-text">
                    Traditional HAB controls are limited. Quick but harmful chemical treatments like copper sulfate are
                    common. Microbial/fish-based biological controls remain experimental with poor stability. Preseason
                    monitoring also lacks predictive power.
                </div>
            </div>
        </div>

        <div id="stage-two" ref={addToRefs} className="page">
            <img src={pp3} className="page-image right" alt="Stage Two"/>
            <div className="content-wrapper left">
                <h2 className="section-title">Integrated Solutions</h2>
                <div className="section-text">
                    Thus, an effective, safe, and controllable approach that integrates prediction with selective
                    biological intervention is crucial.
                </div>
            </div>
        </div>

        <div id="lstm-model" ref={addToRefs} className="page">
            <img src={pp4} className="page-image left" alt="Background"/>
            <div className="content-wrapper right">
                <h2 className="section-title">Our Solution</h2>
                <div className="section-text">
                    Our proposal uses Bacillus subtilis to naturally produce Surfactin C14 biosurfactant.
                    With optogenetic plasmids, we apply machine learning for HAB prediction/prevention, using
                    OI-SwinUnet and a fully connected NN to estimate HAB probability from environmental variables
                    (nutrients, temperature, oxygen).
                </div>
            </div>
        </div>

        <div id="digital-twin" ref={addToRefs} className="page">
            <div className="content-wrapper">
                <h2 className="section-title">Safety Mechanisms</h2>
                <div className="section-text">
                    When predicted probability exceeds a threshold, optical signals activate Surfactin C14 production in
                    Bacillus subtilis.
                    Two optogenetic plasmids are used: pdawn (blue-light inducible) and pREDawn (red-light inducible).
                    The sfp gene (driving Surfactin production) is blue-light controlled by pdawn.
                    The red-light plasmid acts as a kill switch, ensuring engineered bacteria undergo programmed death
                    if escaping, avoiding harm to native microbes.
                </div>
            </div>
        </div>
    </div>);
}
