import React, { useMemo } from 'react';

const GodLoadingScreen = ({ isGodMode }) => {
  const config = useMemo(() => ({
    title: isGodMode ? "SYSTEM_PURGE" : "ASCENDING",
    subTitle: isGodMode ? "INITIATED" : "GOD_MODE",
    duration: isGodMode ? "1s" : "4s",
    primaryColor: isGodMode ? "text-red-500" : "text-yellow-400",
    barColor: isGodMode ? "bg-red-600" : "bg-yellow-400",
    borderColor: isGodMode ? "border-red-900" : "border-yellow-500",
    shadowColor: isGodMode ? "shadow-red-900/40" : "shadow-yellow-500/40",
    logColor: isGodMode ? "text-red-800" : "text-yellow-600",
    log1: isGodMode ? "> DELETING_PRIVILEGES..." : "> OVERRIDING_LIMITS...",
    log2: isGodMode ? "> RESTORING_OS..." : "> INJECTING_LOOT..."
  }), [isGodMode]);

  return (
    <div className="fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center overflow-hidden select-none px-6" 
         style={{ fontFamily: '"Press Start 2P", cursive' }}>
      
      {/* Scanline Overlay - Fixed to viewport */}
      <div className={`fixed inset-0 pointer-events-none z-50 opacity-60 bg-[size:100%_4px] 
        ${isGodMode 
          ? 'bg-[linear-gradient(rgba(220,38,38,0.2)_50%,transparent_50%)]' 
          : 'bg-[linear-gradient(rgba(234,179,8,0.1)_50%,transparent_50%)]'
        }`}></div>
      
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center">
        {/* Title: Broken into two lines for narrow screens */}
        <div className={`text-lg md:text-2xl mb-8 animate-pulse uppercase transition-all will-change-transform ${config.primaryColor}`}>
          <div className="drop-shadow-[0_0_10px_rgba(currentColor,1)]">
            {config.title}
          </div>
          <div className="text-[10px] md:text-sm mt-2 opacity-80">
            {config.subTitle}
          </div>
        </div>
        
        {/* Progress Bar: Reduced height and strict max-width for mobile */}
        <div className={`w-full h-8 md:h-12 border-4 p-1 mb-8 flex items-center justify-start shadow-lg transition-all ${config.borderColor} ${config.shadowColor}`}>
          <div className={`h-full will-change-[width] ${config.barColor}`} 
               style={{ 
                 animation: `godBar ${config.duration} linear forwards` 
               }}></div>
        </div>
        
        {/* Terminal Logs: Smaller text for mobile */}
        <div className={`text-[7px] md:text-[8px] space-y-4 uppercase tracking-tighter font-bold transition-colors ${config.logColor}`}>
          <p className="animate-bounce">{config.log1}</p>
          <p className="animate-pulse">{config.log2}</p>
        </div>
      </div>

      <style>{`
        @keyframes godBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default GodLoadingScreen;