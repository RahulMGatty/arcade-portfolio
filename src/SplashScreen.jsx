import React, { useState } from 'react';

const SplashScreen = ({ onStart }) => {
  const [isBooting, setIsBooting] = useState(false);

  const handleBoot = () => {
    setIsBooting(true);
    
    // 1. Audio Initialization
    const audio = new Audio('/gta_intro.mp3'); 
    audio.volume = 0.4;
    audio.play().catch((err) => console.log("Audio play blocked:", err));

    // 2. The 6-Second Mission Timer
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
      onStart(); 
    }, 13000); 
  };

  return (
    <div className="fixed inset-0 z-[300] bg-black flex flex-col items-center justify-center overflow-hidden font-arcade">
      
      {/* Enhanced CRT Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-30 z-50"></div>
      
      <div className="relative z-10 text-center px-4 w-full max-w-md">
        {!isBooting ? (
          <div className="fade-in">
            {/* Version Header */}
            <div className="mb-4 text-cyan-400 text-[10px] animate-pulse uppercase">
              RAHUL_PORTFOLIO_OS [v2.0.26]
            </div>
            <div className="mb-12 text-gray-600 text-[8px] uppercase tracking-widest">
              (C) 2026 RAHUL M. MANGALURU_UNIT
            </div>

            {/* Pulsing Start Button */}
            <button 
              onClick={handleBoot}
              className="group relative px-10 py-5 bg-transparent border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 active:scale-90"
            >
              <span className="text-lg md:text-xl font-bold uppercase animate-pulse-fast">Press Start</span>
              
              {/* Corner Accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-white group-hover:border-black transition-colors"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-white group-hover:border-black transition-colors"></div>
            </button>

            <div className="mt-16 text-[7px] text-gray-700 animate-bounce">
              * INSERT COIN TO INITIALIZE *
            </div>
          </div>
        ) : (
          /* High-Energy Loading State */
          <div className="w-full space-y-8 fade-in">
            <div className="text-yellow-400 text-[10px] animate-pulse-fast uppercase tracking-widest">
              INITIALIZING MISSION...
            </div>
            
            {/* Progress Bar with the new CSS animation */}
            <div className="w-full h-8 border-4 border-white p-1 relative shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <div className="h-full bg-cyan-400 animate-loading-bar"></div>
            </div>
            
            {/* Scrolling Bios Text */}
            {/* Updated Scrolling Bios Text for a 13s wait */}
            <div className="text-[7px] text-gray-500 text-left space-y-2 font-mono">
            <p className="animate-pulse">{">"} ACCESSING ST. ALOYSIUS ACADEMIC_LOGS...</p>
            <p className="animate-pulse">{">"} MOUNTING: MOLAR_ANALYZER_3D_EXT...</p>
            <p className="animate-pulse">{">"} SCANNING: DICOM_DATA_RESOURCES...</p>
            <p className="animate-pulse">{">"} LOADING: MERN_STACK_VIRTUAL_ENV...</p>
            <p className="animate-pulse">{">"} SYNCING: INTERMEDIATE_JAVA_LOGIC...</p>
            <p className="animate-pulse">{">"} CACHING: S4_HOLIDAYS_RESOURCES...</p>
            <p className="animate-pulse-fast text-cyan-500">{">"} ESTABLISHING: VS_MODE_ENCRYPTION...</p>
            </div>
          </div>
        )}
      </div>

      {/* Retro Horizontal Scanline */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 animate-scanline pointer-events-none"></div>
    </div>
  );
};

export default SplashScreen;