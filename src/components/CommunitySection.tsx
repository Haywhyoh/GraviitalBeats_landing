import React from 'react';
import { Users } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section className="py-20 relative" id="community">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 -left-28 w-80 h-80 rounded-full bg-graviital-purple opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 -right-28 w-60 h-60 rounded-full bg-graviital-blue opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-center align-middle gap-16 max-w-6xl mx-auto">
          <div className="md:w-1/2 lg:mt-24">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-graviital-blue-light" />
              <span className="text-graviital-blue-light font-medium">Community</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join a Movement of Music Makers
            </h2>
            
            <p className="text-lg text-gray-300 mb-6">
              GraviitalBeats isn't just a marketplace — it's a platform built to <span className="font-semibold text-white">champion independent creators</span>.
            </p>
            
            <p className="text-lg text-gray-300 mb-8">
              We're already working with a community of early adopters, including:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-graviital-blue-light"></span>
                <span>Platinum-selling producers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-graviital-purple-light"></span>
                <span>Indie artists and YouTubers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-graviital-accent"></span>
                <span>Podcast creators & sound designers</span>
              </li>
            </ul>
            
            <p className="text-lg">
              This is your chance to get in early and shape the future of beat commerce.
            </p>
          </div>
          
          <div className="md:w-1/2 flex items-center justify-center ">
            <div className="w-full rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="/images/speaker.png" 
                alt="GraviitalBeats Community" 
                className="w-full h-auto "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graviital-dark/70 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
