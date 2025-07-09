import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ImageTextBlockProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  reverse?: boolean;
  features?: string[];
}

const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  ctaText,
  ctaLink,
  reverse = false,
  features = []
}) => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              {/* <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              /> */}
            </div>
          </div>

          {/* Content */}
          <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Features */}
            {features.length > 0 && (
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA Button */}
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextBlock;