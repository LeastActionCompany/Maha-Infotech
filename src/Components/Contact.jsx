import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [popup, setPopup] = useState(false) // success popup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_qlvkxyc',    // Your EmailJS Service ID
        'template_etc1de2',   // Your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        'SFzimM_jmOsr9DpBZ'   // Your EmailJS Public Key
      )
      .then(
        () => {
          setPopup(true) // show success popup
          setFormData({ name: '', email: '', phone: '', message: '' })
          setTimeout(() => setPopup(false), 3000) // hide popup after 3 sec
        },
        (error) => {
          console.error('FAILED...', error)
          alert('Something went wrong. Please try again.')
        }
      )
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <p className="text-gray-600">
              We're here to answer any questions you may have about our services. Reach out and we'll respond quickly.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <FaPhone className="text-royal-blue-600 text-2xl mt-1 transform rotate-90" />
                <div>
                  <p className="text-lg font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 8637415761</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-royal-blue-600 text-2xl mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">mahalakshmi2077@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-royal-blue-600 text-2xl mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">
                    No 41, 4th cross street, Anbu nagar, Sathuvachari, Vellore 632009
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded overflow-hidden shadow-lg">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.276164271361!2d79.12919787394199!3d12.954172215262437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad475d78fdc85d%3A0xcb03ea7baa678605!2s41%2C%204th%20Cross%20St%2C%20Suthanthira%20Ponvizha%20Nagar%2C%20Kalinjur%2C%20Vellore%2C%20Tamil%20Nadu%20632006!5e0!3m2!1sen!2sin!4v1758628726255!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-500 transition"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-500 transition"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-500 transition"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue-500 transition"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-royal-blue-600 hover:bg-royal-blue-700 text-white py-3 rounded-md font-medium transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {/* Success Popup */}
{popup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full
                    transform transition-all duration-500 animate-popup">
      <h2 className="text-2xl font-bold text-green-600 mb-3">✅ Message Sent!</h2>
      <p className="text-gray-700 mb-4">Thank you for your message. We’ll get back to you soon.</p>
      <div className="w-16 h-1 mx-auto bg-green-600 rounded-full animate-pulse"></div>
    </div>
  </div>
)}

    </section>
  )
}

export default Contact
