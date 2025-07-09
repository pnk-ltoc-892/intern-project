import React from 'react';
import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Global Bank Reduces Fraud by 85%',
      description: 'Learn how a leading international bank implemented our WizDoc solution to dramatically reduce document fraud and improve customer onboarding efficiency.',
      imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
      imageAlt: 'Banking fraud prevention case study',
      ctaText: 'Read Full Case Study',
      ctaLink: '/case-studies/global-bank-fraud-reduction',
      tags: ['Banking', 'Fraud Prevention', 'WizDoc']
    },
    {
      title: 'NBFC Streamlines Compliance Operations',
      description: 'Discover how a major NBFC reduced compliance costs by 60% while improving regulatory reporting accuracy using our AML platform.',
      imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      imageAlt: 'NBFC compliance case study',
      ctaText: 'Read Full Case Study',
      ctaLink: '/case-studies/nbfc-compliance-streamlining',
      tags: ['NBFC', 'Compliance', 'AML']
    },
    {
      title: 'Regional Bank Modernizes Document Processing',
      description: 'See how a regional bank transformed their document processing workflow, reducing processing time by 75% and improving customer satisfaction.',
      imageUrl: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
      imageAlt: 'Document processing modernization',
      ctaText: 'Read Full Case Study',
      ctaLink: '/case-studies/regional-bank-document-processing',
      tags: ['Banking', 'Document Processing', 'Automation']
    },
    {
      title: 'Credit Union Enhances Security',
      description: 'Learn how a credit union improved their security posture by 90% while maintaining excellent user experience through our integrated solutions.',
      imageUrl: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
      imageAlt: 'Credit union security enhancement',
      ctaText: 'Read Full Case Study',
      ctaLink: '/case-studies/credit-union-security-enhancement',
      tags: ['Security', 'Credit Union', 'Risk Management']
    },
    {
      title: 'Fintech Startup Scales Operations',
      description: 'Discover how a fast-growing fintech startup used our API solutions to scale their operations from 1,000 to 100,000 transactions per day.',
      imageUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      imageAlt: 'Fintech scaling operations',
      ctaText: 'Read Full Case Study',
      ctaLink: '/case-studies/fintech-startup-scaling',
      tags: ['Fintech', 'API', 'Scaling']
    },
    {
      title: 'Investment Firm Improves Risk Management',
      description: 'See how an investment firm enhanced their risk management capabilities and reduced operational risk by 70% using our CRO platform.',
      imageUrl: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      imageAlt: 'Investment firm risk management',
      ctaText: 'Read Full Case Study',
      ctaLink: '/case-studies/investment-firm-risk-management',
      tags: ['Investment', 'Risk Management', 'CRO']
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <Banner
        type="case-study"
        title="Case Studies"
        subtitle="Success Stories"
        description="Discover how our clients have transformed their operations and achieved remarkable results with our solutions."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Case Studies', href: '/case-studies' }
        ]}
      />

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. See how our solutions have helped organizations across the financial industry achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                title={study.title}
                description={study.description}
                imageUrl={study.imageUrl}
                imageAlt={study.imageAlt}
                ctaText={study.ctaText}
                ctaLink={study.ctaLink}
                variant="case-study"
                tags={study.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The numbers speak for themselves. Here's how our solutions are making a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-lg text-gray-600">Average Fraud Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-lg text-gray-600">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">75%</div>
              <div className="text-lg text-gray-600">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-lg text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our solutions can help your organization achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Success Story
            </a>
            <a
              href="/solutions"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}