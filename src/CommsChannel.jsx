import React, { useState, useEffect } from 'react';

const CommsChannel = ({ isGodMode, onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState(''); // Bot Trap
  const [isSending, setIsSending] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [status, setStatus] = useState('');

  // Cooldown Timer Logic
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => setCooldown(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanData = {
    name: sanitize(formData.name),
    email: formData.email, // Email validation is handled by type="email"
    message: sanitize(formData.message)
  };

  // Now send 'cleanData' instead of 'formData'
  console.log("Transmitting sanitized data...", cleanData);
    // 1. Check Honeypot: If a bot filled this hidden field, fail silently
    if (honeypot) {
      console.log("Bot detected.");
      setStatus("TRANSMISSION_FAILED: interrupt_detected");
      return;
    }

    // 2. Check Cooldown
    if (cooldown > 0) return;

    setIsSending(true);
    setStatus('ENCRYPTING_DATA...');

    try {
      // --- INTEGRATE YOUR EMAIL SERVICE HERE (e.g., EmailJS) ---
      // For now, we simulate a successful transmission
      await new Promise(resolve => setTimeout(resolve, 2000));

      setStatus('SUCCESS: SIGNAL_RECEIVED');
      onSuccess(); // Trigger +500 Score in App.jsx
      setFormData({ name: '', email: '', message: '' });
      setCooldown(60); // 60-second cooldown after success
    } catch (error) {
      setStatus('ERROR: SIGNAL_LOST');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto fade-in font-arcade">
      <div className={`border-4 p-6 transition-all duration-700 ${
        isGodMode ? 'bg-black/90 border-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.3)]' : 'bg-gray-900 border-purple-500'
      }`}>
        
        <div className="flex justify-between items-center mb-8 border-b-2 border-dashed pb-4 border-gray-700">
          <h2 className={`text-sm md:text-lg font-bold ${isGodMode ? 'text-yellow-400' : 'text-purple-400'}`}>
            {isGodMode ? "ADMIN_UPLINK" : "COMMS_CHANNEL"}
          </h2>
          <div className="text-[8px] text-gray-500 animate-pulse uppercase">
            Encrypted_Line: {isGodMode ? "ULTRA_PRIORITY" : "SECURE"}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* --- HONEYPOT FIELD (Hidden from Humans) --- */}
          <div className="hidden" aria-hidden="true">
            <input 
              type="text" 
              name="bot_field" 
              value={honeypot} 
              onChange={(e) => setHoneypot(e.target.value)} 
              tabIndex="-1" 
              autocomplete="off" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className={`text-[9px] uppercase ${isGodMode ? 'text-yellow-600' : 'text-purple-500'}`}>Identify_User:</label>
              <input
                required
                type="text"
                placeholder="NAME.EXE"
                className={`w-full bg-black border-2 p-3 text-[10px] outline-none transition-all ${
                  isGodMode ? 'border-yellow-900 text-yellow-100 focus:border-yellow-400' : 'border-gray-800 text-cyan-400 focus:border-purple-500'
                }`}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className={`text-[9px] uppercase ${isGodMode ? 'text-yellow-600' : 'text-purple-500'}`}>Return_Address:</label>
              <input
                required
                type="email"
                placeholder="EMAIL_ADR"
                className={`w-full bg-black border-2 p-3 text-[10px] outline-none transition-all ${
                  isGodMode ? 'border-yellow-900 text-yellow-100 focus:border-yellow-400' : 'border-gray-800 text-cyan-400 focus:border-purple-500'
                }`}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className={`text-[9px] uppercase ${isGodMode ? 'text-yellow-600' : 'text-purple-500'}`}>Message_Packet:</label>
            <textarea
              required
              rows="4"
              placeholder="WRITE_DATA_HERE..."
              className={`w-full bg-black border-2 p-3 text-[10px] outline-none transition-all resize-none ${
                isGodMode ? 'border-yellow-900 text-yellow-100 focus:border-yellow-400' : 'border-gray-800 text-cyan-400 focus:border-purple-500'
              }`}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button
            type="submit"
            disabled={isSending || cooldown > 0}
            className={`w-full py-4 text-[10px] font-bold uppercase transition-all duration-300 active:scale-95 ${
              cooldown > 0 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed border-gray-700' 
                : isGodMode 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-[0_0_15px_#eab308]' 
                  : 'bg-purple-600 text-white hover:bg-purple-500 border-b-4 border-purple-900'
            }`}
          >
            {isSending ? "UPLOADING..." : cooldown > 0 ? `RELOADING: ${cooldown}s` : "EXECUTE_TRANSMISSION"}
          </button>

          {status && (
            <div className={`text-center text-[8px] animate-pulse uppercase tracking-widest ${
              status.includes('SUCCESS') ? 'text-green-400' : status.includes('ERROR') ? 'text-red-500' : 'text-cyan-400'
            }`}>
              {status}
            </div>
          )}
        </form>
      </div>
      
      <div className="mt-8 text-center text-gray-700 text-[7px] uppercase tracking-[4px]">
        Transmission_Cost: 0_Credits // +500 Score_Reward
      </div>
    </div>
  );
};

export default CommsChannel;