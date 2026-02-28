import React, { useState } from 'react';

const ProjectMonitor = ({ imageUrl }) => (
  <div className="relative w-full aspect-video bg-black border-4 border-gray-700 overflow-hidden mb-6">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_3px,2px_100%] pointer-events-none z-20"></div>
    {imageUrl ? (
      <img src={imageUrl} alt="Project" className="w-full h-full object-cover grayscale-[10%] brightness-90 contrast-125" />
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-600 text-[10px] animate-pulse uppercase">No Signal</div>
    )}
  </div>
);

const QuestLog = () => {
  const [activeQuest, setActiveQuest] = useState('quest1');

  const playHoverSound = () => {
    const audio = new Audio('/blip.mp3');
    audio.volume = 0.2;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  const quests = {
    quest1: { title: "STAGE 1: E-COMMERCE", status: "CLEARED", image: "/project1.jpg", desc: "Retro-themed shop engine.", loot: ["React", "Stripe"] },
    quest2: { title: "STAGE 2: DASHBOARD", status: "CLEARED", image: "/p2.jpg", desc: "Data visualization portal.", loot: ["D3.js", "API"] }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto text-gray-200">
      <div className="flex-1 bg-gray-800 border-4 border-gray-700 p-4 flex flex-col gap-4">
        <div className="text-yellow-400 border-b-4 border-dashed border-gray-600 pb-2 text-[10px]">STAGE SELECT</div>
        {Object.keys(quests).map((key) => (
          <button
            key={key}
            onMouseEnter={playHoverSound}
            onClick={() => setActiveQuest(key)}
            className={`p-3 border-4 text-[9px] font-bold transition-all ${activeQuest === key ? 'border-cyan-400 bg-cyan-900/30 text-cyan-300' : 'border-transparent hover:border-gray-500 hover:bg-gray-700'}`}
          >
            {quests[key].title}
          </button>
        ))}
      </div>

      <div className="flex-[2] bg-gray-900 border-4 border-cyan-400 p-6 md:p-8">
        <ProjectMonitor imageUrl={quests[activeQuest].image} />
        <h2 className="text-lg text-cyan-400 mb-4 font-bold uppercase">{quests[activeQuest].title}</h2>
        <p className="leading-loose mb-8 text-[11px] text-gray-300">{quests[activeQuest].desc}</p>
        <div className="flex gap-4 flex-wrap">
          {quests[activeQuest].loot.map(item => (
            <span key={item} className="border-2 border-purple-500 px-2 py-1 text-[9px] text-purple-300 bg-purple-900/20">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestLog;