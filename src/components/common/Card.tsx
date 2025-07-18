import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'default' | 'feature' | 'blog' | 'case-study';
  tags?: string[];
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  // imageAlt,
  ctaText,
  ctaLink,
  variant = 'default',
  tags = []
}) => {
  const getCardStyles = () => {
    switch (variant) {
      case 'feature':
        return 'bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6';
      case 'blog':
        return 'bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden';
      case 'case-study':
        return 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6';
      default:
        return 'bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6';
    }
  };

  return (
    <div className={getCardStyles()}>
      {/* Image */}
      {imageUrl && (
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          {/* <Image
            src={imageUrl}
            alt={imageAlt || title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          /> */}
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>

      {/* CTA */}
      {ctaText && ctaLink && (
        <Link
          href={ctaLink}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          {ctaText}
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default Card;