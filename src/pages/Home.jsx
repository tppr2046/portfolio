import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <main className="page home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <span className="eyebrow">Game Designer · Motion Designer · Visual Designer</span>
          <h1 className="hero-title">
            做<span className="accent">遊戲</span>，也做角色<span className="accent">會動</span>的事。
          </h1>
          <p className="hero-sub">
            多年遊戲產業經驗，跨足遊戲企劃、獨立遊戲開發、Spine／Live2D 動作設計與視覺設計。
            擅長把角色、節奏與互動感，整合到一支可以實際被玩到的作品裡。
          </p>
          <div className="hero-actions">
            <Link to="/spine" className="btn btn-primary">看 Spine 動作設計</Link>
            <Link to="/games" className="btn">看遊戲作品</Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">10+</div>
            <div className="stat-label">年遊戲產業資歷</div>
          </div>
          <div className="stat">
            <div className="stat-num">30+</div>
            <div className="stat-label">遊戲活動主視覺</div>
          </div>
          <div className="stat">
            <div className="stat-num">10+</div>
            <div className="stat-label">Spine 動作角色</div>
          </div>
          <div className="stat">
            <div className="stat-num">2</div>
            <div className="stat-label">Steam 上架／HTML5 作品</div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section">
        <div className="section-title">
          <h2>專長領域</h2>
          <span className="count">三個我每天在做的事</span>
        </div>
        <div className="specialty-grid">
          <Link to="/games" className="specialty-card">
            <div className="card-icon">🎮</div>
            <h3>遊戲設計</h3>
            <p>
              從企劃文件、機制原型、關卡設計、到實機開發。
              個人作品已上架 Steam，亦製作多款 HTML5 小遊戲。
            </p>
            <span className="card-link">查看作品 →</span>
          </Link>
          <Link to="/spine" className="specialty-card">
            <div className="card-icon">🎬</div>
            <h3>動作設計</h3>
            <p>
              Spine 與 Live2D 角色動畫製作，包含待機、攻擊、互動、表情等遊戲常用動作循環，
              亦提供 Unity 串接協助。
            </p>
            <span className="card-link">查看作品 →</span>
          </Link>
          <Link to="/visual" className="specialty-card">
            <div className="card-icon">🎨</div>
            <h3>視覺設計</h3>
            <p>
              長期參與 TGDF、GGJ、KGJ、FGJ 等遊戲社群活動的主視覺製作，
              累積跨年度的活動視覺語彙。
            </p>
            <span className="card-link">查看作品 →</span>
          </Link>
        </div>
      </section>

      {/* Tools */}
      <section className="section">
        <div className="section-title">
          <h2>使用工具</h2>
        </div>
        <div className="tools-grid">
          <div className="tool-group">
            <h4>遊戲開發</h4>
            <p>Unity · C# · Construct · HTML5</p>
          </div>
          <div className="tool-group">
            <h4>動作設計</h4>
            <p>Spine · Live2D · After Effects</p>
          </div>
          <div className="tool-group">
            <h4>視覺設計</h4>
            <p>Photoshop · Illustrator · Clip Studio Paint</p>
          </div>
          <div className="tool-group">
            <h4>協作</h4>
            <p>Git · Trello · Figma</p>
          </div>
        </div>
      </section>

      {/* Services / contact */}
      <section className="section contact-section">
        <div className="section-title">
          <h2>接案項目</h2>
        </div>
        <div className="contact-card">
          <div className="contact-list">
            <span className="tag tag-accent">小遊戲開發</span>
            <span className="tag tag-accent">Spine 動作設計</span>
            <span className="tag tag-accent">Live2D 動作設計</span>
            <span className="tag tag-accent">活動主視覺</span>
            <span className="tag tag-accent">角色 / 立繪</span>
          </div>
          <p className="contact-text">
            若您對我的作品有興趣，或有合作邀約，歡迎來信討論。
          </p>
          <a href="mailto:tppr2046@gmail.com" className="btn btn-primary">
            tppr2046@gmail.com
          </a>
        </div>
      </section>
    </main>
  )
}
