// src/components/GameCard.jsx
import React, { useState } from 'react'
import './GameCard.css'

export default function GameCard({ title, thumbnail, gameUrl }) {
  const [showGame, setShowGame] = useState(false)

  return (
    <div className="game-card">
      <h3>{title}</h3>
      {showGame ? (
        <iframe
          src={gameUrl}
          title={title}
          className="game-iframe"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          src={thumbnail}
          alt={title}
          className="game-thumbnail"
          onClick={() => setShowGame(true)}
        />
      )}
    </div>
  )
}
