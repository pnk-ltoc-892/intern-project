import PageTitleHeader from '@/components/common/PageTitleHeader';
import { privacyPolicyData } from '@/data/PrivacyPolicy';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div>
      <PageTitleHeader
        heading="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <section className="bg-gray-50">
        <div className="container-wrapper padding-wrapper-y">
          <div className="max-w-4xl mx-auto">
            {privacyPolicyData.map((term, index) => (
              <PrivacyPolicyCard
                key={index}
                title={term.title}
                description={term.description}
                list={term.list}
                childrenData={term.children}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const PrivacyPolicyCard = ({
  title,
  description,
  list,
  childrenData,
}: {
  title: string;
  description?: string;
  list?: string[];
  childrenData?: {
    subtitle: string;
    description?: string;
    list?: string[];
  }[];
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
      {/* Main Title */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-gray-600 leading-relaxed mb-3">{description}</p>
      )}

      {/* List */}
      {list && (
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-3">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {/* Nested Children Sections */}
      {childrenData &&
        childrenData.map((child, idx) => (
          <div key={idx} className="mt-4">
            <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-2">
              {child.subtitle}
            </h3>
            {child.description && (
              <p className="text-gray-600 leading-relaxed mb-2">
                {child.description}
              </p>
            )}
            {child.list && (
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {child.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </div>
  );
};
