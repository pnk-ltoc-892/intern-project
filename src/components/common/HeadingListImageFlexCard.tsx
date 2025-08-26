import Image from 'next/image.js'
import React from 'react'

const HeadingListImageFlexCard = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Data Protection
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We take data protection seriously and implement comprehensive measures to safeguard your information. Our approach to data protection includes encryption, access controls, regular audits, and compliance with international privacy regulations.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">End-to-end encryption</span>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Zero-knowledge architecture</span>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Regular security assessments</span>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Incident response procedures</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
                            alt="Data protection and security"
                            height={0}
                            width={0}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeadingListImageFlexCard