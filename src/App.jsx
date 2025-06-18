import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Games from './pages/Games'
import Spine from './pages/Spine'
import Live2D from './pages/Live2D'

export default function App() {
    return (
        <BrowserRouter>
            <nav className="navbar">
                <Link to="/" style={{ color: 'white', marginRight: '10px' }}>首頁</Link>
                <Link to="/games" style={{ color: 'white', marginRight: '10px' }}>遊戲作品</Link>
                <Link to="/spine" style={{ color: 'white', marginRight: '10px' }}>Spine動作設計</Link>
                <Link to="/live2d" style={{ color: 'white' }}>Live2D動作設計</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/spine" element={<Spine />} />
                <Route path="/live2d" element={<Live2D />} />
            </Routes>
        </BrowserRouter>
    )
}
