"use client";

import { BrandsGrid } from "@/components/ui/brands";

const brands = [
    {
        name: "loops",
        logo: "https://assets.rapidui.dev/brands/loops.svg",
    },
    {
        name: "pwc",
        logo: "https://assets.rapidui.dev/brands/pwc.svg",
    },
    {
        name: "resend",
        logo: "https://assets.rapidui.dev/brands/resend.svg",
    },
    {
        name: "udio",
        logo: "https://assets.rapidui.dev/brands/udio.svg",
    },
    {
        name: "krea",
        logo: "https://assets.rapidui.dev/brands/krea.svg",
    },
    {
        name: "gopuff",
        logo: "https://assets.rapidui.dev/brands/gopuff.svg",
    },
];

export function BrandsGridComponent() {
    return (
        <BrandsGrid
            brands={brands}
            className=""
            title="Trusted and loved by clients worldwide"
        />
    );
}