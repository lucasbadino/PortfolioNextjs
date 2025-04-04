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
            <div className="flex flex-col justify-center items-center h-full text-center">
                <h1 className="text-2xl leading-tight md:text-4xl md:mb-5">
                    Mis{" "}
                    <span className="font-bold bg-orange-500/50 text-transparent bg-clip-text">
                        Proyectos
                    </span>
                </h1>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default PortfilioPage;
