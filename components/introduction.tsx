import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

export const Introduction = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center text-white">
                Welcome to my portfolio
            </h1>
            <p className="mt-5 text-lg text-center text-white">
                I'm Badino Lucas, a Frontend Developer
            </p>
        </div>
    )
}