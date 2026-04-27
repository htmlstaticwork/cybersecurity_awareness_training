const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const svg = `<svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="#0a0e1a" stroke-width="2.5" xmlns="http://www.w3.org/2000/svg">
  <rect width="24" height="24" rx="2.5" fill="#00d4ff" stroke="none" />
  <g transform="scale(0.8) translate(3, 3)">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(dir, 'favicon.svg'), svg);

for (const f of files) {
  const file = path.join(dir, f);
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('favicon.svg')) {
    content = content.replace('</head>', '  <link rel="icon" href="favicon.svg" type="image/svg+xml" />\n</head>');
    fs.writeFileSync(file, content);
  }
}
console.log('Done adding favicon.');
