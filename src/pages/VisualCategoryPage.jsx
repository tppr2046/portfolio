import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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
    <div className="visual-container">
      <h1>{categoryName}</h1>
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
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={openIndex}
        slides={slides}
      />
    </div>
  )
}
