'use client'

import { useEffect } from 'react';
import 'particles.js/particles';

const ParticlesBackground = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') { 
      import('particles.js/particles').then(() => { 
        window.particlesJS.load('particles-js', '/particles-config.json'); 
      }); 
    }
  }, []);

  return <div id="particles-js" className="absolute w-full h-full z-0 pointer-events-none"></div>;
};

export default ParticlesBackground;
