const parser = require('@babel/parser');
const fs = require('fs');

const files = [
  'src/App.jsx',
  'src/main.jsx',
  'src/pages/Home.jsx',
  'src/pages/Games.jsx',
  'src/pages/Spine.jsx',
  'src/pages/Live2D.jsx',
  'src/pages/VisualCategoryList.jsx',
  'src/pages/VisualCategoryPage.jsx',
  'src/components/GameCard.jsx',
  'src/data/gamesData.js',
  'src/data/visualDesignData.js',
  'src/data/spineData.js',
  'src/data/live2dData.js',
];

let ok = 0, fail = 0;
for (const f of files) {
  try {
    const src = fs.readFileSync(f, 'utf8');
    parser.parse(src, { sourceType: 'module', plugins: ['jsx'] });
    console.log('OK   ', f);
    ok++;
  } catch (e) {
    console.log('FAIL ', f, '::', e.message);
    fail++;
  }
}
console.log(`\nResult: ${ok} ok, ${fail} fail`);
