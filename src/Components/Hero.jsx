import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  // Component mount animations
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      document.documentElement.style.setProperty('--scroll', scrollTop + 'px');
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Animated gradient background
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let animationFrameId;
      let time = 0;

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      const drawAnimatedGradient = () => {
        time += 0.005;
        const width = canvas.width;
        const height = canvas.height;

        // Create gradient
        const gradient = ctx.createRadialGradient(
          width * (0.5 + Math.sin(time) * 0.1),
          height * (0.3 + Math.cos(time * 0.7) * 0.1),
          0,
          width * 0.5,
          height * 0.5,
          Math.max(width, height) * 0.8
        );

        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
        gradient.addColorStop(0.3, 'rgba(37, 99, 235, 0.6)');
        gradient.addColorStop(0.6, 'rgba(29, 78, 216, 0.4)');
        gradient.addColorStop(1, 'rgba(30, 64, 175, 0.2)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Add subtle noise texture
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const noise = Math.random() * 10;
          data[i] = Math.min(255, data[i] + noise);
          data[i + 1] = Math.min(255, data[i + 1] + noise);
          data[i + 2] = Math.min(255, data[i + 2] + noise);
        }
        ctx.putImageData(imageData, 0, 0);

        animationFrameId = requestAnimationFrame(drawAnimatedGradient);
      };

      resizeCanvas();
      drawAnimatedGradient();
      window.addEventListener('resize', resizeCanvas);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', resizeCanvas);
      };
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  const phrases = ['Digital Innovation', 'AI Solutions', 'Custom Software'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [index, phrases.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 px-4 sm:px-6 lg:px-8">
  
  {/* Animated Canvas Background */}
  <canvas
    ref={canvasRef}
    className="absolute inset-0 w-full h-full"
    style={{ mixBlendMode: 'overlay' }}
  />

  {/* Enhanced Background with Multiple Layers */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        backgroundPosition: `calc(50% + ${mousePos.x * 0.01}px) calc(50% + ${mousePos.y * 0.01}px)`,
      }}
    ></div>
    {/* Floating Particles */}
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-5"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: Math.random() * 5 + 's',
            transform: `translate(${Math.sin(i) * 100}px, ${Math.cos(i) * 100}px)`,
          }}
        ></div>
      ))}
    </div>
  </div>

  {/* Content */}
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <h1
      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10 leading-tight sm:leading-snug md:leading-tight transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      Transforming Businesses Through{' '}
      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
        {phrases[index]}
      </span>
    </h1>

    <p
      className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white opacity-90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed transform transition-all duration-1000 delay-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      We deliver cutting-edge technology solutions that drive growth, efficiency, and competitive advantage for your business.
    </p>

    <div
      className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 transform transition-all duration-1000 delay-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-0'
      }`}
    >
      <Link
        to="/services"
        className="group relative bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-medium py-3 sm:py-4 px-6 sm:px-10 rounded-xl transition-all duration-300 text-base sm:text-lg shadow-2xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center overflow-hidden"
      >
        <span className="relative transition-all duration-300 group-hover:tracking-wide">
          Explore Our Services
        </span>
      </Link>

      <Link
        to="/contact"
        className="group relative border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-medium py-3 sm:py-4 px-6 sm:px-10 rounded-xl transition-all duration-300 text-base sm:text-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center overflow-hidden"
      >
        <span className="relative transition-all duration-300 group-hover:tracking-wide">
          Get In Touch
        </span>
      </Link>
    </div>
  </div>

  {/* Scroll indicator */}
  {/* <div
    className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
    onClick={scrollToNext}
    tabIndex={0}
    aria-label="Scroll to next section"
  >
    <div className="relative w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
      <div className="animate-bounce">
        <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      <p className="text-white text-xs sm:text-sm mt-1 sm:mt-2 opacity-70 text-center">Scroll to explore</p>
    </div> */}
  {/* </div> */}
</section>

  );
};

export default Hero;