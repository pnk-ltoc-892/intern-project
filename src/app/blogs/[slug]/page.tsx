import { Heading, Paragraph } from '@/components/blogPage/BlogComponents';
import BlogHeader from '@/components/blogPage/BlogHeader'
import { BlogImage } from '@/components/blogPage/BlogImages';
import React from 'react'

export type ContentBlock =
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'image';     src: string; alt: string };


const page = () => {

  const dummyPost = {
    title: 'Building Scalable Startups: A Technical Deep Dive',
    description: 'Explore key architectural patterns, tooling, and best practices for scaling modern startups.',
    author: 'Jane Doe',
    date: '2025-07-30T08:00:00Z',
    url: 'https://example.com/blog/scalable-startups',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Scalable Startups', href: '/blog/scalable-startups' }
    ]
  };

  const blog: ContentBlock[] = [
    { type: 'heading', content: 'Breaking down Friend of Medium membership' },
    { type: 'paragraph', content: 'Becoming a Friend of Medium member means that when you read paywalled stories on Medium, those writers earn more. It also means you can share any paywalled story with non-Members, and when they read those stories, that engagement contributes to the writer’s earnings as well.' },
    { type: 'paragraph', content: 'What Friend of Medium membership doesn’t do: increase your earnings as a writer. This is the top misconception I see about this membership option, so I wanted to clear it up. It’s an altruistic option if you want to support the writers you read more' },
    {
    type: 'image',
    src: 'https://images.pexels.com/photos/3183162/pexels-photo-3183162.jpeg',
    alt: 'Image'
    },
    { type: 'heading', content: 'Breaking down Friend of Medium membership' },
    { type: 'paragraph', content: 'What Friend of Medium membership doesn’t do: increase your earnings as a writer. This is the top misconception I see about this membership option, so I wanted to clear it up. It’s an altruistic option if you want to support the writers you read more' },
    { type: 'heading', content: 'Breaking down Friend of Medium membership' },
    {
    type: 'image',
    src: 'https://images.pexels.com/photos/3183162/pexels-photo-3183162.jpeg',
    alt: 'Image'
    },
    { type: 'paragraph', content: 'What Friend of Medium membership doesn’t do: increase your earnings as a writer. This is the top misconception I see about this membership option, so I wanted to clear it up. It’s an altruistic option if you want to support the writers you read more' }
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
      <div className="relative max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border-l border-r">
        <article>
          {blog.map((block, idx) => {
            if (block.type === 'heading') {
              return <Heading key={idx}>{block.content}</Heading>;
            }
            else if (block.type === 'image') {
              return <BlogImage key={idx} src={block.src}alt={block.alt} className="shadow-lg" />
            } else {
              return <Paragraph key={idx}>{block.content}</Paragraph>;
            }
          })}
        </article>
      </div>

    </div>
  )
}

export default page