
import React from 'react';
import { SparklesIcon, ClipboardIcon, ClockIcon } from './icons';

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
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Easiest Way to Create Chapters</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard 
            icon={<SparklesIcon />}
            title="AI-Powered Generation"
            description="Our smart AI analyzes your video's transcript to create accurate and relevant chapter titles and timestamps automatically."
          />
          <FeatureCard 
            icon={<ClipboardIcon />}
            title="One-Click Copy & Paste"
            description="Get your formatted chapters with a single click, ready to be pasted directly into your YouTube video description."
          />
          <FeatureCard 
            icon={<ClockIcon />}
            title="Generation History"
            description="Never lose your work. The extension automatically saves your recent generations for easy access later."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;