import React from 'react'

const SkillBar = ({ name, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-300">{name}</span>
      <span className="text-sm font-medium text-gray-300">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-main-color h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
)

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 99 },
    { name: 'CSS', percentage: 99 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 80 },
    { name: 'Python', percentage: 99 },
    { name: 'Java', percentage: 72 },
    { name: 'C++', percentage: 84 },
    { name: 'Rust', percentage: 60 },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900 dark:bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white" data-title="SKILLS">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills