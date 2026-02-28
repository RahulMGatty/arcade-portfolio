import React, { useState } from 'react';

const WeaponWheel = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { id: 'home', label: 'START' },
    { id: 'skills', label: 'UPGRADES' },
    { id: 'projects', label: 'STAGES' },
    { id: 'contact', label: 'VS MODE' }
  ];

  const playHoverSound = () => {
    const audio = new Audio('/blip.mp3');
    audio.volume = 0.3;
    audio.currentTime = 0; // Starts sound immediately
    audio.play().catch(() => {});
  };

  const handleItemClick = (id) => {
    playHoverSound();
    // 50ms buffer to let the audio engine start before UI locks for loading
    setTimeout(() => {
      onSelect(id);
      setIsOpen(false);
    }, 50);
  };

  return (
    <div className="relative flex items-center justify-center h-80 w-80 mx-auto my-8 scale-75 md:scale-100 transition-transform">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={playHoverSound}
        className="z-10 w-24 h-24 bg-purple-700 border-4 border-white text-yellow-400 drop-shadow-[6px_6px_0_rgba(0,255,255,1)] active:translate-y-1 hover:bg-purple-600 transition-all flex items-center justify-center text-[10px] font-bold"
      >
        {isOpen ? 'CANCEL' : 'MENU'}
      </button>

      {isOpen && menuItems.map((item, index) => {
        const angle = (index / menuItems.length) * 2 * Math.PI - (Math.PI / 2);
        const radius = 130; 
        const x = Math.round(radius * Math.cos(angle));
        const y = Math.round(radius * Math.sin(angle));

        return (
          <button
            key={item.id}
            onMouseEnter={playHoverSound}
            onClick={() => handleItemClick(item.id)}
            className="absolute w-28 h-12 bg-gray-900 border-4 border-cyan-400 text-white text-[9px] hover:bg-yellow-400 hover:text-black drop-shadow-[4px_4px_0_rgba(255,0,255,0.8)] font-bold transition-colors flex items-center justify-center text-center"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default WeaponWheel;