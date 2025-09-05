import React from 'react'
import { StickyScroll } from '../ui/sticky-scroll'
import { features } from "@/data/Home";

const FeaturesFlex = () => {

    return (
        <section className='container-wrapper padding-wrapper-y bg-gray-50'>
            <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold uppercase rounded-full px-3 py-1 mb-4">
                    Main Features
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold py-4">
                    Four Reasons Why InsightAI is Perfectly Optimized for Your Needs
                </h2>
            </div>

            {/* Parallax Scroll */}
            <StickyScroll content={features} />
        </section >
    )
}

export default FeaturesFlex