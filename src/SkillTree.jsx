import React from 'react';

const SkillTree = () => {
  const categories = [
    { title: "LANGUAGES", skills: ["Java", "Python (Lead)", "JavaScript (MERN)"] },
    { title: "FRAMEWORKS", skills: ["React.js", "Node.js", "Android Studio"] },
    { title: "SIDE QUESTS", skills: ["Workshop Lead @ Hassan", "Python Organizer @ Mangaluru", "Team Mentor"] }
  ];

  return (
    <div className="max-w-5xl mx-auto bg-gray-900 border-4 border-purple-600 p-8 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
      <h2 className="text-yellow-400 text-xl mb-10 border-b-4 border-dashed border-gray-700 pb-4">SKILL_TREE.SYS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="border-4 border-gray-700 p-5 hover:border-cyan-400 transition-all group">
            <div className="text-cyan-400 text-[10px] mb-6 font-bold uppercase group-hover:text-yellow-400">{cat.title}</div>
            <ul className="space-y-4">
              {cat.skills.map((skill, j) => (
                <li key={j} className="text-white text-[9px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500"></span> {skill}
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