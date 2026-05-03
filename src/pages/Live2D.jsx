import { useState, useMemo } from 'react'
import { live2dWorks, live2dWorkflow, live2dTags } from '../data/live2dData'
import './Spine.css'

export default function Live2D() {
  const [activeTag, setActiveTag] = useState('全部')

  const filtered = useMemo(() => {
    if (activeTag === '全部') return live2dWorks
    return live2dWorks.filter((w) => w.tags.includes(activeTag))
  }, [activeTag])

  return (
    <main className="page motion-page">
      <header className="page-header">
        <span className="eyebrow">Motion Design · Live2D</span>
        <h1>Live2D 動作設計</h1>
        <p>
          以 Live2D Cubism 製作角色動作，包含臉部表情、待機、頭髮與配件物理。
          可串接 Unity，於遊戲與實機環境中使用。
        </p>
      </header>

      {/* 工作流程 */}
      <section className="workflow">
        <div className="section-title">
          <h2>製作流程</h2>
          <span className="count">五個步驟，從 PSD 到上引擎</span>
        </div>
        <div className="workflow-grid">
          {live2dWorkflow.map((s) => (
            <div key={s.step} className="workflow-step">
              <span className="step-num">STEP {s.step}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 作品集 */}
      <section className="section">
        <div className="section-title">
          <h2>作品集</h2>
          <span className="count">{filtered.length} 件 / 共 {live2dWorks.length} 件</span>
        </div>
        <div className="filter-bar">
          {live2dTags.map((tag) => (
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

      {/* Unity 整合 */}
      <section className="section">
        <div className="section-title">
          <h2>Unity 整合展示</h2>
          <span className="count">Live2D + Unity 互動範例</span>
        </div>
        <div className="unity-demo unity-demo-vertical">
          <iframe
            src="/live2d-demo/index.html"
            title="Live2D Unity 整合展示"
            scrolling="no"
          ></iframe>
          <div className="unity-desc">
            <h3>Live2D 串接 Unity</h3>
            <p>
              將 Live2D 動作導入 Unity，並加入互動回饋；
              示範如何在實機中即時控制角色表情與動作參數。
            </p>
            <p className="hint">※ 範例為動作技術測試，僅供作品展示。</p>
          </div>
        </div>
      </section>
    </main>
  )
}
