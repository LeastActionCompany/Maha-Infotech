import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
  <ol className="flex items-center text-lg font-semibold">
    <li>
      <Link
        to="/"
        className="text-royal-blue-600 hover:text-royal-blue-800 transition-colors duration-300"
      >
        Home
      </Link>
    </li>
    <li className="flex items-center">
      <span className="mx-2 text-gray-400 text-xl">›</span> {/* modern separator */}
      <span className="text-gray-600 hover:text-royal-blue-600 transition-colors duration-300 cursor-default">
        Services
      </span>
    </li>
  </ol>
</nav>


        {/* Header Section */}
        {/* About Page Header */}
<motion.div
  className="text-center mb-20 relative overflow-hidden"
  initial={{ opacity: 0, y: -50, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Floating decorative glow */}
  <motion.div
    className="absolute inset-0 -z-10 flex justify-center"
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="w-80 h-80 bg-royal-blue-300 blur-3xl opacity-25 rounded-full"></div>
  </motion.div>

  {/* Accent blurred orb */}
  <motion.div
    className="absolute top-12 left-20 w-40 h-40 bg-royal-blue-400 blur-2xl opacity-20 rounded-full -z-10"
    animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Heading with royal blue gradient */}
  <motion.h1
    className="relative text-4xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent 
               bg-gradient-to-r from-royal-blue-500 via-royal-blue-600 to-royal-blue-800 animate-text-shimmer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    About Our Company
  </motion.h1>

  {/* Animated underline */}
  <motion.div
    className="w-24 h-1 bg-gradient-to-r from-royal-blue-500 to-royal-blue-700 mx-auto mb-8 rounded-full"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  />

  {/* Subtitle */}
  <motion.p
    className="text-lg md:text-xl text-royal-blue-700 max-w-2xl mx-auto leading-relaxed"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    We are a team of passionate experts dedicated to delivering exceptional digital solutions that drive business success.
  </motion.p>
</motion.div>


        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2025, our company began with a simple vision: to help businesses harness the power of technology to achieve their goals. What started as a small team of developers has grown into a full-service digital agency with clients across various industries.
            </p>
            <p className="text-gray-600 mb-6">
               We've stayed true to our core values of innovation, quality, and customer satisfaction. We've adapted to the rapidly changing technological landscape while maintaining our commitment to delivering solutions that make a real difference to our clients' businesses.
            </p>
            <div className="bg-royal-blue-100 rounded-lg p-6">
              <p className="text-royal-blue-800 font-medium italic">
                "Our mission is to empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world."
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // free illustration
      alt="Company Illustration"
      className="object-contain h-full w-full"
    />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-royal-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-royal-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the initial consultation to the final delivery of our solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-royal-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-royal-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and innovative approaches to solve complex business challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-royal-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-royal-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working closely with our clients to understand their needs and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
       <div className="mb-20 mt-20">
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Founder</h2>
  
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-4xl mx-auto">
    
    {/* Founder Image */}
    <div className="flex-shrink-0">
      <div className="bg-gray-200 rounded-full w-40 h-40 flex items-center justify-center mx-auto md:mx-0">
        <svg
          className="w-24 h-24 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>

    {/* Founder Info */}
    <div className="text-center md:text-left">
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Mahalakshmi</h3>
      <p className="text-royal-blue-600 mb-3">CEO & Founder</p>
      <p className="text-gray-600 leading-relaxed">
        Mahalakshmi is the driving force behind our vision, bringing passion and dedication 
        to lead the company toward innovation and growth.
      </p>
    </div>

  </div>
</div>


        {/* CTA Section */}
        <div className="bg-royal-blue-700 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve its goals with our technology solutions.
          </p>
          <Link
            to="/contact"
            className="bg-white text-royal-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-300 text-lg inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUs