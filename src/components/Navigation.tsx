import { motion } from 'framer-motion';
import { Camera, User, Mail, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['portfolio', 'about', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Camera className="h-8 w-8 text-white" />
            <span className="ml-2 font-bold text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500">Teertha Photography</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#portfolio" active={activeSection === 'portfolio'}>Portfolio</NavLink>
              <NavLink href="#about" active={activeSection === 'about'}>About</NavLink>
              <NavLink href="#testimonials" active={activeSection === 'testimonials'}>Testimonials</NavLink>
              <NavLink href="#contact" active={activeSection === 'contact'}>Contact</NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden fixed inset-y-0 right-0 w-64 bg-black/90 backdrop-blur-lg"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Add cancel button */}
          <div className="flex justify-end p-2">
            <motion.button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="h-6 w-6" />
            </motion.button>
          </div>
          <MobileNavLink href="#portfolio" icon={Camera} active={activeSection === 'portfolio'}>Portfolio</MobileNavLink>
          <MobileNavLink href="#about" icon={User} active={activeSection === 'about'}>About</MobileNavLink>
          <MobileNavLink href="#testimonials" icon={User} active={activeSection === 'testimonials'}>Testimonials</MobileNavLink>
          <MobileNavLink href="#contact" icon={Mail} active={activeSection === 'contact'}>Contact</MobileNavLink>
        </div>
      </motion.div>
    </nav>
  );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <motion.a
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={active ? { y: 0 } : { y: 0 }}
    >
      {children}
    </motion.a>
  );
}

function MobileNavLink({ href, icon: Icon, children, active }: { href: string; icon: any; children: React.ReactNode; active: boolean }) {
  return (
    <motion.a
      href={href}
      className={`block px-3 py-2 rounded-md text-base font-medium flex items-center ${
        active ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="h-5 w-5 mr-2" />
      {children}
    </motion.a>
  );
}