// src/components/GameCard.jsx
import React, { useState } from 'react'
import './GameCard.css'

export default function GameCard({ title, thumbnail, gameUrl, role, description, tags = [] }) {
  const [showGame, setShowGame] = useState(false)

  return (
    <article className="game-card">
      <div className="game-media">
        {showGame ? (
          <iframe
            src={gameUrl}
            title={title}
            className="game-iframe"
            allowFullScreen
          ></iframe>
        ) : (
          <button
            className="game-thumb-btn"
            onClick={() => setShowGame(true)}
            aria-label={`開始試玩 ${title}`}
          >
            <img src={thumbnail} alt={title} className="game-thumbnail" />
            <span className="play-overlay">▶ 點擊試玩</span>
          </button>
        )}
      </div>
      <div className="game-info">
        <h3>{title}</h3>
        {role && <p className="game-role">{role}</p>}
        {description && <p className="game-desc">{description}</p>}
        {tags.length > 0 && (
          <div className="tag-list">
            {tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
