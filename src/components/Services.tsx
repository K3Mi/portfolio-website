import React from 'react'
import { Code, Palette, Globe, Smartphone } from 'lucide-react'

const ServiceCard = ({ Icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
    <Icon className="text-main-color w-12 h-12 mb-4" />
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
)

const Services = () => {
  const services = [
    {
      Icon: Code,
      title: "Web Development",
      description: "Create robust and scalable web applications using modern technologies and best practices."
    },
    {
      Icon: Palette,
      title: "UI/UX Design",
      description: "Design intuitive and visually appealing user interfaces that enhance user experience."
    },
    {
      Icon: Globe,
      title: "SEO Optimization",
      description: "Improve your website's visibility and ranking on search engines to attract more traffic."
    },
    {
      Icon: Smartphone,
      title: "Mobile App Development",
      description: "Develop cross-platform mobile applications that work seamlessly on iOS and Android devices."
    }
  ]

  return (
    <section id="services" className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white" data-title="SERVICES">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services