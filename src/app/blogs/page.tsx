import React from 'react';
import Card from '@/components/common/Card';
import BlogsPageHeader from '@/components/blogs/BlogsPageHeader';
import BlogCard from '@/components/blogs/BlogCard';
import { Newsletter } from '@/components/common/NewsLetter';
import Link from 'next/link.js';

export default function Blogs() {

  const blogs = [
    {
      id: 1,
      title: "The Basics of Investing in Stocks for Millennials",
      author: "Zoe Martinez",
      readTime: "5 min read",
      category: "Finance",
      date: "Mar 09, 2024",
      imageUrl: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
      description:
        "A simple guide to understanding the basics of investing, including stocks and portfolio diversification.",
      excerpt:
        "A simple guide to understanding the basics of investing, stocks, bonds, and portfolio diversification.",
    },
    {
      id: 2,
      title: "Effective Strategies for Building a Personal Brand",
      author: "Kevin Tran",
      readTime: "5 min read",
      category: "Marketing",
      date: "Mar 09, 2024",
      imageUrl: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
      description:
        "Step-by-step strategies for creating a memorable and authentic personal brand online.",
      excerpt:
        "Step-by-step tactics to craft a memorable, authentic personal brand that resonates with your audience.",
    },
    {
      id: 3,
      title: "How to Prepare Yourself for a Successful Job Interview",
      author: "Jamie Li",
      readTime: "5 min read",
      category: "Career Advice",
      date: "Mar 09, 2024",
      imageUrl: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg",
      description:
        "From research to follow-up, explore practical tips on how to make a great impression.",
      excerpt:
        "Practical tips—from company research to follow‑up etiquette—to help you ace your next job interview.",
    },
    {
      id: 4,
      title: "Latest Trends in AI and Machine Learning",
      author: "Alex Kim",
      readTime: "7 min read",
      category: "Tech",
      date: "Apr 15, 2024",
      imageUrl: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
      description:
        "An overview of emerging technologies and their applications in various industries.",
      excerpt:
        "A quick overview of cutting‑edge AI and machine learning trends transforming industries today.",
    },
    {
      id: 5,
      title: "Designing User-Centered Interfaces: Best Practices",
      author: "Sara Patel",
      readTime: "6 min read",
      category: "Design",
      date: "May 02, 2024",
      imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      description:
        "Key principles and examples for creating intuitive, user-friendly UI designs.",
      excerpt:
        "Key principles and real‑world examples for crafting intuitive, user‑friendly interface designs.",
    },
    {
      id: 6,
      title: "Boost Your Productivity: Time Management Tips",
      author: "Michael Chen",
      readTime: "4 min read",
      category: "Productivity",
      date: "Jun 10, 2024",
      imageUrl: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg",
      description:
        "Practical techniques to help you manage your time and tasks more effectively.",
      excerpt:
        "Proven time‑management techniques to help you streamline tasks and accomplish more every day.",
    },
    {
      id: 7,
      title: "Mindfulness Techniques for a Balanced Life",
      author: "Emily Johnson",
      readTime: "5 min read",
      category: "Wellness",
      date: "Jul 20, 2024",
      imageUrl: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
      description:
        "Explore simple mindfulness practices to reduce stress and improve focus.",
      excerpt:
        "Simple mindfulness exercises you can do anywhere to reduce stress and boost focus.",
    },
    {
      id: 8,
      title: "Top 10 Travel Destinations for Remote Workers",
      author: "David Lee",
      readTime: "8 min read",
      category: "Travel",
      date: "Aug 05, 2024",
      imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      description:
        "Discover the best cities and coworking spots around the world for digital nomads.",
      excerpt:
        "Discover the top cities and coworking hotspots worldwide perfect for remote work and adventure.",
    },
    {
      id: 9,
      title: "From Side Hustle to Startup: A Founder’s Journey",
      author: "Ana Garcia",
      readTime: "7 min read",
      category: "Entrepreneurship",
      date: "Sep 12, 2024",
      imageUrl: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
      description:
        "Lessons learned and tips for scaling your side project into a successful business.",
      excerpt:
        "Lessons and actionable tips for scaling your side hustle into a thriving startup venture.",
    },
  ];



  return (
    <div>
      {/* Blog Page Header */}
      <BlogsPageHeader />

      {/* Latest Blogs */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 py-4">
            Featured Blogs
          </h2>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link href={'blogs/1'} key={blog.id}>
              <BlogCard
                key={blog.id}
                title={blog.title}
                author={blog.author}
                readTime={blog.readTime}
                category={blog.category}
                date={blog.date}
                imageUrl={blog.imageUrl}
                excerpt={blog.excerpt}
              />
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />

    </div>
  );
}