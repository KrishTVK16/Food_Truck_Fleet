
import React from 'react';
// Added User and ChevronRight to imports to resolve component not found errors
import { ShoppingBag, Heart, MapPin, Star, Clock, ArrowRight, Settings, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerDashboard: React.FC = () => {
  const recentOrders = [
    { id: 'ORD-101', truck: 'Taco Temptations', date: 'Oct 24, 2025', total: 24.50, status: 'Completed' },
    { id: 'ORD-102', truck: 'Wok on Wheels', date: 'Oct 22, 2025', total: 18.99, status: 'Processing' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">Hey, Foodie! 👋</h1>
            <p className="text-slate-500">Track your bites and discover your next favorite meal.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="font-black dark:text-white leading-none">Alex Johnson</p>
              <p className="text-xs text-amber-500 font-bold uppercase">Silver Member</p>
            </div>
            <img src="https://picsum.photos/seed/customer/100/100" className="w-14 h-14 rounded-2xl border-4 border-white dark:border-slate-800 shadow-lg" alt="Avatar" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard Stats */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Total Orders', val: '42', icon: <ShoppingBag />, color: 'amber' },
                { label: 'Favorites', val: '12', icon: <Heart />, color: 'red' },
                { label: 'Points', val: '1,250', icon: <Star />, color: 'emerald' },
              ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className={`w-12 h-12 bg-${stat.color}-500/10 text-${stat.color}-500 rounded-xl flex items-center justify-center mb-4`}>
                    {stat.icon}
                  </div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.val}</p>
                </div>
              ))}
            </div>

            {/* Recent Orders Card */}
            <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
              <div className="p-8 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <h3 className="text-xl font-black dark:text-white uppercase tracking-tight">Recent Orders</h3>
                <Link to="/explore" className="text-amber-500 font-bold text-sm hover:underline">New Order</Link>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-700">
                {recentOrders.map(order => (
                  <div key={order.id} className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center">
                        <ShoppingBag className="text-slate-400" />
                      </div>
                      <div>
                        <p className="font-black text-slate-900 dark:text-white">{order.truck}</p>
                        <p className="text-xs text-slate-400 font-bold">{order.date} • {order.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-8">
                      <div className="text-right">
                        <p className="font-black text-slate-900 dark:text-white">${order.total.toFixed(2)}</p>
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${order.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                          {order.status}
                        </span>
                      </div>
                      <button className="p-3 bg-slate-50 dark:bg-slate-700 rounded-xl hover:bg-amber-500 hover:text-white transition-all">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <h3 className="text-2xl font-black mb-8">Settings</h3>
              <div className="space-y-4">
                {[
                  { label: 'Edit Profile', icon: <User size={18} /> },
                  { label: 'Payment Methods', icon: <ShoppingBag size={18} /> },
                  { label: 'Notification Settings', icon: <Clock size={18} /> },
                  { label: 'Security', icon: <Settings size={18} /> },
                ].map((item, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-sm font-bold">
                    <div className="flex items-center space-x-3">
                      <span className="text-amber-500">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight size={14} />
                  </button>
                ))}
              </div>
            </div>

            {/* Favorite Trucks List */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-700">
              <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Favorite Trucks</h4>
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center space-x-4">
                    <img src={`https://picsum.photos/seed/fav${i}/100/100`} className="w-12 h-12 rounded-xl object-cover" alt="Truck" />
                    <div className="flex-1">
                      <p className="font-black text-sm dark:text-white">Gourmet Grills</p>
                      <div className="flex items-center space-x-1 text-[10px] text-amber-500 font-bold uppercase">
                        <Star size={10} fill="currentColor" />
                        <span>4.8 Rating</span>
                      </div>
                    </div>
                    <button className="text-red-500"><Heart size={16} fill="currentColor" /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
