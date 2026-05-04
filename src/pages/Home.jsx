import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

/* ─────────────────────────────────────────────────
   Hook: 打字機效果
───────────────────────────────────────────────── */
function useTypewriter(text, delay = 80, startDelay = 80) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let timeout
    const start = setTimeout(() => {
      function type() {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
          timeout = setTimeout(type, delay + Math.random() * 14)
        } else {
          setDone(true)
        }
      }
      type()
    }, startDelay)
    return () => { clearTimeout(start); clearTimeout(timeout) }
  }, [text, delay, startDelay])

  return { displayed, done }
}

/* ─────────────────────────────────────────────────
   Hook: 計數器動畫
───────────────────────────────────────────────── */
function useCounter(target, duration = 1500, active = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    let raf
    function loop(now) {
      const t = Math.min((now - start) / duration, 1)
      const e = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(e * target))
      if (t < 1) raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, active])
  return value
}

/* ─────────────────────────────────────────────────
   Hook: IntersectionObserver scroll reveal
───────────────────────────────────────────────── */
function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ─────────────────────────────────────────────────
   Hook: SVG path draw on scroll
───────────────────────────────────────────────── */
function useSvgDraw(threshold = 0.1) {
  const ref = useRef(null)
  const [drawn, setDrawn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setDrawn(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, drawn }
}

/* ─────────────────────────────────────────────────
   Hook: 滑鼠視差 (hero SVG)
───────────────────────────────────────────────── */
function useMouseParallax(strength = 14) {
  const heroRef = useRef(null)
  const decoRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const deco = decoRef.current
    if (!hero || !deco) return

    function onMove(e) {
      const r = hero.getBoundingClientRect()
      const dx = (e.clientX - r.left - r.width / 2) / r.width
      const dy = (e.clientY - r.top - r.height / 2) / r.height
      deco.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
    }
    function onLeave() {
      deco.style.transform = 'translate(0,0)'
    }

    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return { heroRef, decoRef }
}

/* ─────────────────────────────────────────────────
   Hook: 捲動視差
───────────────────────────────────────────────── */
function useParallax(speed = 0.05) {
  const ref = useRef(null)
  useEffect(() => {
    let ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        if (ref.current) ref.current.style.transform = `translateY(${window.scrollY * speed}px)`
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])
  return ref
}

/* ─────────────────────────────────────────────────
   StatCard — 單個統計數字卡片
───────────────────────────────────────────────── */
function StatCard({ target, label, active, customNum }) {
  const count = useCounter(target ?? 0, 1500, active)
  return (
    <div className="stat" data-target={target}>
      <div className="stat-num">
        {customNum
          ? <span style={{ fontSize: '1.2rem', lineHeight: 1.3 }}>{customNum}</span>
          : <><span className="count-num">{count}</span>+</>
        }
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

/* ─────────────────────────────────────────────────
   HeroDecoSVG — 角色骨架 SVG
   ⚠️  想換成自己的圖案就直接編輯這個 component
───────────────────────────────────────────────── */

function HeroDecoSVG({ svgRef, drawn }) {

}


/* ─────────────────────────────────────────────────
   SvgDecoStrip1 — Hero 下方波形條
   ⚠️  想換圖案就直接編輯這個 component
───────────────────────────────────────────────── */
function SvgDecoStrip1({ drawn }) {

}

/* ─────────────────────────────────────────────────
   SvgDecoStrip2 — 專長區下方骨骼條
   ⚠️  想換圖案就直接編輯這個 component
───────────────────────────────────────────────── */
function SvgDecoStrip2({ drawn }) {

}

/* ─────────────────────────────────────────────────
   Home — 主元件
───────────────────────────────────────────────── */
export default function Home() {
  // Typewriter
  const { displayed: eyebrowText, done: cursorDone } = useTypewriter(
    'Game Designer · Motion Designer · Visual Designer', 28, 80
  )

  // Hero line reveal (time-based)
  const [line0Revealed, setLine0Revealed] = useState(false)
  const [line1Revealed, setLine1Revealed] = useState(false)
  const [subRevealed, setSubRevealed]     = useState(false)
  const [actRevealed, setActRevealed]     = useState(false)
  const [rightRevealed, setRightRevealed] = useState(false)
  const [heroDrawn, setHeroDrawn]         = useState(false)
  const [statsActive, setStatsActive]     = useState(false)

  useEffect(() => {
    const t0 = setTimeout(() => setLine0Revealed(true), 180)
    const t1 = setTimeout(() => setLine1Revealed(true), 340)
    const t2 = setTimeout(() => setSubRevealed(true),   520)
    const t3 = setTimeout(() => setActRevealed(true),   720)
    const t4 = setTimeout(() => {
      setRightRevealed(true)
      setHeroDrawn(true)
      setStatsActive(true)
    }, 280)
    return () => [t0, t1, t2, t3, t4].forEach(clearTimeout)
  }, [])

  // Mouse parallax on hero
  const { heroRef, decoRef } = useMouseParallax(14)

  // Parallax layers
  const strip1Ref = useParallax(0.07)
  const strip2Ref = useParallax(0.05)
  const rightParallaxRef = useParallax(0.04)

  // Scroll reveal for sections
  const { ref: specialtiesRef, visible: specialtiesVisible } = useScrollReveal()
  const { ref: contactRef,     visible: contactVisible }     = useScrollReveal()

  // SVG strip draw on scroll
  const { ref: strip1DrawRef, drawn: strip1Drawn } = useSvgDraw()
  const { ref: strip2DrawRef, drawn: strip2Drawn } = useSvgDraw()

  // Combine refs for strip elements
  function mergeRefs(...refs) {
    return el => refs.forEach(r => {
      if (typeof r === 'function') r(el)
      else if (r) r.current = el
    })
  }

  return (
    <main className="page home-page">

      {/* Hero */}
      <section className="hero" id="hero" ref={heroRef}>

        {/* Left: text */}
        <div className="hero-text">
          <span className="eyebrow">
            {eyebrowText}
            {!cursorDone && <span className="cursor" />}
          </span>

          <h1 className="hero-title">
            <span className="line-wrap">
              <span className={`line-inner${line0Revealed ? ' revealed' : ''}`}>
                做<span className="accent">遊戲</span>，也做角色
              </span>
            </span>
            <span className="line-wrap">
              <span className={`line-inner${line1Revealed ? ' revealed' : ''}`}>
                <span className="accent">會動</span>的事。
              </span>
            </span>
          </h1>

          <p className={`hero-sub${subRevealed ? ' revealed' : ''}`}>
            多年遊戲產業經驗，跨足遊戲企劃、獨立遊戲開發、Spine／Live2D 動作設計與視覺設計。
            擅長把角色、節奏與互動感，整合到可以實際被玩到的作品裡。
          </p>

          <div className={`hero-actions${actRevealed ? ' revealed' : ''}`}>
            <Link to="/spine" className="btn">看 Spine 動作設計</Link>
            <Link to="/games" className="btn">看遊戲作品</Link>
          </div>
        </div>

        {/* Right: SVG + stats */}
        <div
          className={`hero-right${rightRevealed ? ' revealed' : ''}`}
          ref={mergeRefs(rightParallaxRef)}
          id="hero-right"
        >
          <div className="hero-deco-wrap">
            <HeroDecoSVG svgRef={decoRef} drawn={heroDrawn} />
          </div>

          <div className="hero-stats">
            <StatCard target={19} label="年遊戲產業資歷" active={statsActive} />
            <StatCard target={30} label="遊戲活動主視覺" active={statsActive} />
            <StatCard target={10} label="Spine 角色動作" active={statsActive} />
            <StatCard customNum="單機/HTML5" label="遊戲作品" />
          </div>
        </div>
      </section>

      {/* SVG deco strip 1 */}
      <div
        className="svg-deco-strip"
        id="strip-1"
        ref={mergeRefs(strip1Ref, strip1DrawRef)}
      >
        <SvgDecoStrip1 drawn={strip1Drawn} />
      </div>

      {/* Specialties */}
      <section
        className={`section reveal${specialtiesVisible ? ' visible' : ''}`}
        ref={specialtiesRef}
      >
        <div className="section-title">
          <h2>專長領域</h2>
          <span className="count">三個我每天在做的事</span>
        </div>
        <div className="specialty-grid">
          <Link to="/games" className="specialty-card">
            <div className="card-icon">🎮</div>
            <h3>遊戲設計</h3>
            <p>從企劃文件、機制原型、關卡設計、到實機開發。個人作品已上架 Steam，亦製作多款 HTML5 小遊戲。</p>
            <span className="card-link">查看作品 →</span>
          </Link>
          <Link to="/spine" className="specialty-card">
            <div className="card-icon">🎬</div>
            <h3>動作設計</h3>
            <p>Spine 與 Live2D 角色動畫製作，包含待機、攻擊、互動、表情等遊戲常用動作循環，亦提供 Unity 串接協助。</p>
            <span className="card-link">查看作品 →</span>
          </Link>
          <Link to="/visual" className="specialty-card">
            <div className="card-icon">🎨</div>
            <h3>視覺設計</h3>
            <p>長期參與 TGDF、GGJ、KGJ、FGJ 等遊戲社群活動的主視覺製作，累積跨年度的活動視覺語彙。</p>
            <span className="card-link">查看作品 →</span>
          </Link>
        </div>
      </section>

      {/* SVG deco strip 2 */}
      <div
        className="svg-deco-strip"
        id="strip-2"
        ref={mergeRefs(strip2Ref, strip2DrawRef)}
      >
        <SvgDecoStrip2 drawn={strip2Drawn} />
      </div>

      {/* Contact */}
      <section
        className={`section reveal${contactVisible ? ' visible' : ''}`}
        ref={contactRef}
      >
        <div className="section-title">
          <h2>接案項目</h2>
        </div>
        <div className="contact-card">
          <div className="contact-list">
            <span className="tag tag-accent">小遊戲開發</span>
            <span className="tag tag-accent">Spine 動作設計及Unity整合</span>
            <span className="tag tag-accent">Live2D 動作設計/ Vtuber建模</span>
            <span className="tag tag-accent">活動主視覺</span>
          </div>
          <p className="contact-text">
            若您對我的作品有興趣，或有合作邀約，歡迎來信討論。
          </p>
          <a href="mailto:tppr2046@gmail.com" className="btn btn-primary">
            tppr2046@gmail.com
          </a>
        </div>
      </section>
    </main>
  )
}
