
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { TrendingUp, Users, ShoppingCart, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: 'Mon', sales: 4000, orders: 2400 },
  { name: 'Tue', sales: 3000, orders: 1398 },
  { name: 'Wed', sales: 2000, orders: 9800 },
  { name: 'Thu', sales: 2780, orders: 3908 },
  { name: 'Fri', sales: 1890, orders: 4800 },
  { name: 'Sat', sales: 2390, orders: 3800 },
  { name: 'Sun', sales: 3490, orders: 4300 },
];

const COLORS = ['#ea580c', '#14b8a6', '#3b82f6', '#8b5cf6'];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black mb-2 dark:text-white">Platform Overview</h1>
          <p className="text-slate-500 font-medium">Welcome back, here's what's happening today.</p>
        </div>
        <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-black shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition-all">
          Generate Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '$128,430', trend: '+12.5%', icon: <DollarSign />, color: 'orange' },
          { label: 'Active Users', value: '14,209', trend: '+18.2%', icon: <Users />, color: 'blue' },
          { label: 'Total Orders', value: '3,842', trend: '-2.4%', icon: <ShoppingCart />, color: 'teal' },
          { label: 'Fleet Growth', value: '8.4%', trend: '+4.1%', icon: <TrendingUp />, color: 'purple' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] shadow-sm border border-stone-100 dark:border-zinc-800 flex flex-col hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl ${
                stat.color === 'orange' ? 'bg-orange-100 text-orange-600' : 
                stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                stat.color === 'teal' ? 'bg-teal-100 text-teal-600' :
                'bg-purple-100 text-purple-600'
              } dark:bg-zinc-800 shadow-sm`}>
                {stat.icon}
              </div>
              <div className={`flex items-center space-x-1 text-xs font-black px-2 py-1 rounded-lg ${stat.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                <span>{stat.trend}</span>
                {stat.trend.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <p className="text-slate-500 font-black text-[10px] uppercase tracking-widest mb-2">{stat.label}</p>
            <h3 className="text-3xl font-black dark:text-white tracking-tight">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-8 rounded-[3rem] shadow-sm border border-stone-100 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black dark:text-white uppercase tracking-tight">Sales Performance</h3>
            <select className="bg-stone-50 dark:bg-zinc-800 text-xs font-black uppercase p-3 rounded-xl outline-none border border-stone-200 dark:border-zinc-700">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ea580c" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ea580c" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#88888820" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12, fontWeight: 700}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12, fontWeight: 700}} />
                <Tooltip 
                  contentStyle={{borderRadius: '20px', border: 'none', backgroundColor: '#18181b', color: '#fff', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'}} 
                  cursor={{stroke: '#ea580c', strokeWidth: 2}}
                />
                <Area type="monotone" dataKey="sales" stroke="#ea580c" strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[3rem] shadow-sm border border-stone-100 dark:border-zinc-800 flex flex-col">
          <h3 className="text-xl font-black dark:text-white uppercase tracking-tight mb-8">Order Distribution</h3>
          <div className="h-64 flex-1">
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Completed', value: 400 },
                    { name: 'Pending', value: 300 },
                    { name: 'Cancelled', value: 100 },
                    { name: 'Refunded', value: 50 },
                  ]}
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {['Completed', 'Pending', 'Cancelled', 'Refunded'].map((label, i) => (
              <div key={label} className="flex flex-col p-3 bg-stone-50 dark:bg-zinc-800 rounded-2xl">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[i]}}></div>
                  <span className="text-[10px] font-black uppercase text-slate-400">{label}</span>
                </div>
                <span className="text-lg font-black dark:text-white">{(Math.random() * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
