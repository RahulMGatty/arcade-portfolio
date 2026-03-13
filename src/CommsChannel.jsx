import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const CommsChannel = ({ onSuccess, isGodMode }) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      e.target, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsSent(true);
      setIsSending(false);
      onSuccess(); 
    }, (error) => {
      console.error("TRANS_ERR:", error);
      setIsSending(false);
      alert("TRANSMISSION_FAILED: CHECK CONSOLE");
    });
  };

  return (
    <div className={`max-w-2xl mx-auto border-4 p-8 transition-all duration-700 fade-in ${
      isGodMode 
      ? 'bg-black border-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.5)]' 
      : 'bg-gray-800 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
    }`}>
      
      {/* 1. SOCIAL BUTTONS */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <a 
          href="https://github.com/RahulMGatty" 
          target="_blank" 
          rel="noreferrer" 
          className={`border-2 p-3 text-center text-[8px] font-bold transition-all ${
            isGodMode 
            ? 'bg-yellow-500 border-yellow-200 text-black hover:bg-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.3)]' 
            : 'bg-gray-900 border-white text-white hover:bg-white hover:text-black'
          }`}
        >
          [ GITHUB_MOD ]
        </a>
        <a 
          href="https://www.linkedin.com/in/rahul-m-3b6b28317" 
          target="_blank" 
          rel="noreferrer" 
          className={`border-2 p-3 text-center text-[8px] font-bold transition-all ${
            isGodMode 
            ? 'bg-yellow-600 border-yellow-200 text-black hover:bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.3)]' 
            : 'bg-blue-900 border-blue-400 text-white hover:bg-blue-400 hover:text-white'
          }`}
        >
          [ LINKEDIN_CO-OP ]
        </a>
      </div>

      {isSent ? (
        <div className="text-center py-10 animate-pulse">
          <h2 className={`text-xl mb-4 font-bold ${isGodMode ? 'text-yellow-400' : 'text-yellow-400'}`}>
            {isGodMode ? "LEGENDARY_DATA_SYNCED!" : "TRANSMISSION_RECEIVED!"}
          </h2>
          <p className={`${isGodMode ? 'text-yellow-200' : 'text-cyan-400'} text-[10px] uppercase font-bold`}>
            Reward: +500 Score Points Unlocked
          </p>
          <button 
            onClick={() => setIsSent(false)} 
            className={`mt-8 text-[8px] underline uppercase font-bold ${isGodMode ? 'text-yellow-700 hover:text-yellow-400' : 'text-gray-500 hover:text-white'}`}
          >
            Send Another?
          </button>
        </div>
      ) : (
        <form onSubmit={sendEmail} className="space-y-6">
          <div className="flex justify-between items-center text-[10px] font-bold">
            <span className={isGodMode ? 'text-yellow-400 animate-pulse' : 'text-cyan-400'}>
              STATUS: {isGodMode ? 'ADMIN_UPLINK_READY' : 'READY_TO_SEND'}
            </span>
            <span className={isGodMode ? 'text-yellow-700 uppercase' : 'text-gray-500 uppercase'}>
              Loc: Mangaluru, IN
            </span>
          </div>

          <div className="space-y-4">
            <input 
              required 
              name="name" 
              type="text" 
              placeholder={isGodMode ? "ADMIN_CALLSIGN" : "PLAYER_CALLSIGN"} 
              className={`w-full bg-black border-2 p-3 text-white text-[9px] outline-none transition-all placeholder:text-gray-700 ${
                isGodMode ? 'border-yellow-700 focus:border-yellow-400 shadow-[inset_0_0_10px_rgba(234,179,8,0.1)]' : 'border-gray-700 focus:border-yellow-400'
              }`} 
            />
            <textarea 
              required 
              name="message"
              placeholder={isGodMode ? "ENCRYPTED_ADMIN_COMMANDS" : "ENCRYPTED_DATA_ENTRY"} 
              rows="4" 
              className={`w-full bg-black border-2 p-3 text-white text-[9px] outline-none transition-all placeholder:text-gray-700 ${
                isGodMode ? 'border-yellow-700 focus:border-yellow-400 shadow-[inset_0_0_10px_rgba(234,179,8,0.1)]' : 'border-gray-700 focus:border-yellow-400'
              }`}
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSending}
            className={`w-full p-4 font-bold uppercase text-[10px] transition-all active:scale-95 ${
              isSending 
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                : (isGodMode 
                    ? 'bg-yellow-400 text-black border-4 border-yellow-200 hover:bg-yellow-300 shadow-[0_0_20px_#eab308]' 
                    : 'bg-yellow-500 text-black hover:bg-yellow-400')
            }`}
          >
            {isSending ? 'SENDING...' : (isGodMode ? 'Execute Legendary Signal' : 'Execute Transmission')}
          </button>
        </form>
      )}
    </div>
  );
};

export default CommsChannel;