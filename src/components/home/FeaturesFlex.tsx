import React from 'react'
import { FeaturesStickyScroll } from './FeaturesStickyScroll'


const FeaturesFlex = () => {

    return (
        <>
            <section className='py-12 px-4 sm:px-6 lg:px-8 bg-gray-50'>
                <div className="max-w-3xl mx-auto text-center">
                    <span className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold uppercase rounded-full px-3 py-1 mb-4">
                        Main Features
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold py-4">
                        Four Reasons Why InsightAI is Perfectly Optimized for Your Needs
                    </h2>
                </div>
            </section>
            {/* Parallax Scroll */}
            <FeaturesStickyScroll />
        </>
    )
}

export default FeaturesFlex