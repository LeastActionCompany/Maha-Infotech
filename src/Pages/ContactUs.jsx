import { Link } from 'react-router-dom'
import Contact from '../Components/Contact'
import { motion } from 'framer-motion'

const ContactUs = () => {
  return (
    <div className="pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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
        Contact Us
      </span>
    </li>
  </ol>
</nav>


        {/* Header Section */}
        {/* Contact Page Header */}
{/* Contact Page Header */}
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

  {/* Heading with shimmer gradient in royal blue tones */}
  <motion.h1
    className="relative text-4xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent 
               bg-gradient-to-r from-royal-blue-500 via-royal-blue-600 to-royal-blue-800 animate-text-shimmer"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.08 }}
  >
    {Array.from("Contact Us").map((letter, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h1>

  {/* Animated underline with royal blue gradient */}
  <motion.div
    className="w-24 h-1 bg-gradient-to-r from-royal-blue-500 to-royal-blue-700 mx-auto mb-8 rounded-full"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  />

  {/* Subtitle with royal blue text */}
  <motion.p
    className="text-lg md:text-xl text-royal-blue-700 max-w-2xl mx-auto leading-relaxed"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    Have a project in mind or need technical assistance? Get in touch with our team. We respond quickly and are happy to assist.
  </motion.p>
</motion.div>



        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-12">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
