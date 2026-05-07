import { Zap, ArrowRight, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const cols = [
  { h: 'Quick Links', links: ['How It Works', 'What We Buy', 'Get a Quote', 'Sell in Bulk'] },
  { h: 'Company',     links: ['About Us', 'Blog', 'Careers', 'Contact Us']                  },
  { h: 'Legal',       links: ['Terms of Service', 'Privacy Policy', 'Shipping Policy', 'Refund Policy'] },
];
const socials = [
  { icon: Twitter,   label: 'Twitter'   },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube,   label: 'YouTube'   },
  { icon: Linkedin,  label: 'LinkedIn'  },
];

export default function Footer() {
  return (
    <footer className="relative" style={{ backgroundColor: '#0a0120' }}>
      {/* Top gradient border */}
      <div className="h-px w-full"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(124,58,237,.5),rgba(59,130,246,.5),transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand col */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-5 w-fit">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#3b82f6)', boxShadow: '0 0 12px rgba(124,58,237,.4)' }}>
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-[17px] font-extrabold"
                style={{ background: 'linear-gradient(135deg,#a78bfa,#60a5fa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                electronics4cash
              </span>
            </a>

            <p className="text-gray-400 text-[13.5px] leading-relaxed mb-6 max-w-[220px]">
              The simplest way to turn your used electronics into real money. Trusted by 10,000+ sellers.
            </p>

            {/* Payment badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['PayPal', 'Zelle', 'Cash'].map(m => (
                <span key={m} className="text-gray-300 text-[12px] font-semibold px-3 py-1.5 rounded-lg border border-white/15 bg-white/[0.06]">
                  {m}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/15 bg-white/[0.05] flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-600/20 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map(({ h, links }) => (
            <div key={h}>
              <h5 className="text-white font-bold text-[13px] uppercase tracking-wider mb-5">{h}</h5>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-gray-400 text-[13.5px] hover:text-white transition-colors duration-150">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[12px] font-medium">© 2025 electronics4cash. All rights reserved. Built in the USA.</p>
          <a href="#book"
            className="btn inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold group">
            Start Selling <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
