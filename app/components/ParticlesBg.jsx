"use client"

import { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => { 
    if (typeof window !== "undefined") { 
      import("particles.js/particles") 
      .then(() => { 
        window.particlesJS.load("particles-js", "/particles-config.json", 
          function() { 
            console.log("Particles.js config loaded"); 
          }); 
        }) 
        .catch((error) => { 
          console.error("Error loading particles.js:", error);
        }); 
      } 
    }, []);

  return <div id="particles-js" className="absolute w-full h-full z-0 pointer-events-none"></div>;
};

export default ParticlesBackground;
