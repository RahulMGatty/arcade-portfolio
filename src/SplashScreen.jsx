import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onStart }) => {
  const [isBooting, setIsBooting] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);

  const tips = [
    "Stages represent core projects. Clear them all to see full stack mastery.",
    "The P-Organ Skill Tree reflects my current technical evolution.",
    "Inactivity for 60 seconds will trigger 'Attract Mode' (Game Over).",
    "Using the Comms Channel grants a +500 Score bonus to your profile.",
    "Check the Manual (.EXE) for a detailed technical breakdown.",
    "Project previews use custom CSS CRT filters for that 80s arcade glow.",
    "Everything you see is built with React, Tailwind, and Framer Motion.",
    // Smart Platform Hint
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      ? "CHEAT: Swipe ↑↑↓↓←→←→ then DOUBLE TAP for God Mode."
      : "CHEAT: Input ↑↑↓↓←→←→ B A on keys for God Mode."
  ];

  // Logic to cycle tips every 4 seconds once booting starts
  useEffect(() => {
    if (!isBooting) return;

    // Pick a random starting tip
    setCurrentTip(Math.floor(Math.random() * tips.length));

    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isBooting]);

  const handleBoot = () => {
    setIsBooting(true);
    const audio = new Audio('/gta_intro.mp3'); 
    audio.volume = 0.4;
    audio.play().catch((err) => console.log("Audio play blocked:", err));

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
            <div className="mb-4 text-cyan-400 text-[10px] animate-pulse uppercase">
              RAHUL_PORTFOLIO_OS [v2.0.26]
            </div>
            <div className="mb-12 text-gray-600 text-[8px] uppercase tracking-widest">
              (C) 2026 RAHUL M. MANGALURU_UNIT
            </div>

            <button 
              onClick={handleBoot}
              className="group relative px-10 py-5 bg-transparent border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 active:scale-90"
            >
              <span className="text-lg md:text-xl font-bold uppercase">Press Start</span>
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-white group-hover:border-black transition-colors"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-white group-hover:border-black transition-colors"></div>
            </button>

            <div className="mt-16 text-[7px] text-gray-700 animate-bounce">
              * INSERT COIN TO INITIALIZE *
            </div>
          </div>
        ) : (
          <div className="w-full space-y-6 fade-in">
            <div className="text-yellow-400 text-[10px] animate-pulse-fast uppercase tracking-widest">
              INITIALIZING MISSION...
            </div>
            
            <div className="w-full h-6 border-4 border-white p-1 relative">
              <div className="h-full bg-cyan-400 animate-loading-bar"></div>
            </div>

            {/* --- THE PRO-TIP BOX --- */}
            <div className="bg-gray-900/80 border-2 border-cyan-400 p-4 text-left relative overflow-hidden">
                <div className="text-cyan-400 text-[7px] mb-2 font-bold tracking-[3px] uppercase">
                    Intel_Log: Tip_{currentTip + 1}
                </div>
                <p className="text-white text-[9px] leading-relaxed italic">
                    "{tips[currentTip]}"
                </p>
                {/* Scanning bar effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-900">
                    <div className="h-full bg-cyan-400 w-1/4 animate-scan"></div>
                </div>
            </div>
            
            <div className="text-[7px] text-gray-500 text-left space-y-2 font-mono pt-4">
              <p className="animate-pulse">{">"} ACCESSING ST. ALOYSIUS ACADEMIC_LOGS...</p>
              <p className="animate-pulse">{">"} MOUNTING: MOLAR_ANALYZER_3D_EXT...</p>
              <p className="animate-pulse">{">"} SCANNING: DICOM_DATA_RESOURCES...</p>
              <p className="animate-pulse-fast text-cyan-500">{">"} ESTABLISHING: VS_MODE_ENCRYPTION...</p>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 animate-scanline pointer-events-none"></div>
    </div>
  );
};

export default SplashScreen;