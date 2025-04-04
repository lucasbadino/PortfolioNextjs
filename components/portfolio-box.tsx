"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        urlDemo: string;
        technologies: string[];
    };
}

export const PortfolioBox = ({ data }: PortfolioBoxProps) => {
    const { id, title, image, urlGithub, urlDemo, technologies } = data;

    return (
        <div
            key={id}
            className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-lg 
            hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center gap-4 max-w-sm"
        >
            <Image
                src={image}
                alt={`${title} project`}
                width={400}
                height={250}
                className="rounded-xl object-cover w-full h-[200px]"
            />

            <h3 className="text-2xl font-semibold text-white text-center">{title}</h3>

            {/* Technologies section */}
            <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="p-1 bg-white rounded-full flex items-center justify-center shadow-md"
                    >
                        <Image
                            src={tech}
                            alt="Tech logo"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white"
                >
                    <FaGithub /> GitHub
                </Link>
                <Link
                    href={urlDemo}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-white"
                >
                    <FaExternalLinkAlt /> Demo
                </Link>
            </div>
        </div>
    );
};
