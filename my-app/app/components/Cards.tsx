"use client";
import React, { useRef, useState } from "react";

type CardData = {
  title: string;
  description: string;
  image: string;
};

const card: CardData = {
  title: "Artist & Investor",
  description:
    "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing\nauctor. Malesuada tristique libero, id netus tincidunt. Egestas ac\narcu amet nisl quis est ...",


  image: "/Group.png",
};

const Card = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    const width = container?.offsetWidth || 0;
    if (container) {
      container.scrollTo({ left: width * index, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto py-12">
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 snap-center relative flex"
            style={{ scrollSnapAlign: "center" }}
          >
            <div className="w-[70%]">
              <img
                src={card.image}
                alt={card.title}
                className="w-[600px] h-[350px] object-cover"
              />
            </div>

            <div className="absolute top-1/2 right-[60px] transform -translate-y-1/2 w-[680px] h-[192px] bg-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)] p-6 flex flex-col z-10 text-left"  data-aos="fade-down-left">
              <div>
                <h3 className="text-[#475569] mb-2 font-bold text-lg font-nter ">
                  {card.title}
                </h3>
                <p className="text-[#0F172A] font-normal">
                  {card.description}</p>
              </div>
              <a
                href="#"
                className="text-[#1959AC] inline-flex items-center mt-3 font-normal"
              >
                Read Full Story
                <img
                  src="/rightarrowblue.png"
                  alt="Right arrow"
                  className="ml-2 w-4 h-4 object-contain"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      <br />

      <div className="flex justify-center mt-6 space-x-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === activeIndex ? "bg-[#1959AC]" : "bg-gray-400"
              }`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
