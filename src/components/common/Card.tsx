import React from 'react';
import Link from 'next/link';
import Image from 'next/image.js';


interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  tags?: string[];
}


const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  ctaText,
  ctaLink,
  tags = []
}) => {
  console.log(imageUrl);


  return (
    <div className=" flex flex-col items-start justify-between bg-white p-4 border-2 border-gray-200 rounded-xl hover:scale-101 shadow-gray-400 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">

      {/* Image */}
      {imageUrl ? (
        <div className="relative h-56 w-full overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>
      )
        : null
      }


      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 py-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-lg text-gray-700 py-2 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 py-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-100 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      {ctaText && ctaLink && (
        <Link
            href={ctaLink}
            className="pt-2 font-semibold text-gray-600 hover:text-gray-800 transition-all duration-300 hover:border-b-2 hover:border-b-gray-800"
          >
            {ctaText + " >"}
          </Link>
      )}
    </div>
  );
};

export default Card;