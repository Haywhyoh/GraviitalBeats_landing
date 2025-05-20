import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, CreditCard, Bitcoin } from 'lucide-react';
import WaitlistFormModal from './WaitlistFormModal';

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16">
      {/* Main Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/bg.jpg" 
          alt="Background" 
          className="h-full w-full object-cover opacity-20 transition-opacity duration-1000"
          style={{ opacity: isHovered ? 0.25 : 0.20 }}
        />
        <div className="absolute inset-0 bg-graviital-dark/80"></div>
      </div>

      {/* Background Elements */}
      {/* <div 
        className="absolute inset-0 overflow-hidden z-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute top-1/4 -left-28 w-80 h-80 rounded-full bg-graviital-purple opacity-20 blur-3xl animate-pulse-slow"></div>
        <div 
          className="absolute bottom-1/4 -right-28 w-80 h-80 rounded-full bg-graviital-blue opacity-20 blur-3xl animate-pulse-slow" 
          style={{ 
            animationDelay: "1s",
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 1.5s ease-in-out'
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-graviital-accent opacity-10 blur-3xl animate-pulse-slow" 
          style={{ 
            animationDelay: "2s",
            transform: isHovered ? 'scale(1.15) translateX(20px)' : 'scale(1) translateX(0)',
            transition: 'transform 1.2s ease-in-out'
          }}
        ></div>
      </div> */}

      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            style={{
              backgroundSize: isHovered ? '200% 200%' : '100% 100%',
              transition: 'background-size 1s ease-in-out'
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-graviital-blue-light hover:from-graviital-purple-light hover:to-white inline-block transition-all duration-500">
              The Future of Beat Licensing
            </span>
            <span className="block beat-waveform"> Starts Here</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
           GraviitalBeats connects elite producers with artists, creators, and brands — making it seamless to buy, sell, and license digital beats.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.75s" }}>
            <div 
              className="flex items-center gap-2 group hover:scale-110 transition-transform duration-300 hover:bg-graviital-blue/10 p-2 rounded-lg cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
            >
              <CreditCard className="text-graviital-blue-light h-5 w-5 group-hover:animate-bounce" />
              <span className="text-gray-200 group-hover:text-white transition-colors">Fiat Payments</span>
            </div>
            <span className="text-gray-500">|</span>
            <div 
              className="flex items-center gap-2 group hover:scale-110 transition-transform duration-300 hover:bg-graviital-purple/10 p-2 rounded-lg cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
            >
              <Bitcoin className="text-graviital-purple-light h-5 w-5 group-hover:animate-spin-slow" />
              <span className="text-gray-200 group-hover:text-white transition-colors">Crypto Accepted</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "1s" }}>
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
                console.log('Waitlist form submitted:', values);
                // You can add API call here to submit form data
              }}
            />
            <Button 
              variant="outline" 
              className="text-lg group hover:bg-white/5 transition-all duration-300"
            >
              <span className="group-hover:text-graviital-blue-light transition-colors">Learn More</span>
            </Button>
          </div>

          {/* <div className="mt-16">
            <p className="uppercase text-sm font-medium text-gray-400 mb-4">Trusted by creators worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="h-8 bg-white/80 rounded-md w-24"></div>
              <div className="h-8 bg-white/80 rounded-md w-20"></div>
              <div className="h-8 bg-white/80 rounded-md w-28"></div>
              <div className="h-8 bg-white/80 rounded-md w-24"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
