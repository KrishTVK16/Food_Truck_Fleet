
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomeCustomer from './pages/HomeCustomer';
import HomeFleet from './pages/HomeFleet';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import ComingSoon from './pages/ComingSoon';
import Explore from './pages/Explore';
import CustomerDashboard from './pages/customer/Dashboard';
import FleetDashboard from './pages/fleet/Dashboard';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Orders from './pages/admin/Orders';
import Messages from './pages/admin/Messages';
import AdminLayout from './components/Layout/AdminLayout';

const App: React.FC = () => {
  // Enhanced theme initialization with persistence
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#09090b'; // zinc-950
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fafaf9'; // stone-50
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir);
  }, [dir]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleDir = () => setDir(prev => prev === 'ltr' ? 'rtl' : 'ltr');

  return (
    <HashRouter>
      <div className={`min-h-screen theme-transition ${dir === 'rtl' ? 'rtl' : ''}`}>
        <ScrollToTop />
        <Routes>
          {/* Main Website Routes */}
          <Route element={<MainLayout theme={theme} toggleTheme={toggleTheme} dir={dir} toggleDir={toggleDir} />}>
            <Route path="/" element={<HomeCustomer />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/fleet-management" element={<HomeFleet />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/truck/:id" element={<ServiceDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/customer/dashboard" element={<CustomerDashboard />} />
            <Route path="/fleet/dashboard" element={<FleetDashboard />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminLayout theme={theme} toggleTheme={toggleTheme} dir={dir} />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="orders" element={<Orders />} />
            <Route path="messages" element={<Messages />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
};

const MainLayout: React.FC<{ theme: string; toggleTheme: () => void; dir: string; toggleDir: () => void }> = ({ theme, toggleTheme, dir, toggleDir }) => {
  const location = useLocation();
  const hideLayout = ['/login', '/register', '/coming-soon'].includes(location.pathname);

  if (hideLayout) return <Outlet />;

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} dir={dir} toggleDir={toggleDir} />
      <main className="bg-stone-50 dark:bg-zinc-950 theme-transition">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 p-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-all z-50 animate-bounce"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
    </button>
  );
};

export default App;
