import { MotionTransitions } from "./Transitions"
import Link from "next/link"
export const Header = () => {
    return (
        <MotionTransitions position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href="/">
                    LucasDev
                    </Link>
                </div>
            </header>
        </MotionTransitions>
    )
}