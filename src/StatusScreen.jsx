import React from 'react';

const StatusScreen = ({ onClose, isGodMode }) => {
  const stats = [
    { label: "STRENGTH (JAVA)", value: 75 },
    { label: "AGILITY (JS/REACT)", value: 80 },
    { label: "INTEL (PYTHON)", value: 85 },
    { label: "SPECIAL (3D SLICER)", value: 90 },
  ];

  return (
    <div className={`max-w-4xl mx-auto border-4 p-8 relative fade-in transition-all duration-700 ${
      isGodMode 
      ? 'bg-black border-yellow-400 shadow-[0_0_40px_rgba(234,179,8,0.5)]' 
      : 'bg-black/90 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)]'
    }`}>
      
      {/* 8-Bit Close Button */}
      <button 
        onClick={onClose}
        className={`absolute top-4 right-4 text-xl transition-colors z-20 ${
          isGodMode ? 'text-yellow-600 hover:text-yellow-300' : 'text-gray-500 hover:text-red-500'
        }`}
      >
        [X]
      </button>

      {/* NEW: PROFILE HEADER WITH PICTURE */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 border-b-2 border-dashed pb-6 border-cyan-900/50">
        <div className="flex-1">
          <h2 className={`text-4xl mb-2 uppercase italic tracking-tighter font-bold ${
            isGodMode ? 'text-yellow-300 animate-pulse' : 'text-yellow-400'
          }`}>
            {isGodMode ? "Master Profile" : "Player Status"}
          </h2>
          <div className={`text-[10px] tracking-widest uppercase font-bold ${
            isGodMode ? 'text-yellow-500' : 'text-cyan-400'
          }`}>
            Rank: {isGodMode ? 'Legendary Administrator' : 'Research Intern'} // Unit: St. Aloysius
          </div>
        </div>

        {/* Profile Picture ID Frame */}
        <div className="mt-4 md:mt-0 relative group">
          <div className={`absolute -inset-1 opacity-20 blur group-hover:opacity-40 transition ${isGodMode ? 'bg-yellow-400' : 'bg-cyan-400'}`}></div>
          <div className={`relative w-24 h-24 md:w-32 md:h-32 border-2 bg-black overflow-hidden p-1 shadow-lg ${isGodMode ? 'border-yellow-400' : 'border-cyan-400'}`}>
            <img 
              src="/profile.jpg" 
              alt="Rahul M" 
              className="w-full h-full object-cover grayscale brightness-110 contrast-125"
              style={{ 
                filter: isGodMode ? 'none' : 'sepia(100%) hue-rotate(150deg) saturate(300%)' 
              }}
            />
            {/* CRT Scanline Overlay specifically for the photo */}
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(transparent_50%,black_50%)] bg-[length:100%_2px]"></div>
          </div>
          <div className={`absolute -bottom-2 -right-2 text-[8px] font-bold px-2 py-0.5 arcade-font ${isGodMode ? 'bg-yellow-400 text-black' : 'bg-cyan-400 text-black'}`}>
            ID_VERIFIED
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Stats Column */}
        <div className="flex-1 space-y-6">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="flex justify-between text-[9px] mb-2 uppercase text-white font-bold tracking-widest">
                <span>{stat.label}</span>
                <span className={isGodMode ? 'text-yellow-400' : 'text-cyan-400'}>
                  {isGodMode ? '999%' : `${stat.value}%`}
                </span>
              </div>
              <div className={`w-full h-3 bg-gray-900 border-2 ${
                isGodMode ? 'border-yellow-900' : 'border-gray-700'
              }`}>
                <div 
                  className={`h-full transition-all duration-1000 ${
                    isGodMode ? 'bg-yellow-400 shadow-[0_0_20px_#eab308]' : 'bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_15px_#22d3ee]'
                  }`} 
                  style={{ width: isGodMode ? '100%' : `${stat.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bio Block */}
        <div className={`flex-1 border-l-4 border-dashed pl-8 ${
          isGodMode ? 'border-yellow-900' : 'border-gray-800'
        }`}>
          <div className="text-red-500 text-[10px] mb-4 font-bold uppercase tracking-widest animate-pulse">
            {isGodMode ? "[ SYSTEM_OVERRIDE_ACTIVE ]" : "[ MISSION_BIO ]"}
          </div>
          <p className={`text-[10px] leading-relaxed mb-8 italic ${
            isGodMode ? 'text-yellow-100 font-bold' : 'text-gray-300'
          }`}>
            "Currently specialized in 3D Slicer API development and medical imaging research. 
            Intermediate logic mastery in Java, Python, and C++. Available for high-stakes 
            full-stack development missions."
          </p>
          
          <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-[8px] text-gray-500 uppercase font-bold">
            <div>LOCATION: <span className={isGodMode ? 'text-yellow-300' : 'text-white'}>MANGALURU, IN</span></div>
            <div>EXP_LEVEL: <span className={isGodMode ? 'text-yellow-300' : 'text-white'}>M.SC SW TECH</span></div>
            <div>CURRENT_HP: <span className={isGodMode ? 'text-yellow-400 animate-pulse' : 'text-green-500'}>
              {isGodMode ? '∞ / ∞' : '100/100'}
            </span></div>
            <div>STATUS: <span className={isGodMode ? 'text-yellow-300' : 'text-yellow-400'}>HIRE_READY</span></div>
          </div>
        </div>
      </div>

      {/* Large Return Button */}
      <div className={`mt-10 pt-6 border-t-2 text-center ${
        isGodMode ? 'border-yellow-900' : 'border-gray-800'
      }`}>
        <button 
          onClick={onClose}
          className={`px-8 py-3 border-2 text-[10px] uppercase transition-all active:scale-95 font-bold ${
            isGodMode 
            ? 'bg-yellow-500 border-yellow-200 text-black hover:bg-yellow-400 shadow-[0_0_15px_#eab308]' 
            : 'bg-gray-900 border-white text-white hover:bg-white hover:text-black'
          }`}
        >
          {">"} Return to Main Menu {"<"}
        </button>
      </div>
    </div>
  );
};

export default StatusScreen;