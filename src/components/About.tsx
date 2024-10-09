import React, { useState } from 'react'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const SocialIcon = ({ href, Icon }) => (
  <a 
    href={href} 
    className="bg-main-color p-2 text-white hover:bg-opacity-80 transition duration-300 rounded-full"
  >
    <Icon size={20} />
  </a>
)

const InfoItem = ({ label, value }) => (
  <li className="flex">
    <span className="font-bold w-28 text-gray-300">{label}</span>
    <span className="text-gray-400">: {value}</span>
  </li>
)

const About = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="py-20 bg-gray-900 dark:bg-[#111111]">
      <div className="container mx-auto px-4 flex flex-wrap">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute left-0 top-0 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <SocialIcon href="#" Icon={Facebook} />
              <SocialIcon href="#" Icon={Instagram} />
              <SocialIcon href="#" Icon={Twitter} />
              <SocialIcon href="#" Icon={Linkedin} />
            </div>
            {imageError ? (
              <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg shadow-lg">
                <p className="text-gray-600">Image failed to load</p>
              </div>
            ) : (
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Robert Smith"
                onError={() => setImageError(true)}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-16 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-white">I'm Robert Smith</h2>
          <h3 className="text-2xl mb-6 text-gray-300">
            A Lead <span className="text-main-color">UX & UI</span> designer based in <span className="text-main-color">Canada</span>
          </h3>
          <p className="mb-8 text-gray-400">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through bold interface and meaningful interactions.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 mb-8">
            <InfoItem label="Name" value="Robert Smith" />
            <InfoItem label="Birthday" value="1st April 1990" />
            <InfoItem label="Age" value="32 Years" />
            <InfoItem label="Address" value="Toronto, Canada" />
            <InfoItem label="Phone" value="+1 123-456-7890" />
            <InfoItem label="Email" value="robert@example.com" />
            <InfoItem label="Skype" value="robert.smith" />
            <InfoItem label="Freelance" value="Available" />
          </ul>
          <button className="btn">
            Download CV
          </button>
        </div>
      </div>
    </section>
  )
}

export default About