import './Spine.css'

export default function Live2D() {
  const videos = [
  'https://www.youtube.com/embed/kFSSSg-yO58?si=Q57zGyGH7wdYjv86',
  'https://www.youtube.com/embed/nt0vOhdWoJM?si=euN2NSgOCGheD-yn'
  ]


  return (
        <div className="portfolio-wrapper">
    <h1>Live2D動作設計</h1>
      <div className="video-grid">
        {videos.map((url, index) => (
          <div className="video-container" key={index}>
            <iframe
              src={url}
              title={`影片 ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>


  )
}