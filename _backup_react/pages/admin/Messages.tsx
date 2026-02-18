
import React from 'react';
import { Send, Search } from 'lucide-react';

const Messages: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black mb-2 dark:text-white tracking-tight uppercase">Support Center</h1>
        <p className="text-slate-500 font-medium">Manage communication with vendors and customers.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-4">
           {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`p-5 rounded-3xl cursor-pointer transition-all border ${i === 1 ? 'bg-orange-600 text-white border-orange-600 shadow-xl shadow-orange-600/20' : 'bg-white dark:bg-zinc-900 border-stone-100 dark:border-zinc-800 hover:bg-stone-50 dark:hover:bg-zinc-800'}`}>
                <div className="flex items-center space-x-3 mb-3">
                  <img src={`https://picsum.photos/seed/msg${i}/100/100`} className="w-10 h-10 rounded-2xl shadow-sm" alt="User" />
                  <div>
                    <p className={`font-black text-sm ${i === 1 ? 'text-white' : 'dark:text-white'}`}>Sender {i}</p>
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${i === 1 ? 'text-orange-100' : 'text-slate-400'}`}>Vendor</p>
                  </div>
                </div>
                <p className={`text-xs truncate font-medium ${i === 1 ? 'text-orange-50' : 'text-slate-500'}`}>Is the tracking working correctly today?</p>
              </div>
           ))}
        </div>
        <div className="lg:col-span-3 bg-white dark:bg-zinc-900 rounded-[3rem] border border-stone-100 dark:border-zinc-800 p-10 flex flex-col h-[650px] shadow-sm theme-transition">
          <div className="flex-1 overflow-y-auto space-y-8 pr-4 scrollbar-hide">
            <div className="flex justify-start">
              <div className="bg-stone-100 dark:bg-zinc-800 p-6 rounded-[2.5rem] rounded-tl-none max-w-md shadow-sm">
                <p className="text-sm font-medium dark:text-slate-300 leading-relaxed">Hello, I'm having trouble updating my truck's location on the map. Can you help?</p>
                <p className="text-[10px] font-black text-slate-400 mt-4 uppercase tracking-widest">10:45 AM</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-orange-600 text-white p-6 rounded-[2.5rem] rounded-tr-none max-w-md shadow-xl shadow-orange-600/10">
                <p className="text-sm font-medium leading-relaxed">Hi there! Please try refreshing your app. If the issue persists, ensure your GPS permissions are enabled.</p>
                <p className="text-[10px] font-black text-orange-100 mt-4 uppercase tracking-widest">10:48 AM</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-100 dark:border-zinc-800 flex items-center space-x-4">
            <div className="flex-1 relative">
              <input type="text" placeholder="Type a message..." className="w-full bg-stone-50 dark:bg-zinc-800 border-none outline-none p-5 rounded-2xl text-sm font-medium dark:text-white" />
            </div>
            <button className="bg-orange-600 text-white p-5 rounded-2xl font-black shadow-lg hover:bg-orange-700 transition-all">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
