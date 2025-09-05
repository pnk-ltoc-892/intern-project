import React from 'react'

const Achievements = () => {
    const achievements = [
        { label: "Companies Supported", value: "300+" },
        { label: "Projects Finalized", value: "800+" },
        { label: "Happy Customers", value: "99%" },
        { label: "Recognized Awards", value: "10+" },
    ];

    return (
        <section className='bg-gray-50'>
            <div className="container-wrapper padding-wrapper-y">
                {/* Heading + Subtext */}
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our Achievements in Numbers
                    </h2>
                    <p className="max-w-2xl text-gray-600 mx-auto md:mx-0">
                        Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
                    {achievements.map((item, idx) => (
                        <div key={item.label + idx} className="flex flex-col gap-2">
                            <span className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                                {item.value}
                            </span>
                            <p className="text-gray-600 text-sm md:text-base">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Achievements