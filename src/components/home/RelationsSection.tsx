
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image.js";

export default function RelationsSection() {
    return (
        <InfiniteSlider gap={24} reverse className="w-full h-full bg-white">
            <Image
                src="https://motion-primitives.com/apple_music_logo.svg"
                alt="Apple Music logo"
                className="h-[120px] w-auto"
            />
            <Image
                src="https://motion-primitives.com/chrome_logo.svg"
                alt="Chrome logo"
                className="h-[120px] w-auto"
            />
            <Image
                src="https://motion-primitives.com/strava_logo.svg"
                alt="Strava logo"
                className="h-[120px] w-auto"
            />
            <Image
                src="https://motion-primitives.com/nintendo_logo.svg"
                alt="Nintendo logo"
                className="h-[120px] w-auto"
            />
            <Image
                src="https://motion-primitives.com/jquery_logo.svg"
                alt="Jquery logo"
                className="h-[120px] w-auto"
            />
            <Image
                src="https://motion-primitives.com/prada_logo.svg"
                alt="Prada logo"
                className="h-[120px] w-auto"
            />
        </InfiniteSlider>
    );
}