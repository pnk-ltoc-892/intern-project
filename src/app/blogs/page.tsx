"use client";
import React, { useState, useMemo } from "react";
import BlogsPageHeader from "@/components/blogs/BlogsPageHeader";
import BlogCard from "@/components/blogs/BlogCard";
import { Newsletter } from "@/components/common/NewsLetter";
import Link from "next/link.js";
import { blogs } from "@/data/Blogs";


export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  // Filter + limit blogs
  const filteredBlogs = useMemo(() => {
    let filtered = blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // If no search/category filter, show only latest 6
    if (searchTerm === "" && selectedCategory === "All") {
      return filtered.slice(0, 6);
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Blog Page Header */}
      <BlogsPageHeader />

      <div className="container-wrapper">
        {/* Blog Search + Categories */}
        <section className="padding-wrapper-y">
          {/* Search bar */}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white w-full lg:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm sm:text-md px-2 sm:px-4 sm:py-2 rounded-full font-medium border transition cursor-pointer ${selectedCategory === cat
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Blogs List */}
        <section className="">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {searchTerm || selectedCategory !== "All"
                ? ""
                : "Latest Blogs"}
            </h2>
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog) => (
                <Link href={`/blogs/${blog.id}`} key={blog.id}>
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
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mt-6">
              No blogs found. Try a different search or category.
            </p>
          )}
        </section>
      </div>

      {/* Newsletter Component */}
      <div className="bg-gray-100">
        <Newsletter />
      </div>
    </div>
  );
}
