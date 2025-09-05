import React from 'react';
import Link from 'next/link';
import { SolutionsGrid } from '@/components/solutions/SolutionsGrid';


export default function Solutions() {
  return (
    <div>
      {/* Solutions Pages */}
      <section className="">
        <div className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:28px_28px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">

          <section className='container-wrapper padding-wrapper-y'>
            {/* Breadcrumb */}
            <div className="text-md text-gray-700 flex gap-2 font-medium">
              <Link href="/" className="hover:underline">Home</Link>
              <span>{'>'}</span>
              <Link href="/solutions" className="hover:underline">Solutions</Link>
            </div>

            <div className="flex flex-col gap-8 items-center justify-center min-h-[30vh]">
              {/* Text Content */}
              <div className="text-black text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                  Our Solutions
                </h1>
                <p className="text-base sm:text-lg md:text-2xl text-gray-600 mb-4 sm:mb-6 max-w-4xl">
                  Discover our comprehensive suite of technology solutions designed to address specific business challenges.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className='container-wrapper padding-wrapper-y'>
        <SolutionsGrid />
      </section>
    </div>
  );
}