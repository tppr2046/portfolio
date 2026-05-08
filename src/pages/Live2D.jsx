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

      {/* Live2D Web 展示 */}
      <section className="section">
        <div className="section-title">
          <h2>互動展示</h2>
          <span className="count">Live2D Web 嵌入範例</span>
        </div>
        <div className="unity-demo unity-demo-vertical">
          <iframe
            src="/live2d-web/index.html"
            title="Live2D 互動展示"
            scrolling="no"
          ></iframe>
          <div className="unity-desc">
            <h3>Live2D Web 展示</h3>
            <p>
              以 Live2D Cubism 製作角色動作，直接透過 Web 技術嵌入展示；
              包含待機動作、表情與物理模擬，在角色身上按住滑鼠移動，可以讓角色視線跟隨滑鼠。
            </p>
            <p className="hint">Vtuber建模班習作</p>
            <p className="hint">繪圖：天之火</p>
            <p className="hint">課程指導：SODAARTS</p>
          </div>
        </div>
      </section>
    </main>
  )
}
