
import React, { useState } from 'react';
import { Search, MapPin, Star, SlidersHorizontal, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const trucks = [
  { id: 'taco-temptations', name: 'Taco Temptations', cuisine: 'Mexican', rating: 4.8, image: 'https://picsum.photos/seed/taco1/600/400', distance: '0.5 mi', status: 'Open', price: '$' },
  { id: 'gourmet-grills', name: 'Gourmet Grills', cuisine: 'American', rating: 4.5, image: 'https://picsum.photos/seed/grill1/600/400', distance: '1.2 mi', status: 'Open', price: '$$' },
  { id: 'wok-on-wheels', name: 'Wok on Wheels', cuisine: 'Asian', rating: 4.9, image: 'https://picsum.photos/seed/asian1/600/400', distance: '2.0 mi', status: 'Closed', price: '$$' },
  { id: 'pizza-planet', name: 'Pizza Planet', cuisine: 'Italian', rating: 4.6, image: 'https://picsum.photos/seed/pizza1/600/400', distance: '1.5 mi', status: 'Open', price: '$$' },
  { id: 'sweet-stops', name: 'Sweet Stops', cuisine: 'Dessert', rating: 4.7, image: 'https://picsum.photos/seed/dessert1/600/400', distance: '0.8 mi', status: 'Open', price: '$' },
  { id: 'falafel-fusion', name: 'Falafel Fusion', cuisine: 'Middle Eastern', rating: 4.4, image: 'https://picsum.photos/seed/middle1/600/400', distance: '3.1 mi', status: 'Closed', price: '$' },
];

const Explore: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Mexican', 'American', 'Asian', 'Italian', 'Dessert', 'Middle Eastern'];

  return (
    <div className="bg-stone-50 dark:bg-zinc-950 min-h-screen pt-20 pb-32 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight uppercase">Explore Local Trucks</h1>
          <p className="text-xl text-slate-500 font-medium">Find the best street food currently serving in your area.</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by name or cuisine..." 
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-zinc-900 rounded-2xl outline-none border-2 border-transparent focus:border-orange-600 shadow-sm transition-all dark:text-white font-medium" 
            />
          </div>
          <div className="flex items-center space-x-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-4 rounded-2xl whitespace-nowrap font-black uppercase text-xs tracking-widest transition-all ${
                  activeCategory === cat 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' 
                  : 'bg-white dark:bg-zinc-900 text-slate-500 hover:bg-stone-50 dark:hover:bg-zinc-800 border border-stone-100 dark:border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
            <button className="p-4 bg-white dark:bg-zinc-900 text-slate-500 rounded-2xl border border-stone-100 dark:border-zinc-800 hover:text-orange-600">
              <SlidersHorizontal size={24} />
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trucks.map(truck => (
            <div key={truck.id} className="group bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-stone-100 dark:border-zinc-800 hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={truck.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={truck.name} />
                <div className="absolute top-6 left-6 flex space-x-2">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase shadow-lg ${
                    truck.status === 'Open' ? 'bg-teal-500 text-white' : 'bg-rose-500 text-white'
                  }`}>
                    {truck.status}
                  </span>
                  <span className="px-4 py-1.5 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase text-orange-600 shadow-lg">
                    {truck.price}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-orange-600 font-black text-[10px] uppercase mb-1 tracking-widest">{truck.cuisine}</p>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight tracking-tight uppercase">{truck.name}</h3>
                  </div>
                  <div className="flex items-center space-x-1 bg-orange-50 dark:bg-orange-950/40 px-3 py-1.5 rounded-xl border border-orange-100 dark:border-orange-900/30">
                    <Star className="text-orange-600 fill-orange-600" size={16} />
                    <span className="font-black text-orange-700 dark:text-orange-400 text-sm">{truck.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-stone-100 dark:border-zinc-800">
                  <div className="flex items-center space-x-4 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wide">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} className="text-orange-600" />
                      <span>{truck.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} className="text-teal-500" />
                      <span>15-20 min</span>
                    </div>
                  </div>
                  <Link to={`/truck/${truck.id}`} className="w-12 h-12 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all shadow-lg">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
