import React, { useEffect } from 'react';

const LoadingScreen = ({ onComplete, isGodMode }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1000); // Changed to 1 second
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[500] flex flex-col items-center justify-center font-arcade transition-colors duration-700 ${
      isGodMode ? 'bg-black' : 'bg-black/95'
    }`}>
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
        <div className={`text-[10px] mb-8 animate-pulse uppercase tracking-[0.2em] font-bold ${
          isGodMode ? 'text-yellow-400 drop-shadow-[0_0_8px_#eab308]' : 'text-cyan-400'
        }`}>
          {isGodMode ? "Accessing_Admin_Data..." : "Loading_Area..."}
        </div>
        
        {/* Centered Bar Container */}
        <div className={`w-64 h-8 border-4 p-1 flex items-center justify-start overflow-hidden transition-all ${
          isGodMode 
          ? 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]' 
          : 'border-white shadow-[4px_4px_0_rgba(255,255,255,0.2)]'
        }`}>
          <div className={`h-full ${
            isGodMode ? 'bg-yellow-400' : 'bg-cyan-500'
          }`} style={{ animation: 'barFill 1s linear forwards' }}></div>
        </div>

        <div className={`mt-6 text-[7px] animate-pulse uppercase font-bold ${
          isGodMode ? 'text-yellow-700' : 'text-gray-500'
        }`}>
          {isGodMode ? "Overclocking..." : "Syncing..."}
        </div>
      </div>

      <style jsx>{`
        @keyframes barFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;