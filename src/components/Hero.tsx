import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['a Web Developer', 'a Graphic Designer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen bg-white dark:bg-[#111111] pt-20 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center justify-between relative z-10 h-screen">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h6 className="text-2xl font-light">Hello, I'm</h6>
          <h2 className="text-5xl md:text-7xl font-bold">Robert Smith</h2>
          <h3 className="text-2xl md:text-3xl text-main-color">I'm <span ref={el}></span></h3>
          <p className="mt-4 mb-8 text-gray-600 dark:text-gray-400 max-w-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat ducimus ad,
            molestias alias aliquam doloribus corporis aperiam nesciunt sint quos iste veniam ab
            illo possimus autem unde voluptatibus. Cumque?
          </p>
          <button className="btn w-fit">
            Contact Me
          </button>
        </div>
        <div className="hidden md:block w-1/2 relative">
          <div className="absolute inset-0 bg-cover bg-center rounded-full border-4 border-main-color"
               style={{backgroundImage: "url('/src/assets/images/hero-image.jpg')"}}></div>
        </div>
      </div>
      <div id="scroll-mouse" className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20 cursor-pointer">
        <div className="w-8 h-12 border-2 border-main-color rounded-full flex items-start justify-center">
          <div className="w-1 h-3 bg-main-color rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero