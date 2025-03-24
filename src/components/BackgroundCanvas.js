import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Setează dimensiunile canvas-ului la dimensiunile ferestrei
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawDotGrid(); // Redesenează grila când dimensiunea se schimbă
    };

    // Desenează grila de puncte
    const drawDotGrid = () => {
      // Curăță canvas-ul și setează fundalul negru
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Distanța între puncte - redusă pentru o densitate mai mare
      const spacing = 16; // Redus de la 24 la 16 pentru densitate mai mare
      const dotSize = 1.2; // Puțin mai mic pentru a nu fi prea aglomerat
      
      // Desenează punctele albe
      ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
      
      // Calculează offset pentru a centra grila
      const offsetX = (canvas.width % spacing) / 2;
      const offsetY = (canvas.height % spacing) / 2;
      
      for (let x = offsetX; x < canvas.width; x += spacing) {
        for (let y = offsetY; y < canvas.height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    
    // Inițializează canvas-ul
    resizeCanvas();
    
    // Event listener pentru redimensionarea ferestrei
    window.addEventListener('resize', resizeCanvas);
    
    // Curățăm event listener-ul la demontarea componentei
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="background-canvas"
    />
  );
};

export default BackgroundCanvas; 