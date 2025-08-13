"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type HeroSlideProps = {
  centerSrc?: string;
  leftSrc?: string;
  rightSrc?: string;
  range?: number; // max parallax-offset in px
  centerMaxW?: number; // optioneel, niet verplicht (desktop)
};

const cn = (...c: Array<string | false | null | undefined>) =>
  c.filter(Boolean).join(" ");

export default function HeroSlide({
  centerSrc = "/images/29052025-_MG_1276.webp",
  leftSrc = "/images/29052025-_MG_1677.webp",
  rightSrc = "/images/29052025-_MG_1610.webp",
  range = 400,
  centerMaxW = 1280,
}: HeroSlideProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  // Scroll progress door alléén deze sectie
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Basis Y (tegenstroom met scroll)
  const baseY = useTransform(scrollYProgress, [0, 1], [range, -range]);

  // Parallax snelheden
  const leftYRaw = useTransform(baseY, (v) => v * 1.35);
  const rightYRaw = useTransform(baseY, (v) => v * 0.85);
  const centerYRaw = useTransform(baseY, (v) => v * 0.35);

  // Smoothing
  const leftY = useSpring(leftYRaw, { mass: 0.6, stiffness: 140, damping: 26 });
  const rightY = useSpring(rightYRaw, {
    mass: 0.7,
    stiffness: 135,
    damping: 27,
  });
  const centerY = useSpring(centerYRaw, {
    mass: 0.8,
    stiffness: 130,
    damping: 28,
  });

  // Depth op midden
  const centerScale = useTransform(
    baseY,
    [-range, 0, range],
    [1.015, 1, 0.985]
  );
  const centerOpacity = useTransform(
    baseY,
    [-range, 0, range],
    [0.97, 1, 0.97]
  );

  return (
    <section
      ref={ref}
      className="relative w-full h-[75vh] max-h-[75vh] overflow-hidden"
      aria-label="Vertical Parallax Hero"
    >
      {/* Canvas/grid */}
      <div
        className={cn(
          "mx-auto grid h-full w-full max-w-[1800px]",
          // 25% / 50% / 25% op lg+
          "grid-cols-1 lg:grid-cols-[minmax(0,0.25fr)_minmax(0,0.5fr)_minmax(0,0.25fr)]",
          "gap-2 px-3"
        )}
      >
        {/* LEFT (lg+) */}
        <div className="relative hidden lg:block">
          <div className="sticky top-[12vh] h-[calc(100vh-12vh)]">
            <motion.div
              style={{ y: leftY, willChange: "transform" }}
              className="h-full"
            >
              <Frame mode="portrait" dark>
                <Image
                  src={leftSrc}
                  alt="Left look"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </Frame>
            </motion.div>
          </div>
        </div>

        {/* CENTER (fill de kolom) */}
        <div className="relative">
          <div className="sticky top-[6vh] h-[calc(100vh-6vh)]">
            <motion.div
              style={{
                y: centerY,
                scale: centerScale,
                opacity: centerOpacity,
                willChange: "transform,opacity",
              }}
              className="w-full h-full"
            >
              <div
                className="relative mx-auto h-full w-full"
                style={{ maxWidth: centerMaxW }}
              >
                <Frame mode="fill" gradient>
                  <Image
                    src={centerSrc}
                    alt="Product hero"
                    fill
                    className="object-cover"
                    priority
                  />
                </Frame>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT (lg+) */}
        <div className="relative hidden lg:block">
          <div className="sticky top-[40vh] h-[calc(100vh-40vh)]">
            <motion.div
              style={{ y: rightY, willChange: "transform" }}
              className="h-full"
            >
              <Frame mode="portrait" dark>
                <Image
                  src={rightSrc}
                  alt="Right look"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </Frame>
            </motion.div>
          </div>
        </div>

        {/* =========================
           MOBILE/TABLET (overlappend)
           - absolute stacked cards
           - direct zichtbaar en overlappend
           - parallax via transforms
           ========================= */}
        <div className="lg:hidden relative col-span-1">
          {/* hoogte zodat alles past (cards liggen boven elkaar) */}
          <div className="relative h-[88vh] md:h-[100vh] ">
            {/* Left card (onderste) */}
            <motion.div
              style={{ y: leftY, willChange: "transform" }}
              className="absolute right-1/6 md:right-1/2 -translate-x-1/2 top-[-110%] md:top-[-90%] w-[65%] md:w-[42%] z-30"
            >
              <Frame mode="portrait" dark>
                <Image
                  src={leftSrc}
                  alt="Left look"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={false}
                />
              </Frame>
            </motion.div>

            {/* Right card (middenlaag) */}
            <motion.div
              style={{ y: rightY, willChange: "transform" }}
              className="absolute left-1/2 md:left-1/2 -translate-x-1/2 top-[-125%] md:top-[-110%] w-[55%] md:w-[35%] z-20"
            >
              <Frame mode="portrait" dark>
                <Image
                  src={rightSrc}
                  alt="Right look"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={false}
                />
              </Frame>
            </motion.div>

            {/* Center card (bovenste) */}
            <motion.div
              style={{
                y: centerY,
                scale: centerScale,
                opacity: centerOpacity,
                willChange: "transform,opacity",
              }}
              className="absolute left-1/2 -translate-x-1/2 top-[6%] w-[94%] z-40"
            >
              <Frame mode="wide" gradient>
                <Image
                  src={centerSrc}
                  alt="Product hero"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </Frame>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== helpers ===== */

type FrameMode = "fill" | "wide" | "portrait";

function Frame({
  children,
  dark,
  gradient,
  mode = "portrait",
}: {
  children: React.ReactNode;
  dark?: boolean;
  gradient?: boolean;
  mode?: FrameMode;
}) {
  // Hoogte/breedte gedrag
  const sizeClass =
    mode === "fill"
      ? "h-full w-full" // vult kolom (geen fixed aspect)
      : mode === "wide"
      ? "w-full pb-[46%]" // 21:9-ish
      : "w-full pb-[125%]"; // ~3:4 voor side frames

  const bg = gradient
    ? "bg-gradient-to-b from-[#0b0f18] via-[#101624] to-[#dbe1ee]"
    : dark
    ? "bg-[#0b0f18]"
    : "bg-black";

  return (
    <div className={cn("relative overflow-hidden rounded-none", sizeClass, bg)}>
      {children}
    </div>
  );
}
