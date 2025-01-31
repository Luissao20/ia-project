import anime from "animejs";
import { useEffect, useRef, useState } from "react";

const Workflow = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };

        // Verificar el tamaño de la pantalla en el montaje
        handleResize();

        window.addEventListener('resize', handleResize);

        const lineElement = svgRef.current?.querySelector(".line-animated") as SVGLineElement | null;

        const handleAnimation = () => {
            if (lineElement) {
                anime({
                    targets: lineElement,
                    strokeDasharray: ["10,10"],
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: "linear",
                    duration: 30000,
                    loop: true,
                });
            }
        };

        // Aplicamos la animación si el SVG es visible y la pantalla es grande
        if (isLargeScreen && lineElement) {
            handleAnimation();
        }

        // Usamos ResizeObserver para aplicar la animación cuando el tamaño de la ventana cambia
        const resizeObserver = new ResizeObserver(() => {
            if (isLargeScreen && lineElement) {
                handleAnimation();
            }
        });

        if (svgRef.current) {
            resizeObserver.observe(svgRef.current);
        }

        // Limpiar la observación y la animación en el desmontaje del componente
        return () => {
            window.removeEventListener('resize', handleResize);
            if (svgRef.current) {
                resizeObserver.unobserve(svgRef.current);
            }
            if (lineElement) {
                anime.remove(lineElement);
            }
        };
    }, [isLargeScreen]);

    return (
        <div className="p-8 flex justify-center items-center z-1 lg:pt-28 ml-20">
            <svg ref={svgRef} className={`${isLargeScreen ? 'block' : 'hidden'}`} width="1100" height="60">
                <line 
                  className="line-animated" 
                  x1="0" y1="50" 
                  x2="1000" y2="50" 
                  stroke="#4A5568" 
                  strokeWidth="3" 
                  strokeDasharray="8,5 8,5" 
                />
            </svg>
        </div>
    );
};

export default Workflow;