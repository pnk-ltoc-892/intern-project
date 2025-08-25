import { StickyBanner } from "@/components/ui/sticky-banner";
import { bannerText } from "@/data/Banner";


export default function Banner() {
  return (
    <div className="relative flex w-full flex-col overflow-y-auto">
      <StickyBanner 
            className="bg-gradient-to-t from-black via-slate-950 to-black"
            hideOnScroll={true}
      >
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          {bannerText.message}.{" "}
          <a href={bannerText.link.href} className="transition duration-200 hover:underline">
            {bannerText.link.text}
          </a>
        </p>
      </StickyBanner>
    </div>
  );
}
