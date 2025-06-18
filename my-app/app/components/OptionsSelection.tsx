'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const OptionsSection = () => {
  const [selected, setSelected] = useState('Research');

  const sharedContent = `Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac
turpis at amet. Purus malesuada placerat arcu at enim alit in accumsan.`;

  const options = ['Research', 'Plan', 'Design'];

  return (
    <div className="flex flex-col lg:flex-row">

      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold font-[Roboto_Condensed] mb-4">LOREM IPSUM DOLOR SIT AMET</h2>

        <div className="flex gap-4" data-aos="fade-down-right">
          {options.map((label) => (
            <div
              key={label}
              onClick={() => setSelected(label)}
              className={`px-4 py-2 border rounded-lg cursor-pointer transition-all duration-200 ${selected === label
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
            >
              {label}
            </div>
          ))}
        </div>

        <p className="mt-4 text-lg" data-aos="fade-up-right">
          {sharedContent}
        </p>

        <div className="mt-6 inline-flex items-center text-blue-600 font-semibold cursor-pointer hover:underline">
          Check Tools <ArrowRight className="ml-2 w-5 h-5" />
        </div>
      </div>

      <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-10 flex justify-center items-center" data-aos="fade-up-left">
        <img
          src="/hands.png"
          alt="Visual"
          width={400}
          height={100}
          className="shadow-lg"
        />
      </div>
    </div>
  );
};

export default OptionsSection;
