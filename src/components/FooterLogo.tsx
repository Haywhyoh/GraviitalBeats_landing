
import React from 'react';

const FooterLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 font-montserrat">
      <span className="text-2xl font-extrabold">
        <img src="/images/trans_logo1.png" alt="GraviitalBeats" className="w-24 h-24" />
        {/* Gravii<span className="beat-waveform">tal</span>Beats */}
      </span>
    </div>
  );
};

export default FooterLogo;
