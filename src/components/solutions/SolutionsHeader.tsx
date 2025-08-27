'use client';

import Image from 'next/image';
import Link from 'next/link';

interface SolutionHeaderProps {
    productHeader: {
        title: string;
        description: string;
        imageUrl: string;
    };
}

const SolutionHeader: React.FC<SolutionHeaderProps> = ({ productHeader }) => {
    return (
        <div className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:28px_28px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-6 text-sm text-gray-700 flex gap-2 font-medium flex-wrap">
                <Link href="/" className="hover:underline">Home</Link>
                <span>{'>'}</span>
                <Link href="/solutions" className="hover:underline">Solutions</Link>
                <span>{'>'}</span>
                <span className="text-gray-900">{productHeader.title}</span>
            </div>

            {/* Hero Section */}
            <section className="px-4 sm:px-8 lg:px-12 py-8 md:py-12 lg:py-16 gap-8 lg:gap-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center min-h-[60vh]">
                    {/* Text Content */}
                    <div className="text-black text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            {productHeader.title}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                            {productHeader.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/events">
                                <div className="px-6 sm:px-8 py-3 flex items-center justify-center bg-black text-white rounded-full hover:bg-slate-800 transition">
                                    <span>Start Free Trial</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </div>
                            </Link>

                            <Link href="/signup">
                                <div className="px-6 sm:px-8 py-3 flex items-center justify-center border border-gray-400 rounded-full hover:bg-gray-100 transition">
                                    Talk To Sales
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-md">
                        <Image
                            src={productHeader.imageUrl}
                            alt={productHeader.title || 'Product Preview'}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolutionHeader;
