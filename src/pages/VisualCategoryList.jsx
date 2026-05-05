import { categories } from '../data/visualDesignData'
import { Link } from 'react-router-dom'
import './VisualDesign.css'

export default function VisualCategoryList() {
  return (
    <main className="visual-container">
      <header className="page-header">
        <span className="eyebrow">Visual Design</span>
        <h1>視覺設計作品</h1>
        <p>
          長期參與 TGDF、Global Game Jam、Kuso Game Jam、Faust Game Jam 等遊戲社群活動，
          負責多年度活動主視覺與宣傳延伸物。也有遊戲UI特效設計作品。
        </p>
      </header>
      <div className="category-grid">
        {categories.map((cat) => (
          <Link to={`/visual/${cat.id}`} className="category-card" key={cat.id}>
            <img src={cat.cover} alt={cat.name} className="category-image" />
            <span className="category-title">{cat.name}</span>
          </Link>
        ))}
        <Link to="/visual/effects" className="category-card">
          <img
            src="https://img.youtube.com/vi/hOm8pmC1usE/hqdefault.jpg"
            alt="遊戲UI特效設計"
            className="category-image"
          />
          <span className="category-title">遊戲UI特效設計</span>
        </Link>
      </div>
    </main>
  )
}
