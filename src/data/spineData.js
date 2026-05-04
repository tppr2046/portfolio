// src/data/spineData.js
// 每支影片的標題、說明、標籤可在此處修改。
// 標籤建議從以下分類擇一或多個：
//   '待機' | '攻擊' | '受擊' | '特殊技' | '表情' | '互動' | '循環動畫' | '商業案' | '個人習作'

export const spineWorks = [
  {
    id: 'spine-01',
    url: 'https://www.youtube.com/embed/k7v-WNCklg4',
    title: '角色動作展示 01',
    description: '深淵呼喚角色動作-克蘇魯',
    tags: ['遊戲動作'],
  },
  {
    id: 'spine-02',
    url: 'https://www.youtube.com/embed/IsF_QqMdPWQ',
    title: '角色動作展示 02',
    description: '深淵呼喚角色動作-奈亞拉托提普',
    tags: ['遊戲動作'],
  },
  {
    id: 'spine-03',
    url: 'https://www.youtube.com/embed/CJirXArQlow',
    title: '角色動作展示 03',
    description: '深淵呼喚角色動作-黃衣國王',
    tags: ['遊戲動作'],
  },
  {
    id: 'spine-04',
    url: 'https://www.youtube.com/embed/WE4phYIDoV4',
    title: '角色動作展示 04',
    description: '深淵呼喚角色動作-莎布尼古拉斯',
    tags: ['遊戲動作'],
  },
  {
    id: 'spine-05',
    url: 'https://www.youtube.com/embed/81U4UiX2p24',
    title: '角色動作展示 05',
    description: '深淵呼喚角色動作-尤格索托斯',
    tags: ['遊戲動作'],
  },
  {
    id: 'spine-06',
    url: 'https://www.youtube.com/embed/W9eh_xAhsmA',
    title: '角色動作展示 06',
    description: '深淵呼喚角色動作-組合怪獸',
    tags: ['遊戲動作'],
  },
  {
    id: 'spine-07',
    url: 'https://www.youtube.com/embed/INBzHr1HHPM',
    title: '角色動作展示 07',
    description: '深淵呼喚角色動作-星之卷族',
    tags: ['遊戲動作'],
  },
  {
    id: 'spine-08',
    url: 'https://www.youtube.com/embed/wGI0eDmvU9A',
    title: '角色動作展示 08',
    description: '深淵呼喚角色動作-骰子怪',
    tags: ['遊戲動作'],
  },
  {
    id: 'spine-09',
    url: 'https://www.youtube.com/embed/UuSFmhB7TL0',
    title: '角色動作展示 09',
    description: '深淵呼喚角色動作-昌格納方庚',
    tags: ['遊戲動作'],
  },
  {
    id: 'spine-10',
    url: 'https://www.youtube.com/embed/OTuer4XaD2Y',
    title: '角色動作展示 10',
    description: 'Spine女角習作',
    tags: ['個人習作'],
  },
  {
    id: 'spine-11',
    url: 'https://www.youtube.com/embed/dUsFTwnFykY',
    title: '角色動作展示 11',
    description: 'TGDF2022動態背景',
    tags: ['商業案'],
  },
]

export const spineWorkflow = [
  {
    step: '01',
    title: '需求釐清',
    desc: '與企劃／美術確認角色設定、動作清單、引擎需求與輸出規格。',
  },
  {
    step: '02',
    title: '原畫切割',
    desc: '依動作需求重新拆解 PSD，預留變形空間並命名圖層。',
  },
  {
    step: '03',
    title: '骨架綁定',
    desc: 'Spine 內建立骨架、IK／路徑約束、權重繪製，確保動作彈性。',
  },
  {
    step: '04',
    title: '關鍵動畫',
    desc: '依節奏關鍵格、動作弧線、緩動曲線製作角色動作。',
  },
  {
    step: '05',
    title: '細節與循環',
    desc: '處理頭髮、布料、特效與循環銜接，確保連續播放不破圖。',
  },
  {
    step: '06',
    title: '輸出整合',
    desc: '輸出 .skel／.atlas／圖集，提供 Unity 整合與後續維護。',
  },
]

export const spineTags = [
  '遊戲動作',
  '商業案',
  '個人習作',
]
