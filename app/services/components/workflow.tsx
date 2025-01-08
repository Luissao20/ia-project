import anime from "animejs";
import { useEffect, useRef } from "react";

const Workflow = () => {
    useEffect(() => {
        anime({
            targets: '.line',
            strokeDasharray: ['10,10'],
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
    }, []);

    return (
        <div className="p-8 flex flex-col items-center pt-20 z-1">
            <h1 className="text-2xl font-bold mb-4 p-10">Automation steps</h1>
            <svg width="1000" height="60">
                <line className="line" x1="0" y1="50" x2="1000" y2="50" stroke="#4A5568" strokeWidth="3" strokeDasharray="8,5 8,5" />
            </svg>
        </div>
    );

}; export default Workflow