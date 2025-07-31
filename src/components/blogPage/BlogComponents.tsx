import React from 'react';

interface HeadingProps {
    children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children }) => (
    <h2 className="font-sans text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-snug my-1 sm:my-2">
        {children}
    </h2>
);

interface ParagraphProps {
    children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
    <p className="font-serif text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4 max-w-prose">
        {children}
    </p>
);
