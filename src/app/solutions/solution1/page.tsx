import React from 'react';
import SolutionHeader from '@/components/solutions/SolutionsHeader';
import SolutionFeatureSection from '@/components/solutions/SolutionFeatureSection';
import { SolutionSalientFeatures } from '@/components/solutions/SolutionSalientFeatures';


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

    const features = [
        "Identity Verification",
        "KYC Form",
        "Customer Due Diligence",
        "Registry Checks",
        "Age Verification",
        "Biometric Authentication",
        "E-Signatures",
        "Client Base Analysis",
        "Reporting to Regulator",
        "Adverse Media Screening",
        "PEP Screening",
        "Sanctions Screening",
    ];

    return (
        <div>
            {/* Solution Header */}
            <SolutionHeader productHeader={productHeader} />

            {/* Solution Features */}
            {productFeatures.map((feature, index) => (
                <SolutionFeatureSection
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    imageSrc={feature.imageSrc}
                    reverse={feature.reverse}
                />
            ))}

            {/* Feature Board */}
            <div className="p-4 sm:p-8">
                <SolutionSalientFeatures title="Salient Features" features={features} />
            </div>
        </div>
    );
}