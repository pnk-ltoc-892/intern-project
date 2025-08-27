import Image from "next/image.js";
import Link from "next/link.js";


export default function HeroSection() {
    return (
        <div className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:28px_28px] pointer-events-none'">
            
            {/* Hero Section */}
            <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-12 py-8 md:py-12 lg:py-16 gap-8 lg:gap-12">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-left flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
                    <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6">
                        Early Fraud Detection to Reduce Loss & Risk
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                        InsightAI empowers financial institutions and fintechs to prevent revenue
                        loss, reduce false positives, and stay compliant with real-time fraud
                        detection and adaptive risk management.
                    </p>

                    <div className="flex flex-row gap-3 sm:gap-4 lg:gap-8 justify-start items-center">
                        <Link href="/events">
                            <div className="group px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 flex items-center justify-center bg-black text-white rounded-full text-sm sm:text-base lg:text-lg transition">
                                <span>Book a Demo</span>
                            </div>
                        </Link>

                        <Link href="/signup">
                            <div className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 flex items-center justify-center border border-gray-400 rounded-full hover:bg-gray-100 transition text-sm sm:text-base lg:text-lg">
                                Explore Products
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center relative">
                    <Image
                        src="/Home/heroImage.png"
                        alt="Insight AI"
                        width={600}
                        height={400}
                        className="w-full max-w-[600px] h-auto object-cover sm:max-h-[500px]"
                        priority
                    />
                </div>
            </section>
        </div>
    );
}