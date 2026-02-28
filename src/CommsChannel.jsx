import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const CommsChannel = ({ onSuccess }) => {
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
      onSuccess(); // Triggers the +500 Score reward in App.jsx
    }, (error) => {
      console.error("TRANS_ERR:", error);
      setIsSending(false);
      alert("TRANSMISSION_FAILED: CHECK CONSOLE");
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 border-4 border-cyan-400 p-8 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
      {/* 1. RESTORED SOCIAL BUTTONS */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <a 
          href="https://github.com/RahulMGatty" 
          target="_blank" 
          rel="noreferrer" 
          className="bg-gray-900 border-2 border-white p-3 text-center text-[8px] text-white hover:bg-white hover:text-black transition-all"
        >
          [ GITHUB_MOD ]
        </a>
        <a 
          href="https://www.linkedin.com/in/rahul-m-3b6b28317" 
          target="_blank" 
          rel="noreferrer" 
          className="bg-blue-900 border-2 border-blue-400 p-3 text-center text-[8px] text-white hover:bg-blue-400 hover:text-white transition-all"
        >
          [ LINKEDIN_CO-OP ]
        </a>
      </div>

      {isSent ? (
        <div className="text-center py-10 animate-pulse">
          <h2 className="text-yellow-400 text-xl mb-4">TRANSMISSION_RECEIVED!</h2>
          <p className="text-cyan-400 text-[10px] uppercase">Reward: +500 Score Points Unlocked</p>
          <button onClick={() => setIsSent(false)} className="mt-8 text-[8px] text-gray-500 underline uppercase">Send Another?</button>
        </div>
      ) : (
        <form onSubmit={sendEmail} className="space-y-6">
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-cyan-400">STATUS: READY_TO_SEND</span>
            <span className="text-gray-500 uppercase">Loc: Mangaluru, IN</span>
          </div>

          <div className="space-y-4">
            {/* 2. SYNCED NAME ATTRIBUTE TO MATCH YOUR TEMPLATE */}
            <input 
              required 
              name="name" 
              type="text" 
              placeholder="PLAYER_CALLSIGN" 
              className="w-full bg-black border-2 border-gray-700 p-3 text-white text-[9px] focus:border-yellow-400 outline-none placeholder:text-gray-700" 
            />
            <textarea 
              required 
              name="message"
              placeholder="ENCRYPTED_DATA_ENTRY" 
              rows="4" 
              className="w-full bg-black border-2 border-gray-700 p-3 text-white text-[9px] focus:border-yellow-400 outline-none placeholder:text-gray-700"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSending}
            className={`w-full p-4 font-bold uppercase text-[10px] transition-all ${isSending ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-yellow-500 text-black hover:bg-yellow-400 active:scale-95'}`}
          >
            {isSending ? 'SENDING...' : 'Execute Transmission'}
          </button>
        </form>
      )}
    </div>
  );
};

export default CommsChannel;