import React, { useState } from 'react';
import { Check, CreditCard, Bitcoin, Shield } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  iconColor, 
  title, 
  description, 
  iconBgColor,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-graviital-purple/20 p-6 rounded-lg border border-graviital-purple/30 hover:border-graviital-purple/50 transition-all duration-500 hover:shadow-md hover:shadow-graviital-purple/20 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center mb-4 transition-all duration-500`}
        style={{ 
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <Icon 
          className={`${iconColor} ${isHovered ? 'animate-wiggle' : ''}`} 
          style={{ animationDuration: '0.75s' }}
        />
      </div>
      <h3 className="text-xl font-semibold mb-3 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 transition-all duration-500" style={{ opacity: isHovered ? 1 : 0.8 }}>
        {description}
      </p>
    </div>
  );
};

const ProblemSolutionSection: React.FC = () => {
  const [sectionHovered, setSectionHovered] = useState(false);

  return (
    <section 
      className="py-20 bg-graviital-dark relative overflow-hidden" 
      id="features"
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-hero-pattern opacity-30 transition-opacity duration-1000"
        style={{ opacity: sectionHovered ? 0.4 : 0.3 }}
      ></div>
      
      {/* Animated background elements */}
      <div className="absolute w-40 h-40 rounded-full bg-graviital-purple/10 -left-20 top-1/4 blur-3xl animate-pulse-slow"></div>
      <div 
        className="absolute w-60 h-60 rounded-full bg-graviital-blue/10 -right-20 bottom-1/4 blur-3xl animate-pulse-slow"
        style={{ 
          animationDelay: "1.5s",
          transform: sectionHovered ? 'translateX(-20px)' : 'translateX(0)',
          transition: 'transform 2s ease-in-out'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Tired of Outdated Platforms &amp; Limited Payment Options?
          </h2>
          
          <p 
            className="text-lg text-gray-300 mb-12 text-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Current beat marketplaces are bloated, messy, and offer restrictive payment methods. GraviitalBeats is built to empower <span className="text-graviital-blue-light font-semibold">producers</span> and give <span className="text-graviital-purple-light font-semibold">buyers</span> what they actually need:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Shield}
              iconColor="text-graviital-blue-light"
              iconBgColor="bg-graviital-blue/20"
              title="Fair licensing terms"
              description="Transparent terms that protect both artists and producers, with clear usage rights for every scenario."
              delay={100}
            />
            
            <FeatureCard
              icon={CreditCard}
              iconColor="text-graviital-blue-light"
              iconBgColor="bg-graviital-blue/20"
              title="Transparent pricing"
              description="No hidden fees. Higher royalty rates for producers and clear pricing for buyers."
              delay={200}
            />
            
            <FeatureCard
              icon={Check}
              iconColor="text-graviital-blue-light"
              iconBgColor="bg-graviital-blue/20"
              title="Curated quality"
              description="Focus on quality over quantity. Find premium beats without endless scrolling."
              delay={300}
            />
            
            <FeatureCard
              icon={Bitcoin}
              iconColor="text-graviital-purple-light"
              iconBgColor="bg-graviital-purple/20"
              title="Crypto & Fiat Payments"
              description="First platform to offer both traditional and crypto payment options, giving you complete financial freedom."
              delay={400}
            />
          </div>
          
          <p 
            className="text-center mt-10 text-lg animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            Whether you're a <span className="text-graviital-blue-light font-medium">producer</span> or <span className="text-graviital-purple-light font-medium">artist</span>, we're making the beat economy work for you, <span className="font-semibold hover:text-white cursor-pointer transition-colors duration-300">however you prefer to pay or get paid</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
