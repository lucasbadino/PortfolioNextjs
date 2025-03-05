import { socialNetworks } from "@/data"
import { MotionTransitions } from "./Transitions"
import Link from "next/link"
export const Header = () => {
    return (
        <MotionTransitions position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href="/">
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            Lucas
                            <span className="text-orange-500/50">Dev</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => {
                            return (
                                <Link 
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:bg-orange-500/50 p-2 rounded-full"
                                >
                                    {logo}
                                </Link>
                            )
                         })}

                    </div>
                </div>
            </header>
        </MotionTransitions>
    )
}