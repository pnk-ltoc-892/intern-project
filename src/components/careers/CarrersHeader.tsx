'use client';
import Link from 'next/link';


const CareersPageHeader = () => {
    return (
        <div className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:28px_28px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-6 text-sm text-gray-700 flex gap-2 font-medium">
                <Link href="/" className="hover:underline">Home</Link>
                <span>{'>'}</span>
                <Link href="/careers" className="hover:underline">Careers</Link>
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-4 sm:py-6 lg:py-8">
                <div className="flex flex-col gap-8 items-center justify-center min-h-[30vh]">
                    {/* Text Content */}
                    <div className="text-black text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            Join Our Dynamic Team
                        </h1>
                        <p className="text-base sm:text-lg md:text-2xl text-gray-600 mb-4 sm:mb-6 max-w-4xl">
                            Build the future of financial technology with us. Explore opportunities and grow your career.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default CareersPageHeader;