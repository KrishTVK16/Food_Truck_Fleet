
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-stone-50 dark:bg-zinc-950 theme-transition">
      <div className="text-center">
        <h1 className="text-[150px] lg:text-[200px] font-black text-orange-600 leading-none mb-4 tracking-tighter opacity-20">404</h1>
        <div className="-mt-20 lg:-mt-24 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Oops! We Lost the Truck.</h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-md mx-auto font-medium">
            The page you are looking for might have been parked somewhere else or is no longer on our route.
          </p>
          <Link to="/" className="inline-block px-12 py-5 bg-orange-600 text-white font-black rounded-[2rem] shadow-2xl shadow-orange-600/20 hover:bg-orange-700 hover:scale-105 transition-all text-lg tracking-wide uppercase">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
