'use client'
import Link from "next/link";
import React from "react";

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
    return (
        <Link
            href={href}
            className="text-gray-200 hover:text-text-gray-400 transition-colors duration-200"
        >
            {children}
        </Link>
    );
};

export default FooterLink;
