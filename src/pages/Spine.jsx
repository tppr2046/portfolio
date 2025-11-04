import './Spine.css'

export default function Spine() {
  const videos = [
  'https://www.youtube.com/embed/k7v-WNCklg4',
  'https://www.youtube.com/embed/IsF_QqMdPWQ',
  'https://www.youtube.com/embed/CJirXArQlow',
  'https://www.youtube.com/embed/WE4phYIDoV4',
  'https://www.youtube.com/embed/81U4UiX2p24',
  'https://www.youtube.com/embed/W9eh_xAhsmA',
  'https://www.youtube.com/embed/INBzHr1HHPM4',
  'https://www.youtube.com/embed/wGI0eDmvU9A',
  'https://www.youtube.com/embed/UuSFmhB7TL0',
  'https://www.youtube.com/embed/OTuer4XaD2Y',
  'https://www.youtube.com/embed/dUsFTwnFykY',
  'https://www.youtube.com/embed/2fsCpXChH-A',

]
  
  return (
    <div className="portfolio-wrapper">
      <h1>Spine動作設計</h1>

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
        <h3>H game女角串接unity操作試做(可拖曳胸部晃動)</h3>
        <iframe width="560" height="315" src="/spine/index.html" >
        </iframe>
    </div>
  </div>





)
 
  
}