
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-white dark:bg-zinc-950 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Our Mission to <span className="text-orange-600">Feed</span> the World</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">StreetFeast started with a simple idea: good food should find people, not the other way around.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img src="https://picsum.photos/seed/about/800/600" className="rounded-[3.5rem] shadow-2xl border-4 border-white dark:border-zinc-800" alt="Team" />
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Connecting Communities One Bite at a Time</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              We believe that food trucks are the heart of culinary innovation. By providing them with the technology they need to scale, we're not just building a platform; we're supporting local entrepreneurs and bringing diverse flavors to every street corner.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="bg-stone-50 dark:bg-zinc-900 p-6 rounded-3xl border border-stone-100 dark:border-zinc-800">
                <h4 className="text-4xl font-black text-orange-600 mb-2 tracking-tighter">2018</h4>
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Founded in NYC</p>
              </div>
              <div className="bg-stone-50 dark:bg-zinc-900 p-6 rounded-3xl border border-stone-100 dark:border-zinc-800">
                <h4 className="text-4xl font-black text-orange-600 mb-2 tracking-tighter">500+</h4>
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Cities Reached</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
