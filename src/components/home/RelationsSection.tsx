import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { relationsLogo } from "@/data/Home";
import Image from "next/image.js";


export default function RelationsSection() {
    return (
        <div className='container-wrapper'>
            <h2 className="flex justify-center text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold tracking-tighter mt-5 py-1 px-4">
                Our Relations
            </h2>
            <InfiniteSlider gap={28} reverse className="w-full h-full bg-white [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                {relationsLogo.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        height={100}
                        width={0}
                        className="h-[100px] w-auto object-cover"
                    />
                ))}
            </InfiniteSlider>
        </div>
    );
}