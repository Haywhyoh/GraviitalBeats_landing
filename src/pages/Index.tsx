
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
    <div className="min-h-screen bg-graviital-dark text-white">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <CommunitySection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
