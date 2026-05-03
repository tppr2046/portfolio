import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { visualDesigns, categories } from '../data/visualDesignData'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import './VisualDesign.css'

export default function VisualCategoryPage() {
  const { categoryId } = useParams()
  const designs = visualDesigns.filter((d) => d.category === categoryId)
  const categoryName =
    categories.find((c) => c.id === categoryId)?.name || '未分類'

  const [openIndex, setOpenIndex] = useState(-1)
  const slides = designs.map((d) => ({ src: d.image, alt: d.title }))

  return (
    <main className="visual-container">
      <header className="page-header">
        <span className="eyebrow">
          <Link to="/visual" style={{ color: 'inherit' }}>← 視覺設計</Link>
        </span>
        <h1>{categoryName}</h1>
        <p>共 {designs.length} 件作品 · 點擊圖片可放大檢視</p>
      </header>
      <div className="design-grid">
        {designs.map((item, index) => (
          <div key={index} className="design-card">
            <img
              src={item.image}
              alt={item.title}
              className="design-image"
              onClick={() => setOpenIndex(index)}
            />
            <h3>{item.title}</h3>
            {item.description && <p>{item.description}</p>}
          </div>
        ))}
      </div>

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={openIndex}
        slides={slides}
      />
    </main>
  )
}
