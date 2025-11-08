import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Grow Your YouTube Channel?
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Join hundreds of creators who are saving time and optimizing their videos with AI.
        </p>
        <a 
          href="#" 
          className="bg-[#4f46e5] hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform duration-300 transform hover:scale-105 inline-block"
        >
          Install the Free Extension Now
        </a>
      </div>
    </section>
  );
};

export default CTA;
