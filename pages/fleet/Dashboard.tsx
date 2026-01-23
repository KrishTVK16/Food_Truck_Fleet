
import React from 'react';
import { Truck, MapPin, DollarSign, Users, TrendingUp, Activity, ArrowUpRight, BarChart3, Clock, AlertTriangle } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

const data = [
  { name: 'Mon', revenue: 2400 },
  { name: 'Tue', revenue: 1398 },
  { name: 'Wed', revenue: 9800 },
  { name: 'Thu', revenue: 3908 },
  { name: 'Fri', revenue: 4800 },
  { name: 'Sat', revenue: 12000 },
  { name: 'Sun', revenue: 9500 },
];

const FleetDashboard: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">Fleet Command Central</h1>
            <p className="text-slate-500">Managing <span className="text-amber-500 font-bold">12 active trucks</span> across 4 regions.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:bg-slate-50 transition-all">
              Add New Truck
            </button>
            <button className="px-6 py-3 bg-amber-500 text-white font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:bg-amber-600 transition-all">
              Live Map View
            </button>
          </div>
        </div>

        {/* Fleet Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Weekly Revenue', val: '$42,850', trend: '+14.2%', icon: <DollarSign />, color: 'amber' },
            { label: 'Active Trucks', val: '12 / 15', trend: '80% Capacity', icon: <Truck />, color: 'blue' },
            { label: 'Avg. Rating', val: '4.85', trend: 'Top 5%', icon: <TrendingUp />, color: 'emerald' },
            { label: 'Fuel Usage', val: '840 Gal', trend: '-2.1% Efficiency', icon: <Activity />, color: 'purple' },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700">
              <div className={`w-12 h-12 bg-${stat.color}-500/10 text-${stat.color}-500 rounded-xl flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.val}</p>
                <span className="text-[10px] font-black text-emerald-500 flex items-center">
                  {stat.trend} <ArrowUpRight size={12} className="ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black dark:text-white uppercase tracking-tight">Revenue Performance</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-xs font-bold rounded-lg">Week</button>
                <button className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-lg">Month</button>
              </div>
            </div>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#88888820" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', backgroundColor: '#1e293b', color: '#fff'}} 
                    cursor={{stroke: '#f59e0b', strokeWidth: 2}}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Critical Alerts Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="flex items-center space-x-3 mb-8">
                <AlertTriangle className="text-amber-500" />
                <h3 className="text-2xl font-black">Urgent Alerts</h3>
              </div>
              <div className="space-y-4">
                {[
                  { msg: 'Truck #04: Low Inventory (Taco Shells)', type: 'warning' },
                  { msg: 'Truck #12: Engine Temp High', type: 'critical' },
                  { msg: 'New Permit Renewal due in 4 days', type: 'info' },
                ].map((alert, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${alert.type === 'critical' ? 'bg-red-500' : alert.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                    <p className="text-sm font-bold text-slate-300">{alert.msg}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Truck Status List */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-700">
              <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Top Performers</h4>
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center font-black">
                        #{i < 10 ? `0${i}` : i}
                      </div>
                      <div>
                        <p className="font-black text-sm dark:text-white">Nomad Nosh #{i}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Downtown Central</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-emerald-500">$2.4k</p>
                      <p className="text-[10px] text-slate-400">Daily Sales</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-4 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-black text-sm hover:border-amber-500 hover:text-amber-500 transition-all">
                Full Fleet Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetDashboard;
