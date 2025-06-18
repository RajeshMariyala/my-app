'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewPage = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [highlightIndex, setHighlightIndex] = useState(0);

    const handleScroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;

        const cardWidth = 370; 
        let newIndex = highlightIndex;

        if (direction === 'right' && highlightIndex < 3) newIndex++;
        if (direction === 'left' && highlightIndex > 0) newIndex--;

        container.scrollTo({
            left: newIndex * cardWidth,
            behavior: 'smooth',
        });

        setHighlightIndex(newIndex);
    };

    const cards = [
        {
            img: '/thunderstorm.png',
            text:
                'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
            profile: '/person1.jpg',
            name: 'Jane Copper',
        },
        {
            img: '/sparkles.png',
            text:
                'Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.',
            profile: '/person2.jpg',
            name: 'Ralph Edwards',
        },
        {
            img: '/chess-rook.png',
            text:
                'Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet',
            profile: '/person3.jpg',
            name: 'Courteny Henry',
        },
        {
            img: '/alarm-clock.png',
            text:
                'Hendrerit augue ut n quis integer netus. S rhoncus magnis hab Egestas amet habita tellus ornare. Hendre senectus. Mauris egi vitae praesent neque',
            profile: '/person4.jpg',
            name: 'Cameron',
        },
    ];

    return (
        <div className="TwelfthPage  text-white px-6 sm:px-12 py-10 relative">

            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="space-y-4 md:w-1/2">
                    <h2 className="text-xl">Join other Sun harvesters</h2>
                    <h1 className="text-2xl font-[Roboto_Condensed] font-bold">
                        LOREM IPSUM DOLOR SIT AMET
                    </h1>
                    <p className="text-base leading-relaxed">
                        Dui euismod iaculis libero, aliquet vitae et elementum porttitor.<br />
                        Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-end">
                    <button className="bg-white text-black px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-100 transition w-[238px] h-[42x]">
                        Lorem Ipsum
                    </button>
                </div>
            </div>

            <div className="mt-16 relative">
                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-auto scroll-smooth custom-scrollbar"
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`w-[370px] h-[420px] flex-shrink-0 bg-white text-black rounded-lg shadow-lg p-6 flex flex-col justify-between transform transition-transform duration-300 ${index === highlightIndex ? 'scale-105' : 'scale-100'
                                } hover:scale-110`}
                        >
                            <img
                                src={card.img}
                                alt="Icon"
                                className="w-15 h-12 object-contain mx-auto mt-5 ml-1"
                            />
                            <h3 className="text-lg mt-4 mb-6">{card.text}</h3>
                            <div className="flex items-center space-x-3">
                                <img
                                    src={card.profile}
                                    alt={card.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <span>{card.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex mt-8 gap-6 ">
                    <button
                        onClick={() => handleScroll('left')}
                        className="bg-white text-[#155ADA] p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => handleScroll('right')}
                        className="bg-white text-[#155ADA] p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
        </div>
    );
};

export default ReviewPage;
