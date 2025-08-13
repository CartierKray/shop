"use client";

import * as React from "react";
import Image from "next/image";
import { useEffect } from "react";

/* =============== Helpers =============== */
const cn = (...c: Array<string | false | null | undefined>) =>
  c.filter(Boolean).join(" ");

type MarqueeDir = "ltr" | "rtl" | "ttb" | "btt";

function Marquee({
  children,
  speed = 22,
  gap = "2rem",
  dir = "ltr",
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  gap?: string;
  dir?: MarqueeDir;
  className?: string;
}) {
  const horiz = dir === "ltr" || dir === "rtl";
  const duration = Math.max(6, (horiz ? 600 : 400) / speed);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes wave {
          0% {
            transform: rotateZ(0deg) translate3d(0, 10%, 15px) rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg) translate3d(0, 10%, 15px) rotateZ(-360deg);
          }
        }
      `;
    document.head.appendChild(style);
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        horiz ? "w-full" : "h-full",
        className
      )}
      aria-hidden
    >
      <div
        className={cn(
          "flex",
          horiz ? "w-[200%] items-center" : "h-[200%] flex-col"
        )}
        style={
          horiz
            ? ({
                animation: `${
                  dir === "ltr" ? "marqueeX" : "marqueeXrev"
                } ${duration}s linear infinite`,
                columnGap: gap,
              } as React.CSSProperties)
            : ({
                animation: `${
                  dir === "ttb" ? "marqueeY" : "marqueeYrev"
                } ${duration}s linear infinite`,
                rowGap: gap,
              } as React.CSSProperties)
        }
      >
        <div className={cn("flex", horiz ? "items-center" : "flex-col")}>
          {children}
        </div>
        <div className={cn("flex", horiz ? "items-center" : "flex-col")}>
          {children}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeX {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0%, 0, 0);
          }
        }
        @keyframes marqueeXrev {
          from {
            transform: translate3d(0%, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marqueeY {
          from {
            transform: translate3d(0, -50%, 0);
          }
          to {
            transform: translate3d(0, 0%, 0);
          }
        }
        @keyframes marqueeYrev {
          from {
            transform: translate3d(0, 0%, 0);
          }
          to {
            transform: translate3d(0, -50%, 0);
          }
        }
      `}</style>
    </div>
  );
}

/* =============== Component =============== */

type Props = {
  railText?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function PlaylistHeroSquare({
  railText = "AREA 020 DROP",
  title = "AMSTERDAMS FINEST",
  subtitle = "Come checkout our popup clothing line flagship store in Amsterdam from Agustus till December.",
  ctaLabel = "SUBSCRIBE TO OUR NEWSLETTER",
  ctaHref = "#",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-[#1e1f21] text-white">
      {/* Smoke Background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Image
          src="/images/smoke1.png"
          alt="smoke1"
          width={10000}
          height={10000}
          className="absolute opacity-50 animate-[wave_8s_linear_infinite] left-[-50%] top-[-40%] w-[2200px] max-w-none mix-blend-screen"
        />
        <Image
          src="/images/smoke2.png"
          alt="smoke2"
          width={10000}
          height={10000}
          className="absolute opacity-50 animate-[wave_12s_linear_infinite] left-[10%] top-[-60%] w-[2200px] max-w-none mix-blend-screen"
        />
        <Image
          src="/images/smoke3.png"
          alt="smoke3"
          width={10000}
          height={10000}
          className="absolute opacity-50 animate-[wave_18s_linear_infinite] right-[-30%] top-[-25%] w-[2200px] max-w-none mix-blend-screen"
        />
      </div>
      {/* zachte vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(255,255,255,0.05),rgba(0,0,0,0)_60%)]" />

      {/* GRID WRAPPER — houdt beide kolommen even hoog */}
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch min-h-[78vh]">
          {/* LEFT: IMAGE — vult kolom volledig */}
          <div className="relative w-full h-[48vh] z-20 md:h-auto md:min-h-[78vh] overflow-hidden">
            {/* Op mobiel een prettige ratio; op md+ volledige kolomhoogte */}
            <div className="absolute inset-0">
              <Image
                src={"/images/headerrr.webp"}
                alt=""
                fill
                className="object-cover"
                // zet indien nodig een specifiek focuspunt:
                // style={{ objectPosition: "50% 35%" }}
                priority
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/40 via-black/20 to-transparent text-white">
              <p className="text-sm uppercase opacity-80">DISCOVER</p>
              <h2 className="text-xl font-semibold pb-2">Sale Collections</h2>
              <button className="relative max-w-[22%] backdrop-blur-md tracking-wider font-light  border dark:border-[#FFF] border-[#FFF] px-3 py-1 text-white overflow-hidden group transform-gpu">
                <span className="relative z-10 text-[9px] uppercase group-hover:tracking-wide group-hover:font-medium group-hover:text-black transition-all duration-500 ease-in-out">
                  DISCOVER
                </span>
                <span className="absolute inset-0 bg-[#FFF] dark:bg-[#FFF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0 transform-gpu will-change-transform"></span>
              </button>
            </div>
          </div>

          {/* RIGHT: COMPACTE SQUARE + RAILS — blijft binnen de kolom */}
          <div className="relative -mt-2 md:mt-0 md:-ml-3 w-full h-full flex items-center justify-center">
            {/* houd het geheel klein, ook op brede schermen */}
            <div className="relative w-[min(92vw,720px)] z-20">
              {/* Rails (boven/rechts/onder/links) */}
              <div className="pointer-events-none absolute inset-0">
                {/* top */}
                <div className="absolute left-[60px] right-[60px] top-0 h-6">
                  <Marquee dir="ltr" speed={24}>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <span
                        key={`t-${i}`}
                        className="mx-4 whitespace-nowrap text-[11px] tracking-[0.36em] text-white/60"
                      >
                        {railText}
                      </span>
                    ))}
                  </Marquee>
                </div>
                {/* right */}
                <div className="absolute right-0 top-[60px] bottom-[60px] w-6">
                  <Marquee dir="ttb" speed={24}>
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span
                        key={`r-${i}`}
                        className="block whitespace-nowrap text-[11px] tracking-[0.36em] text-white/60 [writing-mode:vertical-rl]"
                      >
                        {railText}
                      </span>
                    ))}
                  </Marquee>
                </div>
                {/* bottom */}
                <div className="absolute left-[60px] right-[60px] bottom-0 h-6">
                  <Marquee dir="rtl" speed={24}>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <span
                        key={`b-${i}`}
                        className="mx-4 whitespace-nowrap text-[11px] tracking-[0.36em] text-white/60"
                      >
                        {railText}
                      </span>
                    ))}
                  </Marquee>
                </div>
                {/* left */}
                <div className="absolute left-0 top-[60px] bottom-[60px] w-6">
                  <Marquee dir="btt" speed={24}>
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span
                        key={`l-${i}`}
                        className="block rotate-180 whitespace-nowrap text-[11px] tracking-[0.36em] text-white/60 [writing-mode:vertical-rl]"
                      >
                        {railText}
                      </span>
                    ))}
                  </Marquee>
                </div>
              </div>

              {/* Content — compact en gecentreerd */}
              <div className="relative mx-auto flex max-w-[560px] flex-col items-center gap-6 px-6 py-16 text-center">
                <h1 className="leading-[0.92]">
                  <span className="block text-[42px] font-black tracking-[-0.02em] md:text-[56px]">
                    {title.split(" ")[0] || ""}
                  </span>
                  <span className="mt-1 block text-[42px] font-black tracking-[-0.02em] md:text-[56px]">
                    {title.split(" ").slice(1).join(" ") || ""}
                  </span>
                </h1>

                <p className="mx-auto max-w-sm text-[14px] leading-6 text-white/80 md:text-[15px] md:leading-7">
                  {subtitle}
                </p>

                <button className="relative text-black w-fit backdrop-blur-md tracking-wider font-light bg-white border dark:border-[#FFF] border-[#FFF] px-3 py-1 overflow-hidden group transform-gpu">
                  <span className="relative whitespace-nowrap z-10 text-[9px] uppercase group-hover:tracking-wide font-medium group-hover:text-black transition-all duration-500 ease-in-out">
                    {ctaLabel}
                  </span>
                  <span className="absolute inset-0 bg-[#FFF] dark:bg-[#FFF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0 transform-gpu will-change-transform"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
