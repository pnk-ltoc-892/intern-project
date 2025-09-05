import { testimonials } from '@/data/Home'
import React from 'react'
import { Testimonial } from '../ui/testimonial-card'


const TestimonialSection = () => {
    return (
        <div className="bg-gray-100 container-wrapper padding-wrapper-y gap-8 ">
            <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold uppercase rounded-full px-3 py-1 mb-4">
                    Our Testimonials
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-gray-700 text-lg">
                    We take pride in building solutions that truly make an impact. Here’s what our customers and partners have to say about working with us.
                </p>
            </div>

            <div className="mt-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                    <Testimonial key={testimonial.name} {...testimonial} />
                ))}
            </div>
        </div>
    )
}

export default TestimonialSection