"use client";
import React, { useState } from "react";

const cardData = [
  {
    id: "set1",
    cards: [
      {
        image: "/image1.png",
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus enim venenatis bibendum.",
      },
      {
        image: "/image2.png",
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus enim venenatis bibendum.",
      },
    ],
  },
  {
    id: "set2",
    cards: [
      {
        image: "/image3.png",
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus enim venenatis bibendum.",
      },
      {
        image: "/image4.png",
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus enim venenatis bibendum.",
      },
    ],
  },
];

const Reviewcards = () => {
  const [selectedSet, setSelectedSet] = useState("set1");

  return (
    <div className="SixthPage py-16 px-6 bg-white text-center">

      <div className="text-left mb-10 max-w-4xl mx-auto">
        <p className="text-[#0546D2] font-bold mb-2">Lorem ipsum dolor sit amet</p>
        <p className="font-[Roboto_Condensed] font-bold text-2xl">
          LOREM IPSUM DOLOR SIT
        </p>
        <p className="mt-4 mb-6 text-lg font-[Inter] text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi
          porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis
          aliquet. Hendrerit tellus at purus lectus.
        </p>

        <div className="flex gap-4 mt-6">
          {cardData.map((set) => (
            <button
              key={set.id}
              className={`px-4 py-2 rounded-md font-medium border ${
                selectedSet === set.id
                  ? "bg-[#1959AC] text-white"
                  : "bg-white text-[#1959AC] border-[#1959AC]"
              }`}
              onClick={() => setSelectedSet(set.id)}
            >
              {set.id === "set1" ? "Set One" : "Set Two"}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {cardData
          .find((set) => set.id === selectedSet)
          ?.cards.map((card, idx) => (
            <div
              key={idx}
              className="w-full md:w-1/3 bg-white shadow-md rounded-2xl"
            >
              <img
                src={card.image}
                alt={`Card ${idx + 1}`}
                className="w-full h-80 object-cover rounded-t-xl"
              />
              <div className="p-5 text-left">
                <p className="text-lg font-semibold mb-1">{card.title}</p>
                <p className="text-gray-600 mb-3 whitespace-pre-line">
                  {card.text}
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reviewcards;
