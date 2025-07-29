import React from 'react'


const CTASection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700" >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Need a Custom Solution?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                    Our team of experts can work with you to develop custom solutions that meet your specific business requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/contact"
                        className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Contact Us
                    </a>
                    <a
                        href="/case-studies"
                        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                    >
                        View Case Studies
                    </a>
                </div>
            </div>
        </section >
    )
}

export default CTASection