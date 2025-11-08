
import React from 'react';
import { CheckIcon } from './icons';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Unlock Your Full Potential with Pro</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col">
            <h3 className="text-2xl font-semibold text-white">Free</h3>
            <p className="mt-4 text-5xl font-extrabold text-white">₹0<span className="text-lg font-medium text-gray-400">/month</span></p>
            <ul className="mt-8 space-y-4 text-gray-400 flex-grow">
              <li className="flex items-start"><CheckIcon className="text-[#10b981] mr-3 mt-1 flex-shrink-0" /> 10 Generations / Month</li>
              <li className="flex items-start"><CheckIcon className="text-[#10b981] mr-3 mt-1 flex-shrink-0" /> AI-Generated Titles</li>
              <li className="flex items-start"><CheckIcon className="text-[#10b981] mr-3 mt-1 flex-shrink-0" /> AI-Generated Hashtags</li>
              <li className="flex items-start"><CheckIcon className="text-[#10b981] mr-3 mt-1 flex-shrink-0" /> AI-Generated Chapters</li>
              <li className="flex items-start"><CheckIcon className="text-[#10b981] mr-3 mt-1 flex-shrink-0" /> Generation History</li>
            </ul>
            <a href="#" className="mt-10 block w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-colors duration-300">
              Install for Free
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-800/50 p-8 rounded-xl border-2 border-[#4f46e5] flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#4f46e5] text-white text-xs font-bold px-10 py-1 transform translate-x-1/4 rotate-45 translate-y-4">
                POPULAR
            </div>
            <h3 className="text-2xl font-semibold text-[#4f46e5]">Pro Plan</h3>
            <p className="mt-4 text-5xl font-extrabold text-white">₹499
              <span className="text-lg font-medium text-gray-400">/month</span>
            </p>
            <ul className="mt-8 space-y-4 text-gray-400 flex-grow">
              <li className="flex items-start"><CheckIcon className="text-[#10b981] mr-3 mt-1 flex-shrink-0" /> Unlimited Generations</li>
              <li className="flex items-start"><CheckIcon className="text-[#10b981] mr-3 mt-1 flex-shrink-0" /> AI-Generated Titles</li>
              <li className="flex items-start"><CheckIcon className="text-[#10b981] mr-3 mt-1 flex-shrink-0" /> AI-Generated Hashtags</li>
              <li className="flex items-start"><CheckIcon className="text-[#10b981] mr-3 mt-1 flex-shrink-0" /> AI-Generated Chapters</li>
              <li className="flex items-start"><CheckIcon className="text-[#10b981] mr-3 mt-1 flex-shrink-0" /> Full Generation History</li>
              <li className="flex items-start"><CheckIcon className="text-[#10b981] mr-3 mt-1 flex-shrink-0" /> Priority Support</li>
            </ul>
            <a href="#" className="mt-10 block w-full bg-[#4f46e5] hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-colors duration-300">
              Upgrade to Pro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;