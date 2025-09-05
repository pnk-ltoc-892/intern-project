import { certifications } from '@/data/TrustCenter';
import React from 'react'

const Certifications = () => {
    return (
        <section className=" bg-gray-50">
            <div className="container-wrapper padding-wrapper-y">
                {/* Heading */}
                <div className="text-left mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        International Compliances And Certificates
                    </h2>
                </div>
                {/* Certifications Row */}
                <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-2">
                    {certifications.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col justify-evenly items-center bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-6 min-w-[160px] flex-1"
                            >
                                <Icon className="w-10 h-10 text-gray-800 mb-3" />
                                <h3 className="text-sm font-semibold text-gray-800 text-center mb-2">
                                    {cert.title}
                                </h3>
                                <span className="text-xs font-medium bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                                    {cert.status}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Certifications