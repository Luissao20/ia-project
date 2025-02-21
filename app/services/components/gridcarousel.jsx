"use client"

import { useEffect, useState } from "react";

const logos = [
    "/logos/ChatGPT-Logo.png",
    "/logos/ClickUp-Logo.png",
    "/logos/Airtable-Logo.png",
    "/logos/drive.svg",
    "/logos/Gmail-logo.png",
    "/logos/google-meet.svg",
    "/logos/HubSpot-Logo.png",
    "/logos/linkedin.svg",
    "/logos/make-logo.svg",
    "/logos/NetSuite-Logo.png",
    "/logos/slack.svg",
    "/logos/zoom-app.svg",
    "/logos/Calendly.png",
    "/logos/Zapier-Logo.png",
    "/logos/facebook.svg",
    "/logos/messenger.svg",
    "/logos/Instagram-Logo.png",
    "/logos/TikTok_Logo.png",
    "/logos/google-calendar.svg",
];

export default function SequentialCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 1000); // Ajusta la velocidad del salto aquí
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-5 gap-5">
            {logos.map((logo, index) => (
                <img
                    key={index}
                    src={logo}
                    className={`lg:w-20 w-8 h-6 lg:h-12 transition-transform duration-500 ease-in-out ${activeIndex === index ? 'translate-y-[-20px]' : ''}`}
                />
            ))}
        </div>
    );
}