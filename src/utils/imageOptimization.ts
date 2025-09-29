// 图片优化工具函数

export const getOptimizedImageSrc = (src: string): string => {
  // 如果是本地图片，返回原路径
  if (src.startsWith('/sustechocean/static/')) {
    return src;
  }
  
  // 对于外部图片，可以添加压缩参数
  return src;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject();
    img.src = src;
  });
};

export const preloadImages = async (sources: string[]): Promise<void> => {
  try {
    await Promise.all(sources.map(preloadImage));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

// 图片懒加载配置
export const lazyLoadConfig = {
  rootMargin: '50px 0px',
  threshold: 0.1,
};

// 关键图片列表（需要优先加载）
export const criticalImages = [
  "/sustechocean/static/hardware/1_rendering.png",
  "/sustechocean/static/hardware/2_Hardware_Schematic_Diagram.jpeg",
  "/sustechocean/static/hardware/3_Initial_design.jpeg",
  "/sustechocean/static/hardware/4_Iterated_design.jpeg",
];

// 次要图片列表（可以延迟加载）
export const secondaryImages = [
  "/sustechocean/static/hardware/5_Temperature_Sensor_Module.jpeg",
  "/sustechocean/static/hardware/6_The_pH_Electrode_Sensor_Module.jpeg",
  "/sustechocean/static/hardware/7_The_Turbidity_Sensor_1.jpeg",
  "/sustechocean/static/hardware/8_The_Dissolved_Oxygen_Electrode_Transmitter_Module.jpeg",
  "/sustechocean/static/hardware/9_APC_220-to-PC.jpeg",
  "/sustechocean/static/hardware/10_APC_220-to-Arduino_UNO.jpeg",
  "/sustechocean/static/hardware/11_Solenoid_Valve.jpeg",
  "/sustechocean/static/hardware/12_Acrylic_liquid_container.jpeg",
  "/sustechocean/static/hardware/13_24V_Lithium_Battery.jpeg",
  "/sustechocean/static/hardware/13_12V_Relay.jpeg",
  "/sustechocean/static/hardware/14_ Future_prospect.jpeg",
  "/sustechocean/static/hardware/15_Pump_and_L9110_module.jpeg",
  "/sustechocean/static/hardware/16_WS2812_light_strip.jpeg",
];
