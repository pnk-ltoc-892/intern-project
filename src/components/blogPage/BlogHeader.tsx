import React from 'react';
import { Twitter, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link.js';


interface BlogHeaderProps {
    title: string;
    description: string;
    author: string;
    date: string; // ISO string or formatted date
    url: string;
    breadcrumb?: { label: string; href: string }[];
}

const shareUrls = {
    twitter: (url: string, text: string) =>
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    facebook: (url: string) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: (url: string) =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
};

const BlogHeader: React.FC<BlogHeaderProps> = ({
    title,
    description,
    author,
    date,
    url,
    breadcrumb = []
}) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
    });

    return (
        <header className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:28px_28px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">

            <section className='container-wrapper'>
                <div className="text-md text-gray-700 flex gap-2 font-medium py-6 md:py-8 lg:py-12">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span>{'>'}</span>
                    <Link href="/blogs" className="hover:underline">Blogs</Link>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-2 md:mb-4">
                        {title}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-2 sm:mb-4 md:mb-6">
                        {description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-600 px-2 py-2 border-t-[0.25px] border-b-[0.25px] border-y-gray-200 ">
                        <div className="flex items-center space-x-4">
                            <span>
                                <strong className="text-gray-900">{author}</strong>
                            </span>
                            <span>&bull;</span>
                            <time dateTime={date}>{formattedDate}</time>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a
                                href={shareUrls.twitter(url, title)}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on Twitter"
                                className="bg-gray-200 hover:bg-black p-1 rounded-full hover:text-white text-gray-500"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href={shareUrls.facebook(url)}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on Facebook"
                                className="bg-gray-200 hover:bg-black p-1 rounded-full hover:text-white text-gray-500"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href={shareUrls.linkedin(url)}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on LinkedIn"
                                className="bg-gray-200 hover:bg-black p-1 rounded-full hover:text-white text-gray-500"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default BlogHeader;