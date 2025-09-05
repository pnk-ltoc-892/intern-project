'use client';

import { demoLink } from '@/data/Links';
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
            <section className='container-wrapper padding-wrapper-y'>
                {/* Breadcrumb */}
                <div className="text-md text-gray-700 flex gap-2 font-medium flex-wrap">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span>{'>'}</span>
                    <Link href="/solutions" className="hover:underline">Solutions</Link>
                    <span>{'>'}</span>
                    <span className="text-gray-900">{productHeader.title}</span>
                </div>
            </section>

            {/* Hero Section */}
            <section className="container-wrapper flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16 pb-8 md:pb-12 lg:pb-16">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-left flex flex-col justify-center padding-wrapper-x">
                    <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">
                        {productHeader.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-xl">
                        {productHeader.description}
                    </p>

                    <div className="flex flex-row gap-2 sm:gap-3 lg:gap-4 justify-start items-center flex-wrap">
                        <Link href={demoLink}>
                            <div className="group px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 flex items-center justify-center bg-black text-white rounded-full text-sm sm:text-base lg:text-lg transition">
                                <span className="whitespace-nowrap">Start Free Trial</span>
                            </div>
                        </Link>

                        <Link href="/solutions">
                            <div className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 flex items-center justify-center border border-gray-400 rounded-full hover:bg-gray-100 transition text-sm sm:text-base lg:text-lg">
                                <span className="whitespace-nowrap">Talk To Sales</span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="w-full">
                        <Image
                            src={productHeader.imageUrl}
                            alt={productHeader.title || 'Product Preview'}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolutionHeader;
