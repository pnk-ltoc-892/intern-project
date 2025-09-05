import Link from "next/link.js";

export default function CTASection() {
    return (
        <div className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:28px_28px] flex justify-center sm:justify-end">
            <section className="container-wrapper padding-wrapper-y min-h-[50vh] w-full flex flex-col items-center justify-center text-center">
                <div className="">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Don't See a Perfect Fit?
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                        We're always looking for talented individuals. Send us your resume and let us know how
                        you'd like to contribute to our mission.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="group">
                            <div className="px-6 sm:px-8 py-3 flex items-center justify-center bg-black text-white rounded-full shadow-md hover:bg-slate-800 transition-all">
                                <span>Get In Touch</span>
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

                        <Link href="/apply-form-link">
                            <div className="px-6 sm:px-8 py-3 flex items-center justify-center border border-gray-500 text-gray-700 rounded-full shadow-sm hover:bg-gray-100 transition-all">
                                Send Resume
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
