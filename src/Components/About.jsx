import { CheckCircle, Users, Target, Globe, Award, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Company
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate experts dedicated to delivering exceptional digital solutions that drive business success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Driving Digital Innovation Forward
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded with a vision to revolutionize the digital landscape, our company is committed to pushing the boundaries of technological innovation. We combine fresh perspectives with creative thinking to deliver solutions that make a real impact.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our dynamic team brings together diverse talents and skills, ensuring we approach every challenge with innovative thinking and deliver solutions tailored to your unique needs.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600">Skilled professionals passionate about technology and innovation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Focus</h4>
                  <p className="text-gray-600">Committed to delivering exceptional results on every project</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Dedicated Support</h4>
                  <p className="text-gray-600">Comprehensive customer support throughout your journey</p>
                </div>
              </div>
            </div>

            {/* Stats - Focus on qualities rather than numbers */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900">Innovation</div>
                <div className="text-xs text-gray-600">Forward Thinking</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900">Collaboration</div>
                <div className="text-xs text-gray-600">Team Approach</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900">Excellence</div>
                <div className="text-xs text-gray-600">Quality Driven</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Cards */}
          <div className="space-y-6">
            {/* Mission Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600">
                    To empower businesses with innovative technology solutions that drive growth and efficiency through cutting-edge digital transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600">
                    To become the preferred partner for digital innovation, helping businesses thrive in an ever-evolving technological landscape.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Card */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Values</h4>
                  <p className="text-gray-600">
                    Innovation, integrity, and excellence drive everything we do. We believe in building lasting partnerships based on trust and results.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Collaboration */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Our Team</h4>
                  <p className="text-blue-100 text-sm">Passionate professionals working together</p>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white/30"></div>
                  <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white/30"></div>
                  <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <span className="text-sm font-semibold">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life with innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Get Started Today
              </button>
              <button 
                onClick={handleLearnMore}
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;