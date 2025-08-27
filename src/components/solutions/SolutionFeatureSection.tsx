'use client';

import Image from 'next/image';
import React from 'react';

interface SolutionFeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

const SolutionFeatureSection: React.FC<SolutionFeatureSectionProps> = ({
  title,
  description,
  imageSrc,
  reverse = false,
}) => {
  return (
    <section className="w-full py-12 px-8 sm:px-12 lg:px-24 bg-gray-100">
      <div
        className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Text Content */}
        <div className={`text-left ${reverse ? 'md:order-2' : 'md:order-1'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image Content */}
        <div
          className={`relative w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-lg ${
            reverse ? 'md:order-1' : 'md:order-2'
          }`}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionFeatureSection;
