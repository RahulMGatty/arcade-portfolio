import React, { useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    // This timer controls how long the screen stays visible
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // Set to 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center font-arcade">
      {/* Retro Scanline */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] opacity-20"></div>
      
      <div className="relative z-10 text-center">
        <div className="text-cyan-400 text-sm mb-8 animate-pulse uppercase tracking-[0.2em]">
          Loading_Area...
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-64 h-8 border-4 border-white p-1 relative shadow-[4px_4px_0_rgba(255,255,255,0.2)]">
          {/* The Actual Bar */}
          <div className="h-full bg-cyan-500 animate-loading-bar-normal"></div>
        </div>

        <div className="mt-6 text-[8px] text-gray-500 animate-pulse uppercase">
          Fetching Data Segments
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingBarNormal {
          0% { width: 0%; }
          20% { width: 10%; }
          50% { width: 45%; }
          80% { width: 90%; }
          100% { width: 100%; }
        }
        .animate-loading-bar-normal {
          animation: loadingBarNormal 2s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;