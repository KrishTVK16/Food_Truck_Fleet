
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, User, Share2, MessageCircle, 
  ChevronRight, Mail, BookOpen, Star, ShieldCheck, 
  ThumbsUp, MessageSquare, Send, Tag
} from 'lucide-react';
import { BLOG_POSTS } from './Blog';

// Full detailed content for all 6 blog posts to ensure unique data display
const BLOG_DETAILS_DATA: Record<string, any> = {
  '1': {
    title: 'Top 10 Food Truck Trends in 2026',
    subtitle: 'Future-proofing your culinary business on wheels.',
    content: `The street food industry is entering a new era. In 2026, we're seeing a shift from simple mobility to immersive culinary experiences. From "Ghost Trucks" that serve as hub-and-spoke delivery points to interactive ordering systems using augmented reality, the boundary between fine dining and street food is blurring. 

    The most significant trend? Hyper-localization. Trucks are now using real-time community data to tailor their menus to the specific demographic of the block they are parked on. If you're near a tech campus, it's keto-friendly bowls; near a stadium, it's gourmet sliders.`,
    expertVerdict: "Expect technology to become the invisible sous-chef. Those who don't adopt smart tracking by mid-2026 will struggle to find parking, literally and metaphorically.",
    highlights: ['AR-enabled digital menus', 'Bio-fuel fleet conversions', 'Demographic-sync menus', 'Pop-up collaboration events']
  },
  '2': {
    title: 'Scaling Your Single Truck into a Fleet',
    subtitle: 'From one window to a regional empire.',
    content: `Scaling isn't just about buying more trucks. It's about duplicating your culture and consistency. Many owners fail because they lose the 'magic' of the first truck when they expand. 

    The key to successful fleet management lies in centralized logistics. You need a "Command Center" where inventory, staff schedules, and GPS locations are visible in one dashboard. This allows you to manage the chaos of 10 locations as easily as you managed one.`,
    expertVerdict: "Don't scale until your unit economics are perfect on truck #1. Expansion only magnifies existing problems.",
    highlights: ['Centralized prep kitchens', 'Staff rotation strategies', 'Brand consistency audits', 'Regional pricing models']
  },
  '3': {
    title: 'The Secret to the Perfect Location',
    subtitle: 'Finding the gold mines in your city streets.',
    content: `Foot traffic isn't the only metric anymore. In 2025, successful trucks are analyzing "dwell time" and "spending power" heatmaps. A quiet corner next to a high-end apartment complex often outperforms a busy subway station where everyone is in too much of a hurry to stop. 

    Data shows that locations with adjacent seating—parks, plazas, or even partnerships with local breweries—increase the average order value by 35%.`,
    expertVerdict: "Location is a living thing. A spot that worked on Tuesday might be dead on Friday. Use dynamic tracking to stay agile.",
    highlights: ['Dwell time analysis', 'B2B partnership spots', 'Night-life hub scouting', 'Event-based routing']
  },
  '4': {
    title: 'Optimizing Your Digital Menu for Mobile Users',
    subtitle: 'The psychology of the 30-second order window.',
    content: `Your digital menu isn't just a list of items; it's a conversion engine. Mobile users have an attention span of roughly 8 seconds. If they have to scroll too far for your signature dish, you've lost the sale.

    Use high-resolution imagery and "tappable" modifiers to make the ordering process tactile. Our data shows that adding a "Frequently Ordered Together" section at the bottom of the cart increases ticket sizes by an average of $4.20.`,
    expertVerdict: "Speed is the only currency in mobile ordering. Every click you remove from the user journey adds 5% to your bottom line.",
    highlights: ['High-res visual priority', 'One-tap modifiers', 'Dynamic pricing tools', 'Checkout speed optimization']
  },
  '5': {
    title: 'Sustainable Street Food: Going Zero Waste',
    subtitle: 'Green operations for a cleaner future.',
    content: `Sustainability is no longer a niche marketing tactic; it's a regulatory requirement and a consumer expectation. Switching to 100% compostable packaging and solar-assisted kitchen power isn't just good for the planet—it's good for PR.

    Forward-thinking fleets are even partnering with local farms to compost their food waste, creating a closed-loop system that resonates deeply with the modern eco-conscious diner.`,
    expertVerdict: "The ROI on sustainability is hidden in customer loyalty. People don't just buy your food; they buy your values.",
    highlights: ['Compostable packaging shifts', 'Solar-powered prep stations', 'Local sourcing networks', 'Carbon-neutral delivery']
  },
  '6': {
    title: 'Mastering the Art of Customer Loyalty',
    subtitle: 'Turning one-off eaters into brand advocates.',
    content: `A customer who eats with you once is a transaction. A customer who follows your location daily is an asset. Loyalty programs for food trucks shouldn't be complex. A simple "Every 5th Taco is Free" combined with push notifications when you're nearby is incredibly powerful.

    Use your data to send personalized birthday offers or "We Miss You" coupons to users who haven't ordered in 30 days. Personalization is the bridge from a vendor to a friend.`,
    expertVerdict: "Retention is cheaper than acquisition. Treat your top 100 fans like VIPs and they will become your street-team marketing force.",
    highlights: ['Gamified reward tiers', 'Personalized push alerts', "VIP 'Secret Menu' access", 'Community event invites']
  }
};

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find basic data and detailed data safely
  const postBasic = useMemo(() => BLOG_POSTS.find(p => p.id === id) || BLOG_POSTS[0], [id]);
  const postDetail = useMemo(() => BLOG_DETAILS_DATA[id || '1'] || BLOG_DETAILS_DATA['1'], [id]);
  
  // Get truly related posts (exclude current)
  const relatedPosts = useMemo(() => 
    BLOG_POSTS.filter(p => p.id !== id).slice(0, 3), 
  [id]);

  return (
    <div className="bg-white dark:bg-slate-900 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-amber-500 font-bold mb-10 transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              Back to Blog
            </Link>

            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <span className="px-4 py-1.5 bg-amber-100 dark:bg-amber-900/30 text-amber-600 text-xs font-black uppercase rounded-full">
                  {postBasic.category}
                </span>
                <div className="flex items-center space-x-4 text-xs font-bold text-slate-400 uppercase">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{postBasic.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User size={14} />
                    <span>{postBasic.author}</span>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-4">
                {postDetail.title}
              </h1>
              <p className="text-2xl text-slate-400 font-bold italic">{postDetail.subtitle}</p>
            </header>

            <img src={postBasic.image} className="w-full h-[450px] object-cover rounded-[3rem] shadow-2xl mb-12" alt="Featured" />

            {/* Section 1: Executive Summary */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] p-8 mb-12 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="text-amber-500" size={24} />
                <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Executive Summary</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {postDetail.highlights.map((point: string, i: number) => (
                  <li key={i} className="flex items-start space-x-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <Star className="text-amber-500 mt-0.5 shrink-0" size={14} fill="currentColor" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                {postDetail.content.split('\n\n')[0]}
              </p>
              
              <h2 className="text-3xl font-black mb-6">In-Depth Analysis</h2>
              <p className="mb-8 leading-relaxed">
                {postDetail.content.split('\n\n')[1]}
              </p>

              {/* Expert Verdict Section */}
              <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] my-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-500/40 transition-all" />
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-amber-500 uppercase tracking-widest">StreetFeast Approved</p>
                    <h4 className="text-xl font-black">Expert Verdict</h4>
                  </div>
                </div>
                <p className="text-lg text-slate-300 font-medium italic relative z-10">
                  "{postDetail.expertVerdict}"
                </p>
              </div>

              <p className="mb-12 leading-relaxed">
                As the market matures, the differentiation will come from brand loyalty and technical integration. The future of food trucks isn't just about being mobile; it's about being smart.
              </p>
            </div>

            {/* Community Discussion Section */}
            <section className="mt-20 border-t border-slate-100 dark:border-slate-800 pt-16">
               <div className="flex items-center space-x-4 mb-10">
                 <MessageSquare className="text-amber-500" size={28} />
                 <h2 className="text-3xl font-black text-slate-900 dark:text-white">Community Discussion</h2>
               </div>
               
               <div className="space-y-8 mb-12">
                 {[1, 2].map(i => (
                   <div key={i} className="flex space-x-6">
                     <img src={`https://picsum.photos/seed/user${i}/100/100`} className="w-12 h-12 rounded-2xl" alt="User" />
                     <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-6 rounded-[2rem] rounded-tl-none">
                       <div className="flex justify-between items-center mb-2">
                         <h5 className="font-black text-slate-900 dark:text-white">{i === 1 ? 'Alex Rivera' : 'Maria Garcia'}</h5>
                         <span className="text-[10px] text-slate-400 font-bold">{i * 2} HOURS AGO</span>
                       </div>
                       <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                         {i === 1 
                          ? "This insight on hyper-localization is huge. We started changing our menu based on the neighborhood and our revenue jumped by 15% in just a month!"
                          : "Really great article. As a new truck owner, the scaling advice is exactly what I needed to hear. Consistency really is key."}
                       </p>
                       <button className="mt-4 text-xs font-black text-amber-500 uppercase hover:underline">Reply</button>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-slate-800 shadow-xl">
                 <h4 className="text-white font-black mb-4">Leave a Comment</h4>
                 <div className="relative">
                   <textarea 
                     rows={3} 
                     placeholder="Share your thoughts with the community..." 
                     className="w-full bg-slate-800 border-none rounded-2xl p-4 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none mb-4"
                   />
                   <button className="flex items-center space-x-2 px-8 py-3 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-600 transition-all ml-auto">
                     <span>Post Comment</span>
                     <Send size={16} />
                   </button>
                 </div>
               </div>
            </section>
          </div>

          {/* Sidebar / Related Information */}
          <div className="lg:col-span-4 space-y-12">
            {/* Newsletter */}
            <div className="bg-amber-500 rounded-[2.5rem] p-10 text-white shadow-xl shadow-amber-500/20 sticky top-32">
              <Mail className="mb-6 opacity-40" size={48} />
              <h3 className="text-2xl font-black mb-4">Stay Informed</h3>
              <p className="text-amber-100 mb-8 font-bold leading-relaxed text-sm">
                Get the latest industry reports and fleet management tips delivered directly to your inbox.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl placeholder:text-amber-100 outline-none focus:bg-white/20 transition-all font-bold text-sm" 
                />
                <button className="w-full py-4 bg-white text-amber-500 font-black rounded-2xl hover:scale-105 transition-all">
                  Subscribe Now
                </button>
              </form>
            </div>

            {/* Related Reading */}
            <div className="space-y-8 pt-8 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight px-4 flex items-center justify-between">
                <span>Related Reading</span>
                <ChevronRight size={18} className="text-amber-500" />
              </h4>
              <div className="space-y-6">
                {relatedPosts.map(post => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="group flex items-center space-x-4 p-4 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                    <img src={post.image} className="w-24 h-20 object-cover rounded-2xl shrink-0" alt={post.title} />
                    <div>
                      <span className="text-[10px] font-black uppercase text-amber-500 mb-1 block">{post.category}</span>
                      <h5 className="font-black text-slate-900 dark:text-white text-sm leading-tight group-hover:text-amber-500 transition-colors line-clamp-2">
                        {post.title}
                      </h5>
                      <p className="text-[10px] text-slate-500 mt-2 font-bold">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700">
               <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6 flex items-center">
                 <Tag size={14} className="mr-2" />
                 <span>Popular Topics</span>
               </h4>
               <div className="flex flex-wrap gap-2">
                 {['Fleet', 'Foodies', 'Logistics', 'Eco-friendly', 'Innovation', 'Growth'].map(tag => (
                   <span key={tag} className="px-3 py-1.5 bg-white dark:bg-slate-700 text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 rounded-lg border border-slate-100 dark:border-slate-600 cursor-pointer hover:border-amber-500 hover:text-amber-500 transition-all">
                     #{tag}
                   </span>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Discover More Bottom Slider */}
      <section className="mt-32 border-t border-slate-100 dark:border-slate-800 pt-24 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white">Discover More</h2>
              <p className="text-slate-500 mt-2">More insights from our expert editorial team.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <div key={post.id} className="group bg-white dark:bg-slate-800 rounded-[2.5rem] p-6 shadow-sm hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700">
                <img src={post.image} className="w-full h-48 object-cover rounded-[2rem] mb-6" alt="Post" />
                <div className="flex items-center space-x-4 mb-4 text-[10px] font-black uppercase text-slate-400">
                  <span>{post.date}</span>
                  <span className="text-amber-500">{post.category}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-amber-500 transition-colors line-clamp-2">{post.title}</h4>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-sm font-bold text-amber-500 space-x-2 group-hover:space-x-4 transition-all">
                  <span>Read Article</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
