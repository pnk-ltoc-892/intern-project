import {
    CloudArrowUpIcon,
    ChartBarIcon,
    DocumentTextIcon
} from '@heroicons/react/24/outline'

const steps = [
    {
        title: 'Data Ingestion',
        icon: CloudArrowUpIcon,
        description:
            'Effortlessly ingest data from databases, images, big data, ledgers, and bookkeeping software.',
        badge: 'STEP 1',
    },
    {
        title: 'Data Analysis',
        icon: ChartBarIcon,
        description:
            'Reveal crucial patterns, trends, and insights for smart decision-making and strategic planning.',
        badge: 'STEP 2',
    },
    {
        title: 'Report',
        icon: DocumentTextIcon,
        description:
            'After completing the data analysis, the final step entails generating a comprehensive report, summarizing findings and recommendations for actionable insights.',
        badge: 'STEP 3',
    },
]

export default function HowItWorks() {
    return (
        <section className="container-wrapper padding-wrapper-y bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold uppercase rounded-full px-3 py-1 mb-4">
                    How It Works
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Seamless Integration
                </h2>
                <p className="text-gray-700 text-lg">
                    Effortless integration for advanced analytics. No technology expertise required for a seamless experience.
                </p>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-stretch justify-center space-y-6 md:space-y-0 md:space-x-6 max-w-5xl mx-auto">
                {steps.map((step, idx) => (
                    <div key={step.title} className="relative bg-white rounded-2xl shadow p-6 flex-1">
                        {/* Step badge */}
                        <span className="absolute top-4 right-4 bg-gray-200 text-gray-800 text-xs font-semibold uppercase rounded px-2 py-1">
                            {step.badge}
                        </span>

                        {/* Icon */}
                        <step.icon className="h-12 w-12 text-gray-600 mb-4" />

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
