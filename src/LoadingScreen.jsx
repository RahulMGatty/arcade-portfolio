import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small delay after 100% for effect
          return 100;
        }
        return oldProgress + 10;
      });
    }, 150); // Speed of the loading bar

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono">
      <div className="text-yellow-400 text-xl mb-8 animate-pulse uppercase tracking-[0.2em]">
        Loading Data...
      </div>
      
      {/* 8-Bit Progress Bar Container */}
      <div className="w-64 h-8 border-4 border-gray-700 p-1">
        <div 
          className="h-full bg-cyan-400 transition-all duration-150"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="mt-4 text-cyan-400 text-[10px]">
        {progress}% COMPLETE
      </div>
      
      {/* Decorative scanlines for the loader */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none"></div>
    </div>
  );
};

export default LoadingScreen;