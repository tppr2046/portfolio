import React, { useState } from 'react'
import './Games.css'
import { games } from '../data/gamesData'
import GameCard from '../components/GameCard'

export default function Games() {
	  const [showGame, setShowGame] = useState(false)

  const handleClick = () => {
    setShowGame(true)
  }
	return (
		<div>
 			<h1>獨立遊戲</h1>
			<div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/ak8TXu08SH8?si=oWMo98-fB6oMnlce" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
		<p style={{ textAlign: 'center', marginTop: '1rem' }}>
        <a
          href="https://store.steampowered.com/app/2198810/_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>前往 Steam 商店頁面</h2>
        </a>
      </p>
			<h1>HTML5 遊戲展示</h1>
    <div className="portfolio-grid">
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          thumbnail={game.thumbnail}
          gameUrl={game.gameUrl}
        />
      ))}
    </div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Lzzf19crMIE?si=L7cApBJ0dDGPnVzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

		</div>
)

}
