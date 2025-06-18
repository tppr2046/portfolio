import './Spine.css'

export default function Spine() {
  const videos = [
  'https://www.youtube.com/embed/k7v-WNCklg4?si=B1nRPeC2GghLEbDN',
  'https://www.youtube.com/embed/IsF_QqMdPWQ?si=YwvYanrsR0fdlMex',
  'https://www.youtube.com/embed/CJirXArQlow?si=Gr3ARCTr0ZICM-xk',
  'https://www.youtube.com/embed/WE4phYIDoV4?si=VSPXaJ3p7mr7znXm',
  'https://www.youtube.com/embed/81U4UiX2p24?si=f-TQA8zebCVcqcof',
  'https://www.youtube.com/embed/W9eh_xAhsmA?si=JBhpfVC4D3U83_jy',
  'https://www.youtube.com/embed/INBzHr1HHPM?si=FJdGMwxb01jxEoP4',
  'https://www.youtube.com/embed/wGI0eDmvU9A?si=UZk96GZryrJ9EZYc',
  'https://www.youtube.com/embed/UuSFmhB7TL0?si=aE-TjSH6Cdd-gld1',
  'https://www.youtube.com/embed/OTuer4XaD2Y?si=fHjWS_7x1q6CfXUW',
  'https://www.youtube.com/embed/dUsFTwnFykY?si=bnnGp5UvPn_FwUzt',

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