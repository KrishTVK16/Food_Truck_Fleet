
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users as UsersIcon, 
  ShoppingBag, 
  MessageSquare, 
  Settings, 
  LogOut,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  Menu,
  Sun,
  Moon
} from 'lucide-react';

interface AdminLayoutProps {
  theme: string;
  toggleTheme: () => void;
  dir: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ theme, toggleTheme, dir }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: <LayoutDashboard size={22} />, label: 'Analytics', path: '/admin' },
    { icon: <UsersIcon size={22} />, label: 'Users', path: '/admin/users' },
    { icon: <ShoppingBag size={22} />, label: 'Orders', path: '/admin/orders' },
    { icon: <MessageSquare size={22} />, label: 'Messages', path: '/admin/messages' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen bg-stone-50 dark:bg-zinc-950 text-slate-900 dark:text-slate-100 theme-transition">
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm" 
          onClick={() => setIsMobileOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 bg-zinc-900 text-slate-400 transition-all duration-300 transform border-r border-zinc-800
        lg:translate-x-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isCollapsed ? 'w-24' : 'w-72'}
      `}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="h-20 flex items-center justify-between px-6 border-b border-zinc-800">
            {!isCollapsed && (
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
                  <span className="font-bold">S</span>
                </div>
                <span className="text-xl font-black text-white tracking-tight">STREET<span className="text-orange-600">FEAST</span></span>
              </Link>
            )}
            {isCollapsed && (
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white mx-auto shadow-lg shadow-orange-600/20">
                <span className="font-black">S</span>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-8 px-4 space-y-3 overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`
                  flex items-center p-4 rounded-2xl transition-all font-bold group
                  ${isActive(item.path) 
                    ? 'bg-orange-600 text-white shadow-xl shadow-orange-600/20' 
                    : 'hover:bg-zinc-800 hover:text-white'}
                  ${isCollapsed ? 'justify-center' : 'space-x-4'}
                `}
                onClick={() => setIsMobileOpen(false)}
              >
                <span className={`${isActive(item.path) ? 'text-white' : 'text-slate-500 group-hover:text-orange-500'}`}>
                  {item.icon}
                </span>
                {!isCollapsed && <span className="text-sm">{item.label}</span>}
              </Link>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-zinc-800 space-y-2">
            <button className={`flex items-center p-4 w-full rounded-2xl hover:bg-zinc-800 hover:text-white transition-all font-bold ${isCollapsed ? 'justify-center' : 'space-x-4'}`}>
              <Settings size={22} className="text-slate-500" />
              {!isCollapsed && <span className="text-sm">Settings</span>}
            </button>
            <Link to="/login" className={`flex items-center p-4 w-full rounded-2xl text-rose-500 hover:bg-rose-500/10 transition-all font-bold ${isCollapsed ? 'justify-center' : 'space-x-4'}`}>
              <LogOut size={22} />
              {!isCollapsed && <span className="text-sm">Logout</span>}
            </Link>
          </div>
        </div>

        {/* Collapse Toggle (Desktop only) */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-24 -right-4 w-10 h-10 bg-orange-600 text-white rounded-full hidden lg:flex items-center justify-center border-4 border-stone-50 dark:border-zinc-950 transition-all hover:scale-110 shadow-lg shadow-orange-600/20"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </aside>

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isCollapsed ? 'lg:ml-24' : 'lg:ml-72'}`}>
        {/* Top Header */}
        <header className="h-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-stone-200 dark:border-zinc-800 sticky top-0 z-30 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="p-2 lg:hidden text-slate-500 hover:text-orange-600 transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center bg-stone-50 dark:bg-zinc-800 px-5 py-2.5 rounded-2xl w-96 border border-stone-100 dark:border-zinc-700">
              <Search size={18} className="text-slate-400" />
              <input type="text" placeholder="Quick search..." className="bg-transparent border-none outline-none px-4 w-full text-sm font-medium" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button 
              onClick={toggleTheme} 
              className="p-3 bg-stone-50 dark:bg-zinc-800 text-slate-500 rounded-2xl hover:text-orange-600 transition-all shadow-sm border border-stone-100 dark:border-zinc-700"
              title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="p-3 bg-stone-50 dark:bg-zinc-800 text-slate-500 rounded-2xl relative hover:text-orange-600 transition-all shadow-sm border border-stone-100 dark:border-zinc-700">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-orange-600 rounded-full border-2 border-white dark:border-zinc-900"></span>
            </button>
            <div className="w-px h-10 bg-stone-200 dark:bg-zinc-800"></div>
            <div className="flex items-center space-x-4 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black leading-none mb-1 group-hover:text-orange-600 transition-colors dark:text-white">Admin User</p>
                <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Platform Lead</p>
              </div>
              <img src="https://picsum.photos/seed/admin/100/100" className="w-12 h-12 rounded-2xl border-2 border-transparent group-hover:border-orange-600 transition-all shadow-md" alt="Avatar" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8 lg:p-12 flex-1 theme-transition">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
