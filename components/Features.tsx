
import React from 'react';
import { LightbulbIcon, HashtagIcon, ClockIcon } from './icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/80 transition-all duration-300 hover:border-[#4f46e5] hover:-translate-y-1">
    <div className="mb-4 text-[#4f46e5]">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);


const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything You Need to Optimize Your Videos</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard 
            icon={<LightbulbIcon />}
            title="AI-Powered Titles"
            description="Generate catchy, SEO-friendly titles designed to increase click-through rates and improve discoverability in YouTube search."
          />
          <FeatureCard 
            icon={<HashtagIcon />}
            title="Relevant Hashtags"
            description="Get a list of highly relevant and trending hashtags to help your video reach a wider audience and appear in more search queries."
          />
          <FeatureCard 
            icon={<ClockIcon />}
            title="Automatic Timestamps"
            description="Instantly create accurate, timestamped video chapters. Improve viewer experience and boost watch time by making your content easy to navigate."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;