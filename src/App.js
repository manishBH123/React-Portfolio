import React from 'react'
import Firstpage from './Components/Firstpage'
import './Components/CSS/All.css'
import Secondpage from './Components/Secondpage'
import Thirdpage from './Components/Thirdpage'
import { Route, Routes } from 'react-router'
import Navbar from './Components/Navbar.js'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route exact path="/Secondpage" element={<Secondpage />} />
        <Route exact path="/Thirdpage/*" element={<Thirdpage />} />
      </Routes>
    </>
  )
}

export default App