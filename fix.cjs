const fs = require('fs');
const files = [
  'src/components/Achievements.tsx',
  'src/components/Contact.tsx',
  'src/components/Experience.tsx',
  'src/components/Hero.tsx',
  'src/components/Projects.tsx',
  'src/components/Section.tsx',
  'src/components/Skills.tsx',
  'src/components/About.tsx',
  'src/components/Footer.tsx'
];
for (const file of files) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    if (!content.startsWith('"use client"')) {
      fs.writeFileSync(file, '"use client";\n' + content);
    }
  }
}
const page = 'app/page.tsx';
let pageContent = fs.readFileSync(page, 'utf8');
pageContent = pageContent.replace('"use client";\n', '');
pageContent = pageContent.replace('"use client";\r\n', '');
pageContent = pageContent.replace('"use client";', '');
fs.writeFileSync(page, pageContent);
