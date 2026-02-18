
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

export const BLOG_POSTS = [
  { id: '1', title: 'Top 10 Food Truck Trends in 2026', excerpt: 'From plant-based street food to interactive dining experiences, discover whats hot this year.', category: 'Trends', date: 'Oct 24, 2025', author: 'Jane Cook', image: 'https://picsum.photos/seed/trends/600/400' },
  { id: '2', title: 'Scaling Your Single Truck into a Fleet', excerpt: 'The ultimate guide to growth, logistics, and managing multiple locations effectively.', category: 'Business', date: 'Oct 20, 2025', author: 'Mark Vane', image: 'https://picsum.photos/seed/scale/600/400' },
  { id: '3', title: 'The Secret to the Perfect Location', excerpt: 'Location is everything. We analyze traffic patterns and demographics to find the gold mines.', category: 'Logistics', date: 'Oct 15, 2025', author: 'Sarah Street', image: 'https://picsum.photos/seed/location/600/400' },
  { id: '4', title: 'Optimizing Your Digital Menu for Mobile', excerpt: 'Speed up the ordering process and increase your average ticket size with smart UX.', category: 'Tech', date: 'Oct 12, 2025', author: 'Alex Code', image: 'https://picsum.photos/seed/tech/600/400' },
  { id: '5', title: 'Sustainable Street Food: Going Zero Waste', excerpt: 'Why eco-friendly packaging and local sourcing are becoming the new industry standard.', category: 'Sustainability', date: 'Oct 08, 2025', author: 'Eco Green', image: 'https://picsum.photos/seed/eco/600/400' },
  { id: '6', title: 'Mastering the Art of Customer Loyalty', excerpt: 'How to turn a one-time visitor into a lifelong fan of your culinary brand.', category: 'Marketing', date: 'Oct 05, 2025', author: 'Sam Smiles', image: 'https://picsum.photos/seed/loyalty/600/400' },
];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-slate-900 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4">The Street Journal</h1>
            <p className="text-xl text-slate-500">Insights, tips, and stories from the heart of the food truck world.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 rounded-2xl outline-none border-2 border-transparent focus:border-amber-500 transition-all dark:text-white font-bold"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {filteredPosts.map(post => (
            <article key={post.id} className="group bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700">
              <div className="relative h-64 overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={post.title} />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-xs font-black uppercase text-amber-600">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-6 text-xs font-bold text-slate-400 uppercase mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-amber-500 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center space-x-2 text-amber-500 font-bold group-hover:space-x-4 transition-all">
                    <span>Read More</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Tag size={16} className="text-slate-300" />
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl font-black text-slate-400">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
