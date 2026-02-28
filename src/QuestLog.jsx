import React, { useState } from 'react';

const ProjectMonitor = ({ imageUrl }) => (
  <div className="relative w-full aspect-video bg-black border-4 border-gray-700 overflow-hidden mb-6 group">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_3px,2px_100%] pointer-events-none z-20"></div>
    {imageUrl ? (
      <img src={imageUrl} alt="Project" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-700 text-[10px] animate-pulse uppercase">Searching for Signal...</div>
    )}
  </div>
);

const QuestLog = () => {
  const [activeQuest, setActiveQuest] = useState('quest1');
  const quests = {
    quest1: { 
      title: "MISSION: S4 HOLIDAYS", 
      status: "COMPLETED", 
      image: "/project1.jpg", 
      desc: "Developed a production-ready travel website using MERN stack for dynamic bookings.", 
      loot: ["MERN", "REST API", "Git"] 
    },
    quest2: { 
      title: "MISSION: MOVIESTAR", 
      status: "COMPLETED", 
      image: null, 
      desc: "Discovery platform with JWT-auth and TMDb API integration.", 
      loot: ["Node.js", "JWT", "API"] 
    },
    quest3: { 
      title: "MISSION: MISSIONME", 
      status: "ACTIVE", 
      image: null, 
      desc: "Native Android task manager with real-time Firebase sync.", 
      loot: ["Java", "Android Studio", "Firebase"] 
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
      <div className="flex-1 bg-gray-800 border-4 border-gray-700 p-4">
        <div className="text-yellow-400 border-b-4 border-dashed border-gray-600 pb-2 text-[10px] mb-4">SELECT_MISSION</div>
        <div className="space-y-3">
          {Object.keys(quests).map((key) => (
            <button
              key={key}
              onClick={() => setActiveQuest(key)}
              className={`w-full p-3 border-4 text-[9px] text-left font-bold transition-all ${activeQuest === key ? 'border-cyan-400 bg-cyan-900/30 text-cyan-300' : 'border-transparent hover:border-gray-600 text-gray-400'}`}
            >
              {quests[key].title}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-[2] bg-gray-900 border-4 border-cyan-400 p-6 md:p-8">
        <ProjectMonitor imageUrl={quests[activeQuest].image} />
        <h2 className="text-lg text-cyan-400 mb-4 font-bold">{quests[activeQuest].title}</h2>
        <div className="text-yellow-400 text-[9px] mb-4">STATUS: {quests[activeQuest].status}</div>
        <p className="text-[11px] text-gray-300 leading-loose mb-8">{quests[activeQuest].desc}</p>
        <div className="flex gap-3 flex-wrap">
          {quests[activeQuest].loot.map(item => (
            <span key={item} className="border-2 border-purple-500 px-3 py-1 text-[9px] bg-purple-900/20">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestLog;