// src/data/spineData.js
// 每支影片的標題、說明、標籤可在此處修改。
// 標籤建議從以下分類擇一或多個：
//   '待機' | '攻擊' | '受擊' | '特殊技' | '表情' | '互動' | '循環動畫' | '商業案' | '個人習作'

export const spineWorks = [
  {
    id: 'spine-01',
    url: 'https://www.youtube.com/embed/k7v-WNCklg4',
    title: '角色動作展示 01',
    description: '完整角色動作循環，包含待機、移動與基礎攻擊。',
    tags: ['待機', '攻擊', '循環動畫'],
  },
  {
    id: 'spine-02',
    url: 'https://www.youtube.com/embed/IsF_QqMdPWQ',
    title: '角色動作展示 02',
    description: '以角色設計為基礎延伸的多段動作組合。',
    tags: ['攻擊', '特殊技'],
  },
  {
    id: 'spine-03',
    url: 'https://www.youtube.com/embed/CJirXArQlow',
    title: '角色動作展示 03',
    description: '強調節奏與重量感的攻擊動作設計。',
    tags: ['攻擊', '商業案'],
  },
  {
    id: 'spine-04',
    url: 'https://www.youtube.com/embed/WE4phYIDoV4',
    title: '角色動作展示 04',
    description: '依角色個性設計的待機與互動回饋。',
    tags: ['待機', '互動'],
  },
  {
    id: 'spine-05',
    url: 'https://www.youtube.com/embed/81U4UiX2p24',
    title: '角色動作展示 05',
    description: '特殊技演出，加入光效與鏡頭表現。',
    tags: ['特殊技', '商業案'],
  },
  {
    id: 'spine-06',
    url: 'https://www.youtube.com/embed/W9eh_xAhsmA',
    title: '角色動作展示 06',
    description: '完整動作循環，重點處理身體律動與布料。',
    tags: ['待機', '循環動畫'],
  },
  {
    id: 'spine-07',
    url: 'https://www.youtube.com/embed/INBzHr1HHPM4',
    title: '角色動作展示 07',
    description: '受擊與反應動作組，強調連動與重量感。',
    tags: ['受擊', '攻擊'],
  },
  {
    id: 'spine-08',
    url: 'https://www.youtube.com/embed/wGI0eDmvU9A',
    title: '角色動作展示 08',
    description: '小品角色互動動畫。',
    tags: ['互動', '個人習作'],
  },
  {
    id: 'spine-09',
    url: 'https://www.youtube.com/embed/UuSFmhB7TL0',
    title: '角色動作展示 09',
    description: '臉部表情與情緒切換練習。',
    tags: ['表情', '個人習作'],
  },
  {
    id: 'spine-10',
    url: 'https://www.youtube.com/embed/OTuer4XaD2Y',
    title: '角色動作展示 10',
    description: '完整可循環的待機動作。',
    tags: ['待機', '循環動畫'],
  },
  {
    id: 'spine-11',
    url: 'https://www.youtube.com/embed/dUsFTwnFykY',
    title: '角色動作展示 11',
    description: '近期作品，整合鏡頭、光效與特殊技。',
    tags: ['特殊技', '商業案'],
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
  '全部',
  '待機',
  '攻擊',
  '受擊',
  '特殊技',
  '表情',
  '互動',
  '循環動畫',
  '商業案',
  '個人習作',
]
