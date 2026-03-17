import React, { useState, useMemo } from 'react';

// 1. Static Data Extraction: Move this outside the component 
// to prevent re-instantiation on every state change/render.
const QUEST_DATA = {
  quest1: { 
    title: "RESEARCH: MOLAR ANALYZER", 
    status: "IN_PROGRESS", 
    image: null, 
    desc: "Custom 3D Slicer extension for tooth analysis using Python and SDKs. Focused on medical imaging and patient DICOM data.", 
    loot: ["Python", "3D Slicer", "Research"] 
  },
  quest2: { 
    title: "MISSION: S4 HOLIDAYS", 
    status: "CLEARED", 
    image: "/s4_holiday.jpg", 
    desc: "Full-stack travel portal built during M.Sc. studies at St. Aloysius.", 
    loot: ["MERN", "REST API"] 
  },
  quest3: { 
    title: "MISSION: MEDICAL HUB", 
    status: "CLEARED", 
    image: "/medical_hub.jpg", 
    desc: "Medical Report Processing Hub built with Python and Streamlit to automate report diagnostics.", 
    loot: ["Python", "Streamlit", "Automation"] 
  },
  quest4: { 
    title: "MISSION: MOVIESTAR", 
    status: "COMPLETED", 
    image: null, 
    desc: "Discovery platform with JWT-auth and TMDb API integration.", 
    loot: ["Node.js", "JWT", "API"] 
  },
  quest5: { 
    title: "MISSION: MISSIONME", 
    status: "ACTIVE", 
    image: null, 
    desc: "Native Android task manager with real-time Firebase sync.", 
    loot: ["Java", "Android Studio", "Firebase"] 
  },
  quest6: { 
    title: "MISSION: GAMIOFILE", 
    status: "ACTIVE", 
    image: "/portfolio.jpg", 
    desc: "A high-performance retro arcade portfolio system. Featuring a custom 'God Mode' kernel, CRT filters, and chiptune-synced transitions.", 
    loot: ["React", "Tailwind CSS", "Vercel"] 
  },
};

const ProjectMonitor = React.memo(({ imageUrl, isGodMode }) => (
  <div className={`relative w-full aspect-video bg-black border-4 overflow-hidden mb-6 group transition-all duration-700 ${
    isGodMode ? 'border-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.5)]' : 'border-gray-700'
  }`}>
    <div className={`absolute inset-0 pointer-events-none z-20 opacity-30 ${
      isGodMode 
      ? 'bg-[linear-gradient(rgba(234,179,8,0.2)_50%,transparent_50%)] bg-[size:100%_3px]' 
      : 'bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_3px]'
    }`}></div>

    {imageUrl ? (
      <img 
        src={imageUrl} 
        alt="Project Mission" 
        className={`w-full h-full object-cover transition-all duration-500 ${
          isGodMode ? 'grayscale-0 brightness-110' : 'grayscale-[40%] group-hover:grayscale-0'
        }`}
        loading="lazy" // Performance: Only load images when needed
      />
    ) : (
      <div className={`w-full h-full flex items-center justify-center text-[10px] animate-pulse uppercase font-arcade ${
        isGodMode ? 'bg-yellow-900/20 text-yellow-400' : 'bg-gray-900 text-gray-700'
      }`}>
        Searching for Signal...
      </div>
    )}
  </div>
));

const QuestLog = ({ isGodMode }) => {
  const [activeQuest, setActiveQuest] = useState('quest1');

  // useMemo ensures that styles are only re-calculated if isGodMode changes
  const theme = useMemo(() => ({
    sidebar: isGodMode ? 'bg-yellow-900/10 border-yellow-600 shadow-[0_0_15px_rgba(234,179,8,0.2)]' : 'bg-gray-800 border-gray-700',
    panel: isGodMode ? 'bg-black/95 border-yellow-400 shadow-[0_0_25px_rgba(234,179,8,0.3)]' : 'bg-gray-900 border-cyan-400',
    textPrimary: isGodMode ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]' : 'text-cyan-400',
    textSecondary: isGodMode ? 'text-yellow-500 font-bold' : 'text-yellow-400',
    loot: isGodMode ? 'border-yellow-400 bg-yellow-400 text-black shadow-[0_0_10px_rgba(234,179,8,0.4)]' : 'border-purple-500 bg-purple-900/20 text-purple-300'
  }), [isGodMode]);

  const currentData = QUEST_DATA[activeQuest];

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto fade-in select-none">
      {/* Sidebar Mission Selector */}
      <div className={`flex-1 border-4 p-4 transition-all duration-700 ${theme.sidebar}`}>
        <div className={`${theme.textSecondary} border-b-4 border-dashed pb-2 text-[10px] mb-4 uppercase ${isGodMode ? 'border-yellow-500' : 'border-gray-600'}`}>
          Select_Mission
        </div>
        <div className="space-y-3">
          {Object.keys(QUEST_DATA).map((key) => (
            <button
              key={key}
              onClick={() => setActiveQuest(key)}
              className={`w-full p-3 border-4 text-[9px] text-left font-bold transition-all duration-300 ${
                activeQuest === key 
                  ? (isGodMode ? 'border-yellow-400 bg-yellow-500 text-black shadow-[0_0_15px_#eab308]' : 'border-cyan-400 bg-cyan-900/30 text-cyan-300') 
                  : (isGodMode ? 'border-transparent text-yellow-600/60 hover:border-yellow-500 hover:text-yellow-400' : 'border-transparent hover:border-gray-600 text-gray-400')
              }`}
            >
              {QUEST_DATA[key].title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Details Panel */}
      <div className={`flex-[2] border-4 p-6 md:p-8 transition-all duration-700 ${theme.panel}`}>
        <ProjectMonitor imageUrl={currentData.image} isGodMode={isGodMode} />
        
        <h2 className={`text-lg mb-4 font-bold transition-colors ${theme.textPrimary}`}>
          {currentData.title}
        </h2>
        
        <div className={`${theme.textSecondary} text-[9px] mb-4 uppercase tracking-widest`}>
          Status: {currentData.status}
        </div>
        
        <p className={`text-[11px] leading-loose mb-8 transition-colors ${isGodMode ? 'text-yellow-50/90' : 'text-gray-400'}`}>
          {currentData.desc}
        </p>
        
        <div className="flex gap-3 flex-wrap">
          {currentData.loot.map(item => (
            <span key={item} className={`border-2 px-3 py-1 text-[9px] font-bold transition-all ${theme.loot}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestLog;