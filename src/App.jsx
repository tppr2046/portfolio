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
    const scrollBarRef = useRef(null)

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


      <nav className="navbar">
        <Link to="/" className="nav-brand">
          <img src="/logo.png" alt="aaaaa Studio" className="nav-logo" />
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
