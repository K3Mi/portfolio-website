import React from 'react'

const ResumeItem = ({ title, organization, period, description }) => (
  <div className="mb-8 relative pl-8 border-l-2 border-main-color">
    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-main-color rounded-full"></div>
    <h4 className="text-2xl font-bold mb-1 text-white">{title}</h4>
    <p className="text-xl mb-2 text-gray-300">{organization} / <span className="text-main-color">{period}</span></p>
    <p className="text-gray-400">{description}</p>
  </div>
)

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-800 dark:bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white" data-title="RESUME">My Resume</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white">Education</h3>
            <ResumeItem
              title="Computer Science"
              organization="Cambridge University"
              period="2000 - 2005"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil voluptates consectetur accusantium! Et tempore consequatur at tenetur voluptatem eius!"
            />
            <ResumeItem
              title="Bachelor Degree"
              organization="University of Tokyo"
              period="2006 - 2009"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil voluptates consectetur accusantium! Et tempore consequatur at tenetur voluptatem eius!"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white">Experience</h3>
            <ResumeItem
              title="Web Designer"
              organization="Google"
              period="2014 - 2015"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil voluptates consectetur accusantium! Et tempore consequatur at tenetur voluptatem eius!"
            />
            <ResumeItem
              title="UI/UX Designer"
              organization="Facebook"
              period="2016 - 2017"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil voluptates consectetur accusantium! Et tempore consequatur at tenetur voluptatem eius!"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume