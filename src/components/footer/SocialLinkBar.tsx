import { socialLinks } from '@/data/Footer'
import Link from 'next/link.js'
import React from 'react'

const SocialLinkBar = () => {
    return (
        <div className=''>
            <h3 className="py-2 text-lg font-semibold">Follow Us</h3>
            <div className="mb-2 lg:mb-6 flex space-x-4">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                    <Link
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-full border border-gray-300 p-3 hover:bg-gray-100 transition"
                    >
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SocialLinkBar