import { Check } from "lucide-react";

interface FeatureCardProps {
    title: string;
    features: string[];
    ctaLabel?: string;
    onCtaClick?: () => void;
}

export const SolutionSalientFeatures = ({
    title,
    features,
    ctaLabel = "Request a demo",
    onCtaClick,
}: FeatureCardProps) => {
    return (
        <div className="bg-gray-200/80 rounded-3xl p-6 md:p-10 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">{title}</h2>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 bg-black text-gray-200 rounded-full shadow-sm text-sm md:text-base"
                    >
                        <Check className="text-white w-4 h-4" />
                        {feature}
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <button
                    onClick={onCtaClick}
                    className="bg-gray-100 text-black px-6 py-2 rounded-full hover:bg-gray-300 transition cursor-pointer"
                >
                    {ctaLabel}
                </button>
            </div>
        </div>
    );
};
