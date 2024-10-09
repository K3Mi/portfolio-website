import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactInfo = ({ Icon, title, content }) => (
  <div className="flex items-center mb-6">
    <Icon className="text-main-color w-6 h-6 mr-4" />
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{content}</p>
    </div>
  </div>
)

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white" data-title="CONTACT">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            <ContactInfo Icon={Mail} title="Email" content="robert@example.com" />
            <ContactInfo Icon={Phone} title="Phone" content="+1 123-456-7890" />
            <ContactInfo Icon={MapPin} title="Address" content="123 Web Dev St, Toronto, Canada" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-700 text-white rounded" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-700 text-white rounded" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Your Message" rows={5} className="w-full p-3 bg-gray-700 text-white rounded"></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact