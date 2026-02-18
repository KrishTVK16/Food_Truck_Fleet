
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-amber-600 uppercase bg-amber-100 rounded-full dark:bg-amber-900/30 dark:text-amber-500">
            Get in Touch
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-8">
            How Can We <span className="text-amber-500">Help You?</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Whether you're a hungry fan looking for a truck or an owner wanting to scale your fleet, our team is here to support your journey.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 text-center group hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-black mb-2 dark:text-white">Live Chat</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">Typical response time: <br /><span className="font-bold text-amber-500">Under 5 minutes</span></p>
              <button className="text-amber-500 font-bold hover:underline">Start Chatting</button>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 text-center group hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-black mb-2 dark:text-white">Call Us</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">Mon-Fri from 8am to 6pm. <br /><span className="font-bold text-emerald-500">+1 (555) 123-4567</span></p>
              <button className="text-emerald-500 font-bold hover:underline">See Local Numbers</button>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 text-center group hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-black mb-2 dark:text-white">Email Support</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">For all general inquiries. <br /><span className="font-bold text-blue-500">hello@streetfeast.com</span></p>
              <button className="text-blue-500 font-bold hover:underline">Send Email</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all dark:text-white" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all dark:text-white" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">Inquiry Type</label>
                  <select className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all dark:text-white appearance-none cursor-pointer">
                    <option>Customer Support</option>
                    <option>Business/Fleet Partnership</option>
                    <option>Media Inquiry</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    rows={6} 
                    placeholder="How can we help you today?" 
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-2 border-transparent focus:border-amber-500 outline-none transition-all dark:text-white resize-none"
                  ></textarea>
                </div>
                <button className="px-10 py-5 bg-amber-500 text-white font-black rounded-2xl shadow-xl shadow-amber-500/20 flex items-center justify-center space-x-3 hover:bg-amber-600 transition-all hover:scale-105">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>

            <div className="space-y-10">
              <div className="bg-slate-900 text-white p-12 rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                <h3 className="text-3xl font-black mb-8 relative z-10">Contact Information</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-amber-500 mt-1 shrink-0" size={24} />
                    <div>
                      <p className="font-bold">Our Headquarters</p>
                      <p className="text-slate-400">123 Culinary Drive, Food District, New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="text-amber-500 shrink-0" size={24} />
                    <div>
                      <p className="font-bold">Working Hours</p>
                      <p className="text-slate-400">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe className="text-amber-500 shrink-0" size={24} />
                    <div>
                      <p className="font-bold">Global Presence</p>
                      <p className="text-slate-400">Operating in 15+ countries worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-80 bg-slate-100 dark:bg-slate-800 rounded-[3rem] border border-slate-200 dark:border-slate-700 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/600')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 bg-amber-500 text-white rounded-2xl shadow-2xl animate-bounce">
                    <MapPin size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
