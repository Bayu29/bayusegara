import { useEffect, useState } from 'react';

export function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create a grid of dots
  const gridSpacing = 30; // Space between dots
  const dotSize = 1.5; // Base size of dots (reduced from 2)
  const influenceRadius = 120; // How far the cursor affects dots (reduced from 150)

  const dotsX = Math.ceil(window.innerWidth / gridSpacing) + 1;
  const dotsY = Math.ceil(window.innerHeight / gridSpacing) + 1;

  const dots = [];
  for (let y = 0; y < dotsY; y++) {
    for (let x = 0; x < dotsX; x++) {
      const dotX = x * gridSpacing;
      const dotY = y * gridSpacing;
      
      // Calculate distance from cursor
      const distance = Math.sqrt(
        Math.pow(dotX - mousePosition.x, 2) + Math.pow(dotY - mousePosition.y, 2)
      );
      
      // Calculate size based on distance (closer = bigger)
      const influence = Math.max(0, 1 - distance / influenceRadius);
      const size = dotSize + influence * 6; // Reduced max growth from 8 to 6
      const opacity = 0.1 + influence * 0.5; // Reduced opacity range
      
      dots.push(
        <div
          key={`${x}-${y}`}
          className="absolute rounded-full bg-primary transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: `${dotX}px`,
            top: `${dotY}px`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      );
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dots}
    </div>
  );
}