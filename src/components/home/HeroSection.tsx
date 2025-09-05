import { demoLink } from "@/data/Links";
import Image from "next/image.js";
import Link from "next/link.js";


export default function HeroSection() {
    return (
        <div className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:28px_28px] pointer-events-none'">

            {/* Hero Section */}
            <section className="container-wrapper padding-wrapper-y min-h-[60vh] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-left flex flex-col justify-center padding-wrapper-x">
                    <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">
                        Early Fraud Detection to Reduce Loss & Risk
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-xl">
                        InsightAI empowers financial institutions and fintechs to prevent revenue loss,
                        reduce false positives, and stay compliant with real-time fraud detection and
                        adaptive risk management.
                    </p>

                    <div className="flex flex-row gap-2 sm:gap-3 lg:gap-4 justify-start items-center flex-wrap">
                        <Link href={demoLink}>
                            <div className="group px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 flex items-center justify-center bg-black text-white rounded-full text-sm sm:text-base lg:text-lg transition">
                                <span className="whitespace-nowrap">Book a Demo</span>
                            </div>
                        </Link>

                        <Link href="/solutions">
                            <div className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 flex items-center justify-center border border-gray-400 rounded-full hover:bg-gray-100 transition text-sm sm:text-base lg:text-lg">
                                <span className="whitespace-nowrap">Explore Products</span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full lg:w-1/2 padding-wrapper-x flex justify-center items-center">
                    <div className="w-full max-w-[600px]">
                        <Image
                            src="/Home/heroImage.png"
                            alt="Insight AI"
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
}