import React, { useEffect } from 'react';

const LoadingScreen = ({ onComplete, isGodMode }) => {
  useEffect(() => {
    // Standardizing the navigation load to 2 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[500] flex flex-col items-center justify-center font-arcade transition-colors duration-700 ${
      isGodMode ? 'bg-black' : 'bg-black/95'
    }`}>
      
      {/* Dynamic Scanline: Sepia for God Mode, Gray for Normal */}
      <div className={`absolute inset-0 pointer-events-none z-20 opacity-20 bg-[size:100%_4px] ${
        isGodMode 
        ? 'bg-[linear-gradient(rgba(234,179,8,0.2)_50%,rgba(0,0,0,0.3)_50%)]' 
        : 'bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)]'
      }`}></div>
      
      <div className="relative z-10 text-center">
        {/* Animated Title */}
        <div className={`text-sm mb-8 animate-pulse uppercase tracking-[0.2em] font-bold ${
          isGodMode ? 'text-yellow-400 drop-shadow-[0_0_8px_#eab308]' : 'text-cyan-400'
        }`}>
          {isGodMode ? "Accessing_High_Security_Sector..." : "Loading_Area..."}
        </div>
        
        {/* Progress Bar Container */}
        <div className={`w-64 h-8 border-4 p-1 relative transition-all ${
          isGodMode 
          ? 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]' 
          : 'border-white shadow-[4px_4px_0_rgba(255,255,255,0.2)]'
        }`}>
          {/* The Progress Bar Fill */}
          <div className={`h-full transition-colors duration-500 ${
            isGodMode ? 'bg-yellow-400 animate-loading-bar-normal' : 'bg-cyan-500 animate-loading-bar-normal'
          }`}></div>
        </div>

        {/* Dynamic Footer Text */}
        <div className={`mt-6 text-[8px] animate-pulse uppercase font-bold ${
          isGodMode ? 'text-yellow-700' : 'text-gray-500'
        }`}>
          {isGodMode ? "Overriding Data Buffers" : "Fetching Data Segments"}
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingBarNormal {
          0% { width: 0%; }
          10% { width: 100%; }
        }
        .animate-loading-bar-normal {
          animation: loadingBarNormal 2s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;