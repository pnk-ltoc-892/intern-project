import React from 'react'
import FeatureSplit from './FeatureSplit'

const FeaturesFlex = () => {

    const features = [
        {
            title: "Instant Data Analysis",
            imageSrc: "/feature.png",
            imageAlt: "Illustration of InsightAI analytics",
            items: [
                'Analyze large volumes of financial data in minutes.',
                'Effortlessly handle data from databases, images, big data, ledgers, and bookkeeping software.',
                'Save up to 50% of the time spent on manual data entry.',
                'Ensure high accuracy and efficiency in data processing.',
            ]
        },
        {
            title: "Boost Revenue",
            imageSrc: "/feature.png",
            imageAlt: "Illustration of InsightAI analytics",
            items: [
                'Reduce operational costs by 30% through advanced automation.',
                'Increase productivity and efficiency, enabling your organization to work four times faster.',
                'Drive higher revenue with optimized workflows and reduced overheads.',
            ]
        },
        {
            title: "Precision Accuracy",
            imageSrc: "/feature.png",
            imageAlt: "Illustration of InsightAI analytics",
            items: [
                'Eliminate human errors in data calculations and analysis.',
                'Benefit from automated, accurate data extraction and analytics.',
                'Ensure consistent and reliable financial insights for better decision-making.',
                'Improve data quality and integrity across all operations.',
            ]
        },
        {
            title: "Seamless Compliance",
            imageSrc: "/feature.png",
            imageAlt: "Illustration of InsightAI analytics",
            items: [
                'Automate compliance checks to ensure adherence to taxation laws.',
                'Instantly monitor and address any compliance issues.',
                'Reduce the risk of penalties and non-compliance.',
                'Simplify reporting processes with real-time compliance tracking and automated documentation.',
            ]
        }
    ]

    return (
        <section className='py-12 px-4 sm:px-6 lg:px-8 bg-gray-50'>
            <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold uppercase rounded-full px-3 py-1 mb-4">
                    Main Features
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Four Reasons Why InsightAI is Perfectly Optimized for Your Needs
                </h2>
            </div>

            <div>
                {
                    features.map((feature, idx) => (
                        <FeatureSplit
                            key={idx}
                            title={feature.title}
                            imageSrc={feature.imageSrc}
                            imageAlt={feature.imageAlt}
                            items={feature.items}
                        />
                    ))
                }
            </div>

        </section>
    )
}

export default FeaturesFlex