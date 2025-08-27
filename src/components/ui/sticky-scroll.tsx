"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
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
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(cardLength - 1, Math.floor(latest * cardLength));
        setActiveCard(index);
    });

    return (
        <section ref={ref} className="relative w-full bg-gray-50 py-20">
            <div className="container mx-auto flex flex-col lg:flex-row gap-12">
                {/* Left content */}
                <div className="flex-1 space-y-24 px-4 lg:px-6">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="scroll-mt-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.4 }}
                                transition={{ duration: 0.4 }}
                                className="text-2xl lg:text-3xl font-bold text-black"
                            >
                                {item.title}
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.4 }}
                                transition={{ duration: 0.4 }}
                                className="mt-6"
                            >
                                <ul className="space-y-2 list-disc list-inside text-gray-700">
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
                </div>

                {/* Right sticky panel */}
                <div
                    className={cn(
                        "hidden lg:flex flex-1 sticky top-28 h-[500px] rounded-2xl shadow-lg overflow-hidden items-center justify-center bg-white",
                        contentClassName
                    )}
                >
                    {content[activeCard].content ? (
                        content[activeCard].content
                    ) : (
                        <motion.div
                            key={content[activeCard].imageSrc}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="w-full h-full flex items-center justify-center"
                        >
                            <Image
                                src={content[activeCard].imageSrc}
                                alt={content[activeCard].imageAlt}
                                width={500}
                                height={500}
                                className="object-cover w-full h-full"
                            />
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};
