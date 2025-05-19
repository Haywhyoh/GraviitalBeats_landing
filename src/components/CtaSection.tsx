
import React from 'react';
import Button from './Button';
import { ArrowRight, Check } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-graviital-dark to-graviital-purple/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Early Access = Early Advantage
          </h2>
          
          <p className="text-lg text-gray-300 mb-10">
            Join the GraviitalBeats waitlist today and:
          </p>
          
          <div className="space-y-4 mb-10">
            <div className="gradient-border">
              <div className="bg-graviital-dark px-6 py-4 rounded-md flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-graviital-blue/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-graviital-blue-light" />
                </div>
                <span>Get early access to upload or browse before public launch</span>
              </div>
            </div>
            
            <div className="gradient-border">
              <div className="bg-graviital-dark px-6 py-4 rounded-md flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-graviital-blue/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-graviital-blue-light" />
                </div>
                <span>Be eligible for featured creator status</span>
              </div>
            </div>
            
            <div className="gradient-border">
              <div className="bg-graviital-dark px-6 py-4 rounded-md flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-graviital-blue/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-graviital-blue-light" />
                </div>
                <span>Lock in <strong>founding perks</strong> and platform credits</span>
              </div>
            </div>
          </div>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-graviital-blue-light"
              />
              <Button variant="gradient" className="whitespace-nowrap">
                Join the Waitlist <ArrowRight size={18} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
