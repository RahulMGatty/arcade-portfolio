import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const CommsChannel = ({ onSuccess }) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Use these variable names exactly as shown below 
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
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 border-4 border-cyan-400 p-8 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
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
            <span className="text-gray-500">v2.0.26</span>
          </div>

          <div className="space-y-4">
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