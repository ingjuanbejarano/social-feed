import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './views/home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
