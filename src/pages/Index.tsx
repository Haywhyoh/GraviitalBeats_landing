import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CommunitySection from '@/components/CommunitySection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-graviital-dark text-white relative">
      {/* Main Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="/images/bg.jpg" 
          alt="Background" 
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-graviital-dark/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <CommunitySection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
