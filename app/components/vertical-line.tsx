import anime from "animejs";
import { useEffect } from "react";

const VerticalLine = () => {
    useEffect(() => {
        anime({
            targets: ".line-animated2",
            strokeDasharray: ["75,75"],
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "linear",
            duration: 5000,
            loop: true,
        });
    }, []);

    return (
        <div className="flex justify-center items-center z-1 pt-10">
           <svg width="100" height="1100">
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
        </div>
    );

}; export default VerticalLine



