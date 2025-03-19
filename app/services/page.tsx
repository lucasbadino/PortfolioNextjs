import { AvatarServices } from "@/components/avatar-services";
import { CircleImage } from "@/components/circle-image";
import { SliderServices } from "@/components/slider-services";
import { TransitionPage } from "@/components/TransitionPage";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl 
            gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis {" "}
                        <span className="font-bold bg-orange-500/50  text-transparent bg-clip-text">
                            Servicios
                        </span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas necessitatibus,
                        dolore voluptatem iste incidunt quo sapiente neque fuga voluptatum aspernatur voluptates
                        obcaecati ea sequi nemo eligendi ullam voluptate consectetur possimus sunt molestiae odio
                        dolores in. Nesciunt, porro. Veniam eveniet assumenda quidem adipisci.
                        Inventore nihil ratione facilis cumque. Ipsum, deleniti.
                    </p>
                    <button className="px-3 py-2 bg-orange-500 hover:bg-orange-600/50 cursor-pointer rounded-lg">
                        Contacta conmigo
                    </button>
                </div>
                <div className="">
                    <SliderServices />
                </div>
            </div>
        </>
    )
};
export default ServicesPage;