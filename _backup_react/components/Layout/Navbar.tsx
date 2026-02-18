
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Sun, Moon, Languages, ChevronDown, 
  Layout, User, ShoppingBag, Truck, BarChart3 
} from 'lucide-react';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
  dir: string;
  toggleDir: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, dir, toggleDir }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [dashboardDropdown, setDashboardDropdown] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Explore', href: '/explore' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-b border-stone-200 dark:border-zinc-800 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
              <span className="font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              STREET<span className="text-orange-600">FEAST</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Home Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setHomeDropdown(true)}
              onMouseLeave={() => setHomeDropdown(false)}
            >
              <button className={`flex items-center space-x-1 text-sm font-bold transition-colors hover:text-orange-600 ${isActive('/') || isActive('/fleet-management') ? 'text-orange-600' : 'text-slate-600 dark:text-slate-300'}`}>
                <span>Home</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${homeDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {homeDropdown && (
                <div className="absolute top-full left-0 w-64 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl border border-stone-100 dark:border-zinc-700 p-2 overflow-hidden">
                    <Link to="/" className="flex items-start space-x-3 p-3 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/40 rounded-lg flex items-center justify-center text-orange-600 shrink-0">
                        <ShoppingBag size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-black dark:text-white">Food Discovery</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Customer Journey</p>
                      </div>
                    </Link>
                    <Link to="/fleet-management" className="flex items-start space-x-3 p-3 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all">
                      <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/40 rounded-lg flex items-center justify-center text-teal-600 shrink-0">
                        <Layout size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-black dark:text-white">Fleet Platform</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Business Solutions</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-bold transition-colors hover:text-orange-600 ${
                  isActive(link.href) ? 'text-orange-600' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Dashboards Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setDashboardDropdown(true)}
              onMouseLeave={() => setDashboardDropdown(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-bold text-slate-600 dark:text-slate-300 transition-colors hover:text-orange-600">
                <span>Dashboards</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${dashboardDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {dashboardDropdown && (
                <div className="absolute top-full right-0 w-72 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl border border-stone-100 dark:border-zinc-700 p-2 overflow-hidden">
                    <Link to="/customer/dashboard" className="flex items-start space-x-3 p-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all">
                      <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                        <User size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-black dark:text-white">Customer Hub</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Orders & Rewards</p>
                      </div>
                    </Link>
                    <Link to="/fleet/dashboard" className="flex items-start space-x-3 p-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center text-purple-500 shrink-0">
                        <Truck size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-black dark:text-white">Fleet Manager</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">For Truck Owners</p>
                      </div>
                    </Link>
                    <Link to="/admin" className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-700 transition-all">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-zinc-600 rounded-lg flex items-center justify-center text-slate-900 dark:text-white shrink-0">
                        <BarChart3 size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-black dark:text-white">Admin Panel</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Platform Control</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={toggleDir}
              className="p-2 text-slate-500 hover:text-orange-600 transition-colors"
              title="Toggle RTL/LTR"
            >
              <Languages size={20} />
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2.5 bg-stone-100 dark:bg-zinc-800 text-slate-500 rounded-xl hover:text-orange-600 transition-all"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <Link to="/login" className="px-5 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-orange-600 transition-colors">
              Login
            </Link>
            <Link to="/register" className="px-6 py-2.5 text-sm font-bold bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-all shadow-md">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              onClick={toggleTheme} 
              className="p-2.5 bg-stone-100 dark:bg-zinc-800 text-slate-500 rounded-xl"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-500">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <div className="py-4 border-b border-stone-100 dark:border-zinc-800">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-3 px-3">Quick Access</p>
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-slate-700 dark:text-slate-200">Food Discovery</Link>
              <Link to="/fleet-management" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-slate-700 dark:text-slate-200">Fleet Platform</Link>
              <Link to="/customer/dashboard" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-emerald-500">Customer Dashboard</Link>
              <Link to="/fleet/dashboard" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-purple-500">Fleet Manager</Link>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-slate-700 dark:text-slate-200 border-b border-stone-100 dark:border-zinc-800 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Link to="/login" onClick={() => setIsOpen(false)} className="px-4 py-3 text-center font-bold text-slate-700 dark:text-slate-200 border rounded-xl">
                Login
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="px-4 py-3 text-center font-bold bg-orange-600 text-white rounded-xl">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
