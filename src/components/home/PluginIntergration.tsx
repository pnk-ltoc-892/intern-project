import { pluginsIntegration } from '@/data/Home'
import Image from 'next/image'

export default function PluginIntegration() {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold uppercase rounded-full px-3 py-1 mb-4">
                    Plugin Integration
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Effortless Integration with all the apps you use
                </h2>
                <p className="text-gray-700 text-lg">
                    Seamlessly connect with leading bookkeeping or e-commerce software, eliminating manual data downloads and streamlining your workflow.
                </p>
            </div>

            {/* Cards */}
            <div className="mt-12 flex flex-col md:flex-row items-stretch justify-center space-y-6 md:space-y-0 md:space-x-6 max-w-6xl mx-auto">
                {pluginsIntegration.map((plug) => (
                    <div
                        key={plug.name}
                        className="bg-white rounded-2xl shadow p-6 flex-1 flex flex-col"
                    >
                        {/* Logo */}
                        <div className="mb-4">
                            <Image
                                src={plug.logo}
                                alt={plug.name + ' logo'}
                                width={150}
                                height={50}
                                className="object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-2">{plug.name}</h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed flex-grow">
                            {plug.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
