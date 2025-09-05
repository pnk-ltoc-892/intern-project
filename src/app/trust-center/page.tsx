import React from 'react';
import PageTitleHeader from '@/components/common/PageTitleHeader';
import Certifications from '@/components/common/Certifications';
import { securityFeatures, securityPractices } from '@/data/TrustCenter';


export default function TrustCenter() {
  return (
    <div className='bg-white'>
      <PageTitleHeader
        heading="Trust Center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Trust Center", href: "/trust-center" },
        ]}
      />

      <section className="container-wrapper padding-wrapper-y">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Security Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow industry best practices and maintain a comprehensive
            security program to protect your data and our systems.
          </p>
        </div>

        {/* Dynamic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityPractices.map((practice, index) => {
            const Icon = practice.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {practice.title}
                </h3>
                <p className="text-gray-600">{practice.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      <section className="bg-white">
        <div className="container-wrapper padding-wrapper-y">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Security First
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At TechStartup, security is not an afterthought—it's built into everything we do. We employ industry-leading security practices to protect your data and ensure the integrity of our services.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition cursor-pointer"
              >
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 py-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-700 py-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}