import React from 'react';
import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';

export default function Solutions() {
  const solutionsByType = [
    {
      title: 'WizDoc',
      description: 'Advanced document processing and verification system powered by AI to detect fraud and ensure document authenticity.',
      ctaText: 'Learn More',
      ctaLink: '/solutions/wizdoc',
      tags: ['AI-Powered', 'Document Verification']
    },
    {
      title: 'AML Compliance',
      description: 'Comprehensive anti-money laundering solutions to meet regulatory requirements and reduce compliance risks.',
      ctaText: 'Explore AML',
      ctaLink: '/solutions/aml',
      tags: ['Compliance', 'Risk Management']
    },
    {
      title: 'CROs Support',
      description: 'Tools and systems designed specifically for Chief Risk Officers to manage and monitor organizational risk.',
      ctaText: 'View CRO Tools',
      ctaLink: '/solutions/cros',
      tags: ['Risk Management', 'Executive Tools']
    },
    {
      title: 'MLROs Platform',
      description: 'Money Laundering Reporting Officer platform for comprehensive reporting and monitoring capabilities.',
      ctaText: 'Discover MLRO',
      ctaLink: '/solutions/mlros',
      tags: ['Reporting', 'Monitoring']
    },
    {
      title: 'Document Forgery Detection',
      description: 'State-of-the-art technology to identify and prevent document forgery using advanced machine learning algorithms.',
      ctaText: 'Learn More',
      ctaLink: '/solutions/document-forgery',
      tags: ['AI Detection', 'Security']
    },
    {
      title: 'API Solutions',
      description: 'Robust and secure API infrastructure for seamless integration with existing systems and third-party applications.',
      ctaText: 'View APIs',
      ctaLink: '/solutions/apis',
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
      imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      imageAlt: 'NBFC solutions',
      ctaText: 'Discover NBFC',
      ctaLink: '/solutions/nbfcs',
      tags: ['NBFC', 'Financial Services']
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <Banner
        type="inner"
        title="Our Solutions"
        subtitle="Comprehensive Technology Solutions"
        description="Explore our range of innovative solutions designed to transform your financial operations."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' }
        ]}
      />

      {/* Solutions by Type */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Solutions by Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of technology solutions designed to address specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsByType.map((solution, index) => (
              <Card
                key={index}
                title={solution.title}
                description={solution.description}
                ctaText={solution.ctaText}
                ctaLink={solution.ctaLink}
                variant="feature"
                tags={solution.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-20 bg-gray-50">
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
                variant="feature"
                tags={solution.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
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
      </section>
    </div>
  );
}