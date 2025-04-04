import { AvatarServices } from "@/components/avatar-services";
import { CircleImage } from "@/components/circle-image";
import { SliderServices } from "@/components/slider-services";
import { TransitionPage } from "@/components/TransitionPage";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl 
            gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0">
                    <h1 className="text-2xl pt-10 leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis{" "}
                        <span className="font-bold bg-orange-500/50 text-transparent bg-clip-text">
                            Servicios
                        </span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Ofrezco soluciones digitales a medida, desde el desarrollo de aplicaciones web completas con tecnologías modernas como React, Next.js, NestJS y PostgreSQL, hasta la optimización de interfaces para una experiencia de usuario fluida.
                        También brindo asesoramiento técnico y comercial, combinando mi formación en desarrollo Full Stack con más de 6 años de experiencia en atención al cliente y ventas.
                        Me enfoco en entender las necesidades del negocio para entregar productos escalables, funcionales y atractivos.
                    </p>

                    <Link href="/contact">
                        <button
                            className="px-3 py-2 bg-orange-500 hover:bg-orange-600/50 cursor-pointer rounded-lg"
                        >

                            Contacta conmigo
                        </button>
                    </Link>
                </div>
                <div className="">
                    <SliderServices />
                </div>
            </div>
        </>
    )
};
export default ServicesPage;