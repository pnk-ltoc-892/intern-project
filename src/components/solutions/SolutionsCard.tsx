import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const SolutionCard: React.FC<{
    title: string
    description: string
    ctaText: string
    ctaLink: string
    imageUrl: string
    imageAlt: string
    tags: string[]
}> = ({ title, description, ctaText, ctaLink, imageUrl, imageAlt, tags }) => (
    <div className="bg-white rounded-2xl hover:shadow-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300">
        {/* Image Section */}
        {/* <div className="relative w-full h-48 overflow-hidden">
            <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
            />
        </div> */}

        {/* Content */}
        <div className="p-4 flex flex-col ">
            <div className="flex ">
                <h3 className="flex-1 text-2xl font-bold text-black mb-2">{title}</h3>
                <Link
                    href={ctaLink}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                    {ctaText}
                    <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
            </div>

            <p className="min-h-sm text-gray-600 mb-4 text-lg line-clamp-3">{description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-900 text-gray-200 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
)

export default SolutionCard
