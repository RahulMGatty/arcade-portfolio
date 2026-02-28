import React, { useState, useEffect } from 'react';
import WeaponWheel from './WeaponWheel';
import QuestLog from './QuestLog';
import SkillTree from './SkillTree';
import CommsChannel from './CommsChannel';
import LoadingScreen from './LoadingScreen';
import './index.css';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // --- IDLE TIMER (GAME OVER) ---
  let idleTimer;
  const resetTimer = () => {
    setIsGameOver(false);
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => setIsGameOver(true), 60000); // 60s idle
  };

  useEffect(() => {
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('click', resetTimer);
    window.addEventListener('keydown', resetTimer);
    resetTimer();
    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('click', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      clearTimeout(idleTimer);
    };
  }, []);

  const handleNavigation = (view) => {
    if (view !== currentView) {
      setIsLoading(true);
      setCurrentView(view);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 p-8 relative overflow-hidden" 
         style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.8rem' }}>
      
      {/* 8-Bit Frame Decor */}
      <div className="fixed inset-0 pointer-events-none border-[16px] border-gray-800 opacity-50 z-0"></div>

      {/* GAME OVER OVERLAY */}
      {isGameOver && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl text-red-600 drop-shadow-[4px_4px_0_white] animate-bounce mb-8">GAME OVER</h2>
          <p className="text-yellow-400 text-xs animate-pulse">MOVE MOUSE TO RESPAWN</p>
        </div>
      )}

      {/* GLOBAL LOADER */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-4 border-purple-500 pb-6 mb-8 uppercase gap-6 md:gap-0">
          <div>
            <h1 className="text-2xl md:text-3xl text-yellow-400 drop-shadow-[4px_4px_0_rgba(255,0,255,0.8)] mb-2">PLAYER 1</h1>
            <span className="text-cyan-400">CLASS: FULL-STACK DEV</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-end md:items-center gap-6">
            <a 
              href="/resume.pdf" 
              download="Resume.pdf"
              className="bg-purple-600 text-white border-b-4 border-r-4 border-purple-900 active:translate-y-1 active:translate-x-1 px-4 py-3 hover:bg-purple-500 transition-all text-[10px]"
            >
              [ GET_CV.EXE ]
            </a>
            <div className="text-right text-[10px] text-gray-300 hidden md:block space-y-2">
              <div>SCORE: <span className="text-yellow-400 font-bold">009430</span></div>
              <div>LIVES: <span className="text-red-500 text-lg font-bold">♥♥♥</span></div>
            </div>
          </div>
        </header>

        <WeaponWheel onSelect={handleNavigation} />

        <main className="mt-12">
          {currentView === 'home' && (
            <div className="text-center text-cyan-400 mt-20 animate-pulse leading-loose">
              INSERT COIN OR SELECT STAGE FROM MENU <br/><br/>
              <span className="text-yellow-400 text-xs uppercase">Press Start</span>
            </div>
          )}
          {currentView === 'projects' && <QuestLog />}
          {currentView === 'skills' && <SkillTree />}
          {currentView === 'contact' && <CommsChannel />}
        </main>
      </div>
    </div>
  );
};

export default App;