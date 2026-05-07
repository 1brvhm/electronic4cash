import { Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  { name: 'Laura M.',     location: 'Fort Myers, FL',    text: 'Easy sale and I received much better value than any other offer. Communication was clear and timely. Will definitely use again.',              initials: 'L', color: '#7c3aed' },
  { name: 'Robert K.',    location: 'Canyon Lake, TX',   text: 'Very clear and simple process. Offer confirmed on receipt, payment made promptly. I got $150 more than Apple\'s trade-in program.',          initials: 'R', color: '#4f46e5' },
  { name: 'Kassandra P.', location: 'Encino, CA',        text: 'They gave me an honest estimate, I printed the label, sent it off, and got paid the same day they received it. Super easy process.',         initials: 'K', color: '#3b82f6' },
  { name: 'Marcus T.',    location: 'Chicago, IL',       text: 'Shipped my MacBook Monday — had $620 in my Zelle by Wednesday morning. The call was 7 minutes. Completely painless.',                        initials: 'M', color: '#6366f1' },
  { name: 'Priya S.',     location: 'Austin, TX',        text: 'Best price anywhere online. No lowball after inspection — paid exactly what they quoted on the call. Genuinely impressed.',                  initials: 'P', color: '#8b5cf6' },
  { name: 'Devon W.',     location: 'Seattle, WA',       text: 'Got $480 for my iPad Pro. Call to cash in two days. The shipping label arrived within an hour of the call.',                                 initials: 'D', color: '#2563eb' },
  { name: 'Ashley R.',    location: 'Miami, FL',         text: 'Way better than pawn shops. $240 for my Galaxy S21. The booking call literally took 5 minutes. Highly recommend.',                           initials: 'A', color: '#7c3aed' },
  { name: 'Sara M.',      location: 'Los Angeles, CA',   text: 'Easy, fast, and they paid exactly what they promised. Going back with my old laptop next month without hesitation.',                         initials: 'S', color: '#4f46e5' },
];

function Card({ name, location, text, initials, color }) {
  return (
    <div className="flex-shrink-0 w-[300px] bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mx-3
      hover:shadow-lg hover:shadow-violet-100/60 hover:-translate-y-1 transition-all duration-300 cursor-default">
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
      </div>
      <p className="text-gray-700 text-[13.5px] leading-relaxed mb-4">"{text}"</p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        <div className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
          style={{ background: color }}>
          {initials}
        </div>
        <div>
          <div className="text-[13px] font-bold text-gray-900 leading-tight">{name}</div>
          <div className="text-[11px] text-gray-400 font-medium">{location}</div>
        </div>
      </div>
    </div>
  );
}

const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)]; // doubled
const row2 = [...testimonials.slice(4, 8), ...testimonials.slice(4, 8)]; // doubled

export default function Testimonials() {
  const [headRef, headVis] = useScrollReveal();

  return (
    <section id="testimonials" className="bg-gray-50 py-24 overflow-hidden">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mb-12">
        <div ref={headRef} className={`text-center sr ${headVis ? 'in' : ''}`}>
          <span className="inline-block text-violet-600 text-[11px] font-bold uppercase tracking-[.22em] mb-3">Testimonials</span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-gray-900 leading-tight mb-4">
            What winning trust<br />
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">sounds like</span>
          </h2>

          {/* Trustpilot badge */}
          <div className="inline-flex items-center gap-4 bg-white border border-gray-200 shadow-sm rounded-2xl px-6 py-3.5 mt-4">
            <div className="text-left">
              <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-0.5">Rated Excellent on</div>
              <div className="text-[17px] font-black text-gray-900">Trustpilot</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-[#00b67a] rounded flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 fill-white text-white" />
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-gray-500 font-semibold">4.9 out of 5 · 2,400+ reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Two-row infinite sliding ticker ── */}
      <div className="space-y-4 relative">

        {/* Edge fade masks */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-32 z-10"
          style={{ background: 'linear-gradient(to right, #f9fafb, transparent)' }} />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-32 z-10"
          style={{ background: 'linear-gradient(to left, #f9fafb, transparent)' }} />

        {/* Row 1 — slides left */}
        <div className="overflow-hidden">
          <div className="flex animate-ticker-fwd hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}>
            {row1.map((card, i) => <Card key={i} {...card} />)}
          </div>
        </div>

        {/* Row 2 — slides right */}
        <div className="overflow-hidden">
          <div className="flex animate-ticker-bwd hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}>
            {row2.map((card, i) => <Card key={i} {...card} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
