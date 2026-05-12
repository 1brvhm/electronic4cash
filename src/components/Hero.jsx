import { ArrowRight, Star, ChevronRight } from 'lucide-react';
import Particles from './Particles';

/* ─────────────────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────────────────── */

const initials     = ['MT','PS','JK','AR','DW'];
const avatarColors = ['#7c3aed','#4f46e5','#3b82f6','#6366f1','#8b5cf6'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#f0f0eb', minHeight: 600 }}>

      {/* Gradient top strip */}
      <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#4f46e5,#3b82f6)' }} />

      {/* Ambient background orbs */}
      <div className="orb w-[500px] h-[500px] -top-32 -left-40 animate-orb-drift"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,.07) 0%, transparent 70%)' }} />
      <div className="orb w-[400px] h-[400px] -bottom-20 right-1/4 animate-orb-drift-2"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,.06) 0%, transparent 70%)' }} />

      {/* Subtle floating particles */}
      <Particles count={18} color="rgba(124,58,237,0.25)" />

      {/* ── LEFT devices ── */}
      <div className="absolute left-0 hidden xl:block" style={{ zIndex: 2, top: 'calc(50% - 80px)', transform: 'translateY(-50%)' }}>
        <img
          src="/devices (3).png"
          alt="Electronics devices"
          className="h-[870px] w-auto object-contain select-none"
          draggable="false"
          style={{ animation: 'slideInL .95s cubic-bezier(.16,1,.3,1) .2s both' }}
        />
      </div>

      {/* ── CENTER content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 py-20 max-w-2xl mx-auto">

        {/* Eyebrow */}
        <div className="h1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold mb-7 text-violet-700"
          style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)' }}>
          <span className="w-2 h-2 rounded-full bg-violet-600 animate-ping-sm" />
          Electronics buyback · made simple
        </div>

        {/* Headline */}
        <h1 className="h2 font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-5"
          style={{ fontSize: 'clamp(2.4rem,5.5vw,4rem)' }}>
          Make the smart move.
          <br />
          <span style={{
            background: 'linear-gradient(135deg,#7c3aed,#4f46e5,#3b82f6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            Turn clutter into cash.
          </span>
        </h1>

        <p className="h3 text-gray-500 text-[1.05rem] leading-relaxed max-w-[400px] mb-9">
          Sell your used electronics in minutes — instant quote, free shipping, and fast payment via PayPal or Zelle.
        </p>

        {/* CTA */}
        <div className="h4 flex flex-wrap gap-4 justify-center mb-10">
          <a href="#book"
            className="btn inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base group">
            Book A Free Meeting
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-gray-700 border-2 border-gray-300 hover:border-violet-400 hover:text-violet-600 transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.8)' }}>
            See how it works
          </a>
        </div>

        {/* Social proof */}
        <div className="h5 flex items-center gap-5 justify-center flex-wrap mb-10">
          <div className="flex -space-x-2.5">
            {initials.map((init, i) => (
              <div key={init} className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[11px] font-bold text-white"
                style={{ background: avatarColors[i], borderColor: '#f0f0eb' }}>
                {init}
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 mb-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-gray-500 text-xs font-semibold">4.9 / 5 · 900+ verified reviews</p>
          </div>
        </div>

        {/* Animated chevrons (reference motif) */}
        <div className="h6 flex items-center justify-center gap-1" aria-hidden>
          {[0,1,2,3].map(i => (
            <ChevronRight key={i}
              className="w-7 h-7 animate-chevron"
              style={{ animationDelay: `${i * 150}ms`, color: `rgba(109,40,217,${0.9 - i * 0.18})` }}
            />
          ))}
        </div>
      </div>

      {/* ── RIGHT cash + wallet ── */}
      <div className="absolute right-0 hidden xl:block" style={{ zIndex: 2, top: 'calc(50% - 80px)', transform: 'translateY(-50%)' }}>
        <img
          src="/cash.png"
          alt="Cash and wallet"
          className="h-[820px] w-auto object-contain select-none"
          draggable="false"
          style={{ animation: 'slideInR .95s cubic-bezier(.16,1,.3,1) .35s both' }}
        />
      </div>

      {/* Stats strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm"
          style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)' }}>
          {[
            { v: '1.2M',   l: 'Paid to sellers'      },
            { v: '6,000+', l: 'Happy customers'      },
            { v: '900',    l: 'Verified reviews'     },
            { v: '24hrs',  l: 'Avg payout time'      },
          ].map(({ v, l }, i) => (
            <div key={l}
              className={`px-6 py-5 text-center sr sr-d${i+1}`}
              ref={el => {
                if (!el) return;
                const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); o.unobserve(el); } });
                o.observe(el);
              }}
              style={{ borderRight: i < 3 ? '1px solid #e5e7eb' : 'none' }}>
              <div className="text-[1.6rem] font-extrabold leading-none mb-1"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#3b82f6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                {v}
              </div>
              <div className="text-gray-500 text-xs font-semibold">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
