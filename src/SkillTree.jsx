import React, { useState } from 'react';

const SkillTree = () => {
  const phases = {
    1: {
      name: "LEVEL 1: FRONTEND",
      majorNode: "Core UI Engine",
      majorLoot: ["HTML5", "CSS3", "JavaScript"],
      minorNodes: [
        { name: "Responsive Design", equipped: true },
        { name: "DOM Manipulation", equipped: true },
      ]
    },
    2: {
      name: "LEVEL 2: FRAMEWORKS",
      majorNode: "React Ecosystem",
      majorLoot: ["React", "Tailwind CSS", "Framer Motion"],
      minorNodes: [
        { name: "State Management", equipped: true },
        { name: "API Integration", equipped: true },
      ]
    },
    3: {
      name: "LEVEL 3: BACKEND",
      majorNode: "Server Architecture",
      majorLoot: ["Node.js", "Express", "MongoDB"],
      minorNodes: [
        { name: "RESTful Routing", equipped: true },
        { name: "Database Schema", equipped: true },
      ]
    },
    4: {
      name: "LEVEL 4: TOOLS",
      majorNode: "Developer Utilities",
      majorLoot: ["Git/GitHub", "VS Code", "Postman"],
      minorNodes: [
        { name: "Version Control", equipped: true },
        { name: "Debugging", equipped: true },
      ]
    }
  };

  const [activePhase, setActivePhase] = useState(1);

  return (
    <div className="max-w-5xl mx-auto text-gray-200 flex flex-col md:flex-row gap-8">
      
      {/* Left Column: Level Selection */}
      <div className="flex-[1] flex flex-col gap-4">
        <h2 className="text-yellow-400 border-b-4 border-dashed border-gray-600 pb-2 text-sm">
          SELECT UPGRADE
        </h2>
        {[1, 2, 3, 4].map((phaseNum) => (
          <button
            key={phaseNum}
            onClick={() => setActivePhase(phaseNum)}
            className={`p-4 border-4 text-left uppercase transition-all text-xs ${
              activePhase === phaseNum
                ? 'border-purple-500 bg-purple-900/40 text-white drop-shadow-[2px_2px_0_rgba(255,0,255,1)]'
                : 'border-gray-700 hover:border-gray-500 bg-gray-800'
            }`}
          >
            Level {phaseNum}
          </button>
        ))}
      </div>

      {/* Right Column: Node Details */}
      <div className="flex-[2] bg-gray-900 border-4 border-purple-500 p-8 relative">
        <h3 className="text-xl md:text-2xl text-yellow-400 mb-4 drop-shadow-[2px_2px_0_rgba(255,0,255,0.8)]">
          {phases[activePhase].name}
        </h3>

        <div className="mb-10 mt-8">
          <h4 className="text-sm md:text-md text-white mb-6 border-b-2 border-purple-500 inline-block pb-1">
            CORE TECH: {phases[activePhase].majorNode}
          </h4>
          <div className="flex gap-4 flex-wrap">
            {phases[activePhase].majorLoot.map((skill, index) => (
              <span key={index} className="px-3 py-2 border-2 border-cyan-400 bg-cyan-900/30 text-cyan-300 text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm md:text-md text-white mb-6 border-b-2 border-gray-600 inline-block pb-1">
            PASSIVE BUFFS
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases[activePhase].minorNodes.map((node, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-4 h-4 bg-yellow-400 border-2 border-orange-500"></div>
                <span className="text-xs text-gray-300 leading-relaxed">{node.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTree;