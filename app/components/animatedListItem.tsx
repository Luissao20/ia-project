"use client"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedListItemProps {
    item: string;
    index: number;
}

const AnimatedListItem: React.FC<AnimatedListItemProps> = ({ item, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <motion.li ref={ref} className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} >
            <motion.div className="w-6 h-6 mr-4 bg-[#5ca9b1] rounded-full flex items-center justify-center text-white flex-shrink-0"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3 }} >
                ✓
            </motion.div>
            <div className="max-w-2xl text-white text-lg text-justify">
                {item}
            </div>
        </motion.li>
    );
}; export default AnimatedListItem;