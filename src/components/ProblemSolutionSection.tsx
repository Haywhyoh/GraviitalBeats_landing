
import React from 'react';
import { Check } from 'lucide-react';

const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-20 bg-graviital-dark relative" id="features">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Tired of Outdated Platforms &amp; Low Royalties?
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 text-center">
            Current beat marketplaces are bloated, messy, and favor volume over quality. GraviitalBeats is built from the ground up to empower <span className="text-graviital-blue-light font-semibold">producers</span> and give <span className="text-graviital-purple-light font-semibold">buyers</span> what they actually need:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-graviital-purple/20 p-6 rounded-lg border border-graviital-purple/30 hover:border-graviital-purple/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-graviital-blue/20 flex items-center justify-center mb-4">
                <Check className="text-graviital-blue-light" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fair licensing terms</h3>
              <p className="text-gray-300">Transparent terms that protect both artists and producers, with clear usage rights for every scenario.</p>
            </div>
            
            <div className="bg-graviital-purple/20 p-6 rounded-lg border border-graviital-purple/30 hover:border-graviital-purple/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-graviital-blue/20 flex items-center justify-center mb-4">
                <Check className="text-graviital-blue-light" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent pricing</h3>
              <p className="text-gray-300">No hidden fees. Higher royalty rates for producers and clear pricing for buyers.</p>
            </div>
            
            <div className="bg-graviital-purple/20 p-6 rounded-lg border border-graviital-purple/30 hover:border-graviital-purple/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-graviital-blue/20 flex items-center justify-center mb-4">
                <Check className="text-graviital-blue-light" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Curated quality</h3>
              <p className="text-gray-300">Focus on quality over quantity. Find premium beats without endless scrolling.</p>
            </div>
          </div>
          
          <p className="text-center mt-10 text-lg">
            Whether you're a <span className="text-graviital-blue-light font-medium">producer</span> or <span className="text-graviital-purple-light font-medium">artist</span>, we're making the beat economy work for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
