import React from 'react';

const CommsChannel = () => {
  return (
    <div className="max-w-2xl mx-auto bg-gray-800 border-4 border-cyan-400 p-8">
      <div className="flex justify-between items-center mb-8 text-[10px]">
        <span className="text-cyan-400 animate-pulse">📡 SIGNAL: ONLINE</span>
        <span className="text-yellow-400 uppercase">Loc: Mangaluru, IN</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <a href="https://github.com/RahulMGatty" target="_blank" rel="noreferrer" 
           className="bg-gray-900 border-2 border-white p-3 text-center text-[8px] text-white hover:bg-white hover:text-black transition-all">[ GITHUB ]</a>
        <a href="https://www.linkedin.com/in/rahul-m-3b6b28317" target="_blank" rel="noreferrer" 
           className="bg-blue-900 border-2 border-blue-400 p-3 text-center text-[8px] text-white hover:bg-blue-400 hover:text-white transition-all">[ LINKEDIN ]</a>
      </div>

      <form className="space-y-4">
        <input type="text" placeholder="PLAYER_ID" className="w-full bg-black border-2 border-gray-700 p-3 text-white text-[9px] focus:border-yellow-400 outline-none" />
        <textarea placeholder="ENCRYPTED_TEXT" rows="3" className="w-full bg-black border-2 border-gray-700 p-3 text-white text-[9px] focus:border-yellow-400 outline-none"></textarea>
        <button className="w-full bg-yellow-500 text-black font-bold p-3 hover:bg-yellow-400 transition-all uppercase text-[10px]">Send Transmission</button>
      </form>
    </div>
  );
};

export default CommsChannel;