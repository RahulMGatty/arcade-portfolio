import React from 'react';

const SkillTree = () => {
  const tree = [
    { title: "CORE_LOGIC", skills: ["Java (Intermediate)", "C/C++ (Intermediate)", "Python (Intermediate)"] },
    { title: "WEB_ENGINES", skills: ["React (Intermediate)", "Angular (Intermediate)", "Node.js (MERN)"] },
    { title: "RESEARCH_LAB", skills: ["3D Slicer Extension", "Molar Analyzer", "Medical DICOM Analysis"] }
  ];

  return (
    <div className="max-w-5xl mx-auto bg-gray-900 border-4 border-purple-600 p-8 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
      <h2 className="text-yellow-400 text-xl mb-10 border-b-4 border-dashed border-gray-700 pb-4 uppercase">Skill_Upgrades.sys</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tree.map((node, i) => (
          <div key={i} className="border-4 border-gray-700 p-5 hover:border-cyan-400 hover:bg-gray-800 transition-all group">
            <div className="text-cyan-400 text-[10px] mb-6 font-bold uppercase group-hover:text-yellow-400">{node.title}</div>
            <ul className="space-y-4">
              {node.skills.map((skill, j) => (
                <li key={j} className="text-white text-[9px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 shadow-[0_0_5px_purple]"></span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;