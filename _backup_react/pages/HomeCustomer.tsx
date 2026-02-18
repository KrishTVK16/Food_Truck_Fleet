
import React from 'react';
import { Search, MapPin, Star, Utensils, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeCustomer: React.FC = () => {
  const featuredTrucks = [
    { id: '1', name: 'Taco Temptations', cuisine: 'Mexican', rating: 4.8, image: 'https://picsum.photos/seed/taco/600/400', distance: '0.5 mi', status: 'Open' },
    { id: '2', name: 'Gourmet Grills', cuisine: 'American', rating: 4.5, image: 'https://picsum.photos/seed/grill/600/400', distance: '1.2 mi', status: 'Open' },
    { id: '3', name: 'Wok on Wheels', cuisine: 'Asian', rating: 4.9, image: 'https://picsum.photos/seed/asian/600/400', distance: '2.0 mi', status: 'Closed' },
  ];

  const cuisines = [
    { name: 'Mexican', icon: '🌮' },
    { name: 'Asian', icon: '🍜' },
    { name: 'Burger', icon: '🍔' },
    { name: 'Pizza', icon: '🍕' },
    { name: 'Italian', icon: '🍝' },
    { name: 'Dessert', icon: '🍩' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-52 overflow-hidden bg-stone-50 dark:bg-zinc-950 theme-transition">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/5 -skew-x-12 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-orange-600 uppercase bg-orange-100 rounded-full dark:bg-orange-900/30 dark:text-orange-500">
                Craving Satisfied
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-8">
                Discover the <span className="text-orange-600">Best Bites</span> in Your City
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
                Track live food trucks, order ahead, and explore local flavors you've never tasted before. 
                Your culinary adventure starts on wheels.
              </p>
              
              {/* Search Bar */}
              <div className="bg-white dark:bg-zinc-900 p-3 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-3 max-w-3xl border border-stone-100 dark:border-zinc-800">
                <div className="flex-1 flex items-center px-4 space-x-3 border-b md:border-b-0 md:border-r border-stone-100 dark:border-zinc-800 pb-3 md:pb-0">
                  <MapPin className="text-orange-600" size={20} />
                  <input type="text" placeholder="Enter your location..." className="w-full bg-transparent outline-none dark:text-white font-medium" />
                </div>
                <div className="flex-1 flex items-center px-4 space-x-3 pb-3 md:pb-0">
                  <Utensils className="text-orange-600" size={20} />
                  <select className="w-full bg-transparent outline-none dark:text-white appearance-none cursor-pointer font-medium">
                    <option>All Cuisines</option>
                    <option>Mexican</option>
                    <option>Asian</option>
                    <option>Italian</option>
                  </select>
                </div>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-black py-4 px-8 rounded-xl transition-all shadow-lg shadow-orange-600/20">
                  Find Food
                </button>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/id/${i+10}/100/100`} className="w-12 h-12 rounded-full border-4 border-white dark:border-zinc-800 shadow-sm" alt="User" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  <span className="text-slate-900 dark:text-white font-bold">10k+</span> hungry users already exploring
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-orange-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
              <img 
                src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=80" 
                className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5] lg:aspect-[3/4] border-4 border-white dark:border-zinc-800" 
                alt="Food Truck"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-2xl animate-bounce border border-stone-100 dark:border-zinc-700">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-teal-500/20">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Update</p>
                    <p className="text-sm font-black text-slate-900 dark:text-white">New Truck Nearby!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 bg-white dark:bg-zinc-950 theme-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Trending Food Trucks</h2>
              <p className="text-slate-500 dark:text-slate-400">The most popular spots in your area this week.</p>
            </div>
            <Link to="/explore" className="inline-flex items-center space-x-2 text-orange-600 font-bold hover:space-x-4 transition-all group">
              <span>View All Trucks</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrucks.map(truck => (
              <div key={truck.id} className="group bg-stone-50 dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-stone-100 dark:border-zinc-800">
                <div className="relative h-64 overflow-hidden">
                  <img src={truck.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={truck.name} />
                  <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-[10px] font-black uppercase shadow-lg ${truck.status === 'Open' ? 'bg-teal-500 text-white' : 'bg-rose-500 text-white'}`}>
                    {truck.status}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-orange-600 font-black text-xs uppercase mb-1 tracking-widest">{truck.cuisine}</p>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{truck.name}</h3>
                    </div>
                    <div className="flex items-center space-x-1 bg-white dark:bg-zinc-800 px-3 py-1 rounded-xl shadow-sm border border-stone-100 dark:border-zinc-700">
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <span className="font-bold dark:text-white text-sm">{truck.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-stone-200 dark:border-zinc-800">
                    <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 text-sm font-bold">
                      <MapPin size={16} className="text-orange-600" />
                      <span>{truck.distance} away</span>
                    </div>
                    <Link to={`/truck/${truck.id}`} className="p-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-600 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-2xl shadow-orange-600/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse" />
            <div className="relative z-10 text-center lg:text-left mb-10 lg:mb-0 lg:max-w-xl">
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">Own a Food Truck?</h2>
              <p className="text-orange-100 text-lg mb-10 font-medium">
                Join our platform to manage orders, track your fleet in real-time, and get discovered by thousands of customers daily.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/fleet-management" className="px-10 py-5 bg-white text-orange-600 font-black rounded-2xl shadow-xl hover:scale-105 transition-all text-lg">
                  Get Started for Free
                </Link>
                <Link to="/contact" className="px-10 py-5 bg-orange-700 text-white font-black rounded-2xl hover:bg-orange-800 transition-all text-lg border border-orange-500/30">
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="relative z-10 w-full lg:w-1/3">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl">
                <div className="space-y-8">
                  {[
                    { n: '1', t: 'Register your business' },
                    { n: '2', t: 'Upload your menu' },
                    { n: '3', t: 'Start serving hungry fans!' }
                  ].map(step => (
                    <div key={step.n} className="flex items-center space-x-5">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-orange-600 text-2xl font-black shadow-lg">
                        {step.n}
                      </div>
                      <p className="text-white font-black text-lg">{step.t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCustomer;
