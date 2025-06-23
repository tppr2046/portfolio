import React from 'react'
import { categories } from '../data/visualDesignData'
import { Link } from 'react-router-dom'
import './VisualDesign.css'

export default function VisualCategoryList() {
  return (
    <div className="visual-container">
      <h1>視覺設計作品</h1>
      <div className="category-grid">
        {categories.map((cat) => (
          <Link to={`/visual/${cat.id}`} className="category-card" key={cat.id}>
            <img src={cat.cover} alt={cat.name} className="category-image" />
            <span className="category-title">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
