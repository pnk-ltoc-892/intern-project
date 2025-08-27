// "use client"

import React from 'react';
import ImageTextBlock from '@/components/common/ImageTextBlock';
import Card from '@/components/common/Card';
import HeroSection from '@/components/home/HeroSection';
import Features from '@/components/home/Features';
import FAQSection from '@/components/home/FAQSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import TeamMemberSection from '@/components/common/TeamMemberSection';
import RelationsSection from '@/components/home/RelationsSection';
import { Newsletter } from '@/components/common/NewsLetter';
import HowItWorks from '@/components/home/HowItWorks';
import PluginIntegration from '@/components/home/PluginIntergration';
import FeaturesFlex from '@/components/home/FeaturesFlex';



export default function Home() {
  const features = [
    {
      title: 'Advanced Document Processing',
      description: 'Leverage AI-powered document analysis to detect fraud, ensure compliance, and streamline operations.',
      ctaText: 'Learn More',
      ctaLink: '/solutions/wizdoc'
    },
    {
      title: 'AML Compliance',
      description: 'Comprehensive anti-money laundering solutions to meet regulatory requirements and reduce risk.',
      ctaText: 'Explore AML',
      ctaLink: '/solutions/aml'
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with existing systems through our robust and secure API infrastructure.',
      ctaText: 'View APIs',
      ctaLink: '/solutions/apis'
    }
  ];

  return (
    <div>

      {/* Main Hero Section */}
      <HeroSection />


      {/* Sliding Relations Section Marquee */}
      <div className='px-4 lg:px-8'>
        <h2 className="flex justify-center text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold tracking-tighter mt-5 py-1 px-4">
          Our Relations
        </h2>
        <RelationsSection />
      </div>


      {/* How It Works Section */}
      <HowItWorks />

      {/* Integration Section */}
      <PluginIntegration />

      {/* Feature Split Flex*/}
      <FeaturesFlex />

      {/* Testimonial Sections */}
      {/* // ! Optimize For Sliding Image Section */}
      <TestimonialSection />


      {/* Infinite Sliding Cards Section */}
      {/* // ! Optimize For Sliding Image Section */}
      <Newsletter />


      {/* FAQ Section */}
      <FAQSection />



      {/* Feature Section */}
      Additional Dummy Components
      <Features />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our innovative technology solutions can transform your business operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                title={feature.title}
                description={feature.description}
                ctaText={feature.ctaText}
                ctaLink={feature.ctaLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <ImageTextBlock
        title="Leading the Future of FinTech"
        description="We're dedicated to providing cutting-edge financial technology solutions that empower businesses to operate more efficiently, securely, and in compliance with regulatory requirements. Our team of experts combines deep industry knowledge with innovative technology to deliver solutions that drive real business value."
        imageUrl="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg"
        imageAlt="Team working on financial technology"
        ctaText="Learn About Us"
        ctaLink="/about"
        features={[
          'Industry-leading expertise in financial technology',
          'Comprehensive compliance and security solutions',
          'Seamless integration with existing systems',
          'Dedicated customer support and training'
        ]}
      />

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions are tailored to meet the unique needs of different financial institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title="Banks"
              description="Comprehensive solutions for traditional and digital banks, covering everything from document verification to compliance monitoring."
              imageUrl="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg"
              imageAlt="Banking industry"
              ctaText="Explore Banking Solutions"
              ctaLink="/solutions/banks"
            />
            <Card
              title="NBFCs"
              description="Specialized solutions for Non-Banking Financial Companies to streamline operations and ensure regulatory compliance."
              imageUrl="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              imageAlt="NBFC industry"
              ctaText="Discover NBFC Solutions"
              ctaLink="/solutions/nbfcs"
            />
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get in touch with our experts to learn how our solutions can help your organization achieve its goals.
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