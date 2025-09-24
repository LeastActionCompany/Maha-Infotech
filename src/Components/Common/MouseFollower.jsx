import { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-24 h-24 rounded-full bg-royal-blue-300 opacity-20 pointer-events-none z-[9999]"
      style={{
        top: mousePos.y - 48,
        left: mousePos.x - 48,
        transition: 'top 0.05s, left 0.05s',
      }}
    ></div>
  );
};

export default MouseFollower;
