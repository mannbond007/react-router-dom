import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Product from './pages/Product'
import Features from './pages/Features'
import Mobile from './pages/Mobile'
import Computer from './pages/Computer'

const App = () => {
  return (
    <div className='h-screen bg-black '>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path='/product/mobile' element={<Mobile/>}/>
        <Route path='/product/computer' element={<Computer/>}/>
      </Routes>
    </div>
  )
}

export default App