import './Games.css'
import { games, featuredGame, otherClipUrl } from '../data/gamesData'
import GameCard from '../components/GameCard'

export default function Games() {
  return (
    <main className="page games-page">
      <header className="page-header">
        <span className="eyebrow">Game Design</span>
        <h1>遊戲作品</h1>
        <p>
          從上架 Steam 的個人作品，到可在瀏覽器即時試玩的 HTML5 小品。
          重點呈現遊戲機制、玩法節奏與整合美術／動作的整體完成度。
        </p>
      </header>

      {/* Steam 主打作品 */}
      <section className="section featured-game">
        <div className="section-title">
          <h2>單機遊戲</h2>
          <span className="count">獨立團隊開發</span>
        </div>
        <div className="featured-grid">
          <div className="featured-video">
            <iframe
              src={featuredGame.videoUrl}
              title="Steam 作品宣傳片"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="featured-info">
            <h3>{featuredGame.title}</h3>
            <p className="game-role">{featuredGame.role}</p>
            <p className="featured-desc">{featuredGame.description}</p>
            <div className="tag-list">
              {featuredGame.tags.map((t) => (
                <span key={t} className="tag tag-accent">{t}</span>
              ))}
            </div>
            <a
              href={featuredGame.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
            >
              前往 Steam 商店頁面 →
            </a>
          </div>
        </div>
      </section>

      {/* HTML5 作品 */}
      <section className="section">
        <div className="section-title">
          <h2>HTML5 小品</h2>
          <span className="count">點擊圖片即可試玩</span>
        </div>
        <div className="portfolio-grid">
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              thumbnail={game.thumbnail}
              gameUrl={game.gameUrl}
              webUrl={game.webUrl}
              role={game.role}
              description={game.description}
              tags={game.tags}
            />
          ))}
        </div>
      </section>

      {/* 其他開發紀錄 */}
      <section className="section">
        <div className="section-title">
          <h2>展場互動小遊戲</h2>
          <span className="count">資訊月反詐騙宣導小遊戲</span>
        </div>
        <div className="featured-video standalone">
          <iframe
            src={otherClipUrl}
            title="即通保蝟戰"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  )
}
