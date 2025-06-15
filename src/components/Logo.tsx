
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 font-montserrat">
      <span className="text-2xl font-extrabold">
        <img src="/images/logo.png" alt="GraviitalBeats" className="w-10 h-10" />
        {/* Gravii<span className="beat-waveform">tal</span>Beats */}
      </span>
    </div>
  );
};

export default Logo;
