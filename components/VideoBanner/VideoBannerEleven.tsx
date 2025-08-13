"use client";

import React, { useEffect, useState } from "react";
import NavbarNewFour from "../Navbar/NavbarNewFour";
import { FlipWordsOne } from "../FlipWords/FlipsWords";
import Link from "next/link";
import Image from "next/image";

const VideoBannerEleven: React.FC = () => {
  const [navbarSticky, setNavbarSticky] = useState(false);

  const handleScroll = () => {
    setNavbarSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[67vh] xl:h-[75vh] overflow-hidden">
      {/* Sticky navbar */}
      {/* <NavbarNewFour /> */}

      {/* Background image (replaces video) */}
      <Image
        src="/images/bg-headerr.jpg" // jouw nieuwe achtergrondafbeelding
        alt="Background"
        fill
        priority
        className="object-cover object-[50%_23%]"
      />

      {/* Originele video (gecomment) */}
      {/*
      <video
        autoPlay
        loop
        muted
        playsInline
        classNameName="w-full h-[60vh] object-cover"
      >
        <source src="/video/Reactly.mp4" type="video/mp4" />
        Jouw browser ondersteunt deze video niet.
      </video>
      */}

      {/* Donkere overlay */}
      <div className="absolute inset-0 bg-black/35 z-0 pointer-events-none" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex max-w-7xl flex-col text-center items-center justify-center bottom-10  mx-auto px-6 z-10 text-white">
        <div className="">
          <div className="pt-10">
            <div className="flex items-center justify-center text-center">
              <div className="leading-[0.95]">
                <p className="uppercase mb-2 font-medium text-white tracking-[0.18em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] text-[clamp(16px,5vw,32px)]">
                  NEW STYLES ADDED
                </p>
                <p className="uppercase font-normal text-white/95 tracking-[0.35em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] text-[clamp(14px,3.6vw,28px)] mt-1">
                  UP TO 50% OFF
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <button className="relative w-min mt-5 tracking-wider font-light border dark:border-[#FFF] border-[#FFF] px-10 py-1 text-black overflow-hidden group bg-white transform-gpu">
              <span className="relative z-10 whitespace-nowrap text-[9px] uppercase group-hover:tracking-wide font-medium group-hover:text-black transition-all duration-500 ease-in-out">
                SHOP NOW
              </span>
              <span className="absolute inset-0 bg-[#FFF] dark:bg-[#FFF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0 transform-gpu will-change-transform"></span>
            </button>
          </div>
        </div>
        {/* <div classNameName="uppercase tracking-wide text-4xl md:text-5xl lg:text-7xl font-semibold text-white">
          <FlipWordsOne />
        </div>

        <div classNameName="mt-6 flex flex-row gap-4 text-sm items-center md:items-start justify-center md:justify-start">
          <Link href={"/aanbod"}>
            <button classNameName="relative border-t border-b dark:border-[#c2b293] border-[#c2b293] px-6 py-2 text-white overflow-hidden group transform-gpu">
              <span classNameName="relative z-10 text-xs sm:text-sm uppercase group-hover:tracking-wide group-hover:font-medium group-hover:text-white transition-all duration-500 ease-in-out">
                Ontdek de mogelijkheden
              </span>
              <span classNameName="absolute inset-0 bg-[#c2b293] dark:bg-[#c2b293] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></span>
            </button>
          </Link>

          <Link href={"/contact"}>
            <button classNameName="relative border-t border-b border-white px-4 py-2 text-white overflow-hidden group transform-gpu">
              <span classNameName="relative z-10 text-xs sm:text-sm uppercase group-hover:tracking-wide group-hover:font-medium group-hover:text-black transition-all duration-500 ease-in-out">
                Neem contact op
              </span>
              <span classNameName="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></span>
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default VideoBannerEleven;
