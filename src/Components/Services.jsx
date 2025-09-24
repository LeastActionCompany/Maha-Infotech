import { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom"

const Services = () => {
  const [activeService, setActiveService] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const navigate = useNavigate()
  
  const services = [
    {
      title: "Website Design & Development",
      description: "Custom websites that reflect your brand and drive conversions with responsive design and optimal user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: ["Responsive Design", "SEO Optimization", "E-commerce Solutions", "CMS Integration"],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android devices.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: ["iOS & Android", "Cross-Platform", "API Integration", "App Store Deployment"],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "UI/UX Designing",
      description: "User-centered designs that enhance usability, engagement, and satisfaction through intuitive interfaces.",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      color: "from-pink-500 to-pink-700"
    },
    {
      title: "Custom Software Development",
      description: "Tailor-made software solutions designed to address your specific business needs and workflows.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: ["Custom Solutions", "Scalable Architecture", "Database Design", "Maintenance & Support"],
      color: "from-green-500 to-green-700"
    },
    {
      title: "IT Support & Maintenance",
      description: "Comprehensive IT services to keep your systems running smoothly and efficiently around the clock.",
      image: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: ["24/7 Support", "System Monitoring", "Security Updates", "Backup Solutions"],
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "AI & ML Solutions",
      description: "Intelligent systems powered by artificial intelligence and machine learning to automate processes and gain insights.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automation Systems"],
      color: "from-red-500 to-red-700"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-royal-blue-600">Services</span>
          </h2>
          <div className="w-20 h-1 bg-royal-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the modern landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 transform hover:-translate-y-2 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Image container with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center`}>
                  <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <button
                    onClick={() => navigate("/services")}className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium mt-2 hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-royal-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                {/* Features list that appears on hover */}
                <div className={`overflow-hidden transition-all duration-500 ${activeService === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 mr-2 text-royal-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-4 text-royal-blue-600 hover:text-royal-blue-800 font-medium flex items-center text-sm transition-colors duration-300">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className={`text-center mt-16 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-600 mb-6">Have a specific project in mind?</p>
          <button 
           onClick={() => navigate("/contact")}className="bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto">
            Discuss Your Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services