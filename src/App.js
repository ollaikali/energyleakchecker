import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StickyFooter from './Components/Footer'
import NavBar from './Components/NavBar'
import SignIn from './Components/SignIn'
import HomePage from './Pages/HomePage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
        <StickyFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
