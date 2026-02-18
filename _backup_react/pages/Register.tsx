
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Truck, UserCircle, Check } from 'lucide-react';

const Register: React.FC = () => {
  const [role, setRole] = useState<'owner' | 'customer'>('owner');

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white dark:bg-zinc-950 theme-transition">
      <div className="hidden lg:flex flex-col justify-between p-16 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
        <div className="relative z-10">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
              <span className="font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-black tracking-tight uppercase">STREET<span className="text-orange-600">FEAST</span></span>
          </Link>
        </div>
        <div className="relative z-10">
          <h2 className="text-6xl font-black text-white leading-tight mb-8">Join the <br /> Revolution.</h2>
          <p className="text-xl text-slate-400 max-w-md">Whether you're a food truck owner or a hungry fan, StreetFeast has something special for you.</p>
        </div>
        <div className="relative z-10 flex items-center space-x-8">
           <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <p className="text-white font-black text-3xl mb-1">5,000+</p>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Active Trucks</p>
           </div>
           <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <p className="text-white font-black text-3xl mb-1">100k+</p>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Monthly Orders</p>
           </div>
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 lg:p-24 relative overflow-y-auto">
        <div className="max-w-md mx-auto w-full py-12">
          <div className="mb-12 text-center lg:text-left">
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Create Account</h1>
            <p className="text-slate-500 font-medium">Join thousands of food lovers and entrepreneurs.</p>
          </div>

          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button 
              onClick={() => setRole('owner')}
              className={`p-6 border-2 rounded-[2.5rem] text-center relative group transition-all duration-300 ${
                role === 'owner' 
                ? 'border-orange-600 bg-orange-50 dark:bg-orange-900/10' 
                : 'border-stone-100 dark:border-zinc-800 hover:border-orange-200 dark:hover:border-orange-900/30'
              }`}
            >
              <div className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                role === 'owner' ? 'bg-orange-600 text-white scale-110' : 'border-2 border-stone-200 dark:border-zinc-700'
              }`}>
                {role === 'owner' && <Check size={14} />}
              </div>
              <Truck className={`mx-auto mb-3 transition-colors ${role === 'owner' ? 'text-orange-600' : 'text-slate-400'}`} size={32} />
              <p className={`font-black text-sm uppercase tracking-wide transition-colors ${role === 'owner' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>Truck Owner</p>
            </button>

            <button 
              onClick={() => setRole('customer')}
              className={`p-6 border-2 rounded-[2.5rem] text-center relative group transition-all duration-300 ${
                role === 'customer' 
                ? 'border-orange-600 bg-orange-50 dark:bg-orange-900/10' 
                : 'border-stone-100 dark:border-zinc-800 hover:border-orange-200 dark:hover:border-orange-900/30'
              }`}
            >
              <div className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                role === 'customer' ? 'bg-orange-600 text-white scale-110' : 'border-2 border-stone-200 dark:border-zinc-700'
              }`}>
                {role === 'customer' && <Check size={14} />}
              </div>
              <UserCircle className={`mx-auto mb-3 transition-colors ${role === 'customer' ? 'text-orange-600' : 'text-slate-400'}`} size={32} />
              <p className={`font-black text-sm uppercase tracking-wide transition-colors ${role === 'customer' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>Hungry Fan</p>
            </button>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
               <div>
                <label className="block text-xs font-black text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">First Name</label>
                <input 
                  type="text" 
                  placeholder="John" 
                  className="w-full px-5 py-4 bg-stone-50 dark:bg-zinc-900 rounded-2xl border-2 border-transparent focus:border-orange-600 outline-none transition-all dark:text-white font-medium" 
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  className="w-full px-5 py-4 bg-stone-50 dark:bg-zinc-900 rounded-2xl border-2 border-transparent focus:border-orange-600 outline-none transition-all dark:text-white font-medium" 
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full pl-12 pr-4 py-4 bg-stone-50 dark:bg-zinc-900 rounded-2xl border-2 border-transparent focus:border-orange-600 outline-none transition-all dark:text-white font-medium" 
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="text-xs font-black text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest block">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  placeholder="Create a strong password" 
                  className="w-full pl-12 pr-4 py-4 bg-stone-50 dark:bg-zinc-900 rounded-2xl border-2 border-transparent focus:border-orange-600 outline-none transition-all dark:text-white font-medium" 
                />
              </div>
            </div>

            <button className="w-full py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl shadow-xl shadow-orange-600/20 flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-1">
              <span>Create {role === 'owner' ? 'Fleet' : 'Customer'} Account</span>
              <ArrowRight size={20} />
            </button>

            {/* Social Icons Section */}
            <div className="relative py-8 flex items-center">
              <div className="flex-grow border-t border-stone-100 dark:border-zinc-800"></div>
              <span className="px-4 text-xs font-black text-slate-400 uppercase tracking-widest">Or sign up with</span>
              <div className="flex-grow border-t border-stone-100 dark:border-zinc-800"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="py-4 border-2 border-stone-100 dark:border-zinc-800 rounded-2xl flex items-center justify-center space-x-2 font-black dark:text-white hover:bg-stone-50 dark:hover:bg-zinc-900 transition-all">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
                <span className="text-xs uppercase tracking-widest">Google</span>
              </button>
              <button className="py-4 border-2 border-stone-100 dark:border-zinc-800 rounded-2xl flex items-center justify-center space-x-2 font-black dark:text-white hover:bg-stone-50 dark:hover:bg-zinc-900 transition-all">
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-5 h-5" alt="LinkedIn" />
                <span className="text-xs uppercase tracking-widest">LinkedIn</span>
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm font-bold text-slate-500">
            Already have an account? <Link to="/login" className="text-orange-600 hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
