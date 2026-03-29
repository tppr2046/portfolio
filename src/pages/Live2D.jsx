import './Spine.css'

export default function Live2D() {
  const videos = [
  'https://www.youtube.com/embed/kFSSSg-yO58',
  'https://www.youtube.com/embed/nt0vOhdWoJM',
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
    <div>
        <h3>Live2D untiy操作</h3>
        <iframe width="360" height="640" src="/live2d-demo/index.html" >
        </iframe>
    </div>


    </div>


  )
}