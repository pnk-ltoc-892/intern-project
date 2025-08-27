"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        imageSrc: string;
        imageAlt: string;
        description: string[];
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    return (
        <motion.div
            className="bg-gray-50 h-[30rem] overflow-auto flex justify-center gap-2 relative lg:p-10"
            ref={ref}
        >
            {/* Left scrollable content */}
            <div className="relative flex items-start">
                <div className="w-full px-4 lg:px-6 ">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-12">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-2xl lg:text-3xl font-bold text-black"
                            >
                                {item.title}
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="mt-6"
                            >
                                <ul className="space-y-2 list-disc list-inside text-bgray-800">
                                    {item.description.map((point, i) => (
                                        <li
                                            key={i}
                                            className="text-base sm:text-lg leading-relaxed"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>

            {/* Right sticky panel */}
            <div
                className={cn(
                    "hidden lg:flex w-[50%] rounded-md sticky top-0 items-center justify-center overflow-hidden",
                    contentClassName
                )}
            >
                {content[activeCard].content ? (
                    content[activeCard].content
                ) : (
                    <motion.div
                        key={content[activeCard].imageSrc} // force re-render animation on change
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <Image
                            src={content[activeCard].imageSrc}
                            alt={content[activeCard].imageAlt}
                            width={400}
                            height={400}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};
