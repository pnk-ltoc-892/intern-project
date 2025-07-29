import React from 'react';
import Card from '@/components/common/Card';
import Image from 'next/image.js';

export default function TrustCenter() {
  const securityFeatures = [
    {
      title: 'Data Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption to ensure maximum security.'
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Protect your account with multi-factor authentication including SMS, email, and authenticator app options.'
    },
    {
      title: 'Regular Security Audits',
      description: 'We conduct regular security audits and penetration testing to identify and address potential vulnerabilities.'
    },
    {
      title: 'Access Controls',
      description: 'Role-based access controls ensure that users only have access to the data and features they need.'
    },
    {
      title: 'Secure Infrastructure',
      description: 'Our infrastructure is hosted on secure cloud platforms with 24/7 monitoring and automated threat detection.'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Automated backup systems and disaster recovery procedures ensure business continuity and data protection.'
    }
  ];

  const certifications = [
    {
      title: 'ISO 27001',
      description: 'Information Security Management System certification ensuring the highest standards of data security.'
    },
    {
      title: 'SOC 2 Type II',
      description: 'Independent audit of our security, availability, and confidentiality controls.'
    },
    {
      title: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance for secure payment processing.'
    },
    {
      title: 'GDPR Compliant',
      description: 'Full compliance with European General Data Protection Regulation requirements.'
    }
  ];

  return (
    <div>
      {/* Security Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Security First
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At TechStartup, security is not an afterthought—it's built into everything we do. We employ industry-leading security practices to protect your data and ensure the integrity of our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance through rigorous certification processes and regular audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                title={cert.title}
                description={cert.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Data Protection
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We take data protection seriously and implement comprehensive measures to safeguard your information. Our approach to data protection includes encryption, access controls, regular audits, and compliance with international privacy regulations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">End-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Zero-knowledge architecture</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Regular security assessments</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Incident response procedures</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
                alt="Data protection and security"
                height={0}
                width={0}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Security Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow industry best practices and maintain a comprehensive security program to protect your data and our systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Monitoring</h3>
              <p className="text-gray-600">Continuous monitoring of our systems and networks for threats and anomalies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Development</h3>
              <p className="text-gray-600">Security is integrated into every stage of our development lifecycle.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance</h3>
              <p className="text-gray-600">Regular compliance audits and certifications to meet industry standards.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Incident Response</h3>
              <p className="text-gray-600">Rapid incident response procedures to address any security concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Have Security Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our security team is here to answer your questions and provide detailed information about our security practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Security Team
            </a>
            <a
              href="mailto:security@techstartup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Security Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}