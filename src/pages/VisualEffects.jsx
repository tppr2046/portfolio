import { Link } from 'react-router-dom'
import { effectsWorks } from '../data/visualEffectsData'
import './Spine.css'
import './VisualDesign.css'

export default function VisualEffects() {
  return (
    <main className="visual-container">
      <header className="page-header">
        <span className="eyebrow">
          <Link to="/visual" style={{ color: 'inherit' }}>← 視覺設計</Link>
        </span>
        <h1>遊戲UI特效設計</h1>
        <p>遊戲特效設計作品，包含粒子、技能特效與視覺演出。</p>
      </header>

      <section className="section">
        <div className="motion-grid">
          {effectsWorks.map((work) => (
            <article key={work.id} className="motion-card">
              <div className="video-frame">
                <iframe
                  src={work.url}
                  title={work.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="motion-meta">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                {work.tags?.length > 0 && (
                  <div className="tag-list">
                    {work.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
