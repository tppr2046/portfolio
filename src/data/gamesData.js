// src/data/gamesData.js

export const featuredGame = {
  id: 'steam-main',
  title: 'Steam作品',
  videoUrl: 'https://www.youtube.com/embed/ak8TXu08SH8?si=oWMo98-fB6oMnlce',
  storeUrl: 'https://store.steampowered.com/app/2198810/_/',
  role: '個人作品（企劃 / 程式 / 美術 / 動作）',
  description:
    '獨立團隊開發作品。我主要負責遊戲機制設計、介面操作、視覺與動作整合，另有底層機制工程與合作外包繪師一起合作。',
  tags: ['獨立遊戲', 'Steam'],
}

export const games = [
  {
    id: 'window-kill',
    title: '啾命關頭',
    thumbnail: '/games/windowkill/cover.jpg',
    gameUrl: '/games/windowkill/index.html',
    webUrl: 'https://wk.wuo-wuo.com/',
    role: '遊戲設計 / 美術 / 程式',
    description: '以遊戲的方式讓讀者理解鳥類撞上窗戶的傷害。與動物議題媒體窩窩合作，入圍曾虛白先生新聞獎數位創新類',
    tags: ['HTML5', '議題'],
  },
  {
    id: 'cat_cards',
    title: '金魚腦行不行',
    thumbnail: '/games/cat_cards/cover.jpg',
    gameUrl: '/games/cat_cards/index.html',
    role: '遊戲設計 / 美術 / 程式',
    description: '輕量化卡片記憶玩法，主題為貓咪，目標是讓玩家在短時間內挑戰自己的記憶力。',
    tags: ['HTML5', '記憶', '休閒'],
  },
]

export const otherClipUrl = 'https://www.youtube.com/embed/Lzzf19crMIE?si=L7cApBJ0dDGPnVzU'
