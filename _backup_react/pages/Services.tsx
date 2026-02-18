
import React from 'react';
import { Truck, Map, PieChart, Utensils, Zap, Users, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const serviceList = [
    { id: 'fleet-tracking', icon: <Map className="text-amber-500" />, title: 'Real-time Tracking', desc: 'Precision GPS monitoring for your entire fleet. Know your trucks locations down to the meter.' },
    { id: 'order-mgmt', icon: <Truck className="text-emerald-500" />, title: 'Order Management', desc: 'Streamlined POS and order-ahead system built specifically for the high-speed food truck environment.' },
    { id: 'analytics', icon: <PieChart className="text-blue-500" />, title: 'Business Analytics', desc: 'Deep insights into your sales patterns, popular dishes, and peak operational hours.' },
    { id: 'inventory', icon: <Utensils className="text-purple-500" />, title: 'Inventory Control', desc: 'Smart alerts and tracking for your supplies. Never run out of your signature ingredients again.' },
    { id: 'marketing', icon: <Zap className="text-orange-500" />, title: 'Smart Marketing', desc: 'Automatic social media updates and push notifications when your trucks arrive at hot spots.' },
    { id: 'crm', icon: <Users className="text-indigo-500" />, title: 'Customer CRM', desc: 'Build a loyal fan base with integrated rewards, feedback loops, and personalized offers.' },
    { id: 'security', icon: <Shield className="text-red-500" />, title: 'Payment Security', desc: 'Enterprise-grade encryption for all transactions. Secure, fast, and reliable payments anywhere.' },
    { id: 'logistics', icon: <Clock className="text-cyan-500" />, title: 'Route Optimization', desc: 'AI-driven route planning to avoid traffic and find the highest-traffic parking spots.' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400">Everything you need to dominate the street food industry, from discovery to enterprise-scale fleet control.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`}
              className="group p-8 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border border-transparent hover:border-amber-500/20 hover:bg-white dark:hover:bg-slate-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white dark:bg-slate-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
              <div className="flex items-center text-amber-500 font-bold text-sm">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
