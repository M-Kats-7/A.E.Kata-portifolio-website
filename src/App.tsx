import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import ProjectDetail from './components/projectDetails'
import ContactForm from './components/contactForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Single Page Layout overview */}
        <Route path="/" element={<Home />} />
        
        {/* Dedicated Details Subpage View */}
        <Route path="/project/:slug" element={<ProjectDetail />} />

        {/* Dedicated contact form */}
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App