const fs = require('fs');
const path = require('path');

// 需要添加ScrollToTop的页面文件列表（排除home.tsx，因为已经添加了）
const pages = [
  'safety-and-security.tsx',
  'results.tsx',
  'contribution.tsx',
  'index.tsx',
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
    
    // 检查是否已经有ScrollToTop
    if (content.includes('ScrollToTop')) {
      console.log(`${page} already has ScrollToTop`);
      return;
    }
    
    // 添加import语句
    const importMatch = content.match(/import.*from.*["'].*["'];/g);
    if (importMatch && importMatch.length > 0) {
      const lastImport = importMatch[importMatch.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
      
      content = content.slice(0, insertIndex) + 
               "import ScrollToTop from '../components/ScrollToTop';\n" +
               content.slice(insertIndex);
    }
    
    // 在return语句的最后添加ScrollToTop组件
    const returnMatch = content.match(/return\s*\([\s\S]*?\);/);
    if (returnMatch) {
      const returnContent = returnMatch[0];
      const lastClosingTag = returnContent.lastIndexOf('</');
      if (lastClosingTag !== -1) {
        const insertIndex = returnMatch.index + returnContent.lastIndexOf('>') + 1;
        content = content.slice(0, insertIndex) + 
                 '\n      <ScrollToTop />\n' +
                 content.slice(insertIndex);
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Added ScrollToTop to ${page}`);
  } else {
    console.log(`File not found: ${page}`);
  }
});

console.log('All pages updated successfully!');
