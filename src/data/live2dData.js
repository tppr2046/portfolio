// src/data/live2dData.js
// 標籤建議：'待機' | '表情' | '互動' | '頭髮物理' | '個人習作' | '商業案'

export const live2dWorks = [
  {
    id: 'live2d-01',
    url: 'https://www.youtube.com/embed/kFSSSg-yO58',
    title: 'Live2D 角色動作展示 01',
    description: '角色待機與表情切換，含頭髮、配件等次級物理動態。',
    tags: ['待機', '表情', '頭髮物理'],
  },
  {
    id: 'live2d-02',
    url: 'https://www.youtube.com/embed/nt0vOhdWoJM',
    title: 'Live2D 角色動作展示 02',
    description: '角色互動表現練習，重點在臉部 deform 與情緒切換。',
    tags: ['表情', '互動', '個人習作'],
  },
]

export const live2dWorkflow = [
  {
    step: '01',
    title: '原畫拆件',
    desc: '依需求拆解 PSD：頭髮、瀏海、眉眼、嘴、身體、配件等。',
  },
  {
    step: '02',
    title: '網格建模',
    desc: '為每個部件建立 Mesh，預留變形空間與細節。',
  },
  {
    step: '03',
    title: '參數綁定',
    desc: '建立 X / Y 角度、呼吸、眨眼、嘴形、表情切換等參數。',
  },
  {
    step: '04',
    title: '物理設定',
    desc: '設定頭髮、胸部、配件等次級動態，自然連動主動作。',
  },
  {
    step: '05',
    title: '動作整合',
    desc: '輸出 .moc3 / .model3，並依需求製作待機、表情組與互動。',
  },
]

export const live2dTags = ['全部', '待機', '表情', '互動', '頭髮物理', '個人習作', '商業案']
