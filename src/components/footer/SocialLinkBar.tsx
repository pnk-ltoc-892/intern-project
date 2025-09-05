import { socialLinks } from '@/data/Footer'
import Link from 'next/link'
import React from 'react'


const SocialLinkBar = () => {
    return (
        <div className="max-w-md mx-auto">
            {/* Logo */}
            <div className="flex-shrink-0 mb-2">
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-300 ease-out"
                >
                    InsightAI
                </Link>
            </div>

            {/* Company Description */}
            <p className="mb-4 text-sm text-gray-200">
                InsightAI is a global provider of digital Solutions, dedicated to delivering secure, efficient, and user-friendly
                services across a wide range of industries.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                    <Link
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-500 hover:bg-gray-800 transition"
                    >
                        <Icon className="h-4 w-4 text-gray-300" />
                        <span className="sr-only">{name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SocialLinkBar
