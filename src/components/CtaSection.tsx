import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, Check, CreditCard, Bitcoin } from 'lucide-react';
import WaitlistFormModal from './WaitlistFormModal';

const BenefitItem = ({ icon: Icon, iconColor, bgColor, children, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="gradient-border animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="bg-graviital-dark px-6 py-4 rounded-md flex items-center gap-3 transition-all duration-300"
        style={{ 
          transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
          background: isHovered ? 'rgba(23, 15, 41, 0.9)' : ''
        }}
      >
        <div 
          className={`w-5 h-5 rounded-full ${bgColor} flex items-center justify-center shrink-0 transition-transform duration-300`}
          style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}
        >
          <Icon 
            size={12} 
            className={`${iconColor} ${isHovered ? 'animate-wiggle' : ''}`} 
            style={{ animationDuration: '0.75s' }}
          />
        </div>
        <span>{children}</span>
      </div>
    </div>
  );
};

const CtaSection: React.FC = () => {
  const [sectionHovered, setSectionHovered] = useState(false);

  return (
    <section 
      className="py-20 bg-gradient-to-b from-graviital-dark to-graviital-purple/30 relative"
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/bg.jpg" 
          alt="Background" 
          className="h-full w-full object-cover transition-opacity duration-1000"
          style={{ 
            opacity: sectionHovered ? 0.15 : 0.10
          }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-graviital-dark to-graviital-purple/30"
          style={{
            opacity: sectionHovered ? 0.9 : 1,
            transition: 'opacity 1s ease-in-out'
          }}
        ></div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute left-0 top-1/4 w-40 h-40 rounded-full bg-graviital-purple/10 blur-3xl animate-pulse-slow"></div>
      <div 
        className="absolute right-0 bottom-1/4 w-60 h-60 rounded-full bg-graviital-blue/10 blur-3xl animate-pulse-slow"
        style={{ 
          animationDelay: "1.5s",
          transform: sectionHovered ? 'translateX(-20px)' : 'translateX(0)',
          transition: 'transform 2s ease-in-out'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Unlock Financial Freedom in Music
          </h2>
          
          <p 
            className="text-lg text-gray-300 mb-6 animate-fade-in" 
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-white font-semibold">GraviitalBeats revolutionizes payments</span> in the beat licensing industry with flexible options for every creator.
          </p>

          <div 
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div 
              className="flex items-center gap-3 bg-graviital-dark/70 px-5 py-3 rounded-lg border border-graviital-blue/20 hover:border-graviital-blue/60 hover:bg-graviital-dark/90 transition-all duration-300 cursor-pointer group"
              style={{
                transform: sectionHovered ? 'translateY(-3px)' : 'translateY(0)',
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <CreditCard className="text-graviital-blue-light h-5 w-5 group-hover:animate-pulse" />
              <div className="text-left">
                <h3 className="font-medium">Fiat Payments</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Secure credit card transactions</p>
              </div>
            </div>
            <div 
              className="flex items-center gap-3 bg-graviital-dark/70 px-5 py-3 rounded-lg border border-graviital-purple/20 hover:border-graviital-purple/60 hover:bg-graviital-dark/90 transition-all duration-300 cursor-pointer group"
              style={{
                transform: sectionHovered ? 'translateY(-3px)' : 'translateY(0)',
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <Bitcoin className="text-graviital-purple-light h-5 w-5 group-hover:animate-spin-slow" />
              <div className="text-left">
                <h3 className="font-medium">Crypto Support</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Borderless, low-fee payments</p>
              </div>
            </div>
          </div>
          
          <p 
            className="text-lg text-gray-300 mb-10 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Join the GraviitalBeats waitlist today and:
          </p>
          
          <div className="space-y-4 mb-10">
            <BenefitItem 
              icon={Check} 
              iconColor="text-graviital-blue-light"
              bgColor="bg-graviital-blue/20"
              delay={600}
            >
              Get early access to upload or browse before public launch
            </BenefitItem>
            
            <BenefitItem 
              icon={Check} 
              iconColor="text-graviital-blue-light"
              bgColor="bg-graviital-blue/20"
              delay={700}
            >
              Be eligible for featured creator status
            </BenefitItem>
            
            <BenefitItem 
              icon={Check} 
              iconColor="text-graviital-blue-light"
              bgColor="bg-graviital-blue/20"
              delay={800}
            >
              Lock in <strong>founding perks</strong> and platform credits
            </BenefitItem>

            <BenefitItem 
              icon={Check} 
              iconColor="text-graviital-purple-light"
              bgColor="bg-graviital-purple/20"
              delay={900}
            >
              Experience <strong>both fiat and crypto payments</strong> for maximum financial flexibility
            </BenefitItem>
          </div>
          
          <div 
            className="flex justify-center animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <WaitlistFormModal
              trigger={
                <Button 
                  variant="gradient" 
                  className="text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-glow"
                >
                  <span className="flex items-center gap-2 group">
                    Join the Waitlist 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
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
