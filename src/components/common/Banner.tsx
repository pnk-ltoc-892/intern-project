import React from 'react';
import Link from 'next/link';

interface BannerProps {
  type: 'hero' | 'inner' | 'contact' | 'case-study';
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  breadcrumb?: { label: string; href: string }[];
}

const Banner: React.FC<BannerProps> = ({
  type,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  breadcrumb
}) => {
  const getBackgroundClass = () => {
    switch (type) {
      case 'hero':
        return 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700';
      case 'contact':
        return 'bg-gradient-to-br from-green-900 via-green-800 to-green-700';
      case 'case-study':
        return 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700';
      default:
        return 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700';
    }
  };

  const getHeightClass = () => {
    return type === 'hero' ? 'min-h-[80vh]' : 'min-h-[40vh]';
  };

  return (
    <div className={`${getBackgroundClass()} ${getHeightClass()} flex items-center justify-center relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Breadcrumb */}
          {breadcrumb && (
            <nav className="mb-8">
              <ol className="flex justify-center space-x-2 text-sm text-gray-300">
                {breadcrumb.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2">/</span>}
                    <Link href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg text-gray-300 mb-4 font-medium">{subtitle}</p>
          )}

          {/* Title */}
          <h1 className={`font-bold text-white mb-6 ${type === 'hero' ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-5xl'}`}>
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className={`text-gray-300 mb-8 max-w-3xl mx-auto ${type === 'hero' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
              {description}
            </p>
          )}

          {/* CTA Button */}
          {ctaText && ctaLink && (
            <div className="flex justify-center">
              <Link
                href={ctaLink}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-200"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;