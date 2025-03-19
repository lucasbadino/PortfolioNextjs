import { AvatarPortfolio } from "@/components/avatar-portfolio";
import { CircleImage } from "@/components/circle-image";
import { Container } from "@/components/Container";
import { PortfolioBox } from "@/components/portfolio-box";
import { TransitionPage } from "@/components/TransitionPage";
import { dataPortfolio } from "@/data";

const PortfilioPage = () => {
    return (
        <Container>
            <TransitionPage />
            <AvatarPortfolio />
            <CircleImage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Mis {" "}
                    <span className="font-bold bg-orange-500/50  text-transparent bg-clip-text">
                        Proyectos
                    </span>
                </h1>
                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                {dataPortfolio.map((data) => {
                    return <PortfolioBox key={data.id} data={data}/>;
                })}
                
                </div>
            </div>
        </Container>
    );
};
export default PortfilioPage;