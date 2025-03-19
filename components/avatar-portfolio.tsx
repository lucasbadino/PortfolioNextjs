"use client";

import Image from "next/image";
import { MotionTransitions } from "./Transitions";

export const AvatarPortfolio = () => {
    return (
        <MotionTransitions position="bottom" className="bottom-0 left-0 hidden md:block md:absolute">
            <Image
                src="/avatar-works.png"
                width={200} height={200}
                className="w-full h-full" alt="Avatar Portfolio"
            />
        </MotionTransitions>
    );
};

