import React from 'react';

const GodLoadingScreen = ({ isGodMode }) => {
  return (
    <div className={`fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center overflow-hidden transition-colors duration-500`} 
         style={{ fontFamily: '"Press Start 2P", cursive' }}>
      
      {/* Dynamic Scanline Overlay: Red for Purge, Gold for Ascension */}
      <div className={`absolute inset-0 pointer-events-none z-50 opacity-60 bg-[size:100%_4px] ${
        isGodMode 
        ? 'bg-[linear-gradient(rgba(220,38,38,0.2)_50%,rgba(0,0,0,0.4)_50%)]' 
        : 'bg-[linear-gradient(rgba(234,179,8,0.1)_50%,rgba(0,0,0,0.2)_50%)]'
      }`}></div>
      
      {/* Centering Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4">
        {/* Dynamic Glowing Title */}
        <div className={`text-xl md:text-2xl mb-12 animate-pulse uppercase transition-all ${
          isGodMode 
          ? 'text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,1)]' 
          : 'text-yellow-400 drop-shadow-[0_0_15px_rgba(234,179,8,1)]'
        }`}>
          {isGodMode ? "SYSTEM_PURGE_INITIATED" : "ASCENDING TO GOD_MODE"}
        </div>
        
        {/* Fixed Centered Bar Container */}
        <div className={`w-full max-w-md h-12 border-4 p-1 mb-8 flex items-center justify-start shadow-lg transition-all ${
          isGodMode ? 'border-red-900 shadow-red-900/40' : 'border-yellow-500 shadow-yellow-500/40'
        }`}>
          {/* Progress Bar Fill with dynamic duration and color */}
          <div className={`h-full ${isGodMode ? 'bg-red-600' : 'bg-yellow-400'}`} 
               style={{ 
                 animation: `godBar ${isGodMode ? '1s' : '4s'} linear forwards` 
               }}></div>
        </div>
        
        {/* Dynamic Terminal Logs */}
        <div className={`text-[8px] space-y-3 uppercase tracking-widest font-bold transition-colors ${
          isGodMode ? 'text-red-800' : 'text-yellow-600'
        }`}>
          <p className="animate-bounce">
            {isGodMode ? "> DELETING ADMIN_PRIVILEGES..." : "> OVERRIDING SYSTEM LIMITS..."}
          </p>
          <p className="delay-700 animate-pulse">
            {isGodMode ? "> RESTORING CLASSIC_OS.SYS..." : "> INJECTING LEGENDARY_LOOT.DB..."}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes godBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default GodLoadingScreen;