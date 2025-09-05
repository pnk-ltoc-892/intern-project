import React from 'react';
import PageTitleHeader from '@/components/common/PageTitleHeader';
import { BrandsGridComponent } from '@/components/common/BrandGrid';
import Achievements from '@/components/common/Achievements';
import TeamSection from '@/components/common/TeamSection';
import { values } from '@/data/About';


export default function About() {

  return (
    <div>
      {/* Page Header */}
      <PageTitleHeader
        heading="Insight AI"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* Company Values */}
      <section className="bg-white">
        <div className="container-wrapper padding-wrapper-y">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-start gap-4 rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-200">
                    <Icon className="w-8 h-8 text-gray-800" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-md leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-50">
        <div className="container-wrapper padding-wrapper-y">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team combines AI, data analytics, and fintech skills to create innovative solutions that revolutionize the financial industry.
            </p>
          </div>
          {/* Team Members Section */}
          <TeamSection />
        </div>
      </section>

      {/* Achievements Section */}
      <Achievements />

      {/* Brands Grid Section */}
      <BrandsGridComponent />
    </div>
  );
}