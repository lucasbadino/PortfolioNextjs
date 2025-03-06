"use client";

import CountUp from "react-countup";

import { dataCounter } from "@/data";
const CounterServices = () => {
    return (
        <div className="grid justify-between grid-cols-2 gap-3
        max-w-3xl mx-auto my-8 md:grid-cols-4 gap-6
        ">
            {dataCounter.map((item) => {
                return (
                    <div
                        key={item.id}
                        className={`${item.lineRight && "ltr"}`}
                    >
                        <div className={`${item.lineRight &&
                            "px-4 border-2 border-transparent md:border-e-gray-100"}
                            ${item.lineRightMobile && "border-e-gray-100"}
                            `}>
                            <p className="flex mb-2 text-2xl font-extrabold md:text-orange-500">+ <CountUp end={item.endCounter} start={0} duration={4} /></p>
                            <p className="text-xs uppercase max-w-[100px]">{item.text}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CounterServices