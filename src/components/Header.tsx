import React, { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const Header = ({ toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode)
    toggleDarkMode()
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-[#111111] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold text-main-color">Robert</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <NavItem href="#home" label="Home" />
              <NavItem href="#about" label="About" />
              <NavItem href="#resume" label="Resume" />
              <NavItem href="#services" label="Services" />
              <NavItem href="#portfolio" label="Portfolio" />
              <NavItem href="#testimonial" label="Testimonial" />
              <NavItem href="#blog" label="Blog" />
              <NavItem href="#contact" label="Contact" />
            </ul>
          </nav>
          <div className="flex items-center">
            <button
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 mr-4"
              onClick={handleDarkModeToggle}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="md:hidden text-black dark:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#111111] shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <NavItem href="#home" label="Home" onClick={() => setIsMenuOpen(false)} />
              <NavItem href="#about" label="About" onClick={() => setIsMenuOpen(false)} />
              <NavItem href="#resume" label="Resume" onClick={() => setIsMenuOpen(false)} />
              <NavItem href="#services" label="Services" onClick={() => setIsMenuOpen(false)} />
              <NavItem href="#portfolio" label="Portfolio" onClick={() => setIsMenuOpen(false)} />
              <NavItem href="#testimonial" label="Testimonial" onClick={() => setIsMenuOpen(false)} />
              <NavItem href="#blog" label="Blog" onClick={() => setIsMenuOpen(false)} />
              <NavItem href="#contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

const NavItem = ({ href, label, onClick }) => (
  <li>
    <a
      href={href}
      className="text-black dark:text-white hover:text-main-color dark:hover:text-main-color transition duration-300"
      onClick={onClick}
    >
      {label}
    </a>
  </li>
)

export default Header