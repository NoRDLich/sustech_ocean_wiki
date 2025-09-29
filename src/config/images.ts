// 图片配置 - 从 GitHub 仓库加载
export const IMAGE_CONFIG = {
  // GitHub Pages URL
  GITHUB_BASE_URL: 'https://nordlich.github.io/sustech_ocean_wiki',
  
  // 图片文件路径映射
  IMAGES: {
    hardware: {
      '1_rendering': 'hardware/1_rendering.png',
      '2_Hardware_Schematic_Diagram': 'hardware/2_Hardware_Schematic_Diagram.jpeg',
      '3_Initial_design': 'hardware/3_Initial_design.jpeg',
      '4_Iterated_design': 'hardware/4_Iterated_design.jpeg',
      '5_Temperature_Sensor_Module': 'hardware/5_Temperature_Sensor_Module.jpeg',
      '6_The_pH_Electrode_Sensor_Module': 'hardware/6_The_pH_Electrode_Sensor_Module.jpeg',
      '7_The_Turbidity_Sensor_1': 'hardware/7_The_Turbidity_Sensor_1.jpeg',
      '7_The_Turbidity_Sensor_2': 'hardware/7_The_Turbidity_Sensor_2.jpeg',
      '8_The_Dissolved_Oxygen_Electrode_Transmitter_Module': 'hardware/8_The_Dissolved_Oxygen_Electrode_Transmitter_Module.jpeg',
      '9_APC_220-to-PC': 'hardware/9_APC_220-to-PC.jpeg',
      '10_APC_220-to-Arduino_UNO': 'hardware/10_APC_220-to-Arduino_UNO.jpeg',
      '11_Flow_Meter': 'hardware/11_Flow_Meter.jpeg',
      '11_Solenoid_Valve': 'hardware/11_Solenoid_Valve.jpeg',
      '12_Acrylic_liquid_container': 'hardware/12_Acrylic_liquid_container.jpeg',
      '13_12V_Relay': 'hardware/13_12V_Relay.jpeg',
      '13_24V_Lithium_Battery': 'hardware/13_24V_Lithium_Battery.jpeg',
      '14_ Future_prospect': 'hardware/14_ Future_prospect.jpeg',
      '15_Pump_and_L9110_module': 'hardware/15_Pump_and_L9110_module.jpeg',
      '16_WS2812_light_strip': 'hardware/16_WS2812_light_strip.jpeg',
    },
    model1: {
      '1_hurricane': 'model1/1_hurricane.jpeg',
      '2_UNet_model_sturcture_gap_filling': 'model1/2_UNet_model_sturcture_gap_filling.jpeg',
      '3_Original_Daily_Overview_JAXA': 'model1/3_Original_Daily_Overview_JAXA.jpeg',
      '4_Fixed_Version_Daily_Overview_JAXA': 'model1/4_Fixed_Version_Daily_Overview_JAXA.jpeg',
      '5_General_Structure_ConvLSTM': 'model1/5_General_Structure_ConvLSTM.jpeg',
      '6_Transforming_2D_3D_tensor': 'model1/6_Transforming_2D_3D_tensor.jpeg',
      '7_Inner_structure_ConvLSTM': 'model1/7_Inner_structure_ConvLSTM.jpeg',
      '8_Prediction_ConvLSTM_UNet': 'model1/8_Prediction_ConvLSTM_UNet.jpeg',
      '9_1': 'model1/9_1.jpg',
      '9_2': 'model1/9_2.jpg',
      '9_3': 'model1/9_3.jpg',
      '9_4': 'model1/9_4.jpg',
      '10_1': 'model1/10_1.jpg',
      '10_2': 'model1/10_2.jpg',
      '10_3': 'model1/10_3.jpg',
      '10_4': 'model1/10_4.jpg',
      '11_a': 'model1/11_a.png',
      '11_b': 'model1/11_b.png',
    },
    model2: {
      '12_': 'model2/12_.jpeg',
      '13_': 'model2/13_.jpeg',
      '14_': 'model2/14_.jpeg',
      '15_': 'model2/15_.jpeg',
      'table1': 'model2/table1.jpeg',
    },
    measurement: {
      '1_Test_vial_No.5_85 ppm_with_Bruker_maXis': 'measurement/1_Test_vial_No.5_85 ppm_with_Bruker_maXis.jpeg',
      '2_Vial_No.1_quadruplicate_and_the_first_Vial_No.2-7': 'measurement/2_Vial_No.1_quadruplicate_and_the_first_Vial_No.2-7.png',
    },
  },
};

// 获取图片URL的辅助函数
export const getImageUrl = (category: 'hardware' | 'model1' | 'model2' | 'measurement', imageName: string): string => {
  const images = IMAGE_CONFIG.IMAGES[category] as Record<string, string>;
  const filePath = images[imageName];

  if (!filePath) {
    console.warn(`Image not found: ${category} - ${imageName}`);
    return '';
  }

  // 从 GitHub Pages 加载
  const fullUrl = `${IMAGE_CONFIG.GITHUB_BASE_URL}/${filePath}`;
  console.log(`Loading image from GitHub Pages: ${fullUrl}`);
  return fullUrl;
};
