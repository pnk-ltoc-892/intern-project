import React from 'react';
// import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import Image from 'next/image.js';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      description: 'Join our engineering team to build scalable fintech solutions. Experience with React, Node.js, and cloud technologies required.',
      ctaText: 'Apply Now',
      ctaLink: '/careers/senior-full-stack-developer',
      tags: ['Engineering', 'Full-time', 'Remote']
    },
    {
      title: 'Product Manager - FinTech',
      description: 'Lead product development for our compliance and fraud prevention solutions. 3+ years of fintech product management experience preferred.',
      ctaText: 'Apply Now',
      ctaLink: '/careers/product-manager-fintech',
      tags: ['Product', 'Full-time', 'Hybrid']
    },
    {
      title: 'DevOps Engineer',
      description: 'Help us scale our infrastructure to serve millions of transactions. Experience with AWS, Kubernetes, and CI/CD pipelines required.',
      ctaText: 'Apply Now',
      ctaLink: '/careers/devops-engineer',
      tags: ['Engineering', 'Full-time', 'Remote']
    },
    {
      title: 'UX/UI Designer',
      description: 'Design intuitive user experiences for complex financial workflows. Portfolio showcasing B2B SaaS design experience required.',
      ctaText: 'Apply Now',
      ctaLink: '/careers/ux-ui-designer',
      tags: ['Design', 'Full-time', 'Hybrid']
    },
    {
      title: 'Sales Development Representative',
      description: 'Drive growth by identifying and qualifying new business opportunities in the financial services sector.',
      ctaText: 'Apply Now',
      ctaLink: '/careers/sales-development-representative',
      tags: ['Sales', 'Full-time', 'Remote']
    },
    {
      title: 'Customer Success Manager',
      description: 'Ensure customer satisfaction and drive adoption of our solutions. Experience with enterprise B2B customers preferred.',
      ctaText: 'Apply Now',
      ctaLink: '/careers/customer-success-manager',
      tags: ['Customer Success', 'Full-time', 'Hybrid']
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries, equity packages, and performance bonuses to attract and retain top talent.',
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs to keep you and your family healthy.',
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, unlimited PTO, and a culture that values your personal time and well-being.',
    },
    {
      title: 'Professional Development',
      description: 'Annual learning budget, conference attendance, and opportunities for career advancement and skill development.',
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and tools in a modern, collaborative environment.',
    },
    {
      title: 'Inclusive Culture',
      description: 'A diverse and inclusive workplace where everyone can contribute their unique perspectives and talents.',
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      {/* <Banner
        type="inner"
        title="Join Our Team"
        subtitle="Build the Future of FinTech"
        description="Join a team of passionate professionals working to revolutionize the financial technology industry."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' }
        ]}
      /> */}

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the future of financial technology, and we want you to be part of it.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div> */}
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting opportunities to grow your career with us.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                title={position.title}
                description={position.description}
                ctaText={position.ctaText}
                ctaLink={position.ctaLink}
                tags={position.tags}
              />
            ))}
          </div> */}
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At TechStartup, we believe that great products come from great teams. We foster a culture of innovation, collaboration, and continuous learning. Our diverse team of experts is united by a shared passion for transforming the financial industry through technology.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Innovation-driven environment</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Collaborative and supportive team</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Continuous learning and growth</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Work-life balance</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg"
                alt="Team collaboration"
                height={0}
                width={0}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't See a Perfect Fit?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="mailto:careers@techstartup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Send Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}