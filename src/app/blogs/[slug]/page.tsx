"use client";
import { Heading, Paragraph } from '@/components/blogPage/BlogComponents';
import BlogHeader from '@/components/blogPage/BlogHeader';
import { BlogImage } from '@/components/blogPage/BlogImages';
import BlogCard from '@/components/blogs/BlogCard';
import { blogs } from '@/data/Blogs';
import Link from 'next/link.js';
import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";


export type ContentBlock =
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string };

const Page = () => {

  // const sliderRef = useRef<HTMLDivElement | null>(null);
  // const cardWidthRef = useRef<number>(0);

  // // Measure first card width once mounted
  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (!slider) return;

  //   const firstCard = slider.querySelector("div > a > div") as HTMLElement; // BlogCard wrapper
  //   if (firstCard) {
  //     cardWidthRef.current = firstCard.offsetWidth + 24; // card width + gap (24px from `gap-6`)
  //   }
  // }, []);

  // // Auto-scroll effect
  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (!slider || !cardWidthRef.current) return;

  //   const interval = setInterval(() => {
  //     const cardWidth = cardWidthRef.current;

  //     if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - cardWidth) {
  //       // Reset to start when reaching the end
  //       slider.scrollTo({ left: 0, behavior: "smooth" });
  //     } else {
  //       slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  //     }
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  // // Manual scroll functions
  // const scrollLeft = () => {
  //   if (cardWidthRef.current) {
  //     sliderRef.current?.scrollBy({ left: -cardWidthRef.current, behavior: "smooth" });
  //   }
  // };

  // const scrollRight = () => {
  //   if (cardWidthRef.current) {
  //     sliderRef.current?.scrollBy({ left: cardWidthRef.current, behavior: "smooth" });
  //   }
  // };


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
      <div className="relative max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
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
      <section className="bg-gray-100 py-10 px-4 relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Related Blogs
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4 max-w-full sm:max-w-6xl mx-auto">
          {/* Left Button */}
          {/* <button
            onClick={scrollLeft}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button> */}

          {/* Slider Component */}
          <div
            // ref={sliderRef}
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

          {/* Right Button */}
          {/* <button
            onClick={scrollRight}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default Page;
