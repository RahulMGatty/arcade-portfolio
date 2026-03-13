import React from 'react';

const SkillTree = ({ isGodMode }) => {
  const tree = [
    { title: "CORE_LOGIC", skills: ["Java (Intermediate)", "C/C++ (Intermediate)", "Python (Intermediate)"] },
    { title: "WEB_ENGINES", skills: ["React (Intermediate)", "Angular (Intermediate)", "Node.js (MERN)"] },
    { title: "RESEARCH_LAB", skills: ["3D Slicer Extension", "Molar Analyzer", "Medical DICOM Analysis"] }
  ];

  return (
    <div className={`max-w-5xl mx-auto border-4 p-8 transition-all duration-700 fade-in ${
      isGodMode 
      ? 'bg-black/90 border-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.4)]' 
      : 'bg-gray-900 border-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
    }`}>
      
      {/* Title Header */}
      <h2 className={`text-xl mb-10 border-b-4 border-dashed pb-4 uppercase transition-colors ${
        isGodMode ? 'text-yellow-400 border-yellow-500' : 'text-yellow-400 border-gray-700'
      }`}>
        {isGodMode ? "Legendary_Upgrades.max" : "Skill_Upgrades.sys"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tree.map((node, i) => (
          <div 
            key={i} 
            className={`border-4 p-5 transition-all group ${
              isGodMode 
              ? 'border-yellow-600 bg-yellow-900/10 hover:border-yellow-300 hover:bg-yellow-900/30' 
              : 'border-gray-700 bg-transparent hover:border-cyan-400 hover:bg-gray-800'
            }`}
          >
            {/* Category Title */}
            <div className={`text-[10px] mb-6 font-bold uppercase transition-colors ${
              isGodMode 
              ? 'text-yellow-400 group-hover:text-yellow-200' 
              : 'text-cyan-400 group-hover:text-yellow-400'
            }`}>
              {node.title}
            </div>

            {/* Skill List */}
            <ul className="space-y-4">
              {node.skills.map((skill, j) => (
                <li key={j} className="text-white text-[9px] flex items-center gap-2 group/item">
                  {/* Skill Node Bullet */}
                  <span className={`w-1.5 h-1.5 transition-all duration-500 ${
                    isGodMode 
                    ? 'bg-yellow-400 shadow-[0_0_8px_#eab308] rotate-45' 
                    : 'bg-purple-500 shadow-[0_0_5px_purple]'
                  }`}></span> 
                  
                  <span className={isGodMode ? 'text-yellow-100 font-bold' : 'text-white'}>
                    {skill}
                  </span>
                </li>
              ))}
            </ul>

            {/* God Mode Rank Decoration */}
            {isGodMode && (
              <div className="mt-6 pt-4 border-t border-yellow-500/30 text-right">
                <span className="text-[7px] text-yellow-400 animate-pulse font-bold tracking-tighter">MAX_LEVEL_REACHED</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;