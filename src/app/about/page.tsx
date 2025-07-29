import React from 'react';
import ImageTextBlock from '@/components/common/ImageTextBlock';
import Card from '@/components/common/Card';

export default function About() {
  const team = [
    {
      title: 'Leadership Team',
      description: 'Our experienced leadership team brings decades of combined experience in financial technology, compliance, and business strategy.',
    },
    {
      title: 'Engineering Excellence',
      description: 'Our world-class engineering team is dedicated to building secure, scalable, and innovative solutions for the financial industry.',
    },
    {
      title: 'Customer Success',
      description: 'Our customer success team ensures that every client receives the support and training needed to maximize their investment in our solutions.',
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible in financial technology, staying ahead of industry trends and regulations.',
    },
    {
      title: 'Security',
      description: 'Security is at the core of everything we do. We implement the highest standards to protect our clients\' data and operations.',
    },
    {
      title: 'Compliance',
      description: 'We help our clients navigate complex regulatory environments with confidence and ease.',
    },
    {
      title: 'Partnership',
      description: 'We believe in building long-term partnerships with our clients, supporting their growth and success every step of the way.',
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      {/* <Banner
        type="inner"
        title="About TechStartup"
        subtitle="Our Story"
        description="We're passionate about transforming the financial industry through innovative technology solutions."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' }
        ]}
      /> */}

      {/* Company Story */}
      <ImageTextBlock
        title="Our Mission"
        description="At TechStartup, we're committed to revolutionizing the financial technology landscape. Founded with the vision of making financial operations more efficient, secure, and compliant, we've grown to become a trusted partner for banks, NBFCs, and financial institutions worldwide. Our solutions are built on the principles of innovation, security, and customer-centricity."
        imageUrl="https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg"
        imageAlt="Company mission and vision"
        ctaText="Join Our Team"
        ctaLink="/careers"
        features={[
          'Founded in 2018 with a clear vision for the future',
          'Serving 100+ financial institutions globally',
          '99.9% uptime with enterprise-grade security',
          'Award-winning customer support and training'
        ]}
      />

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts who are driving innovation in financial technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                title={member.title}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the growing number of financial institutions that trust TechStartup to power their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started
            </a>
            <a
              href="/case-studies"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}