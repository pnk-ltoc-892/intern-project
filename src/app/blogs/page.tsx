import React from 'react';
import Card from '@/components/common/Card';

export default function Blogs() {
  const featuredPost = {
    title: 'The Future of Financial Technology: Trends to Watch in 2024',
    description: 'Explore the latest trends shaping the financial technology landscape, from AI-powered fraud detection to blockchain-based compliance solutions.',
    imageUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    imageAlt: 'Future of fintech',
    ctaText: 'Read Full Article',
    ctaLink: '/blogs/future-of-fintech-2024',
    tags: ['Fintech', 'AI', 'Blockchain', 'Trends']
  };

  const blogPosts = [
    {
      title: 'Understanding AML Compliance in the Digital Age',
      description: 'A comprehensive guide to anti-money laundering compliance requirements and how technology can help financial institutions stay compliant.',
      imageUrl: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
      imageAlt: 'AML compliance guide',
      ctaText: 'Read More',
      ctaLink: '/blogs/aml-compliance-digital-age',
      tags: ['AML', 'Compliance', 'Regulations']
    },
    {
      title: 'Document Fraud Prevention: Best Practices',
      description: 'Learn about the latest techniques and technologies used to prevent document fraud in financial institutions.',
      imageUrl: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
      imageAlt: 'Document fraud prevention',
      ctaText: 'Read More',
      ctaLink: '/blogs/document-fraud-prevention',
      tags: ['Fraud Prevention', 'Security', 'Documents']
    },
    {
      title: 'The Rise of API-First Banking',
      description: 'How APIs are transforming the banking industry and enabling new levels of innovation and customer experience.',
      imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      imageAlt: 'API-first banking',
      ctaText: 'Read More',
      ctaLink: '/blogs/api-first-banking',
      tags: ['APIs', 'Banking', 'Innovation']
    },
    {
      title: 'Risk Management in the Modern Era',
      description: 'Exploring how technology is revolutionizing risk management practices in financial institutions.',
      imageUrl: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      imageAlt: 'Modern risk management',
      ctaText: 'Read More',
      ctaLink: '/blogs/modern-risk-management',
      tags: ['Risk Management', 'Technology', 'Finance']
    },
    {
      title: 'Building Trust in Digital Financial Services',
      description: 'How financial institutions can build and maintain customer trust in an increasingly digital world.',
      imageUrl: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg',
      imageAlt: 'Digital trust in finance',
      ctaText: 'Read More',
      ctaLink: '/blogs/building-trust-digital-finance',
      tags: ['Trust', 'Digital Services', 'Customer Experience']
    },
    {
      title: 'The Impact of AI on Financial Compliance',
      description: 'Discover how artificial intelligence is transforming compliance processes and reducing operational risks.',
      imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      imageAlt: 'AI in financial compliance',
      ctaText: 'Read More',
      ctaLink: '/blogs/ai-impact-financial-compliance',
      tags: ['AI', 'Compliance', 'Automation']
    }
  ];

  const categories = [
    { name: 'All Posts', count: 24 },
    { name: 'Fintech', count: 8 },
    { name: 'Compliance', count: 6 },
    { name: 'Security', count: 5 },
    { name: 'Technology', count: 5 }
  ];

  return (
    <div>
      {/* Hero Banner */}
      {/* <Banner
        type="inner"
        title="Blog & Insights"
        subtitle="Industry Knowledge"
        description="Stay informed with the latest trends, insights, and best practices in financial technology."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blogs', href: '/blogs' }
        ]}
      /> */}

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card
              title={featuredPost.title}
              description={featuredPost.description}
              imageUrl={featuredPost.imageUrl}
              imageAlt={featuredPost.imageAlt}
              ctaText={featuredPost.ctaText}
              ctaLink={featuredPost.ctaLink}
              variant="blog"
              tags={featuredPost.tags}
            />
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Latest Articles
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our latest insights and thought leadership on financial technology.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card
                    key={index}
                    title={post.title}
                    description={post.description}
                    imageUrl={post.imageUrl}
                    imageAlt={post.imageAlt}
                    ctaText={post.ctaText}
                    ctaLink={post.ctaLink}
                    variant="blog"
                    tags={post.tags}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href={`/blogs/category/${category.name.toLowerCase().replace(' ', '-')}`}
                        className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-gray-700">{category.name}</span>
                        <span className="text-gray-500 text-sm">({category.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter for the latest insights and updates.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}