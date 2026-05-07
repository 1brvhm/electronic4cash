import { Clock, Package, DollarSign, ArrowRight, User } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Particles from './Particles';

function QuoteMock() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 select-none">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-violet-600" />
        </div>
        <p className="text-[13px] text-gray-600">
          <span className="font-bold text-violet-500">Alex</span> wants to sell{' '}
          <span className="font-bold text-violet-500">her iPhone</span>
        </p>
      </div>
      <div className="rounded-xl overflow-hidden border border-gray-200 text-[12px] mb-3">
        <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
          {['Device','Condition','Offer'].map(h => (
            <div key={h} className="px-3 py-2 text-center text-gray-500 font-semibold">{h}</div>
          ))}
        </div>
        <div className="grid grid-cols-3 divide-x divide-gray-100 bg-white">
          <div className="px-3 py-3 text-center font-semibold text-gray-800">iPhone 15</div>
          <div className="px-3 py-3 text-center font-semibold text-gray-800">Good</div>
          <div className="px-3 py-3 text-center font-extrabold text-violet-600">$480</div>
        </div>
      </div>
      <button className="w-full btn py-2.5 rounded-xl text-[13px] font-bold">Accept Offer</button>
    </div>
  );
}

function ShipMock() {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center gap-5 border border-gray-100 shadow-sm select-none min-h-[160px] justify-center">
      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
        <Package className="w-8 h-8 text-blue-500" strokeWidth={1.6} />
      </div>
      <div className="flex items-center gap-3">
        {['Print','Send','Done'].map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <span className="text-[14px] font-bold text-gray-800">{s}</span>
            {i < 2 && <span className="text-blue-500 font-black">→</span>}
          </div>
        ))}
      </div>
      <p className="text-[12px] text-gray-400 font-medium text-center">Free insured label emailed within minutes</p>
    </div>
  );
}

function PaidMock() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm select-none">
      <div className="bg-gray-950 rounded-2xl overflow-hidden">
        <div className="text-center pt-5 pb-4 border-b border-white/10 px-4">
          <div className="text-white/40 text-[11px] font-semibold mb-1">Monday, May 12</div>
          <div className="text-white text-[3rem] font-black leading-none tracking-tight">9:41</div>
        </div>
        <div className="p-4">
          <div className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
            <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white text-[12px] font-bold">Payment received!</div>
              <div className="text-white/55 text-[11px] mt-0.5">You got $480. Cha-ching!</div>
            </div>
            <span className="ml-auto text-white/25 text-[10px]">9:41 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  { n:'01', icon: Clock,      title: 'Get your Instant Quote',  desc: 'Book a free 10-min call. We evaluate your device and lock in a firm quote before you say "goodbye, clutter."', mock: <QuoteMock /> },
  { n:'02', icon: Package,    title: 'Ship for Free',           desc: 'Print the free, trackable prepaid label and send it off. Fully insured. We handle the rest.', mock: <ShipMock /> },
  { n:'03', icon: DollarSign, title: 'Get Paid Fast',           desc: 'No listings, no strangers, no waiting. Get paid within 24 hours of inspection — PayPal, Zelle, or cash.', mock: <PaidMock /> },
];

export default function HowItWorks() {
  const [headRef, headVis] = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0f0324' }}>

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)', backgroundSize: '52px 52px' }} />

      {/* Ambient orbs */}
      <div className="orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orb-drift"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,.14) 0%, transparent 65%)' }} />
      <div className="orb w-[350px] h-[350px] top-0 right-0 animate-orb-drift-2"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,.1) 0%, transparent 70%)' }} />
      <div className="orb w-[280px] h-[280px] bottom-0 left-10 animate-orb-drift"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,.1) 0%, transparent 70%)', animationDelay: '4s' }} />

      {/* Floating particles */}
      <Particles count={32} color="#7c3aed" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div ref={headRef} className={`text-center mb-16 sr ${headVis ? 'in' : ''}`}>
          <span className="inline-block text-violet-400 text-[11px] font-bold uppercase tracking-[.22em] mb-4">How It Works</span>
          <h2 className="text-[clamp(1.9rem,5vw,3rem)] font-extrabold text-white leading-tight mb-4">
            From drawer to dollars<br />in 3 simple steps
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">No haggling. No store visits. Just three clean steps.</p>
        </div>

        {/* Numbered connector row */}
        <div className="hidden md:flex items-center justify-between mb-8 px-8 relative">
          <div className="absolute left-[calc(16.7%+36px)] right-[calc(16.7%+36px)] top-1/2 -translate-y-1/2 h-px border-t border-dashed border-white/15 pointer-events-none" />
          {steps.map(({ n }, i) => (
            <div key={n} className="flex items-center gap-2 z-10 sr" style={{ transitionDelay: `${i * 120}ms` }}
              ref={el => { if (!el) return; const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); o.unobserve(el); } }); o.observe(el); }}>
              <div className="relative">
                <div className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: 'rgba(124,58,237,.3)', animationDelay: `${i * 0.4}s`, animationDuration: '2.5s' }} />
                <span className="relative w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#3b82f6)', boxShadow: '0 0 24px rgba(124,58,237,.5)' }}>
                  {n}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Step cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map(({ n, title, desc, mock }, i) => {
            const [ref, vis] = useScrollReveal();
            return (
              <div key={n} ref={ref} className={`sr sr-d${i+1} ${vis ? 'in' : ''}`}>
                <div className="rounded-3xl overflow-hidden border border-white/10 hover:border-violet-500/50 hover:-translate-y-2 transition-all duration-300"
                  style={{ backgroundColor: '#160534', boxShadow: '0 4px 24px rgba(0,0,0,.3)' }}>
                  <div className="p-5 border-b border-white/[0.07]">{mock}</div>
                  <div className="p-5">
                    <h3 className="text-white font-extrabold text-[1.05rem] mb-2">{title}</h3>
                    <p className="text-white/55 text-[13.5px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#book" className="btn inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-base group">
            Start selling now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
