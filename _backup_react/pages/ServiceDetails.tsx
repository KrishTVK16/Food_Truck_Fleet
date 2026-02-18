
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowLeft, 
  Star, 
  Clock, 
  MapPin, 
  Plus, 
  Minus, 
  ShoppingBag,
  Info,
  Calendar
} from 'lucide-react';

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cartCount, setCartCount] = useState(0);

  const menu = [
    { id: '1', name: 'Signature Tacos', price: 12.99, desc: 'Set of 3 tacos with your choice of protein, fresh salsa, and handmade tortillas.', image: 'https://picsum.photos/seed/food1/400/300' },
    { id: '2', name: 'Street Corn (Elote)', price: 5.50, desc: 'Grilled corn with cotija cheese, lime, and chili powder.', image: 'https://picsum.photos/seed/food2/400/300' },
    { id: '3', name: 'Burrito Bowl', price: 14.50, desc: 'Brown rice, beans, guac, and your choice of grilled meat.', image: 'https://picsum.photos/seed/food3/400/300' },
    { id: '4', name: 'Agua Fresca', price: 3.99, desc: 'Freshly made watermelon or hibiscus juice.', image: 'https://picsum.photos/seed/food4/400/300' },
  ];

  const truckName = id?.replace('-', ' ').toUpperCase() || 'TRUCK DETAIL';

  return (
    <div className="bg-white dark:bg-slate-900 pb-32">
      {/* Hero Header */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <img src={`https://picsum.photos/seed/${id}/1600/900`} className="w-full h-full object-cover" alt={truckName} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-20">
          <div className="max-w-7xl mx-auto">
            <Link to="/explore" className="inline-flex items-center text-white/80 hover:text-white font-bold mb-8 transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              Back to Map
            </Link>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-4 py-1.5 bg-amber-500 text-white text-xs font-black uppercase rounded-full">Open Now</span>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star size={18} fill="currentColor" />
                    <span className="font-bold text-white">4.8 (120 reviews)</span>
                  </div>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tight">
                  {truckName}
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-8 py-4 bg-white text-slate-900 font-black rounded-2xl shadow-xl hover:scale-105 transition-all">
                  Book Catering
                </button>
                <button className="px-8 py-4 bg-amber-500 text-white font-black rounded-2xl shadow-xl shadow-amber-500/20 hover:scale-105 transition-all">
                  Track Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Clock />, label: 'Wait Time', val: '15 min' },
                { icon: <MapPin />, label: 'Distance', val: '0.5 mi' },
                { icon: <Info />, label: 'Cuisine', val: 'Mexican' },
                { icon: <Calendar />, label: 'Schedule', val: '10am - 9pm' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-[2rem] text-center border border-slate-100 dark:border-slate-700">
                  <div className="text-amber-500 flex justify-center mb-2">{item.icon}</div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-1">{item.label}</p>
                  <p className="font-black text-slate-900 dark:text-white">{item.val}</p>
                </div>
              ))}
            </div>

            {/* Menu Sections */}
            <div>
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-4xl font-black text-slate-900 dark:text-white">Digital Menu</h2>
                <div className="flex space-x-2">
                  <span className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-bold">Main Dishes</span>
                  <span className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-500 rounded-xl text-sm font-bold">Sides</span>
                  <span className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-500 rounded-xl text-sm font-bold">Drinks</span>
                </div>
              </div>

              <div className="space-y-6">
                {menu.map((item) => (
                  <div key={item.id} className="group flex flex-col md:flex-row items-center gap-8 p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2.5rem] hover:shadow-xl transition-all">
                    <img src={item.image} className="w-full md:w-40 h-40 object-cover rounded-[2rem]" alt={item.name} />
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">{item.name}</h3>
                        <span className="text-xl font-black text-amber-500">${item.price}</span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
                      <div className="flex items-center justify-center md:justify-start space-x-4">
                        <button 
                          onClick={() => setCartCount(prev => Math.max(0, prev - 1))}
                          className="w-10 h-10 rounded-xl border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 transition-colors"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="font-black text-lg w-8 text-center">{cartCount}</span>
                        <button 
                          onClick={() => setCartCount(prev => prev + 1)}
                          className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Cart Preview */}
          <div className="lg:col-span-1 space-y-8">
            <div className="sticky top-32">
              <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center">
                    <ShoppingBag size={24} />
                  </div>
                  <h3 className="text-2xl font-black">Your Order</h3>
                </div>
                
                {cartCount === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-slate-400 italic">Your cart is currently empty. <br /> Pick something delicious!</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-sm font-bold border-b border-white/10 pb-4">
                      <span>Items ({cartCount})</span>
                      <span>${(cartCount * 12.99).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold border-b border-white/10 pb-4">
                      <span>Platform Fee</span>
                      <span>$1.50</span>
                    </div>
                    <div className="flex justify-between items-center text-2xl font-black pt-4">
                      <span>Total</span>
                      <span className="text-amber-500">${(cartCount * 12.99 + 1.5).toFixed(2)}</span>
                    </div>
                    <button className="w-full py-5 bg-amber-500 text-white font-black rounded-2xl hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/20">
                      Place Order Ahead
                    </button>
                    <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest font-black">
                      Pick up in approx. 15-20 mins
                    </p>
                  </div>
                )}
              </div>

              {/* Truck Owner Note */}
              <div className="mt-8 p-8 bg-emerald-50 dark:bg-emerald-900/10 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-800/30">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="text-emerald-500" size={20} />
                  <h4 className="font-black text-emerald-900 dark:text-emerald-400 uppercase text-xs tracking-widest">Hygiene Verified</h4>
                </div>
                <p className="text-emerald-700 dark:text-emerald-500/80 text-sm leading-relaxed">
                  This truck follows the StreetFeast Premium Hygiene standards, ensuring fresh ingredients and clean prep areas daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
