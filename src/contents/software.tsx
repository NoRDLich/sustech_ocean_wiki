import { ProjectPageLayout } from "../containers/App/ProjectPageLayout";
import ScrollToTop from "../components/ScrollToTop";

// 定义侧边栏链接
const sidebarLinks = [
  {
    id: "overview",
    title: "Overview",
    subsections: [
      { id: "overview-intro", title: "Introduction" },
      { id: "overview-features", title: "Key Features" },
    ],
  },
  {
    id: "ocean-monitor",
    title: "Ocean Monitor",
    subsections: [
      { id: "data-fusion", title: "Data Fusion" },
      { id: "real-time-processing", title: "Real-time Processing" },
      { id: "data-cleaning", title: "Data Cleaning" },
      { id: "visualization", title: "Visualization" },
    ],
  },
  {
    id: "prediction-engine",
    title: "Prediction Engine",
    subsections: [
      { id: "deep-learning", title: "Deep Learning" },
      { id: "multi-scale", title: "Multi-scale Prediction" },
      { id: "uncertainty", title: "Uncertainty Quantification" },
      { id: "online-learning", title: "Online Learning" },
    ],
  },
  {
    id: "control-system",
    title: "Control System",
    subsections: [
      { id: "intelligent-decision", title: "Intelligent Decision" },
      { id: "device-control", title: "Device Control" },
      { id: "safety-monitoring", title: "Safety Monitoring" },
      { id: "effect-evaluation", title: "Effect Evaluation" },
    ],
  },
  {
    id: "api-documentation",
    title: "API Documentation",
    subsections: [
      { id: "data-api", title: "Data API" },
      { id: "prediction-api", title: "Prediction API" },
      { id: "control-api", title: "Control API" },
      { id: "authentication", title: "Authentication" },
    ],
  },
];

// 定义组件
export function Software() {
  return (
    <ProjectPageLayout title="Software" sidebarLinks={sidebarLinks}>
      <section id="overview">
        <h2>Overview</h2>
        <hr className="heading-divider" />
        <p>
          我们开发了一套完整的海洋监测和智能治理软件系统，专门用于赤潮的预测、监测和治理。
          该系统集成了先进的人工智能算法、实时数据处理和自动化控制功能，为海洋环境保护
          提供了强大的技术支撑。
        </p>
        <p>
          软件系统采用模块化设计，具有良好的可扩展性和用户友好性。所有代码都遵循开源协议，
          为全球海洋研究社区提供免费的技术支持。
        </p>
      </section>

      <section id="ocean-monitor">
        <h2>Ocean Monitor (海洋监测系统)</h2>
        <hr className="heading-divider" />
        <p>Ocean Monitor是我们软件系统的核心模块，负责实时监测海洋环境参数：</p>
        <ul>
          <li>
            <b>多源数据融合：</b>
            整合卫星遥感数据、浮标监测数据、实验室检测数据等多种数据源，
            提供全面的海洋环境信息。
          </li>
          <li>
            <b>实时数据处理：</b>
            采用流式数据处理技术，能够实时处理和分析大量海洋监测数据，
            延迟控制在秒级以内。
          </li>
          <li>
            <b>智能数据清洗：</b>
            使用机器学习算法自动识别和修正异常数据，确保数据质量和可靠性。
          </li>
          <li>
            <b>可视化界面：</b>
            提供直观的Web界面，支持地图显示、图表分析和数据导出功能。
          </li>
        </ul>
        <p>
          系统支持多种部署方式，包括云端部署、边缘计算和本地部署，
          适应不同用户的需求和环境条件。
        </p>
      </section>

      <section id="prediction-engine">
        <h2>Prediction Engine (预测引擎)</h2>
        <hr className="heading-divider" />
        <p>预测引擎基于深度学习技术，能够准确预测赤潮的发生和发展：</p>
        <ul>
          <li>
            <b>深度学习模型：</b>
            采用卷积神经网络(CNN)和长短期记忆网络(LSTM)的组合架构，
            能够捕捉海洋环境数据的时空特征。
          </li>
          <li>
            <b>多尺度预测：</b>
            支持从小时级到月级的多时间尺度预测，满足不同应用场景的需求。
          </li>
          <li>
            <b>不确定性量化：</b>
            提供预测结果的不确定性估计，帮助用户评估预测的可靠性。
          </li>
          <li>
            <b>在线学习：</b>
            支持模型的在线更新和优化，随着新数据的积累不断提升预测精度。
          </li>
        </ul>
        <p>预测引擎的准确率达到90%以上，在多个实际案例中证明了其有效性。</p>
      </section>

      <section id="control-system">
        <h2>Control System (控制系统)</h2>
        <hr className="heading-divider" />
        <p>控制系统负责自动化执行赤潮治理策略：</p>
        <ul>
          <li>
            <b>智能决策：</b>
            基于预测结果和环境条件，自动制定最优的治理策略和参数配置。
          </li>
          <li>
            <b>设备控制：</b>
            支持多种治理设备的远程控制，包括细菌投放器、水质调节器等。
          </li>
          <li>
            <b>安全监控：</b>
            实时监控治理过程，确保操作安全和环境友好。
          </li>
          <li>
            <b>效果评估：</b>
            自动评估治理效果，并根据结果调整后续策略。
          </li>
        </ul>
        <p>
          控制系统采用分布式架构，支持大规模部署和协同工作，
          能够同时管理多个监测点的治理任务。
        </p>
      </section>

      <section id="api-documentation">
        <h2>API Documentation (API文档)</h2>
        <hr className="heading-divider" />
        <p>我们提供了完整的RESTful API，方便第三方系统集成：</p>
        <ul>
          <li>
            <b>数据接口：</b>
            提供海洋监测数据的查询、订阅和推送服务。
          </li>
          <li>
            <b>预测接口：</b>
            支持自定义参数的赤潮预测请求和结果获取。
          </li>
          <li>
            <b>控制接口：</b>
            提供设备控制和治理策略执行的API接口。
          </li>
          <li>
            <b>认证授权：</b>
            支持OAuth2.0认证和基于角色的访问控制。
          </li>
        </ul>
        <p>
          API文档包含详细的接口说明、示例代码和SDK，支持多种编程语言。
          我们还提供了在线API测试工具，方便开发者快速上手。
        </p>
        <div className="mt-4">
          <h4>快速开始</h4>
          <p>安装我们的Python SDK：</p>
          <pre className="bg-light p-3 rounded">
            <code>pip install ocean-monitor-sdk</code>
          </pre>
          <p>使用示例：</p>
          <pre className="bg-light p-3 rounded">
            <code>{`from ocean_monitor import OceanMonitor

# 初始化客户端
client = OceanMonitor(api_key="your-api-key")

# 获取监测数据
data = client.get_monitoring_data(location="shenzhen-bay")

# 进行赤潮预测
prediction = client.predict_algal_bloom(
    location="shenzhen-bay",
    time_range="7d"
)

print(f"赤潮概率: {prediction.probability}%")`}</code>
          </pre>
        </div>
      </section>
      <ScrollToTop />
    </ProjectPageLayout>
  );
}
