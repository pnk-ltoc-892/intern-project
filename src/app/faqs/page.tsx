'use client';

import React, { useState } from 'react';
import Banner from '@/components/common/Banner';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is TechStartup and what do you do?',
          answer: 'TechStartup is a leading financial technology company that provides innovative solutions for banks, NBFCs, and financial institutions. We specialize in document verification, fraud detection, AML compliance, and API integrations to help organizations streamline their operations and meet regulatory requirements.'
        },
        {
          question: 'How long has TechStartup been in business?',
          answer: 'TechStartup was founded in 2018 and has been serving the financial technology industry for over 5 years. We have grown from a startup to a trusted partner for over 100 financial institutions worldwide.'
        },
        {
          question: 'What makes TechStartup different from other fintech companies?',
          answer: 'Our unique combination of advanced AI technology, deep industry expertise, and commitment to customer success sets us apart. We focus on delivering practical solutions that solve real-world problems while maintaining the highest standards of security and compliance.'
        }
      ]
    },
    {
      category: 'Products & Services',
      questions: [
        {
          question: 'What is WizDoc and how does it work?',
          answer: 'WizDoc is our flagship document processing and verification platform. It uses advanced AI and machine learning algorithms to analyze documents, detect fraud, and verify authenticity. The platform can process various document types including IDs, bank statements, and legal documents with high accuracy and speed.'
        },
        {
          question: 'Do you offer AML compliance solutions?',
          answer: 'Yes, we provide comprehensive AML (Anti-Money Laundering) compliance solutions that help financial institutions meet regulatory requirements. Our platform includes transaction monitoring, customer due diligence, suspicious activity reporting, and regulatory reporting capabilities.'
        },
        {
          question: 'Can your solutions integrate with existing systems?',
          answer: 'Absolutely! Our solutions are designed with integration in mind. We offer robust APIs and flexible integration options that can seamlessly connect with your existing core banking systems, CRM platforms, and other business applications.'
        },
        {
          question: 'What types of documents can your system process?',
          answer: 'Our system can process a wide variety of documents including government-issued IDs, passports, bank statements, utility bills, income documents, legal contracts, and more. We continuously expand our document recognition capabilities based on client needs.'
        }
      ]
    },
    {
      category: 'Implementation & Support',
      questions: [
        {
          question: 'How long does it take to implement your solutions?',
          answer: 'Implementation timelines vary depending on the complexity of your requirements and existing infrastructure. Typically, our solutions can be implemented within 2-8 weeks. We provide dedicated implementation support and project management to ensure a smooth deployment.'
        },
        {
          question: 'What kind of support do you provide?',
          answer: 'We offer comprehensive support including 24/7 technical support, dedicated account management, regular training sessions, and ongoing optimization. Our customer success team works closely with clients to ensure they maximize the value of our solutions.'
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes, we provide comprehensive training programs for your team including user training, administrator training, and ongoing education. We also offer documentation, video tutorials, and webinars to ensure your team is fully equipped to use our solutions effectively.'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      questions: [
        {
          question: 'How secure are your solutions?',
          answer: 'Security is our top priority. Our solutions are built with enterprise-grade security features including end-to-end encryption, multi-factor authentication, role-based access controls, and regular security audits. We comply with industry standards such as ISO 27001, SOC 2, and PCI DSS.'
        },
        {
          question: 'Are your solutions compliant with regulations?',
          answer: 'Yes, our solutions are designed to help organizations meet various regulatory requirements including KYC, AML, GDPR, and other regional compliance standards. We stay up-to-date with regulatory changes and update our solutions accordingly.'
        },
        {
          question: 'Where is our data stored and processed?',
          answer: 'We use secure cloud infrastructure with data centers in multiple regions. Data is encrypted both in transit and at rest. We can also accommodate specific data residency requirements based on your regulatory needs.'
        }
      ]
    },
    {
      category: 'Pricing & Contracts',
      questions: [
        {
          question: 'How is your pricing structured?',
          answer: 'Our pricing is flexible and depends on factors such as the specific solutions you need, transaction volumes, and implementation complexity. We offer both subscription-based and usage-based pricing models. Contact our sales team for a customized quote.'
        },
        {
          question: 'Do you offer free trials?',
          answer: 'Yes, we offer proof-of-concept trials for qualified prospects. This allows you to test our solutions with your specific use cases and data before making a commitment.'
        },
        {
          question: 'What are the contract terms?',
          answer: 'We offer flexible contract terms typically ranging from 1-3 years. Our contracts include service level agreements, support terms, and clear pricing structures. We work with clients to find terms that meet their specific needs.'
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      {/* Hero Banner */}
      <Banner
        type="inner"
        title="Frequently Asked Questions"
        subtitle="Get Answers"
        description="Find answers to common questions about our solutions, implementation, and services."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'FAQs', href: '/faqs' }
        ]}
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = faqs.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.questions.length, 0) + faqIndex;
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          <ChevronDownIcon
                            className={`h-5 w-5 text-gray-500 transition-transform ${
                              openFAQ === globalIndex ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {openFAQ === globalIndex && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our team is here to help. Get in touch with us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@techstartup.com"
              className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}