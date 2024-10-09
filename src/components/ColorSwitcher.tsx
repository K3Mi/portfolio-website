import React, { useState } from 'react'
import { Settings } from 'lucide-react'

const colors = [
  '#e39300',
  '#fa6b0f',
  '#ff4757',
  '#6d28d9',
  '#2ed573',
  '#209f2e',
  '#1e90ff',
  '#2458f3'
]

const ColorSwitcher = ({ setMainColor }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleColorChange = (color) => {
    setMainColor(color)
    document.documentElement.style.setProperty('--main-color', color)
    setIsOpen(false) // Close the color switcher after selection
  }

  return (
    <div className={`fixed top-1/3 right-0 bg-white p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <button
        className="absolute left-0 top-0 -translate-x-full bg-[var(--main-color)] p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Settings size={24} />
      </button>
      <h3 className="text-black font-semibold mb-2">Select Color</h3>
      <div className="grid grid-cols-4 gap-2">
        {colors.map((color) => (
          <button
            key={color}
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
    </div>
  )
}

export default ColorSwitcher