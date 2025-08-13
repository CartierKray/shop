import FooterSectionSM from "@/components/Footer/SWFooter";
import FadeInWhenVisible from "@/components/FadeInWhenVisible/FadeInWhenVisible";
import BistroGreenShowcase from "@/components/BistroShowCase/BistroShowCase";
import GridClothing from "@/components/GridClothing/GridClothing";
import HeroSlide from "@/components/HeroSlide/HeroSlide";
import VideoBannerEleven from "@/components/VideoBanner/VideoBannerEleven";
import CategoryGrid from "@/components/CategoryGrid/CategoryGrid";
import PlaylistHero from "@/components/PlayListHero/PlayListHero";
import NavbarNewSeven from "@/components/Navbar/NavbarNewSeven";
import { Reviews } from "@/components/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <div>
        <NavbarNewSeven />
        <PlaylistHero />
        {/* <div className="pt-24 lg:pt-28 pb-10 dark:bg-black">
          <ComponentHeaderClothing />
        </div> */}

        {/* <div>
          <div className="w-full  pt-24 lg:pt-32 pb-20 text-center">
            <span className="block uppercase tracking-[0.18em] text-[12px] sm:text-[13px] text-black dark:text-white">
              AREA020 X OAKLEY
            </span>
            <div
              className="mt-1 text-black dark:text-white font-medium tracking-[-0.01em] leading-[1.05]
               text-[34px] sm:text-[44px] md:text-[56px]"
            >
              Gascan® - Blue <br className="hidden md:flex" /> Steel Fade
            </div>
          </div>
        </div> */}
        <FadeInWhenVisible delay={0.1}>
          <div className="py-28 lg:py-28">
            <BistroGreenShowcase />
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <div className="pt-10">
            <div className="w-full lg:mt-0  text-center">
              <span className="block uppercase tracking-[0.18em] text-[12px] sm:text-[13px] text-black dark:text-white">
                AREA020 X OAKLEY
              </span>
              <div
                className="mt-1 text-black dark:text-white font-medium tracking-[-0.01em] leading-[1.05]
               text-[34px] sm:text-[44px] md:text-[56px]"
              >
                Gascan® - Blue <br className="hidden md:flex" /> Steel Fade
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <div className="pt-32 pb-32">
            <GridClothing />
          </div>
        </FadeInWhenVisible>

        {/* <div>
          <div className="w-full lg:mt-0 -mt-10 pb-24 text-center">
            <span className="block uppercase tracking-[0.18em] text-[12px] sm:text-[13px] text-black dark:text-white">
              AREA020 X OAKLEY
            </span>
            <div
              className="mt-1 text-black dark:text-white font-medium tracking-[-0.01em] leading-[1.05]
               text-[34px] sm:text-[44px] md:text-[56px]"
            >
              Gascan® - Blue <br className="hidden md:flex" /> Steel Fade
            </div>
          </div>
        </div> */}

        {/* <FadeInWhenVisible delay={0.1}>
          <div className="">
            <RolexAdvies />
          </div>
        </FadeInWhenVisible> */}

        <FadeInWhenVisible delay={0.1}>
          <div>
            <HeroSlide />
          </div>
        </FadeInWhenVisible>

        {/* <FadeInWhenVisible delay={0.1}>
          <div className="pt-32 lg:pt-40">
            <div className="w-full lg:mt-0  text-center">
              <span className="block uppercase tracking-[0.18em] text-[12px] sm:text-[13px] text-black dark:text-white">
                AREA020 X OAKLEY
              </span>
              <div
                className="mt-1 text-black dark:text-white font-medium tracking-[-0.01em] leading-[1.05]
               text-[34px] sm:text-[44px] md:text-[56px]"
              >
                Gascan® - Blue <br className="hidden md:flex" /> Steel Fade
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <div className="pt-32">
            <GridClothing />
          </div>
        </FadeInWhenVisible> */}

        {/* <div className="pt-32 my-10">
          <div className="w-full  pb-32 lg:pb-20 text-center">
            <span className="block uppercase tracking-[0.18em] text-[12px] sm:text-[13px] text-black dark:text-white">
              AREA020 X OAKLEY
            </span>
            <div
              className="mt-1 text-black dark:text-white font-medium tracking-[-0.01em] leading-[1.05]
               text-[34px] sm:text-[44px] md:text-[56px]"
            >
              Gascan® - Blue <br className="hidden md:flex" /> Steel Fade
            </div>
          </div>
        </div> */}

        <FadeInWhenVisible delay={0.1}>
          <div className="py-20 lg:py-48">
            <CategoryGrid />
          </div>
        </FadeInWhenVisible>

        <div>
          <div className="w-full lg:mt-0 pb-14 lg:pb-40 text-center">
            <span className="block uppercase tracking-[0.18em] text-[12px] sm:text-[13px] text-black dark:text-white">
              AREA020 X OAKLEY
            </span>
            <div
              className="mt-1 text-black dark:text-white font-medium tracking-[-0.01em] leading-[1.05]
               text-[34px] sm:text-[44px] md:text-[56px]"
            >
              Gascan® - Blue <br className="hidden md:flex" /> Steel Fade
            </div>
          </div>
        </div>

        <FadeInWhenVisible delay={0.1}>
          <div className="pb-20 lg:pb-32">
            <Reviews />
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          {/* <PlaylistHero /> */}
          <VideoBannerEleven />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <FooterSectionSM />
        </FadeInWhenVisible>
      </div>
    </>
  );
}
