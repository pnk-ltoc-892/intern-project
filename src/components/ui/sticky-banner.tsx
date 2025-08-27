"use client";
import React, { SVGProps, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyBanner = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    const [open, setOpen] = useState(true);

    return (
        <motion.div
            className={cn(
                "sticky inset-x-0 top-0 z-40 bg-transparent overflow-hidden",
                className,
            )}
            initial={{
                position: "hidden"
            }}
            animate={{
                position: open ? "block" : "hidden",
                height: open ? "auto" : 0,
            }}
            transition={{
                duration: 0.25,
                ease: "easeInOut",
            }}
        >
            
            <div className="flex w-full items-center justify-center py-3">
                {children}
            </div>

            <motion.button
                initial={{
                    scale: 0,
                }}
                animate={{
                    scale: 1,
                }}
                className="absolute top-1/2 right-12 -translate-y-1/2 cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <CloseIcon className="h-6 w-6 text-white" />
            </motion.button>
        </motion.div>
    );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </svg>
    );
};
