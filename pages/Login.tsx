
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white dark:bg-zinc-950 theme-transition">
      <div className="hidden lg:flex flex-col justify-between p-16 bg-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
        <div className="relative z-10">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-xl shadow-white/20">
              <span className="font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-black tracking-tight uppercase">STREET<span className="text-orange-100">FEAST</span></span>
          </Link>
        </div>
        <div className="relative z-10">
          <h2 className="text-6xl font-black text-white leading-tight mb-8">Fuel Your <br /> Culinary Journey.</h2>
          <p className="text-xl text-orange-100 max-w-md font-medium">Login to manage your fleet or track your favorite local trucks.</p>
        </div>
        <div className="relative z-10 flex items-center space-x-3">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://picsum.photos/seed/face${i}/100/100`} className="w-12 h-12 rounded-full border-4 border-orange-600 shadow-lg" alt="User" />
            ))}
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-orange-600 font-black text-xs shadow-lg">+10k</div>
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 lg:p-24 relative">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight uppercase">Welcome Back</h1>
            <p className="text-slate-500 font-medium">Please enter your details to sign in.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-black text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full pl-12 pr-4 py-4 bg-stone-50 dark:bg-zinc-900 rounded-2xl border-2 border-transparent focus:border-orange-600 outline-none transition-all dark:text-white font-medium" 
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs font-black text-orange-600 hover:underline tracking-widest uppercase">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-4 py-4 bg-stone-50 dark:bg-zinc-900 rounded-2xl border-2 border-transparent focus:border-orange-600 outline-none transition-all dark:text-white font-medium" 
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 rounded border-stone-200 text-orange-600 focus:ring-orange-600 bg-stone-50" />
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Keep me signed in</span>
            </div>

            <Link to="/admin" className="w-full py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl shadow-xl shadow-orange-600/20 flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-1">
              <span>Sign In</span>
              <ArrowRight size={20} />
            </Link>

            <div className="relative py-4 flex items-center">
              <div className="flex-grow border-t border-stone-100 dark:border-zinc-800"></div>
              <span className="px-4 text-xs font-black text-slate-400 uppercase tracking-widest">Or sign in with</span>
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

          <p className="mt-12 text-center text-sm font-bold text-slate-500">
            Don't have an account? <Link to="/register" className="text-orange-600 hover:underline">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
