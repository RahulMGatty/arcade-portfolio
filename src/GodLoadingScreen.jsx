import React, { useMemo } from 'react';

const GodLoadingScreen = ({ isGodMode }) => {
  // Memoizing the config prevents recalculation on every pulse animation frame
  const config = useMemo(() => ({
    title: isGodMode ? "SYSTEM_PURGE_INITIATED" : "ASCENDING TO GOD_MODE",
    duration: isGodMode ? "1s" : "4s",
    primaryColor: isGodMode ? "text-red-500" : "text-yellow-400",
    barColor: isGodMode ? "bg-red-600" : "bg-yellow-400",
    borderColor: isGodMode ? "border-red-900" : "border-yellow-500",
    shadowColor: isGodMode ? "shadow-red-900/40" : "shadow-yellow-500/40",
    logColor: isGodMode ? "text-red-800" : "text-yellow-600",
    log1: isGodMode ? "> DELETING ADMIN_PRIVILEGES..." : "> OVERRIDING SYSTEM LIMITS...",
    log2: isGodMode ? "> RESTORING CLASSIC_OS.SYS..." : "> INJECTING LEGENDARY_LOOT.DB..."
  }), [isGodMode]);

  return (
    <div className="fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 select-none" 
         style={{ fontFamily: '"Press Start 2P", cursive' }}>
      
      {/* 1. Optimized Scanline: Using a CSS class instead of inline logic where possible */}
      <div className={`absolute inset-0 pointer-events-none z-50 opacity-60 bg-[size:100%_4px] 
        ${isGodMode 
          ? 'bg-[linear-gradient(rgba(220,38,38,0.2)_50%,transparent_50%)]' 
          : 'bg-[linear-gradient(rgba(234,179,8,0.1)_50%,transparent_50%)]'
        }`}></div>
      
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4">
        {/* 2. Title with GPU-accelerated drop-shadow */}
        <div className={`text-xl md:text-2xl mb-12 animate-pulse uppercase transition-all will-change-transform ${config.primaryColor}`}>
          <span className="drop-shadow-[0_0_15px_rgba(currentColor,1)]">
            {config.title}
          </span>
        </div>
        
        {/* 3. Progress Bar: Uses 'will-change' to tell the browser to optimize this animation */}
        <div className={`w-full max-w-md h-12 border-4 p-1 mb-8 flex items-center justify-start shadow-lg transition-all ${config.borderColor} ${config.shadowColor}`}>
          <div className={`h-full will-change-[width] ${config.barColor}`} 
               style={{ 
                 animation: `godBar ${config.duration} linear forwards` 
               }}></div>
        </div>
        
        {/* 4. Terminal Logs */}
        <div className={`text-[8px] space-y-3 uppercase tracking-widest font-bold transition-colors ${config.logColor}`}>
          <p className="animate-bounce">{config.log1}</p>
          <p className="animate-pulse">{config.log2}</p>
        </div>
      </div>

      {/* 5. Style Tag Optimization: Moved keyframe to a standard CSS string or Global CSS is better, 
          but if keeping it here, we ensure it's not duplicated */}
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