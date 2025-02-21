"use client"

import { useEffect, useState } from "react";

const logos = [
    "/logos/ChatGPT-Logo.png",
    "/logos/hubspot-1.svg",
    "/logos/Airtable-Emblem.png",
    "/logos/ClickUp-Logo.png",
    "/logos/slack.svg",
    "/logos/make-emblem.png",
];

export default function Carousel() {
    const [angle, setAngle] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => { // Marcar el componente como renderizado en el cliente 
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const interval = setInterval(() => {
                setAngle((prevAngle) => prevAngle + 1);
            }, 40); // Ajusta la velocidad del giro aquí 
            return () => clearInterval(interval);
        }
    }, [isClient]);

    if (!isClient) {
        return null; // No renderizar nada en el servidor
    }

    return (
        <div className="relative w-24 h-24 mx-auto pb-20 mb-8 items-center mt-10">
            {logos.map((logo, index) => {
                const logoAngle = (index / logos.length) * 360;
                const rotateAngle = (angle + logoAngle) % 360;
                const radian = (rotateAngle * Math.PI) / 180;
                const x = Math.cos(radian) * 90;
                const y = Math.sin(radian) * 90;
                return (
                    <img key={index} src={logo} className="absolute w-18 h-16" style={{ transform: `translate(${x}px, ${y}px)`, }} />
                );
            })}
        </div>
    );
}