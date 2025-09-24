const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Company
          </h2>
          <div className="w-20 h-1 bg-royal-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate experts dedicated to delivering exceptional digital solutions that drive business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Driving Digital Transformation
            </h3>
            <p className="text-gray-600 mb-4">
              Founded with a vision to revolutionize the digital landscape, our company has been at the forefront of technological innovation for over a decade. We combine expertise with creativity to deliver solutions that matter.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of skilled professionals brings diverse experience from various industries, ensuring that we understand your unique challenges and deliver tailored solutions that exceed expectations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-gray-600">
                  To empower businesses with innovative technology solutions that drive growth and efficiency.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-gray-600">
                  To be the leading partner for digital transformation across industries.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-royal-blue-100 rounded-lg p-6 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-royal-blue-700 mb-4">10+</div>
              <div className="text-xl font-medium text-royal-blue-800">Years of Experience</div>
              <div className="text-gray-600 mt-2">Delivering excellence since 2013</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About