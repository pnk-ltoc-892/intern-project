"use client";
import { Heading, Paragraph } from '@/components/blogPage/BlogComponents';
import BlogHeader from '@/components/blogPage/BlogHeader';
import { BlogImage } from '@/components/blogPage/BlogImages';
import BlogCard from '@/components/blogs/BlogCard';
import { blogs } from '@/data/Blogs';
import Link from 'next/link.js';
import React from 'react';


export type ContentBlock =
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string };

const Page = () => {

  const dummyPost = {
    title: 'Building Scalable Startups: A Technical Deep Dive',
    description:
      'Explore key architectural patterns, tooling, and best practices for scaling modern startups.',
    author: 'Jane Doe',
    date: '2025-07-30T08:00:00Z',
    url: 'https://example.com/blog/scalable-startups',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Scalable Startups', href: '/blog/scalable-startups' },
    ],
  };

  const blog: ContentBlock[] = [
    { type: 'heading', content: 'Breaking down Friend of Medium membership' },
    {
      type: 'paragraph',
      content:
        'Becoming a Friend of Medium member means that when you read paywalled stories on Medium, those writers earn more. It also means you can share any paywalled story with non-Members, and when they read those stories, that engagement contributes to the writer’s earnings as well.',
    },
    {
      type: 'paragraph',
      content:
        'What Friend of Medium membership doesn’t do: increase your earnings as a writer. This is the top misconception I see about this membership option, so I wanted to clear it up. It’s an altruistic option if you want to support the writers you read more',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3183162/pexels-photo-3183162.jpeg',
      alt: 'Image',
    },
    { type: 'heading', content: 'Breaking down Friend of Medium membership' },
    {
      type: 'paragraph',
      content:
        'What Friend of Medium membership doesn’t do: increase your earnings as a writer. This is the top misconception I see about this membership option, so I wanted to clear it up. It’s an altruistic option if you want to support the writers you read more',
    },
  ];

  return (
    <div>
      {/* Blog Header */}
      <BlogHeader
        title={dummyPost.title}
        description={dummyPost.description}
        author={dummyPost.author}
        date={dummyPost.date}
        url={dummyPost.url}
        breadcrumb={dummyPost.breadcrumb}
      />

      {/* Blog Content */}
      <div className="relative max-w-4xl mx-auto padding-wrapper-x py-4 lg:py-6">
        <article>
          {blog.map((block, idx) => {
            if (block.type === 'heading') {
              return <Heading key={idx}>{block.content}</Heading>;
            } else if (block.type === 'image') {
              return (
                <BlogImage
                  key={idx}
                  src={block.src}
                  alt={block.alt}
                  className="shadow-lg"
                />
              );
            } else {
              return <Paragraph key={idx}>{block.content}</Paragraph>;
            }
          })}
        </article>
      </div>

      {/* Related Blogs Slider */}
      <section className="bg-gray-100">
        <div className='container-wrapper padding-wrapper-y'>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Related Blogs
            </h2>
          </div>

          <div className="flex items-center justify-center gap-4 max-w-full sm:max-w-6xl mx-auto">
            <div
              className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4 flex-1"
            >
              {blogs.slice(0, 6).map((blog) => (
                <div
                  key={blog.id}
                  className="w-[90%] sm:w-[50%] lg:w-[30%] flex-shrink-0"
                >
                  <Link href={`/blogs/${blog.id}`}>
                    <BlogCard
                      title={blog.title}
                      author={blog.author}
                      readTime={blog.readTime}
                      category={blog.category}
                      date={blog.date}
                      imageUrl={blog.imageUrl}
                      excerpt={blog.excerpt}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
