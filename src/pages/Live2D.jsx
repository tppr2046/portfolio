import './Spine.css'

export default function Live2D() {
  const videos = [
  'https://www.youtube.com/embed/kFSSSg-yO58?si=Q57zGyGH7wdYjv86',
  'https://www.youtube.com/embed/nt0vOhdWoJM?si=euN2NSgOCGheD-yn',
  'https://www.youtube.com/embed/2fsCpXChH-A',
  ]


  return (
        <div className="portfolio-wrapper">
    <h1>Live2D動作設計</h1>
      <div className="unity-container">
        <iframe
          src="/unity/live2d-demo/index.html"
          title="Live2D Unity Demo"
          className="unity-iframe"
          allowFullScreen
        ></iframe>
      </div>



    </div>


  )
}