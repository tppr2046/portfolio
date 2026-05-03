// src/data/gamesData.js

export const featuredGame = {
  id: 'steam-main',
  title: 'Steam 上架作品',
  videoUrl: 'https://www.youtube.com/embed/ak8TXu08SH8?si=oWMo98-fB6oMnlce',
  storeUrl: 'https://store.steampowered.com/app/2198810/_/',
  role: '個人作品（企劃 / 程式 / 美術 / 動作）',
  description:
    '獨立團隊開發作品。我主要負責遊戲機制設計、介面操作、視覺與動作整合，另有底層機制工程與合作外包繪師一起合作。',
  tags: ['獨立遊戲', '個人作品', 'Steam'],
}

export const games = [
  {
    id: 'window-kill',
    title: '啾命關頭',
    thumbnail: '/games/windowkill/cover.jpg',
    gameUrl: '/games/windowkill/index.html',
    role: '遊戲設計 / 美術 / 程式',
    description: '可在瀏覽器直接遊玩的小品作品，主打瞬間反應與節奏感。',
    tags: ['HTML5', '街機'],
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
