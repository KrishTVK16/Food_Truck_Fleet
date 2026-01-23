
import React from 'react';

const Orders: React.FC = () => {
  return (
    <div className="space-y-8 theme-transition">
      <div>
        <h1 className="text-3xl font-black mb-2 dark:text-white tracking-tight uppercase">Order Tracking</h1>
        <p className="text-slate-500 font-medium">Monitor all transactions and active orders.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {['All Orders', 'Processing', 'Completed'].map((status, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-stone-100 dark:border-zinc-800 shadow-sm">
            <h4 className="font-black text-slate-500 mb-2 uppercase text-[10px] tracking-widest">{status}</h4>
            <p className="text-3xl font-black dark:text-white">{(Math.random() * 500).toFixed(0)}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-sm border border-stone-100 dark:border-zinc-800 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-stone-50 dark:bg-zinc-800 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-stone-100 dark:border-zinc-700">
            <tr>
              <th className="px-10 py-5">Order ID</th>
              <th className="px-10 py-5">Status</th>
              <th className="px-10 py-5">Vendor</th>
              <th className="px-10 py-5">Total</th>
              <th className="px-10 py-5">Method</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 dark:divide-zinc-800">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <tr key={i} className="hover:bg-stone-50/50 dark:hover:bg-zinc-800/50 transition-colors">
                <td className="px-10 py-6 font-black text-sm dark:text-white">#ORD-00{i}</td>
                <td className="px-10 py-6">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 dark:bg-orange-600/20 dark:text-orange-500 rounded-lg text-[10px] font-black uppercase tracking-wider">
                    Processing
                  </span>
                </td>
                <td className="px-10 py-6 text-sm font-bold text-slate-500">Taco Tuesday</td>
                <td className="px-10 py-6 font-black text-sm dark:text-white">$24.99</td>
                <td className="px-10 py-6 text-sm font-bold text-slate-500">Apple Pay</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
