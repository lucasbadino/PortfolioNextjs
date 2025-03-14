"use client";
import { transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
export const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#2e2257]"
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
                >

                </motion.div>
            </div>
        </AnimatePresence>
    );
};