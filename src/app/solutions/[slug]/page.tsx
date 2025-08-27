import React from 'react';
import SolutionHeader from '@/components/solutions/SolutionsHeader';
import SolutionFeatureSection from '@/components/solutions/SolutionFeatureSection';
import AnimatedBackgroundGrid from '@/components/ui/animated-background-grid';
import { VideoPlayer } from '@/components/ui/video-player';


export default function Solutions() {

    const productHeader = {
        title: "Identity Verification Service",
        description: "InsightAI AI-powered identity verification solutions are built to make KYC faster, safer, and globally compliant, no matter your industry or customer base.",
        imageUrl: "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg"
    }

    const productFeatures = [
        {
            title: 'Regulatory Peace of Mind',
            description:
                'InsightAI identity verification solutions are built with compliance at their core, aligning with AML directives, GDPR, FATF guidance, NIST and eIDAS standards, and sector-specific requirements across 190+ countries. Ondato enables full compliance while automating your workflows and keeps up to date with new laws and updates so you don’t have to.',
            imageSrc: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
            reverse: false,
        },
        {
            title: 'Scalable And Secure',
            description:
                'Our infrastructure is cloud-native, built on globally distributed servers. Security is non-negotiable: all data is encrypted at rest and in transit, with role-based access, penetration-tested architecture, and continuous monitoring by our security operations team. With flexible modules and API-first architecture, you can adapt quickly to new markets, user segments, or compliance regimes.',
            imageSrc: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg',
            reverse: true,
        },
        {
            title: 'Friction Less Experience',
            description:
                'Identity verification flows are designed with both speed and simplicity in mind without compromising security. The entire process from document capture to approval is smooth, guided, and free of friction. Intelligent prompts help users complete verification in 30 seconds on the first try, reducing drop-offs and frustration.',
            imageSrc: 'https://images.pexels.com/photos/7792818/pexels-photo-7792818.jpeg',
            reverse: false,
        },
    ];

    const salientFeatures = [
        {
            title: "Identity Verification",
            description: "Securely verify customer identities with government-issued IDs.",
        },
        {
            title: "KYC Form",
            description: "Collect structured customer data with customizable KYC forms.",
        },
        {
            title: "Customer Due Diligence",
            description: "Evaluate customer profiles to ensure compliance and reduce risks.",
        },
        {
            title: "Registry Checks",
            description: "Validate customer data against trusted registries and databases.",
        },
        {
            title: "Customer Due Diligence",
            description: "Evaluate customer profiles to ensure compliance and reduce risks.",
        },
        {
            title: "Registry Checks",
            description: "Validate customer data against trusted registries and databases.",
        },
        {
            title: "Age Verification",
            description: "Confirm customer age using reliable identity documents.",
        },
        {
            title: "Biometric Authentication",
            description: "Authenticate users with face or fingerprint recognition.",
        },
        {
            title: "Age Verification",
            description: "Confirm customer age using reliable identity documents.",
        },
    ];


    return (
        <div>
            {/* Solution Header */}
            <SolutionHeader productHeader={productHeader} />

            {/* Product Video */}
            <div className="relative px-8 sm:px-12 lg:px-24 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
                {/* Decorative blur circle */}
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl"></div>

                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                        Product In Action
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        See how our solution transforms workflows with seamless integration and an intuitive experience.
                    </p>
                </div>

                {/* Video Container */}
                <div className="w-full max-w-3xl mx-auto">
                    <div className="rounded-2xl shadow-xl overflow-hidden border border-gray-200 bg-white/70 backdrop-blur-sm">
                        <VideoPlayer
                            thumbnailUrl="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?q=80&w=2069&auto=format&fit=crop"
                            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="Building the Future"
                            description="A look into modern architecture and design."
                            className="rounded-2xl"
                        />
                    </div>
                </div>
            </div>


            {/* Solution Features Flex */}
            {productFeatures.map((feature, index) => (
                <SolutionFeatureSection
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    imageSrc={feature.imageSrc}
                    reverse={feature.reverse}
                />
            ))}

            {/* Salient Features Grid*/}
            <div className='px-8 sm:px-12 lg:px-24 py-8 md:py-12 lg:py-16'>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Salient Features
                    </h2>
                </div>
                <div className='grid grid-cols-1 p-8 lg:p-16 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <AnimatedBackgroundGrid
                        className='rounded-lg bg-gray-200'
                        transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: 0.6,
                        }}
                        enableHover
                    >
                        {salientFeatures.map((item, index) => (
                            <div key={index} data-id={`card-${index}`} className='cursor-pointer bg-gray-100 rounded-lg'>
                                <div className='flex select-none flex-col space-y-1 p-4'>
                                    <h3 className='text-base font-medium text-black'>
                                        {item.title}
                                    </h3>
                                    <p className='text-base text-gray-800'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </AnimatedBackgroundGrid>
                </div>
            </div>
        </div>
    );
}