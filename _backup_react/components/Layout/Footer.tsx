
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-slate-400 pt-20 pb-10 theme-transition border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
                <span className="font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                STREET<span className="text-orange-600">FEAST</span>
              </span>
            </Link>
            <p className="text-slate-500 mb-8 leading-relaxed font-medium text-sm">
              StreetFeast is the world's leading platform for food truck discovery and fleet management. Connecting hungry customers with local culinary gems.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all group">
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><Link to="/about" className="hover:text-orange-600 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-600 transition-colors">Our Services</Link></li>
              <li><Link to="/blog" className="hover:text-orange-600 transition-colors">Latest News</Link></li>
              <li><Link to="/pricing" className="hover:text-orange-600 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-orange-600 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">For Business</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><Link to="/fleet-management" className="hover:text-orange-600 transition-colors">Fleet Solutions</Link></li>
              <li><Link to="/admin" className="hover:text-orange-600 transition-colors">Dashboard</Link></li>
              <li><Link to="/register" className="hover:text-orange-600 transition-colors">Join as Partner</Link></li>
              <li><Link to="/services" className="hover:text-orange-600 transition-colors">Logistics API</Link></li>
              <li><Link to="/contact" className="hover:text-orange-600 transition-colors">Enterprise Sales</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">Contact Us</h4>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex items-start space-x-3">
                <MapPin className="text-orange-600 mt-1 shrink-0" size={18} />
                <span className="leading-relaxed">123 Culinary Drive, Food District, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-orange-600 shrink-0" size={18} />
                <span className="font-bold">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-orange-600 shrink-0" size={18} />
                <span className="font-bold">hello@streetfeast.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-zinc-900 text-center text-xs font-bold uppercase tracking-widest">
          <p>© 2026 StreetFeast. All rights reserved. Designed for Food Visionaries.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
