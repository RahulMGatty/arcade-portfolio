import React from 'react';

const GodLoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center overflow-hidden font-arcade">
      {/* Golden Scanline */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(234,179,8,0.1)_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px] opacity-50 z-50"></div>
      
      <div className="relative z-10 text-center">
        <div className="text-yellow-400 text-2xl mb-8 animate-pulse shadow-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,1)]">
          ASCENDING TO GOD_MODE
        </div>
        
        {/* Golden Progress Bar */}
        <div className="w-80 h-10 border-4 border-yellow-500 p-1 mb-6 relative">
          <div className="h-full bg-yellow-400 animate-[loadingBar_4s_linear_forwards]"></div>
        </div>
        
        <div className="text-[8px] text-yellow-600 space-y-2 uppercase tracking-tighter">
          <p className="animate-bounce"> {">"} OVERRIDING SYSTEM LIMITS...</p>
          <p className="delay-700 animate-pulse"> {">"} MAXIMIZING POWER LEVELS...</p>
          <p className="delay-1500 animate-pulse"> {">"} UNLOCKING LEGENDARY REWARDS...</p>
        </div>
      </div>
    </div>
  );
};

export default GodLoadingScreen;