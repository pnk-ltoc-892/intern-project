"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll";
import { features } from "@/data/Home";


export function FeaturesStickyScroll() {
    return (
        <div className="">
            <StickyScroll content={features} />
        </div>
    );
}
