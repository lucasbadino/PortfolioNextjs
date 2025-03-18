import Image from "next/image"
import { MotionTransitions } from "./Transitions"

export const AvatarServices = () => {
    return (
        <MotionTransitions
            position="right"
            className="bottom-0 left-0 hidden md:inline-block md:absolute"
        >
            <Image src="/services.png" width={200} height={200} alt="Circle Image" />
        </MotionTransitions>
    )
}