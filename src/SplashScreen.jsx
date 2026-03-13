import React from 'react';

const SplashScreen = ({ onStart }) => {
  const handleBoot = () => {
    // Plays your GTA San Andreas intro sound
    const audio = new Audio('/gta_intro.mp3'); 
    audio.volume = 0.4;
    audio.play().catch(() => {});
    onStart(); // Tells App.jsx to show the main content
  };

  return (
    <div className="fixed inset-0 z-[300] bg-black flex flex-col items-center justify-center overflow-hidden" 
         style={{ fontFamily: '"Press Start 2P", cursive' }}>
      
      {/* Flickering CRT Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-30 z-50"></div>
      
      <div className="relative z-10 text-center px-4">
        {/* Boot Text */}
        <div className="mb-4 text-cyan-400 text-[10px] animate-pulse">
          RAHUL_PORTFOLIO_OS [Version 2.0.26]
        </div>
        <div className="mb-12 text-gray-600 text-[8px] uppercase tracking-widest">
          (C) 2026 RAHUL M. ALL RIGHTS RESERVED.
        </div>

        {/* The Interaction Button */}
        <button 
          onClick={handleBoot}
          className="group relative px-10 py-5 bg-transparent border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 active:scale-90"
        >
          <span className="text-lg md:text-xl font-bold">PRESS START</span>
          
          {/* Decorative Corner Accents */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-white group-hover:border-black transition-colors"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-white group-hover:border-black transition-colors"></div>
        </button>

        <div className="mt-16 text-[7px] text-gray-700 animate-bounce">
          * INSERT COIN TO INITIALIZE *
        </div>
      </div>

      {/* Retro Horizontal Scanline Animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5 animate-scanline pointer-events-none"></div>
    </div>
  );
};

export default SplashScreen;