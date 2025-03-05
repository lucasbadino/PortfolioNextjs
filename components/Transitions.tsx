"use client"
import { fadeIn } from "@/utils/motion-transitions";
import { motion } from "framer-motion";
interface MotionTransitionsProps {
    children: React.ReactNode
    position: "right" | "bottom"
    className?: string
}


export const MotionTransitions = (props: MotionTransitionsProps) => {

    const { children, position, className } = props;
    return (
        <motion.div
            variants={fadeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    );
}