import anime from "animejs";
import { useEffect, useRef, useState } from "react";

const VerticalLine = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
        };

        handleResize(); // Verificar el tamaño de la pantalla en el montaje

        window.addEventListener('resize', handleResize);

        const lineElement = svgRef.current?.querySelector(".line-animated2") as SVGLineElement | null;

        const handleAnimation = () => {
            if (lineElement) {
                anime({
                    targets: lineElement,
                    strokeDasharray: ["75,75"],
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: "linear",
                    duration: 5000,
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
        <div className="flex justify-center items-center z-1 lg:pl-20 lg:pt-20">
            {isLargeScreen && (
                <svg ref={svgRef} width="100" height="1100">
                    <line
                      className="line-animated2"
                      x1="54"
                      y1="0"
                      x2="54"
                      y2="1100"
                      stroke="#273950"
                      strokeWidth="2"
                      strokeDasharray="75 75"
                    />
                </svg>
            )}
        </div>
    );
};

export default VerticalLine;