import Image from "next/image";
import { MotionTransitions } from "./Transitions";
export const Avatar = () => {
    return (
        <MotionTransitions position="bottom" className="
        bottom-0 right-0 hidden md:inline-block md:absolute md:bottom-10 md:right-10 md:fixed
        ">
            <Image
                src="/avatar-2.png"
                width={250}
                height={250}
                alt="Avatar Image"
                className="w-full h-full object-cover  "
            />
        </MotionTransitions>
    );
};