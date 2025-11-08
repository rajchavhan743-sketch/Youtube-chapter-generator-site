
import React from 'react';

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1));
    const headerElement = document.querySelector('header');

    if (targetElement && headerElement) {
      const headerOffset = headerElement.offsetHeight + 16; // Get header height + 1rem padding
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="py-4 border-b border-gray-700/50 sticky top-0 bg-[#111827]/80 backdrop-blur-lg z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white border-2 border-indigo-500/50 rounded-lg px-3 py-1">AI Description Assistant</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#how-to-use" onClick={(e) => handleNavClick(e, '#how-to-use')} className="hover:text-[#4f46e5] transition-colors duration-300 font-medium">How It Works</a></li>
            <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="hover:text-[#4f46e5] transition-colors duration-300 font-medium">Features</a></li>
            <li><a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-[#4f46e5] transition-colors duration-300 font-medium">Pricing</a></li>
            <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-[#4f46e5] transition-colors duration-300 font-medium">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;