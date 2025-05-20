import React from 'react';
import Button from './Button';
import { ArrowRight, Check } from 'lucide-react';
import WaitlistFormModal from './WaitlistFormModal';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-graviital-dark to-graviital-purple/30 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/bg.jpg" 
          alt="Background" 
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graviital-dark to-graviital-purple/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
          
          <div className="flex justify-center">
            <WaitlistFormModal
              trigger={
                <Button variant="gradient" className="text-lg px-8 py-4">
                  Join the Waitlist <ArrowRight size={18} />
                </Button>
              }
              onSubmit={(values) => {
                console.log('CTA Waitlist form submitted:', values);
                // You can add API call here to submit form data
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
