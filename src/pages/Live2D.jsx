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
      <div >
        <iframe width="720" height="960"
          src="/live2d-demo/index.html"
          title="Live2D Unity Demo"
          allowFullScreen
        ></iframe>
      </div>



    </div>


  )
}