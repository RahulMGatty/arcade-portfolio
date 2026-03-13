import React, { useState, useEffect, useRef } from 'react';
import WeaponWheel from './WeaponWheel';
import QuestLog from './QuestLog';
import SkillTree from './SkillTree';
import CommsChannel from './CommsChannel';
import LoadingScreen from './LoadingScreen';
import SplashScreen from './SplashScreen';
import StatusScreen from './StatusScreen';
import GodLoadingScreen from './GodLoadingScreen';
import './index.css';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(9448); 
  const [showStatus, setShowStatus] = useState(false);
  const [isGodMode, setIsGodMode] = useState(false);
  const [isGodLoading, setIsGodLoading] = useState(false);

  // --- KONAMI CODE LOGIC ---
  const konamiIndex = useRef(0);
  const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
  ];

  const triggerGodMode = () => {
    // PURGE LOGIC: If already in God Mode, show a 1s reset loader
    if (isGodMode) {
      setIsGodLoading(true); 
      const purgeAudio = new Audio('/purge.wav'); // Ensure this file is in your /public folder
      purgeAudio.volume = 0.6;
      purgeAudio.play().catch(() => {});
      
      setTimeout(() => {
        setIsGodLoading(false);
        setIsGodMode(false);
        setScore(9448); // Reset score to original value
      }, 1000); // 1-second Purge duration
      return;
    }

    // ASCENSION LOGIC: Start the 4s ascension sequence
    setIsGodLoading(true);
    const audio = new Audio('/cheat.mp3');
    audio.volume = 0.5;
    audio.play().catch(() => {});

    setTimeout(() => {
      setIsGodLoading(false);
      setIsGodMode(true);
      setScore(999999);
    }, 4000); 
  };
  
  useEffect(() => {
    if (!isPoweredOn) return;
    const handleKeyDown = (e) => {
      if (e.key === KONAMI_CODE[konamiIndex.current]) {
        konamiIndex.current++;
        if (konamiIndex.current === KONAMI_CODE.length) {
          triggerGodMode();
          konamiIndex.current = 0;
        }
      } else {
        konamiIndex.current = 0;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPoweredOn, isGodMode]); // Dependency added to ensure toggle logic is fresh

  // --- IDLE TIMER ---
  const idleTimer = useRef(null);
  const resetTimer = () => {
    setIsGameOver(false);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setIsGameOver(true), 60000); 
  };

  useEffect(() => {
    if (!isPoweredOn) return; 
    const events = ['mousemove', 'click', 'keydown'];
    events.forEach(e => window.addEventListener(e, resetTimer));
    resetTimer();
    return () => {
      events.forEach(e => window.removeEventListener(e, resetTimer));
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [isPoweredOn]);

  // --- NAVIGATION ---
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

  // --- RENDER LOGIC ---
  if (!isPoweredOn) return <SplashScreen onStart={() => setIsPoweredOn(true)} />;
  
  // Renders the GodLoadingScreen with the current mode passed as a prop
  if (isGodLoading) return <GodLoadingScreen isGodMode={isGodMode} />;

  return (
    <div className={`min-h-screen w-full p-8 relative overflow-hidden text-white transition-all duration-1000 ${
           isGodMode ? 'bg-yellow-900/40' : 'bg-gray-900' 
         }`} 
         style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.8rem' }}>
      
      {/* CRT Overlay */}
      <div className={`fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] z-[100] opacity-20 ${isGodMode ? 'sepia-[0.5] hue-rotate-[10deg]' : ''}`}></div>

      {/* Dynamic 8-Bit Border */}
      <div className={`fixed inset-0 pointer-events-none border-[16px] z-0 transition-all duration-700 ${
        isGodMode ? 'border-yellow-400 opacity-100 shadow-[0_0_40px_rgba(234,179,8,0.5)]' : 'border-gray-800 opacity-50'
      }`}></div>

      {isGameOver && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center fade-in">
          <h2 className="text-4xl md:text-6xl text-red-600 animate-bounce mb-8 uppercase text-center">Game Over</h2>
        </div>
      )}

      {/* 1-SECOND NAVIGATION LOADER */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} isGodMode={isGodMode} />}

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className={`flex flex-col md:flex-row justify-between items-start md:items-center border-b-4 pb-6 mb-8 uppercase gap-6 md:gap-0 transition-colors ${
          isGodMode ? 'border-yellow-400 shadow-[0_4px_15px_rgba(234,179,8,0.4)]' : 'border-purple-500'
        }`}>
          <div>
            <div className="flex items-center gap-4">
              <h1 className={`text-2xl drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-2 uppercase ${isGodMode ? 'text-yellow-300 animate-pulse' : 'text-yellow-400'}`}>Rahul M</h1>
              {isGodMode && <span className="bg-yellow-400 text-black text-[7px] px-2 py-1 rounded animate-bounce font-bold tracking-tighter">GOD_MODE</span>}
            </div>
            <span className={isGodMode ? 'text-yellow-200' : 'text-cyan-400'}>RANK: RESEARCH INTERN</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-end md:items-center gap-6">
            <a href="/resume.pdf" download className={`border-b-4 border-r-4 px-4 py-3 text-[8px] transition-all ${
              isGodMode ? 'bg-yellow-500 border-yellow-700 text-black hover:bg-yellow-400 shadow-[0_0_10px_#eab308]' : 'bg-purple-600 border-purple-900 text-white hover:bg-purple-500'
            }`}>[ DOWNLOAD_MANUAL.EXE ]</a>
            <div className="text-right text-[10px] text-gray-300 space-y-2 font-bold">
              <div>SCORE: <span className={isGodMode ? 'text-yellow-300 animate-pulse' : 'text-yellow-400'}>{score.toString().padStart(6, '0')}</span></div>
              <div>LIVES: <span className="text-red-500">{isGodMode ? '∞∞∞' : '♥♥♥'}</span></div>
            </div>
          </div>
        </header>

        <WeaponWheel onSelect={handleNavigation} isGodMode={isGodMode} />

        <main className="mt-12">
          {currentView === 'home' && (
            showStatus ? (
              <StatusScreen isGodMode={isGodMode} onClose={() => setShowStatus(false)} /> 
            ) : (
              <div className="text-center mt-20 fade-in">
                <div className={`animate-pulse mb-8 text-[10px] uppercase tracking-widest ${isGodMode ? 'text-yellow-300' : 'text-cyan-400'}`}>
                  {isGodMode ? "System Access: Administrator" : "Press Start to View Player Stats"}
                </div>
                <div className={`inline-block bg-black border-2 p-4 shadow-[4px_4px_0_white] max-w-sm text-left transition-all ${
                  isGodMode ? 'border-yellow-400 shadow-yellow-400' : 'border-white'
                }`}>
                  <div className="text-red-500 text-[9px] mb-2 font-bold uppercase underline">Mission Brief:</div>
                  <div className="text-white text-[8px] leading-relaxed">
                    SELECT <span className={isGodMode ? 'text-yellow-300' : 'text-cyan-400'}>STAGES</span> FOR PROJECT LOGS OR <span className="text-yellow-400">START</span> FOR CHARACTER BIO.
                  </div>
                </div>
              </div>
            )
          )}

          {currentView === 'projects' && <QuestLog isGodMode={isGodMode} />}
          {currentView === 'skills' && <SkillTree isGodMode={isGodMode} />}
          {currentView === 'contact' && <CommsChannel isGodMode={isGodMode} onSuccess={handleScoreUp} />}
        </main>
      </div>
    </div>
  );
};

export default App;