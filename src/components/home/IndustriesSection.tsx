import React from 'react'
import { industries } from '@/data/Home'
import { FocusCards } from '../ui/focus-card'

const IndustriesSection = () => {
    return (
        <div className="bg-gray-100 px-4 sm:px-8 lg:px-12 py-8 md:py-12 lg:py-16 gap-8 ">
            <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold uppercase rounded-full px-3 py-1 mb-4">
                    Industries
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Those We Support
                </h2>
                <p className="text-gray-700 text-lg">
                    Maximize your financial institution's potential with our specialized solutions and support.
                </p>
            </div>
            <div className='mt-12'>
                <FocusCards cards={industries} />
            </div>
        </div>
    )
}

export default IndustriesSection