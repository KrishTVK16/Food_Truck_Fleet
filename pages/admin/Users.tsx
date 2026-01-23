
import React from 'react';

const Users: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black mb-2 dark:text-white tracking-tight uppercase">User Management</h1>
          <p className="text-slate-500 font-medium">Manage customers and truck owners on the platform.</p>
        </div>
        <button className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition-all">
          Add New User
        </button>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-sm border border-stone-200 dark:border-zinc-800 overflow-hidden theme-transition">
        <table className="w-full text-left">
          <thead className="bg-stone-50 dark:bg-zinc-800 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-stone-100 dark:border-zinc-700">
            <tr>
              <th className="px-10 py-5">User</th>
              <th className="px-10 py-5">Role</th>
              <th className="px-10 py-5">Status</th>
              <th className="px-10 py-5">Joined</th>
              <th className="px-10 py-5">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 dark:divide-zinc-800">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <tr key={i} className="hover:bg-stone-50/50 dark:hover:bg-zinc-800/50 transition-colors">
                <td className="px-10 py-6">
                  <div className="flex items-center space-x-4">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} className="w-12 h-12 rounded-2xl shadow-sm border border-stone-100 dark:border-zinc-700" alt="Avatar" />
                    <div>
                      <p className="font-black text-sm dark:text-white">User Name {i}</p>
                      <p className="text-xs text-slate-500 font-bold">user{i}@example.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-10 py-6">
                  <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wide ${i % 2 === 0 ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
                    {i % 2 === 0 ? 'Truck Owner' : 'Customer'}
                  </span>
                </td>
                <td className="px-10 py-6">
                  <span className="flex items-center space-x-2 text-xs font-bold text-emerald-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span>Active</span>
                  </span>
                </td>
                <td className="px-10 py-6 text-sm font-bold text-slate-500">Oct 24, 2025</td>
                <td className="px-10 py-6">
                  <button className="text-orange-600 hover:text-orange-700 font-black text-xs uppercase tracking-widest">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
