"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: any;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",
                // hovered !== null && hovered !== index && "scale-[0.98]"
            )}
        >
            <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover absolute inset-0"
            />
            <div
                className={cn(
                    "absolute inset-0 bg-black/60 flex items-end transition-opacity duration-300",
                    hovered === index ? "opacity-100" : "opacity-0"
                )}
            >
                <div className="w-full px-4 md:px-6 py-6 md:py-8">
                    <div className="flex flex-col space-y-2">
                        {/* Title */}
                        <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-snug">
                            {card.title}
                        </div>

                        {/* Description */}
                        <div className="text-sm sm:text-base md:text-lg font-normal text-gray-200 leading-relaxed">
                            {card.description}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={cn(
                    "absolute inset-0 flex items-end transition-opacity duration-300",
                    hovered === index ? "opacity-0" : "opacity-100"
                )}
            >
                <div className="w-full px-4 md:px-6 py-6 md:py-8">
                    <div className="flex flex-col space-y-2">
                        {/* Title */}
                        <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-snug">
                            {card.title}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
);

Card.displayName = "Card";

type Card = {
    title: string;
    description: string;
    src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto md:px-8 w-full">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}
