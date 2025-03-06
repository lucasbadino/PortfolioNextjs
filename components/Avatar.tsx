import Image from "next/image";
import { MotionTransitions } from "./Transitions";
export const Avatar = () => {
    return (
        <MotionTransitions position="bottom" className="
        bottom-0 right-0 hidden md:inline-block md:absolute
        ">
            <Image
                src="/avatar-1.png"
                width={300}
                height={300}
                alt="Avatar Image"
                className="w-full h-full"
            />
        </MotionTransitions>
    );
};