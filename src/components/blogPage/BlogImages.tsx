import React from 'react';
import Image from 'next/image';

interface BlogImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const BlogImage: React.FC<BlogImageProps> = ({
    src,
    alt,
    className = ''
}) => (
    <div className={`my-8 w-full ${className}`}>
        <Image
            src={src}
            alt={alt}
            sizes="100vw"
            height={0}
            width={0}
            style={{ width: '100%', height: 'auto' }}
            className="rounded object-cover"
        />
    </div>
);

// Example usage::
// <BlogImage src="/images/author-photo.jpg" alt="Author Photo" />
// <BlogImage src="https://example.com/cover.png" alt="Cover Image" width={1200} height={400} className="shadow-lg" />
