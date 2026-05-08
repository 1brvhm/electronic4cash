import { Star, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Particles from './Particles';

const perks = ['Free prepaid shipping', 'Paid in 24 hours', 'No obligation, no risk'];
const avatarData = [
  { init:'MT', color:'#7c3aed' }, { init:'PS', color:'#4f46e5' },
  { init:'JK', color:'#3b82f6' }, { init:'AR', color:'#6366f1' },
  { init:'DW', color:'#8b5cf6' }, { init:'SM', color:'#2563eb' },
];

export default function CTABanner() {
  const [ref, vis] = useScrollReveal(0.1);

  return (
    <section id="book" className="relative py-20 overflow-hidden" style={{ backgroundColor: '#0f0324' }}>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)', backgroundSize: '52px 52px' }} />

      {/* Ambient orbs */}
      <div className="orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orb-drift"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,.2) 0%, transparent 65%)' }} />
      <div className="orb w-[320px] h-[320px] -top-20 -left-20 animate-orb-drift-2"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,.15) 0%, transparent 70%)' }} />
      <div className="orb w-[280px] h-[280px] -bottom-10 -right-10 animate-orb-drift"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,.15) 0%, transparent 70%)', animationDelay: '5s' }} />

      {/* Floating particles */}
      <Particles count={36} color="#a78bfa" />

      {/* Top gradient accent */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(124,58,237,.6),rgba(59,130,246,.6),transparent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header copy */}
        <div ref={ref} className={`text-center mb-12 sr ${vis ? 'in' : ''}`}>

          {/* Avatar cluster + social proof */}
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <div className="flex -space-x-2.5">
              {avatarData.map(({ init, color }) => (
                <div key={init} className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ background: color, borderColor: '#0f0324' }}>
                  {init}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-white/60 text-xs font-semibold">6,000+ satisfied clients</p>
            </div>
          </div>

          <h2 className="text-[clamp(2.2rem,6vw,4rem)] font-extrabold text-white leading-[1.08] mb-5">
            Your old tech is sitting<br />
            <span className="grad-text">on real money.</span>
          </h2>

          <p className="text-white/60 text-[1.05rem] mb-8 max-w-xl mx-auto leading-relaxed">
            Book a free call and walk away with a same-day offer. No listings, no strangers, no hassle.
          </p>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {perks.map(p => (
              <div key={p} className="flex items-center gap-2 text-white/70 text-sm font-semibold">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* Calendly inline widget */}
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          <iframe
            src="https://calendly.com/jacob-cheetahscanner/electronics4cash-call?background_color=160534&text_color=ffffff&primary_color=7c3aed&hide_gdpr_banner=1"
            width="100%"
            height="700"
            frameBorder="0"
            title="Book a free meeting"
            style={{ display: 'block' }}
          />
        </div>

      </div>
    </section>
  );
}
