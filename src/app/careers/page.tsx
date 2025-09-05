"use client"
import React, { useState } from "react";
import Image from "next/image.js";
import CareersPageHeader from "@/components/careers/CarrersHeader";
import CTASection from "@/components/common/CTASections";
import { benefits, openPositions } from "@/data/Career";


export default function Careers() {

  const categories = ["All", "Engineering", "Product", "Design", "Sales", "Customer Success"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPositions = openPositions.filter((job) => {
    const matchesCategory =
      selectedCategory === "All" || job.tags.includes(selectedCategory);
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  return (
    <div>
      {/* Hero */}
      <CareersPageHeader />

      {/* Why Work With Us Section - (Benefits Cards) */}
      <section className="bg-gray-100">
        <div className="container-wrapper padding-wrapper-y">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-center sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6">
              We're building the future of financial technology, and we want you to be part of it.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-900">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Open Positions Section */}
      <section className="bg-gray-50">
        <div className="container-wrapper padding-wrapper-y">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting opportunities to grow your career with us.
            </p>
          </div>


          {/* Search + Filters */}
          <div className="flex flex-col lg:items-center justify-between gap-6 mb-12">
            {/* Job Search input */}
            <input
              type="text"
              placeholder="Search by job title or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full lg:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full font-medium border transition cursor-pointer ${selectedCategory === cat
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Jobs Cards */}
          {filteredPositions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPositions.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow hover:shadow-lg p-6 flex flex-col justify-between transition"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-900 mb-4">{job.description}</p>
                  </div>
                  <a
                    href={job.ctaLink}
                    className="mt-auto inline-block text-center bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-700 transition"
                  >
                    {job.ctaText}
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-12">
              No jobs found matching your search.
            </p>
          )}
        </div>
      </section>


      {/* Culture Section */}
      <section className="bg-gray-100">
        <div className="container-wrapper padding-wrapper-y">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-900 mb-8 leading-relaxed">
                At TechStartup, we believe that great products come from great teams. We foster a
                culture of innovation, collaboration, and continuous learning. Our diverse team of
                experts is united by a shared passion for transforming the financial industry through
                technology.
              </p>
              <ul className="space-y-3">
                {[
                  "Innovation-driven environment",
                  "Collaborative and supportive team",
                  "Continuous learning and growth",
                  "Work-life balance",
                ].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 
                          12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg"
                alt="Team collaboration"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section*/}
      <CTASection />
    </div>
  );
}
