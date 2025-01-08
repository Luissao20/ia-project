'use client'

import { useEffect, useState } from 'react';

const logos = [
    '/ChatGPT-Logo.png',
    '/ClickUp-Logo.png',
    '/Notion-Logo.png',
    '/POE-Logo.png',
    '/ChatSonic-Logo.png',
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
            }, 100); // Ajusta la velocidad del giro aquí 
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
                const x = Math.cos(radian) * 80;
                const y = Math.sin(radian) * 80;
                return (
                    <img key={index} src={logo} className="absolute w-16 h-16" style={{ transform: `translate(${x}px, ${y}px)`, }} />
                );
            })}
        </div>
    );
}