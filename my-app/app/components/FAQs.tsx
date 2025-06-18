"use client";
import React, { useState } from "react";

const repeatedFAQ = {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: [
        "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse",
        "convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies",
        "ipsum.",
    ],
};

const faqs = Array(5).fill(repeatedFAQ);

const FAQItem = ({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: string[];
    isOpen: boolean;
    onClick: () => void;
}) => (
    <div className="mb-6">
        <button
            onClick={onClick}
            className="flex justify-between items-center w-full text-left py-4"
        >
            <span className="text-lg font-bold font-nter">{question}</span>
            <span className="text-2xl font-bold text-[#000000]">{isOpen ? "−" : "+"}</span>
        </button>

        {isOpen && (
            <div className="ml-4 text-gray-700 space-y-1 text-base mb-4">
                {answer.map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
            </div>
        )}

        <hr className="border-gray-300" />
    </div>
);

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) =>
        setOpenIndex(openIndex === index ? null : index);

    return (
        <div className="SixteenthPage px-12 py-16 bg-[#F9F9F9] text-gray-900">
            <h2 className="text-3xl font-[Roboto_Condensed] font-bold mb-12 text-black">
                FREQUENTLY ASKED QUESTIONS (FAQS)
            </h2>

            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => toggleIndex(index)}
                />
            ))}
        </div>
    );
};

export default FAQPage;
