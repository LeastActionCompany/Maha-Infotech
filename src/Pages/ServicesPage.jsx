import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

// Variants for animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
}

const ServicesPage = () => {
  const services = [
    {
      title: "Website Design & Development",
      description: "We create responsive, user-friendly websites that represent your brand effectively and drive conversions.",
      features: ["Responsive Design", "SEO Optimization", "E-commerce Solutions", "Content Management Systems"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Mobile App Development",
      description: "We build native and cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android.",
      features: ["iOS & Android Development", "Cross-Platform Solutions", "UI/UX Design", "App Store Deployment"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "UI/UX Designing",
      description: "Our design team creates intuitive, visually appealing interfaces that enhance user engagement and satisfaction.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Custom Software Development",
      description: "We develop tailored software solutions that address your specific business needs and workflows.",
      features: ["Requirement Analysis", "Custom Development", "Quality Assurance", "Maintenance & Support"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "IT Support & Maintenance",
      description: "We provide comprehensive IT services to keep your systems running smoothly and efficiently.",
      features: ["24/7 Technical Support", "System Maintenance", "Network Security", "Data Backup & Recovery"],
      image: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "AI & ML Solutions",
      description: "We develop intelligent systems powered by artificial intelligence and machine learning to automate processes and gain valuable insights.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Intelligent Automation"],
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=500&q=80"
    }
  ]

  const processSteps = [
    { step: 1, title: "Discovery", description: "We begin by understanding your business goals, target audience, and requirements.", icon: "🔍" },
    { step: 2, title: "Planning", description: "We create a detailed project plan with timelines, milestones, and deliverables.", icon: "📝" },
    { step: 3, title: "Design & Prototyping", description: "Our design team creates wireframes, mockups, and interactive prototypes.", icon: "🎨" },
    { step: 4, title: "Development", description: "We build your solution using modern technologies and best practices.", icon: "💻" },
    { step: 5, title: "Delivery & Support", description: "We deploy your solution and provide ongoing maintenance and support.", icon: "🚀" }
  ]

  return (
    <motion.div
      className="pt-24 pb-16"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <motion.nav
          className="mb-4"
          aria-label="Breadcrumb"
          variants={fadeInUp}
        >
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
              <span className="mx-2 text-gray-400 text-xl">›</span>
              <span className="text-gray-600 hover:text-royal-blue-600 transition-colors duration-300 cursor-default">
                Services
              </span>
            </li>
          </ol>
        </motion.nav>

        {/* Header */}
        

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
    {Array.from("Our Services").map((letter, index) => (
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
    We offer a comprehensive range of digital services to help your business
    thrive in the modern landscape.
  </motion.p>
</motion.div>



        {/* Services List */}
        <motion.div
          className="space-y-24 mb-16"
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="md:w-1/3 flex justify-center">
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  className="bg-royal-blue-100 rounded-full w-48 h-48 flex items-center justify-center overflow-hidden"
                >
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </Tilt>
              </div>
              <div className="md:w-2/3 ">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start"
                      variants={fadeInUp}
                    >
                      <svg className="w-5 h-5 text-royal-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Tilt
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  className="bg-royal-blue-100 rounded-xl p-6 flex flex-col items-center text-center cursor-pointer"
                >
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-royal-blue-700 rounded-lg p-8 text-center text-white"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help your business grow.
          </p>
          <Link
            to="/contact"
            className="bg-white text-royal-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-300 text-lg inline-block"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ServicesPage
