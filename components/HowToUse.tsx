
import React from 'react';
import { DownloadIcon, LinkIcon, ClipboardCopyIcon } from './icons';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, stepNumber }) => (
  <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/80 relative">
    <div className="absolute top-4 right-4 bg-gray-700 text-indigo-400 text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">{stepNumber}</div>
    <div className="mb-4 text-[#4f46e5]">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);


const HowToUse: React.FC = () => {
  return (
    <section id="how-to-use" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Generate Perfect Descriptions in 3 Simple Steps</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <StepCard
            stepNumber="1" 
            icon={<DownloadIcon />}
            title="Install the Extension"
            description="Head over to the Chrome Web Store and add the extension to your browser in one click."
          />
          <StepCard
            stepNumber="2" 
            icon={<LinkIcon />}
            title="Paste Your URL"
            description="Grab any YouTube video link and paste it into the extension."
          />
          <StepCard
            stepNumber="3"
            icon={<ClipboardCopyIcon />}
            title="Copy & Publish"
            description="Copy the generated title, hashtags, and chapters directly to your YouTube description."
          />
        </div>
      </div>
    </section>
  );
};

export default HowToUse;