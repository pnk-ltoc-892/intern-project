import React from "react";
import Link from "next/link";

interface Breadcrumb {
    label: string;
    href?: string; // Optional → last breadcrumb usually not a link
}

interface PageTitleHeaderProps {
    heading: string;
    breadcrumbs: Breadcrumb[];
}

const PageTitleHeader: React.FC<PageTitleHeaderProps> = ({ heading, breadcrumbs }) => {
    return (
        <div className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:28px_28px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            
            <section className="container-wrapper padding-wrapper-y">
                {/* Breadcrumb */}
                <div className="text-md text-gray-700 flex gap-2 font-medium flex-wrap">
                    {breadcrumbs.map((crumb, idx) => (
                        <React.Fragment key={idx}>
                            {crumb.href ? (
                                <Link href={crumb.href} className="hover:underline">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-gray-500">{crumb.label}</span>
                            )}
                            {idx < breadcrumbs.length - 1 && <span>{">"}</span>}
                        </React.Fragment>
                    ))}
                </div>

                {/* Hero Section */}
                <div className="flex flex-col gap-8 items-center justify-center min-h-[20vh]">
                    {/* Text Content */}
                    <div className="text-black text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            {heading}
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PageTitleHeader;
