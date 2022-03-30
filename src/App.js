import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StickyFooter from './Components/Footer'
import SignIn from './Components/SignIn'
import HomePage from './Pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
      <StickyFooter />
    </BrowserRouter>
  )
}

export default App
