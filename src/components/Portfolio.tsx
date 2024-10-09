import React, { useState } from 'react'

const projects = [
  { id: 1, category: 'web', image: 'https://via.placeholder.com/400x300', title: 'Web Project 1' },
  { id: 2, category: 'app', image: 'https://via.placeholder.com/400x300', title: 'App Project 1' },
  { id: 3, category: 'design', image: 'https://via.placeholder.com/400x300', title: 'Design Project 1' },
  { id: 4, category: 'web', image: 'https://via.placeholder.com/400x300', title: 'Web Project 2' },
  { id: 5, category: 'app', image: 'https://via.placeholder.com/400x300', title: 'App Project 2' },
  { id: 6, category: 'design', image: 'https://via.placeholder.com/400x300', title: 'Design Project 2' },
]

const Portfolio = () => {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white" data-title="PORTFOLIO">My Portfolio</h2>
        
        <div className="flex justify-center mb-8">
          <button onClick={() => setFilter('all')} className={`mx-2 px-4 py-2 rounded ${filter === 'all' ? 'bg-main-color text-white' : 'bg-gray-700 text-gray-300'}`}>All</button>
          <button onClick={() => setFilter('web')} className={`mx-2 px-4 py-2 rounded ${filter === 'web' ? 'bg-main-color text-white' : 'bg-gray-700 text-gray-300'}`}>Web</button>
          <button onClick={() => setFilter('app')} className={`mx-2 px-4 py-2 rounded ${filter === 'app' ? 'bg-main-color text-white' : 'bg-gray-700 text-gray-300'}`}>App</button>
          <button onClick={() => setFilter('design')} className={`mx-2 px-4 py-2 rounded ${filter === 'design' ? 'bg-main-color text-white' : 'bg-gray-700 text-gray-300'}`}>Design</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="relative group overflow-hidden rounded-lg">
              <img src={project.image} alt={project.title} className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio