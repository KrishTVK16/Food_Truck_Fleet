
import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const tiers = [
    { name: 'Starter', price: 'Free', desc: 'Perfect for single truck owners starting out.', features: ['Live Tracking', 'Mobile Menu', 'Customer Reviews', 'Basic Analytics'] },
    { name: 'Pro', price: '$49', desc: 'Scale your business with professional tools.', features: ['Everything in Starter', 'Order Management', 'Push Notifications', 'Advanced Analytics', 'Priority Support'] },
    { name: 'Fleet', price: '$199', desc: 'Comprehensive solution for large operations.', features: ['Everything in Pro', 'Multi-truck Dashboards', 'Inventory Sync', 'Custom Domain', 'Dedicated Manager'] },
  ];

  return (
    <div className="py-24 bg-stone-50 dark:bg-zinc-950 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Simple, Transparent <span className="text-orange-600">Pricing</span></h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">Choose the plan that fits your culinary journey.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className={`p-10 rounded-[3.5rem] bg-white dark:bg-zinc-900 shadow-xl border-4 theme-transition ${i === 1 ? 'border-orange-600 scale-105 z-10 relative' : 'border-transparent'}`}>
              {i === 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-orange-600/20">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-black mb-2 dark:text-white tracking-tight">{tier.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium">{tier.desc}</p>
              <div className="mb-10">
                <span className="text-6xl font-black dark:text-white tracking-tighter">{tier.price}</span>
                {tier.price !== 'Free' && <span className="text-slate-500 font-bold ml-1">/mo</span>}
              </div>
              <ul className="space-y-4 mb-12">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center space-x-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-orange-600" />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-black transition-all shadow-lg ${i === 1 ? 'bg-orange-600 text-white shadow-orange-600/20 hover:bg-orange-700' : 'bg-stone-100 dark:bg-zinc-800 dark:text-white hover:bg-stone-200'}`}>
                Get Started Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
