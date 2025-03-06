import { Avatar } from "@/components/Avatar";
import { Container } from "@/components/Container";
import CounterServices from "@/components/counterServices";
import { TimeLine } from "@/components/TimeLine";

import { TransitionPage } from "@/components/TransitionPage";

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <Container>
                <Avatar />
                <h1
                    className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10"
                >
                    Toda mi {" "}
                    <span className="font-bold text-orange-500 select-none">trayectoria profecional</span>
                </h1>
                <CounterServices />
                <TimeLine />
            </Container>
        </>
    )
};

export default PageAboutMe;