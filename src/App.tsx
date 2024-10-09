import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ColorSwitcher from './components/ColorSwitcher'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [mainColor, setMainColor] = useState('#e39300')
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.style.setProperty('--main-color', mainColor)
  }, [mainColor])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] text-black dark:text-white">
      <Header toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Services />
        <Portfolio />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ColorSwitcher setMainColor={setMainColor} />
      <ScrollToTop />
    </div>
  )
}

export default App