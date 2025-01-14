import anime from "animejs";
import { useEffect } from "react";

const Workflow = () => {
    useEffect(() => {
        anime({
            targets: ".line",
            strokeDasharray: ["10,10"],
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "linear",
            duration: 30000,
            loop: true,
        });
    }, []);

    return (
        <div className="p-8 flex justify-center items-center z-1 pt-16">
            <svg width="1400" height="60">
                <line className="line" x1="0" y1="50" x2="1400" y2="50" stroke="#4A5568" strokeWidth="3" strokeDasharray="8,5 8,5" />
            </svg>
        </div>
    );

}; export default Workflow