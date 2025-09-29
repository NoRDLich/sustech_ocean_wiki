// 交互式图表配置 - 所有环境都从 GitHub Pages 加载
export const CHART_CONFIG = {
  // GitHub Pages URL (需要先在仓库设置中启用 GitHub Pages)
  GITHUB_BASE_URL: 'https://nordlich.github.io/sustech_ocean_wiki',
  
  // 图表文件路径映射 (GitHub 仓库中的路径)
  CHARTS: {
    SFP: {
      'interactive_solubility_heatmap': 'sfp-lineplot/interactive_solubility_heatmap(sfp-2).html',
      'solubility_vs_ph_lines': 'sfp-lineplot/solubility_vs_ph_lines.html',
      'solubility_vs_salt_lines': 'sfp-lineplot/solubility_vs_salt_lines.html',
      'solubility_vs_temperature': 'sfp-lineplot/solubility_vs_temperature.html',
      'solubility_with_vs_without_metal': 'sfp-lineplot/solubility_with_vs_without_metal.html',
    },
    YonE: {
      'interactive_solubility_heatmap': 'yonE-lineplot/interactive_solubility_heatmap(yonE-2).html',
      'solubility_vs_ph_lines': 'yonE-lineplot/solubility_vs_ph_lines.html',
      'solubility_vs_salt_lines': 'yonE-lineplot/solubility_vs_salt_lines.html',
      'solubility_vs_temperature': 'yonE-lineplot/solubility_vs_temperature.html',
      'solubility_with_vs_without_metal': 'yonE-lineplot/solubility_with_vs_without_metal.html',
    },
    Model: {
      'groundtruth': '9_groundtruth.html',
      'prediction': '10_prediction.html',
    },
  },
};

// 获取图表URL的辅助函数 - 所有环境都从 GitHub Pages 加载
export const getChartUrl = (category: 'SFP' | 'YonE' | 'Model', chartType: string): string => {
  const charts = CHART_CONFIG.CHARTS[category] as Record<string, string>;
  const filePath = charts[chartType];
  
  if (!filePath) {
    console.warn(`Chart not found: ${category} - ${chartType}`);
    return '';
  }
  
  // 所有环境都从 GitHub Pages 加载
  const fullUrl = `${CHART_CONFIG.GITHUB_BASE_URL}/${filePath}`;
  console.log(`Loading chart from GitHub Pages: ${fullUrl}`);
  return fullUrl;
};
