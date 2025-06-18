export default function Games() {
	return (
		<div>
 			<h1>獨立遊戲</h1>
			<div style={{ border: '3px solid #ccc', marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/ak8TXu08SH8?si=oWMo98-fB6oMnlce" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				
			</div>
		<p style={{ textAlign: 'center', marginTop: '1rem' }}>
        <a
          href="https://store.steampowered.com/app/2198810/_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          前往 Steam 商店頁面
        </a>
      </p>
			<h1>HTML5 遊戲展示</h1>
 			<div style={{ border: '3px solid #ccc', marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
        		<iframe
          		src="/games/windowkill/index.html"
          		title="啾命關頭"
          		width="720"
          		height="720"
          		style={{ border: 'none' }}
        		></iframe>
      		</div>

		</div>
)

}
