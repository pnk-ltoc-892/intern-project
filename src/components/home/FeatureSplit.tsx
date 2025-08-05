// components/FeatureSplit.jsx
import Image from 'next/image'

export default function FeatureSplit({
    title,
    imageSrc,
    imageAlt = '',
    items = [],
}) {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
                {/* Left: Image */}
                <div className="w-full md:w-1/2">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Right: Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start">

                    <h2 className="text-xl sm:text-3xl font-semibold mb-4">
                        {title}
                    </h2>

                    {/* Bullet list */}
                    <ul className="space-y-4">
                        {items.map((text, i) => (
                            <li key={i} className="flex items-start">
                                <span className="mt-2 mr-3 w-2 h-2 bg-gray-600 rounded-full flex-shrink-0" />
                                <p className="text-gray-700 leading-relaxed">{text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
