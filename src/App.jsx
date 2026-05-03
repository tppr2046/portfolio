import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Games from './pages/Games'
import Spine from './pages/Spine'
import Live2D from './pages/Live2D'
import VisualCategoryList from './pages/VisualCategoryList'
import VisualCategoryPage from './pages/VisualCategoryPage'

export default function App() {
  return (
    <BrowserRouter>
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
        <Route path="/visual/:categoryId" element={<VisualCategoryPage />} />
      </Routes>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} aaaaa Studio · 遊戲設計 / 動作設計 / 視覺設計</span>
        <a href="mailto:tppr2046@gmail.com">tppr2046@gmail.com</a>
      </footer>
    </BrowserRouter>
  )
}
