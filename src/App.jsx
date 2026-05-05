import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Games from './pages/Games'
import Spine from './pages/Spine'
import Live2D from './pages/Live2D'
import VisualCategoryList from './pages/VisualCategoryList'
import VisualCategoryPage from './pages/VisualCategoryPage'
import VisualEffects from './pages/VisualEffects'
import { useEffect, useRef } from 'react'


export default function App() {
    const canvasRef = useRef(null)
    const scrollBarRef = useRef(null)
useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, pts = [], raf

    const PALETTE = ['#dd2020', '#ffffff', '#df3232', '#a8aebb']

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    function init() {
      pts = []
      const n = Math.min(80, Math.floor(W * H / 16000))
      for (let i = 0; i < n; i++) pts.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        a: Math.random() * 0.45 + 0.1,
        ph: Math.random() * Math.PI * 2,
        ps: Math.random() * 0.008 + 0.004,
        col: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      })
    }
    function hex2rgba(hex, a) {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `rgba(${r},${g},${b},${a})`
    }
    function tick() {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255,181,71,${0.05 * (1 - d / 110)})`
            ctx.lineWidth = 0.4
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }
      for (const p of pts) {
        p.ph += p.ps
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = hex2rgba(p.col, p.a * (0.7 + 0.3 * Math.sin(p.ph)))
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
      }
      raf = requestAnimationFrame(tick)
    }

    resize(); init(); tick()
    window.addEventListener('resize', () => { resize(); init() })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', () => { resize(); init() })
    }
  }, [])

  // ── 捲動進度條 ───────────────────────────────
  useEffect(() => {
    function onScroll() {
      const s = window.scrollY
      const h = document.documentElement.scrollHeight - window.innerHeight
      if (scrollBarRef.current)
        scrollBarRef.current.style.width = (h > 0 ? s / h * 100 : 0) + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])




  return (
    <BrowserRouter>
      {/* ── 全域視覺效果 ── */}
      <div
        ref={scrollBarRef}
        style={{
          position: 'fixed', top: 0, left: 0, height: '2px',
          background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
          zIndex: 200, width: '0%', transition: 'width .1s linear',
          pointerEvents: 'none',
        }}
      />
      {/* 環境光暈 orbs */}
      <div className="orb orb-amber" />
      <div className="orb orb-cyan" />
      {/* 粒子 canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}
      />


      <nav className="navbar">
        <Link to="/" className="nav-brand">
          <span className="brand-mark">a</span>
          <span>aaaaa Studio</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" end>首頁</NavLink>
          <NavLink to="/games">遊戲作品</NavLink>
          <NavLink to="/spine">Spine 動作設計</NavLink>
          <NavLink to="/live2d">Live2D 動作設計</NavLink>
          <NavLink to="/visual">視覺設計</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/spine" element={<Spine />} />
        <Route path="/live2d" element={<Live2D />} />
        <Route path="/visual" element={<VisualCategoryList />} />
        <Route path="/visual/effects" element={<VisualEffects />} />
        <Route path="/visual/:categoryId" element={<VisualCategoryPage />} />
      </Routes>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} aaaaa Studio · 遊戲設計 / 動作設計 / 視覺設計</span>
        <a href="mailto:tppr2046@gmail.com">tppr2046@gmail.com</a>
      </footer>
    </BrowserRouter>
  )
}
