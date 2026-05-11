import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'What We Buy',  href: '#categories'   },
  { label: 'Reviews',      href: '#testimonials'  },
  { label: 'FAQ',          href: '#faq'           },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md shadow-violet-100/60 border-b border-gray-100' : 'border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">

          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-md shadow-violet-300/40 group-hover:shadow-violet-400/60 group-hover:scale-110 transition-all duration-200">
              <Zap className="w-4 h-4 text-white fill-white group-hover:animate-spin-slow" />
            </div>
            <span className="text-[17px] font-extrabold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent tracking-tight">
              electronics4money
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map(({ label, href }) => (
              <a key={label} href={href}
                className="nav-link text-[14px] font-semibold text-gray-500 hover:text-violet-600 transition-colors duration-200">
                {label}
              </a>
            ))}
          </div>

          <a href="#book"
            className="hidden md:inline-flex btn items-center gap-1.5 px-5 py-2.5 rounded-xl text-[14px] font-bold">
            Book A Free Meeting
          </a>

          <button className="md:hidden text-gray-600 hover:text-violet-600 p-1 transition-colors"
            onClick={() => setOpen(v => !v)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-72' : 'max-h-0'}`}>
          <div className="py-4 border-t border-gray-100 space-y-0.5">
            {links.map(({ label, href }) => (
              <a key={label} href={href} onClick={() => setOpen(false)}
                className="block py-3 px-1 text-[14px] font-semibold text-gray-600 hover:text-violet-600 transition-colors">
                {label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)}
              className="block mt-3 btn px-5 py-3 rounded-xl text-[14px] font-bold text-center">
              Book A Free Meeting
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
