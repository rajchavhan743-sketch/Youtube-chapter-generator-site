
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-700/50">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="mb-4">
            <a href="#" className="text-gray-400 hover:text-[#4f46e5] mx-2">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-[#4f46e5] mx-2">Terms of Service</a>
        </div>
        <p className="mb-2">For support, contact: <a href="mailto:support.chaptergen@gmail.com" className="text-gray-400 hover:text-[#4f46e5]">support.chaptergen@gmail.com</a></p>
        <p>&copy; 2024 AI YouTube Description Assistant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;