import { useState, useMemo } from 'react'
import { spineWorks, spineWorkflow, spineTags } from '../data/spineData'
import './Spine.css'

export default function Spine() {
  const [activeTag, setActiveTag] = useState('全部')

  const filtered = useMemo(() => {
    if (activeTag === '全部') return spineWorks
    return spineWorks.filter((w) => w.tags.includes(activeTag))
  }, [activeTag])

  return (
    <main className="page motion-page">
      <header className="page-header">
        <span className="eyebrow">Motion Design · Spine 2D</span>
        <h1>Spine 動作設計</h1>
        <p>
          長期使用 Spine 為遊戲角色製作動作循環、攻擊／受擊組合、表情與互動回饋，
          熟悉從原畫切割、骨架綁定、關鍵動畫到 Unity 整合的完整流程。
        </p>
      </header>

      {/* 工作流程 */}
      <section className="workflow">
        <div className="section-title">
          <h2>製作流程</h2>
          <span className="count">六個步驟，從原畫到上引擎</span>
        </div>
        <div className="workflow-grid">
          {spineWorkflow.map((s) => (
            <div key={s.step} className="workflow-step">
              <span className="step-num">STEP {s.step}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 分類標籤 */}
      <section className="section">
        <div className="section-title">
          <h2>作品集</h2>
          <span className="count">{filtered.length} 件 / 共 {spineWorks.length} 件</span>
        </div>
        <div className="filter-bar">
          {spineTags.map((tag) => (
            <button
              key={tag}
              className={`filter-chip ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="motion-grid">
          {filtered.map((work) => (
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
                <div className="tag-list">
                  {work.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Unity 整合展示 */}
      <section className="section">
        <div className="section-title">
          <h2>Unity 整合展示</h2>
          <span className="count">Spine + Unity 互動範例</span>
        </div>
        <div className="unity-demo">
          <iframe
            src="/spine/index.html"
            title="Spine Unity 整合展示"
          ></iframe>
          <div className="unity-desc">
            <h3>角色串接 Unity</h3>
            <p>
              將 Spine 完成的動作整合到 Unity，
              並加入物理碰撞與滑鼠拖曳互動，
              示範 Spine 動作可在實機環境中支援的動態效果。
            </p>
            <p className="hint">※ 範例為動作技術測試，僅供作品展示。</p>
          </div>
        </div>
      </section>
    </main>
  )
}
