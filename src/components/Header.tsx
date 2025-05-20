import React from 'react';
import Logo from './Logo';
import Button from './Button';
import WaitlistFormModal from './WaitlistFormModal';
import { useIsMobile } from '../hooks/use-mobile';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-graviital-dark/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">How it Works</a>
          <a href="#community" className="text-sm text-gray-300 hover:text-white transition-colors">Community</a>
          <a href="#cta-section" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</a>
        </nav>
        <WaitlistFormModal
          trigger={<Button variant="gradient">{isMobile ? "Join" : "Join Waitlist"}</Button>}
        />
      </div>
    </header>
  );
};

export default Header;
