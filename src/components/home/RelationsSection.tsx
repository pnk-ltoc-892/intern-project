import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { relationsLogo } from "@/data/Home";
import Image from "next/image.js";


export default function RelationsSection() {
    return (
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
    );
}