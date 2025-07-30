import React from 'react';
import Card from '@/components/common/Card';
import Link from 'next/link.js';
import CTASection from '@/components/common/CTASection';


export default function Solutions() {
  
  const solutionsByType = [
    {
      title: 'WizDoc',
      description: 'Advanced document processing and verification system powered by AI to detect fraud and ensure document authenticity.',
      ctaText: 'Learn More',
      ctaLink: '/solutions/wizdoc',
      imageUrl: '/Solutions/solution.jpeg',
      imageAlt: 'WizDoc',
      tags: ['AI-Powered', 'Document Verification']
    },
    {
      title: 'AML Compliance',
      description: 'Comprehensive anti-money laundering solutions to meet regulatory requirements and reduce compliance risks.',
      ctaText: 'Explore AML',
      ctaLink: '/solutions/aml',
      imageUrl: '/Solutions/solution.jpeg',
      imageAlt: 'WizDoc',
      tags: ['Compliance', 'Risk Management']
    },
    {
      title: 'CROs Support',
      description: 'Tools and systems designed specifically for Chief Risk Officers to manage and monitor organizational risk.',
      ctaText: 'View CRO Tools',
      ctaLink: '/solutions/cros',
      imageUrl: '/Solutions/solution.jpeg',
      imageAlt: 'WizDoc',
      tags: ['Risk Management', 'Executive Tools']
    },
    {
      title: 'MLROs Platform',
      description: 'Money Laundering Reporting Officer platform for comprehensive reporting and monitoring capabilities.',
      ctaText: 'Discover MLRO',
      ctaLink: '/solutions/mlros',
      imageUrl: '/Solutions/solution.jpeg',
      imageAlt: 'WizDoc',
      tags: ['Reporting', 'Monitoring']
    },
    {
      title: 'Document Forgery Detection',
      description: 'State-of-the-art technology to identify and prevent document forgery using advanced machine learning algorithms.',
      ctaText: 'Learn More',
      ctaLink: '/solutions/document-forgery',
      imageUrl: '/Solutions/solution.jpeg',
      imageAlt: 'WizDoc',
      tags: ['AI Detection', 'Security']
    },
    {
      title: 'API Solutions',
      description: 'Robust and secure API infrastructure for seamless integration with existing systems and third-party applications.',
      ctaText: 'View APIs',
      ctaLink: '/solutions/apis',
      imageUrl: '/Solutions/solution.jpeg',
      imageAlt: 'WizDoc',
      tags: ['Integration', 'Developer Tools']
    }
  ];

  const industriesSolutions = [
    {
      title: 'Banking Solutions',
      description: 'Comprehensive technology solutions designed specifically for traditional and digital banks to enhance operations and compliance.',
      imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
      imageAlt: 'Banking solutions',
      ctaText: 'Explore Banking',
      ctaLink: '/solutions/banks',
      tags: ['Banking', 'Compliance']
    },
    {
      title: 'NBFC Solutions',
      description: 'Specialized solutions for Non-Banking Financial Companies to streamline operations and ensure regulatory compliance.',
      imageUrl: '/Solutions/solution.jpeg',
      imageAlt: 'NBFC solutions',
      ctaText: 'Discover NBFC',
      ctaLink: '/solutions/nbfcs',
      tags: ['NBFC', 'Financial Services']
    }
  ];


  return (
    <div>
      {/* Solutions by Type */}
      <section className="">
        <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:28px_28px]">

          <div className="container mx-auto px-4 py-6 text-sm text-gray-700 flex gap-2 font-medium">
                <Link href="/" className="hover:underline">Home</Link>
                <span>{'>'}</span>
                <Link href="/blogs" className="hover:underline">Solutions</Link>
            </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of technology solutions designed to address specific business challenges.
            </p>
          </div>
        </div>

        <div className='py-8 w-[75%] mx-auto'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutionsByType.map((solution, index) => (
              <Card
                key={index}
                title={solution.title}
                description={solution.description}
                imageUrl={solution.imageUrl}
                imageAlt={solution.imageAlt}
                ctaText={solution.ctaText}
                ctaLink={solution.ctaLink}
                tags={solution.tags}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Solutions by Industry */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Solutions by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific solutions tailored to meet the unique needs of different financial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industriesSolutions.map((solution, index) => (
              <Card
                key={index}
                title={solution.title}
                description={solution.description}
                imageUrl={solution.imageUrl}
                imageAlt={solution.imageAlt}
                ctaText={solution.ctaText}
                ctaLink={solution.ctaLink}
                tags={solution.tags}
              />
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}