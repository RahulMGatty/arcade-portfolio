import React, { useState } from 'react';

const CommsChannel = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('IDLE');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('TRANSMITTING');
    
    try {
      const response = await fetch('https://formspree.io/f/xlgwvzak', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target)
      });

      if (response.ok) {
        setStatus('SENT');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }

    setTimeout(() => setStatus('IDLE'), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      
      {/* Arcade Header */}
      <div className="w-full flex justify-center items-center border-b-4 border-purple-500 pb-4 mb-8">
        <h2 className="text-xl md:text-2xl text-yellow-400 drop-shadow-[4px_4px_0_rgba(0,255,255,1)] animate-pulse">
          NEW CHALLENGER
        </h2>
      </div>

      {/* Main Terminal UI */}
      <div className="w-full bg-gray-900 border-4 border-cyan-400 p-2 flex flex-col md:flex-row gap-2 relative shadow-[8px_8px_0_rgba(255,0,255,0.6)]">
        
        {/* Left Side: Arcade Decor (Hidden on Mobile) */}
        <div className="hidden md:flex w-1/3 bg-gray-800 border-4 border-gray-700 flex-col justify-center items-center p-6 text-center">
            <div className="text-yellow-400 text-sm mb-8 leading-loose">
              ENTER YOUR <br/> CREDENTIALS <br/> TO CONTINUE
            </div>
            <div className="text-red-500 text-xs mt-auto animate-bounce">
              INSERT COIN
            </div>
        </div>

        {/* Right Side: The Actual Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-2/3 bg-gray-800 border-4 border-gray-700 p-6 flex flex-col gap-6">
          
          <div className="flex flex-col gap-3">
            <label className="text-cyan-400 text-[10px]">PLAYER ALIAS</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-black border-4 border-gray-600 focus:border-yellow-400 outline-none p-3 text-white text-xs transition-colors"
              placeholder="ENTER NAME..."
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-cyan-400 text-[10px]">PING ADDRESS (EMAIL)</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-black border-4 border-gray-600 focus:border-yellow-400 outline-none p-3 text-white text-xs transition-colors"
              placeholder="ENTER EMAIL..."
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-cyan-400 text-[10px]">TRANSMISSION</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="bg-black border-4 border-gray-600 focus:border-yellow-400 outline-none p-3 text-white text-xs transition-colors resize-none"
              placeholder="TYPE MESSAGE..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status !== 'IDLE'}
            className={`mt-4 py-4 px-6 border-4 text-[10px] md:text-xs transition-all ${
              status === 'IDLE' 
                ? 'border-white bg-purple-600 text-white hover:bg-yellow-400 hover:text-black hover:border-black active:translate-y-1'
                : status === 'TRANSMITTING'
                  ? 'border-gray-500 bg-yellow-500 text-black cursor-not-allowed'
                  : status === 'ERROR'
                    ? 'border-black bg-red-600 text-white cursor-not-allowed'
                    : 'border-black bg-cyan-400 text-black cursor-not-allowed'
            }`}
          >
            {status === 'IDLE' && 'PRESS START'}
            {status === 'TRANSMITTING' && 'LOADING...'}
            {status === 'SENT' && 'STAGE CLEARED'}
            {status === 'ERROR' && 'GAME OVER - RETRY'}
          </button>
        </form>

      </div>
    </div>
  );
};

export default CommsChannel;