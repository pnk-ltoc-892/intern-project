import PageTitleHeader from '@/components/common/PageTitleHeader';
import { termsData } from '@/data/TermsConditions';
import React from 'react';


export default function TermsConditions() {
  return (
    <div>
      <PageTitleHeader
        heading="Terms & Conditions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions", href: "/terms-conditions" },
        ]}
      />

      <section className="bg-gray-50">
        <div className="container-wrapper padding-wrapper-y">
          <div className="max-w-4xl mx-auto">
            {termsData.map((term, index) => (
              <TermsCard
                key={index}
                title={term.title}
                description={term.description}
                list={term.list}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


const TermsCard = ({
  title,
  description,
  list,
}: {
  title: string;
  description?: string;
  list?: string[];
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 leading-relaxed mb-3">{description}</p>
      )}
      {list && (
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};