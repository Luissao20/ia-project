"use client"

import { useEffect, useState } from "react";

const logos = [
    "/logos/ChatGPT-Logo.png",
    "/logos/ClickUp-Logo.png",
    "/logos/Notion-Logo.png",
    "/logos/POE-Logo.png",
    "/logos/ChatSonic-Logo.png",
    "/logos/Airtable-Logo.png",
    "/logos/Asana-Logo.png",
    "/logos/discord.svg",
    "/logos/drive.svg",
    "/logos/Dynamics-Logo.png",
    "/logos/Gmail-logo.png",
    "/logos/google-meet.svg",
    "/logos/HubSpot-Logo.png",
    "/logos/Jira-logo.png",
    "/logos/linkedin.svg",
    "/logos/Mailchimp-logo.png",
    "/logos/make-logo.svg",
    "/logos/NetSuite-Logo.png",
    "/logos/outlook-.svg",
    "/logos/salesforce.svg",
    "/logos/shopify.svg",
    "/logos/slack.svg",
    "/logos/Trello-Logo-.png",
    "/logos/zoom-app.svg"
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
        <div className="grid grid-cols-6 gap-6">
            {logos.map((logo, index) => (
                <img
                    key={index}
                    src={logo}
                    className={`w-32 h-16 transition-transform duration-500 ease-in-out ${activeIndex === index ? 'translate-y-[-20px]' : ''}`}
                />
            ))}
        </div>
    );
}