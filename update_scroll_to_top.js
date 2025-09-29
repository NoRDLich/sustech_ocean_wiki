const fs = require('fs');
const path = require('path');

// 需要更新的页面文件列表
const pages = [
  'experiments.tsx',
  'model.tsx', 
  'safety-and-security.tsx',
  'results.tsx',
  'contribution.tsx',
  'index.tsx',
  'hardware.tsx',
  'sustainability.tsx',
  'software.tsx',
  'problem.tsx',
  'members.tsx',
  'inclusivity.tsx',
  'human-practices.tsx',
  'entrepreneurship.tsx',
  'education.tsx',
  'description.tsx',
  'attributions.tsx',
  'applications.tsx'
];

const contentsDir = path.join(__dirname, 'src', 'contents');

pages.forEach(page => {
  const filePath = path.join(contentsDir, page);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 添加import语句
    if (!content.includes('ScrollToTop')) {
      // 找到最后一个import语句的位置
      const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
      if (importLines.length > 0) {
        const lastImportLine = importLines[importLines.length - 1];
        const lastImportIndex = content.lastIndexOf(lastImportLine);
        const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
        
        content = content.slice(0, insertIndex) + 
                 "import ScrollToTop from '../components/ScrollToTop';\n" +
                 content.slice(insertIndex);
      }
    }
    
    // 在return语句的最后添加ScrollToTop组件
    if (!content.includes('<ScrollToTop />')) {
      // 找到最后一个</div>或</section>或</main>等结束标签
      const returnMatch = content.match(/return\s*\([\s\S]*?\);/);
      if (returnMatch) {
        const returnContent = returnMatch[0];
        const lastClosingTag = returnContent.lastIndexOf('</');
        if (lastClosingTag !== -1) {
          const insertIndex = returnMatch.index + returnContent.lastIndexOf('>') + 1;
          content = content.slice(0, insertIndex) + 
                   '\n        <ScrollToTop />\n' +
                   content.slice(insertIndex);
        }
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${page}`);
  } else {
    console.log(`File not found: ${page}`);
  }
});

console.log('All pages updated successfully!');
