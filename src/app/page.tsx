// "use client"

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FAQSection from '@/components/home/FAQSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import RelationsSection from '@/components/home/RelationsSection';
import { Newsletter } from '@/components/common/NewsLetter';
import HowItWorks from '@/components/home/HowItWorks';
import PluginIntegration from '@/components/home/PluginIntergration';
import FeaturesFlex from '@/components/home/FeaturesFlex';
import IndustriesSection from '@/components/home/IndustriesSection';


export default function Home() {
  
  return (
    <div>

      {/* Main Hero Section */}
      <HeroSection />


      {/* Sliding Relations Section Marquee */}
      <div className='px-4 lg:px-8'>
        <h2 className="flex justify-center text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold tracking-tighter mt-5 py-1 px-4">
          Our Relations
        </h2>
        <RelationsSection />
      </div>


      {/* Industries Section */}
      <IndustriesSection />


      {/* How It Works Section */}
      <HowItWorks />

      {/* Integration Section */}
      <PluginIntegration />

      {/* Feature Sticky Scroll*/}
      <FeaturesFlex />

      {/* Testimonial Sections */}
      <TestimonialSection />


      {/* Infinite Sliding Cards Section */}
      {/* // ! Optimize For Sliding Image Section */}
      <Newsletter />


      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}