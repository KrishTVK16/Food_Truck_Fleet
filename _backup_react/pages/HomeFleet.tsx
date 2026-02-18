
import React from 'react';
import { BarChart3, Map, Bell, Smartphone, Users, Globe, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeFleet: React.FC = () => {
  const features = [
    { icon: <Map className="text-orange-600" />, title: 'Real-time GPS Tracking', desc: 'Always know exactly where every truck in your fleet is parked or moving.' },
    { icon: <BarChart3 className="text-teal-500" />, title: 'Advanced Analytics', desc: 'Detailed sales reports, busy hours, and popular item analysis at your fingertips.' },
    { icon: <Bell className="text-blue-500" />, title: 'Push Notifications', desc: 'Alert your fans when you arrive at their favorite location automatically.' },
    { icon: <Smartphone className="text-purple-500" />, title: 'Mobile First Ordering', desc: 'Seamless order-ahead and payment processing optimized for mobile users.' },
  ];

  return (
    <div className="bg-stone-50 dark:bg-zinc-950 theme-transition">
      {/* Fleet Hero */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest text-orange-600 uppercase bg-orange-600/10 rounded-full border border-orange-600/20">
              Enterprise Fleet Solutions
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
              The OS for Your <span className="text-orange-600 italic">Food Truck Empire</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium">
              Scale your operations with real-time tracking, inventory management, and deep customer insights. One platform to rule the streets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="px-10 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl shadow-2xl shadow-orange-600/20 transition-all text-lg">
                Start 14-Day Free Trial
              </Link>
              <button className="px-10 py-5 bg-zinc-800 hover:bg-zinc-700 text-white font-black rounded-2xl transition-all border border-zinc-700 text-lg">
                Book a Demo
              </button>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-teal-500 rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" />
            <div className="relative bg-zinc-900 rounded-[2.5rem] p-2 border border-zinc-800 shadow-2xl overflow-hidden">
               <img 
                src="https://picsum.photos/seed/dashboard/1200/800" 
                className="rounded-[2.25rem] w-full" 
                alt="Dashboard Preview" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: '2.5k+', label: 'Trucks Managed' },
              { val: '$500M+', label: 'Transactions' },
              { val: '99.9%', label: 'Uptime' },
              { val: '15+', label: 'Countries' },
            ].map(stat => (
              <div key={stat.label} className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] shadow-xl border border-stone-100 dark:border-zinc-800 text-center hover:-translate-y-2 transition-transform">
                <p className="text-4xl font-black text-orange-600 mb-2">{stat.val}</p>
                <p className="text-slate-500 dark:text-slate-400 font-black text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Complete Fleet Control</h2>
            <p className="text-slate-500 dark:text-slate-400">Everything you need to grow from one truck to a global fleet.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-start space-x-6 p-10 bg-white dark:bg-zinc-900 rounded-[3rem] hover:shadow-2xl transition-all border border-stone-100 dark:border-zinc-800 group">
                <div className="w-16 h-16 bg-stone-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center shadow-lg shrink-0 transition-transform group-hover:scale-110">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logic/Proof */}
      <section className="py-24 bg-white dark:bg-zinc-900 theme-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight mb-8">
                Why Leaders Choose <span className="text-orange-600">StreetFeast</span>
              </h2>
              <div className="space-y-10">
                {[
                  { title: 'Iron-clad Security', desc: 'Enterprise-grade encryption for all financial data.', icon: <ShieldCheck className="text-teal-500" /> },
                  { title: 'Global Scalability', desc: 'Localized support for taxes, currencies, and languages.', icon: <Globe className="text-blue-500" /> },
                  { title: 'Proven ROI', desc: 'Average users see a 24% increase in sales within 6 months.', icon: <TrendingUp className="text-orange-600" /> },
                ].map((item, i) => (
                  <div key={i} className="flex space-x-5">
                    <div className="mt-1 shrink-0 p-3 bg-stone-50 dark:bg-zinc-800 rounded-xl">{item.icon}</div>
                    <div>
                      <h4 className="font-black text-lg text-slate-900 dark:text-white mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/pricing" className="mt-12 inline-flex items-center space-x-3 px-10 py-5 bg-zinc-950 dark:bg-white dark:text-zinc-950 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl">
                <span>View All Features</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl animate-pulse" />
              <div className="bg-stone-50 dark:bg-zinc-800/50 p-12 rounded-[3.5rem] shadow-2xl border border-stone-100 dark:border-zinc-700 relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <img src="https://picsum.photos/seed/ceo/100/100" className="w-20 h-20 rounded-[2rem] border-4 border-white dark:border-zinc-700 shadow-xl" alt="CEO" />
                  <div>
                    <h5 className="font-black text-xl dark:text-white">Marcus Vane</h5>
                    <p className="text-xs font-black text-orange-600 uppercase tracking-widest">Founder, Nomad Nosh Fleet</p>
                  </div>
                </div>
                <p className="text-2xl italic text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  "StreetFeast didn't just help me track my trucks; they gave me a roadmap to expansion. We went from 2 trucks to 15 in under a year."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFleet;
