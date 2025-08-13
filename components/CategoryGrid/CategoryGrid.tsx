"use client";

import Image from "next/image";

export default function CategoryGrid() {
  const categories = [
    {
      title: "Sale Collections",
      subtitle: "Discover",
      button: "FOR HIM",
      image: "/images/mann.webp",
    },
    {
      title: "Sale Collections",
      subtitle: "Discover",
      button: "FOR HER",
      image: "/images/womann.webp",
    },
  ];

  return (
    <section className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2  gap-2">
      {categories.map((cat, i) => (
        <div key={i} className="relative group overflow-hidden cursor-pointer">
          <Image
            src={cat.image}
            alt={cat.title}
            width={1000}
            height={1200}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/40 via-black/20 to-transparent text-white">
            <p className="text-sm uppercase opacity-80">{cat.subtitle}</p>
            <h2 className="text-xl font-semibold pb-2">{cat.title}</h2>
            <button className="relative backdrop-blur-md max-w-[22%] tracking-wider font-light  border dark:border-[#FFF] border-[#FFF] px-3 py-1 text-white overflow-hidden group transform-gpu">
              <span className="relative z-10 text-[9px] uppercase group-hover:tracking-wide group-hover:font-medium group-hover:text-black transition-all duration-500 ease-in-out">
                {cat.button}
              </span>
              <span className="absolute inset-0 bg-[#FFF] dark:bg-[#FFF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0 transform-gpu will-change-transform"></span>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
