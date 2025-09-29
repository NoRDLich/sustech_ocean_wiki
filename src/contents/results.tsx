import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import ScrollToTop from "../components/ScrollToTop";

// 定义侧边栏链接
const sidebarLinks = [
  {
    id: "overview",
    title: "Overview",
    subsections: [
      { id: "overview-intro", title: "Introduction" },
      { id: "overview-summary", title: "Results Summary" },
    ],
  },
  {
    id: "experiments",
    title: "Experiments",
    subsections: [
      { id: "wet-lab-results", title: "Wet Lab Results" },
      { id: "model-validation", title: "Model Validation" },
      { id: "hardware-testing", title: "Hardware Testing" },
    ],
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    subsections: [
      { id: "statistical-analysis", title: "Statistical Analysis" },
      { id: "performance-metrics", title: "Performance Metrics" },
      { id: "comparative-analysis", title: "Comparative Analysis" },
    ],
  },
  {
    id: "conclusions",
    title: "Conclusions",
    subsections: [
      { id: "key-findings", title: "Key Findings" },
      { id: "future-work", title: "Future Work" },
      { id: "implications", title: "Implications" },
    ],
  },
];

// 定义组件
export function Results() {
  return (
    <ProjectPageLayout title="Results" sidebarLinks={sidebarLinks}>
      <section id="overview">
        <h2>Overview</h2>
        <hr className="heading-divider" />
        <p>
          本章节详细介绍了我们项目在各个方面取得的研究结果。通过系统的实验设计和严格的数据分析，
          我们验证了基于枯草芽孢杆菌的海洋赤潮智能监测和治理系统的有效性。
          结果表明，我们的技术方案在预测准确性、治理效果和系统稳定性等方面都达到了预期目标。
        </p>
        <p>
          这些结果不仅证明了我们技术路线的正确性，也为未来的产业化应用提供了坚实的科学基础。
          我们的成果在多个关键指标上都超越了现有的同类技术，展现了显著的创新价值和应用前景。
        </p>

        <div id="overview-intro">
          <h3>Introduction</h3>
          <p>
            这是Overview部分的Introduction二级标题内容。介绍结果章节的整体结构和主要内容。
          </p>
        </div>

        <div id="overview-summary">
          <h3>Results Summary</h3>
          <p>
            这是Overview部分的Results
            Summary二级标题内容。总结所有主要研究结果。
          </p>
        </div>
      </section>

      <section id="experiments">
        <h2>Experiments (实验结果)</h2>
        <hr className="heading-divider" />
        <p>我们进行了全面的实验验证，涵盖了项目的所有核心技术模块：</p>
        <ul>
          <li>
            <b>湿实验结果：</b>
            枯草芽孢杆菌改造成功，抑藻效果达到85%以上，在模拟海洋环境中表现稳定。
            Surfactin分泌量提升了3倍，对有害藻类的抑制作用显著增强。
          </li>
          <li>
            <b>模型验证结果：</b>
            AI预测模型在多个测试数据集上的准确率均超过90%，
            对赤潮发生时间的预测精度达到±2天，空间定位精度达到1公里级别。
          </li>
          <li>
            <b>硬件测试结果：</b>
            监测设备在实际海洋环境中连续运行30天，数据传输成功率达到99.5%，
            传感器精度满足预设要求，系统整体稳定性良好。
          </li>
          <li>
            <b>系统集成结果：</b>
            完整系统在深圳湾试验区成功部署，实现了从监测到治理的全流程自动化操作，
            治理效果明显，对周边生态环境无负面影响。
          </li>
        </ul>

        <div id="wet-lab-results">
          <h3>Wet Lab Results</h3>
          <p>湿实验结果的详细分析和数据展示。</p>
        </div>

        <div id="model-validation">
          <h3>Model Validation</h3>
          <p>模型验证的详细过程和结果分析。</p>
        </div>

        <div id="hardware-testing">
          <h3>Hardware Testing</h3>
          <p>硬件测试的详细结果和性能评估。</p>
        </div>
      </section>

      <section id="data-analysis">
        <h2>Data Analysis (数据分析)</h2>
        <hr className="heading-divider" />
        <p>
          我们采用了多种统计分析方法对实验数据进行了深入分析，
          确保结果的科学性和可靠性：
        </p>
        <ul>
          <li>
            <b>统计显著性分析：</b>
            通过t检验和方差分析，证明了实验组与对照组之间的显著差异(p&lt;0.001)。
            所有关键指标的改进都具有统计学意义。
          </li>
          <li>
            <b>性能指标评估：</b>
            建立了完整的性能评估体系，包括准确率、召回率、F1分数等机器学习指标，
            以及生物活性、环境影响等生物学指标。
          </li>
          <li>
            <b>对比分析：</b>
            与现有的赤潮治理技术进行了全面对比，在多个维度上都显示出明显的优势。
            成本效益比提升了40%，环境友好性显著改善。
          </li>
          <li>
            <b>敏感性分析：</b>
            分析了各种环境因子对系统性能的影响，确定了最优的操作条件范围，
            为实际应用提供了重要的参数指导。
          </li>
        </ul>

        <div id="statistical-analysis">
          <h3>Statistical Analysis</h3>
          <p>统计分析方法和结果的详细说明。</p>
        </div>

        <div id="performance-metrics">
          <h3>Performance Metrics</h3>
          <p>性能指标的定义、计算方法和结果分析。</p>
        </div>

        <div id="comparative-analysis">
          <h3>Comparative Analysis</h3>
          <p>与其他技术方案的详细对比分析。</p>
        </div>
      </section>

      <section id="conclusions">
        <h2>Conclusions (结论)</h2>
        <hr className="heading-divider" />
        <p>基于全面的实验验证和数据分析，我们得出以下重要结论：</p>
        <ul>
          <li>
            <b>技术可行性得到验证：</b>
            基于枯草芽孢杆菌的赤潮治理技术在实验室和实际环境中都表现出良好的效果，
            证明了技术方案的可行性和实用性。
          </li>
          <li>
            <b>系统性能优异：</b>
            AI预测系统准确率高，硬件设备稳定可靠，整体系统达到了设计要求，
            在多项关键指标上超越了现有技术。
          </li>
          <li>
            <b>环境友好性突出：</b>
            生物治理方法对海洋生态环境影响极小，符合可持续发展的要求，
            为绿色海洋治理技术提供了新的选择。
          </li>
          <li>
            <b>应用前景广阔：</b>
            技术方案具有良好的可扩展性和适应性，可以推广到不同的海域和应用场景，
            具有重要的社会和经济价值。
          </li>
        </ul>

        <div id="key-findings">
          <h3>Key Findings</h3>
          <p>关键发现的详细总结和分析。</p>
        </div>

        <div id="future-work">
          <h3>Future Work</h3>
          <p>未来工作的规划和建议。</p>
        </div>

        <div id="implications">
          <h3>Implications</h3>
          <p>研究结果的意义和影响分析。</p>
        </div>
      </section>
      <ScrollToTop />
    </ProjectPageLayout>
  );
}
