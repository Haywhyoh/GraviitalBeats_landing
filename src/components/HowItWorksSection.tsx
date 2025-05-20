
import React from 'react';
import { Music, Lock, DollarSign } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-graviital-dark to-graviital-purple/20" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Create. Upload. Earn.
          </h2>
          <p className="text-xl text-graviital-purple-light font-medium">
            Built to Help Producers Thrive.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-graviital-blue/20 flex items-center justify-center mb-6">
              <Music className="text-graviital-blue-light" />
            </div>
            <span className="bg-graviital-blue/20 text-graviital-blue-light text-sm font-medium px-3 py-1 rounded-full mb-4">Step 1</span>
            <h3 className="text-xl font-bold mb-3">Upload Your Beats</h3>
            <p className="text-gray-300">Create and organize your catalog effortlessly. Our platform makes it simple to showcase your best work.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-graviital-purple/20 flex items-center justify-center mb-6">
              <Lock className="text-graviital-purple-light" />
            </div>
            <span className="bg-graviital-purple/20 text-graviital-purple-light text-sm font-medium px-3 py-1 rounded-full mb-4">Step 2</span>
            <h3 className="text-xl font-bold mb-3">Set Your Own License Rules</h3>
            <p className="text-gray-300">From non-exclusive to full buyouts, you stay in control. Create custom license templates that work for your business.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-graviital-accent/20 flex items-center justify-center mb-6">
              <DollarSign className="text-graviital-accent" />
            </div>
            <span className="bg-graviital-accent/20 text-graviital-accent text-sm font-medium px-3 py-1 rounded-full mb-4">Step 3</span>
            <h3 className="text-xl font-bold mb-3">Start Earning Instantly</h3>
            <p className="text-gray-300">Get paid directly — with no complicated payout hoops. Your earnings hit your account the moment a sale is made.</p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300">
            For artists, licensing a beat is as simple as clicking <span className="text-graviital-blue-light font-semibold">"Add to Cart"</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
