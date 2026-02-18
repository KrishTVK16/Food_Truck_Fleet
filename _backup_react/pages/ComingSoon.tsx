
import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-3xl text-center relative z-10">
        <div className="w-24 h-24 bg-orange-600 rounded-3xl flex items-center justify-center text-white text-4xl font-black mx-auto mb-12 shadow-2xl shadow-orange-600/20">S</div>
        <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
          Something <span className="text-orange-600 italic">Delicious</span> is Cooking
        </h1>
        <p className="text-2xl text-slate-400 mb-16 font-medium max-w-2xl mx-auto leading-relaxed">We're under maintenance to bring you a better dining experience. Stay tuned!</p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/5 p-3 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
          <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent border-none p-5 outline-none text-white font-bold placeholder:text-slate-600" />
          <button className="bg-orange-600 text-white font-black px-10 py-5 rounded-[2rem] hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/10 uppercase tracking-widest text-sm">Notify Me</button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
