import React, { useState, useEffect } from 'react';
import WeaponWheel from './WeaponWheel';
import QuestLog from './QuestLog';
import SkillTree from './SkillTree';
import CommsChannel from './CommsChannel';
import LoadingScreen from './LoadingScreen';
import SplashScreen from './SplashScreen';
import StatusScreen from './StatusScreen';
import './index.css';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(9448); 
  const [showStatus, setShowStatus] = useState(false);
  const [isGodMode, setIsGodMode] = useState(false);

  // --- KONAMI CODE LOGIC ---
  useEffect(() => {
    if (!isPoweredOn) return;

    const KONAMI_CODE = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
    ];
    let konamiIndex = 0;

    const handleKonami = (e) => {
      if (e.key === KONAMI_CODE[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === KONAMI_CODE.length) {
          activateGodMode();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    const activateGodMode = () => {
      setIsGodMode(true);
      setScore(999999);
      const audio = new Audio('/cheat.mp3');
      audio.volume = 0.5;
      audio.play().catch(() => console.log("Cheat sound missing"));
    };

    window.addEventListener('keydown', handleKonami);
    return () => window.removeEventListener('keydown', handleKonami);
  }, [isPoweredOn]);

  // --- IDLE TIMER LOGIC (1 MINUTE) ---
  let idleTimer;
  const resetTimer = () => {
    setIsGameOver(false);
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => setIsGameOver(true), 60000); 
  };

  useEffect(() => {
    if (!isPoweredOn) return; 

    const events = ['mousemove', 'click', 'keydown'];
    events.forEach(e => window.addEventListener(e, resetTimer));
    resetTimer();
    return () => {
      events.forEach(e => window.removeEventListener(e, resetTimer));
      clearTimeout(idleTimer);
    };
  }, [isPoweredOn]);

  // --- NAVIGATION LOGIC ---
  const handleNavigation = (view) => {
    if (view === 'home') {
      setShowStatus(true);
      setCurrentView('home'); 
      return;
    }
    setShowStatus(false);
    setIsLoading(true);
    setCurrentView(view);
  };

  const handleScoreUp = () => setScore(prev => prev + 500);

  if (!isPoweredOn) {
    return <SplashScreen onStart={() => setIsPoweredOn(true)} />;
  }

  return (
    <div className={`min-h-screen w-full p-8 relative overflow-hidden text-white transition-colors duration-1000 ${
           isGodMode ? 'bg-yellow-900/40' : 'bg-gray-900'
         }`} 
         style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.8rem' }}>
      
      {/* CRT Scanline Effect Overlay */}
      <div className={`fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] z-[100] opacity-20 ${isGodMode && 'sepia'}`}></div>

      {/* 8-Bit Border */}
      <div className={`fixed inset-0 pointer-events-none border-[16px] opacity-50 z-0 transition-colors ${isGodMode ? 'border-yellow-500' : 'border-gray-800'}`}></div>

      {isGameOver && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl text-red-600 animate-bounce mb-8 uppercase">Game Over</h2>
          <p className="text-yellow-400 text-[10px] animate-pulse">MOVE MOUSE TO RESPAWN</p>
        </div>
      )}

      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className={`flex flex-col md:flex-row justify-between items-start md:items-center border-b-4 pb-6 mb-8 uppercase gap-6 md:gap-0 transition-colors ${isGodMode ? 'border-yellow-400' : 'border-purple-500'}`}>
          <div>
            <div className="flex items-center gap-4">
              <h1 className={`text-2xl drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-2 uppercase ${isGodMode ? 'text-yellow-300 animate-pulse' : 'text-yellow-400'}`}>
                Rahul M
              </h1>
              {isGodMode && <span className="bg-yellow-400 text-black text-[7px] px-2 py-1 rounded animate-bounce">GOD_MODE</span>}
            </div>
            <span className="text-cyan-400 text-[10px]">CLASS: RESEARCH INTERN</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-end md:items-center gap-6">
            <a href="/resume.pdf" download className={`border-b-4 border-r-4 px-4 py-3 text-[8px] active:translate-y-1 active:translate-x-1 transition-all ${isGodMode ? 'bg-yellow-500 border-yellow-700 text-black' : 'bg-purple-600 border-purple-900 text-white hover:bg-purple-500'}`}>
              [ DOWNLOAD_MANUAL.EXE ]
            </a>
            <div className="text-right text-[10px] text-gray-300 hidden md:block space-y-2">
              <div>SCORE: <span className={`${isGodMode ? 'text-yellow-300' : 'text-yellow-400'}`}>{score.toString().padStart(6, '0')}</span></div>
              <div>LIVES: <span className="text-red-500">{isGodMode ? '∞∞∞' : '♥♥♥'}</span></div>
            </div>
          </div>
        </header>

        <WeaponWheel onSelect={handleNavigation} />

        <main className="mt-12">
          {currentView === 'home' && (
            showStatus ? (
              <StatusScreen onClose={() => setShowStatus(false)} /> 
            ) : (
              <div className="text-center mt-20 fade-in">
                <div className="text-cyan-400 animate-pulse mb-8 text-[10px] uppercase tracking-widest">
                  {isGodMode ? "Welcome, Administrator" : "Press Start to View Player Stats"}
                </div>
                <div className={`inline-block bg-black border-2 p-4 shadow-[4px_4px_0_white] max-w-sm text-left transition-colors ${isGodMode ? 'border-yellow-400 shadow-yellow-400' : 'border-white'}`}>
                  <div className="text-red-500 text-[9px] mb-2 font-bold uppercase">Mission Brief:</div>
                  <div className="text-white text-[8px] leading-relaxed">
                    SELECT <span className="text-cyan-400">STAGES</span> FOR RESEARCH LOGS OR <span className="text-yellow-400">START</span> FOR CHARACTER BIO.
                  </div>
                </div>
              </div>
            )
          )}

          {currentView === 'projects' && <QuestLog />}
          {currentView === 'skills' && <SkillTree />}
          {currentView === 'contact' && <CommsChannel onSuccess={handleScoreUp} />}
        </main>
      </div>
    </div>
  );
};

export default App;