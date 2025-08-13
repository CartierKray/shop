"use client";

import React, { useState } from "react";
import Waarom from "../Waarom/Waarom";
import { FaPhone } from "react-icons/fa";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import {
  Locate,
  LocateFixed,
  LocateIcon,
  LucideLocate,
  Pin,
  PinIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ImOffice } from "react-icons/im";

// Correct definiëren van de HoverState type
type HoverState = {
  phone: boolean;
  whatsapp: boolean;
  telegram: boolean;
};

function DirectAdviesTwo() {
  // Aparte hover states voor elke button
  const [hoverState, setHoverState] = useState({
    phone: false,
    whatsapp: false,
    telegram: false,
  });
  const toggleHover = (buttonKey: keyof HoverState) => {
    setHoverState((prev) => ({ ...prev, [buttonKey]: !prev[buttonKey] }));
  };

  return (
    <>
      <div className="md:p-8 -mt-4 mb-20 ">
        <div className="lg:flex justify-between">
          <div className="w-full ">
            <div className="flex">
              <Image
                src="/svg/BeterLeaseSVGBlack.svg"
                alt=""
                width={1000}
                height={1000}
                className="block dark:hidden w-auto h-full object-cover "
              />

              <Image
                src="/svg/BeterLeaseSVG.svg"
                alt=""
                width={1000}
                height={1000}
                className="hidden dark:block w-auto h-full object-cover "
              />
            </div>
            {/* <div className="flex gap-2">
              <p className="font-bold text-4xl">DIRECT</p>
              <p className="font-bold text-4xl">ADVIES?</p>
            </div> */}
            <div className="flex mb-2">
              <div className="w-4 h-4 mt-[24px] mr-2.5 rounded-full bg-[#00DA46]" />
              <p className="pt-5 pb-6 text-base">We zijn nu geopend!</p>
            </div>
            <div className="grid space-y-4">
              {/* Telefoon button */}
              <Link href="tel:+31 (0)6 161 225 91">
                <button
                  onMouseEnter={() => toggleHover("phone")}
                  onMouseLeave={() => toggleHover("phone")}
                  className="bg-transparent max-w-md md:max-w-lg text-[#c2b293] dark:text-white dark:outline-none dark:border-none dark:shadow-inner dark:bg-[#282828] dark:shadow-[#444444] outline hover:shadow-inner hover:outline-none outline-[1.5px] outline-[#c2b293] p-1 hover:bg-green-600/85 hover:shadow-green-400 dark:hover:bg-green-600/85 dark:hover:shadow-green-400 hover:text-white font-medium rounded-full w-full"
                >
                  <div className="flex justify-between pl-3 pr-3">
                    <div className="pl-2 pt-0.5">
                      <p className="text-sm">Bel direct: +31 (0)6 161 225 91</p>
                      <p
                        className={`text-[13px] ml-[-89px] ${
                          hoverState.phone
                            ? "text-white"
                            : "text-black dark:text-white/50"
                        } font-light`}
                      >
                        Direct antwoord
                      </p>
                    </div>
                    <div className="pt-3 pr-3">
                      <FaPhone />
                    </div>
                  </div>
                </button>
              </Link>

              {/* WhatsApp button */}
              <Link
                target="_blank"
                href="https://wa.me/31616122591?text=Hallo, ik zou graag wat informatie willen krijgen."
              >
                <button
                  onMouseEnter={() => toggleHover("whatsapp")}
                  onMouseLeave={() => toggleHover("whatsapp")}
                  className="bg-transparent max-w-md md:max-w-lg text-[#c2b293] dark:text-white dark:outline-none dark:border-none dark:shadow-inner dark:bg-[#282828] dark:shadow-[#444444] outline hover:shadow-inner hover:outline-none outline-[1.5px] outline-[#c2b293] p-1 hover:bg-green-600/85 hover:shadow-green-400 dark:hover:bg-green-600/85 dark:hover:shadow-green-400 hover:text-white font-medium rounded-full w-full"
                >
                  <div className="flex justify-between pl-3 pr-3">
                    <div className="pl-2 pt-0.5">
                      <p className="text-sm -ml-8">Stuur een Whatsapp</p>
                      <p
                        className={`text-[13px] ${
                          hoverState.whatsapp
                            ? "text-white"
                            : "text-black ml-[-1.5px] dark:text-white/50"
                        } font-light`}
                      >
                        Binnen 5 minuten antwoord
                      </p>
                    </div>
                    <div className="pt-3 pr-3">
                      <BsWhatsapp />
                    </div>
                  </div>
                </button>
              </Link>

              {/* Telegram button */}
              <Link href="mailto:info@energiesticker.nl">
                <button
                  onMouseEnter={() => toggleHover("telegram")}
                  onMouseLeave={() => toggleHover("telegram")}
                  className="bg-transparent max-w-md md:max-w-lg text-[#c2b293] dark:text-white dark:outline-none dark:border-none dark:shadow-inner dark:bg-[#282828] dark:shadow-[#444444] outline hover:shadow-inner hover:outline-none outline-[1.5px] outline-[#c2b293] p-1 hover:bg-green-600/85 hover:shadow-green-400 dark:hover:bg-green-600/85 dark:hover:shadow-green-400 hover:text-white font-medium rounded-full w-full"
                >
                  <div className="flex justify-between pl-3 pr-3">
                    <div className=" pt-0.5">
                      <p className="text-sm -ml-[42px] dark:text-white">
                        Stuur een bericht
                      </p>
                      <p
                        className={`text-[13px] ml-2 ${
                          hoverState.telegram
                            ? "text-white"
                            : "text-black -ml-[-3px] dark:text-white/50"
                        } font-light`}
                      >
                        Altijd binnen 1 uur antwoord
                      </p>
                    </div>
                    <div className="pt-3 pr-3">
                      <BsTelegram />
                    </div>
                  </div>
                </button>
              </Link>

              {/* Locatie button - Deze heeft geen hover effect voor tekst */}
              <button
                className="bg-transparent max-w-md md:max-w-lg text-green-500 p-1 font-semibold rounded
                full w-full"
              >
                {/* <div className="flex justify-between pl-3 pr-3">
                  <div className="pl-2 pt-0.5">
                    <p className="text-sm text-start text-black">
                      Nijenburg 98
                    </p>
                    <p className="text-[13px] text-black font-light">
                      1081 GG Amsterdam
                    </p>
                  </div>
                  <div className="pt-3 pr-3">
                    <ImOffice className="text-black" />
                  </div>
                </div> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DirectAdviesTwo;
