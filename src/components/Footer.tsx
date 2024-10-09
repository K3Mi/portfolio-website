import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#111111] py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} <a href="https://www.templatemonster.com/authors/webfolio/" className="text-[var(--main-color)] hover:underline">WebFolio</a> - All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer