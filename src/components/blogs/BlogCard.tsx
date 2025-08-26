import { ExternalLink } from "lucide-react";
import Image from "next/image.js";


const BlogCard: React.FC<{
    title: string;
    author: string;
    readTime: string;
    category: string;
    date: string;
    imageUrl: string;
    excerpt: string;
}> = ({ title, author, readTime, category, date, imageUrl, excerpt }) => (
    <div className="bg-white rounded-2xl hover:shadow-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 text-shadow-gray-900/50">
        {/* <div className="hidden sm:block relative w-full h-48 overflow-hidden rounded-2xl">
            <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
            />
        </div> */}
        <div className="p-4 flex flex-col flex-grow">
            <div className="flex">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex-grow">{title}</h3>
                <span className="pt-2"><ExternalLink className="h-4 w-4" /></span>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-3">
                <span className="font-semibold text-gray-700">{author}</span>
                <span className="mx-2">•</span>
                <span>{readTime}</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm line-clamp-3">{excerpt}</p>
            <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                <span className="px-2 py-1 bg-black text-gray-100 rounded-full">{category}</span>
                <span>{date}</span>
            </div>
        </div>
    </div>
);


export default BlogCard;