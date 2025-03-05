"use client";

import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MotionTransitions } from "./Transitions";

export const Navbar = () => {

    const pathName = usePathname();
    return (
        <MotionTransitions
            className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
            position="right"
        >
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm">
                    {itemsNavbar.map((item) => {
                        return (
                            <div key={item.id}
                                className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-orange-500/50
                                ${pathName === item.link && "bg-orange-500/50"}`}
                            >
                                <Link href={item.link}>{item.icon}</Link>
                            </div>
                        );
                    })}
                </div>
            </nav>
        </MotionTransitions >
    );
};