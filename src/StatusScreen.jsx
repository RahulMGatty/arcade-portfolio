import React from 'react';

const StatusScreen = ({ onClose }) => {
  const stats = [
    { label: "STRENGTH (JAVA)", value: 75 },
    { label: "AGILITY (JS/REACT)", value: 80 },
    { label: "INTEL (PYTHON)", value: 85 },
    { label: "SPECIAL (3D SLICER)", value: 90 },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-black/90 border-4 border-cyan-400 p-8 shadow-[0_0_30px_rgba(34,211,238,0.4)] relative fade-in">
      
      {/* 8-Bit Close Button (Top Right) */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl transition-colors"
      >
        [X]
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Header */}
        <div className="flex-1">
          <h2 className="text-yellow-400 text-2xl mb-2 uppercase italic tracking-tighter">Player Status</h2>
          <div className="text-cyan-400 text-[10px] mb-6 tracking-widest uppercase">
            Rank: Research Intern // Unit: St. Aloysius
          </div>
          
          <div className="space-y-6">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="flex justify-between text-[9px] mb-2 uppercase text-white font-bold">
                  <span>{stat.label}</span>
                  <span className="text-cyan-400">{stat.value}%</span>
                </div>
                <div className="w-full h-3 bg-gray-900 border-2 border-gray-700">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_15px_#22d3ee]" 
                    style={{ width: `${stat.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bio Block */}
        <div className="flex-1 border-l-4 border-dashed border-gray-800 pl-8">
          <div className="text-red-500 text-[10px] mb-4 font-bold uppercase tracking-widest animate-pulse">[ MISSION_BIO ]</div>
          <p className="text-gray-300 text-[9px] leading-relaxed mb-8 italic">
            "Currently specialized in 3D Slicer API development and medical imaging research. 
            Intermediate logic mastery in Java, Python, and C++. Available for high-stakes 
            full-stack development missions."
          </p>
          
          <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-[8px] text-gray-500 uppercase">
            <div>LOCATION: <span className="text-white">MANGALURU, IN</span></div>
            <div>EXP_LEVEL: <span className="text-white">M.SC SW TECH</span></div>
            <div>CURRENT_HP: <span className="text-green-500">100/100</span></div>
            <div>STATUS: <span className="text-yellow-400">HIRE_READY</span></div>
          </div>
        </div>
      </div>

      {/* Large Return Button */}
      <div className="mt-10 pt-6 border-t-2 border-gray-800 text-center">
        <button 
          onClick={onClose}
          className="px-6 py-2 bg-gray-900 border-2 border-white text-white text-[9px] uppercase hover:bg-white hover:text-black transition-all active:scale-95"
        >
          {">"} Return to Main Menu {"<"}
        </button>
      </div>
    </div>
  );
};

export default StatusScreen;