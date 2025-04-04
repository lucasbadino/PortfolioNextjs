"use client";

import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation'

export const Introduction = () => {
    return (
        <div className='z-20 w-full bg-[#131424]/60'>
            <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 md:gap-10 md:p-20'>
                <Image src="/avatar.png" priority width="400" height="400" alt="Profile Image" />

                <div className='flex flex-col justify-center max-w-md md:max-w-lg'>
                    <h1 className='select-none mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>
                        Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                "puedes programarlo",
                                1000,
                                "puedes optimizalo",
                                1000,
                                "puedes implementarlo",
                                1000,
                                "puedes desarrollarlo",
                                1000,
                            ]}
                            wrapper='span'
                            cursor={false}
                            repeat={Infinity}
                            speed={50}
                            className='select-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] to-[#7928ca]'

                        />
                    </h1>

                    <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>
                        Soy un desarrollador web full-stack con experiencia en el desarrollo 
                        de aplicaciones web y móviles.
                    </p>
                    <div className='flex justify-center items-center gap-5 md:justify-start md:gap-10'>
                        <Link
                            href='/portfolio'
                            className='px-3 py-2 transition-all border-2 cursor-pointer 
                            text-md w-fit rounded-xl hover:shadow-xl 
                            hover:shadow-white/50'>
                            Ver proyectos
                        </Link>
                        <Link
                            href='/contact'
                            className='px-3 py-2 transition-all border-2 cursor-pointer text-orange-500/50 border-orange-500
                            text-md w-fit rounded-xl hover:shadow-xl 
                            hover:shadow-orange-500'>
                            Contactame
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    )
}