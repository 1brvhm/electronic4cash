import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  { q: 'How and when will I get paid?',
    a: 'Once we receive and inspect your device — typically within 1 business day — we send payment within 24 hours. Choose PayPal, Zelle, or cash.' },
  { q: 'Do I need to include the charger or original box?',
    a: "Not required, but accessories can increase your offer. We walk through exactly what adds value on your booking call." },
  { q: 'What condition does my device need to be in?',
    a: 'We accept all conditions — mint to cracked or faulty. Condition affects the quoted price, explained clearly on the call. Even broken devices often have real value.' },
  { q: 'Is the shipping really 100% free?',
    a: 'Yes. After your call, we email a prepaid, fully insured label. Print it, pack your device, and drop it at any USPS, UPS, or FedEx. Zero cost to you.' },
  { q: "What if I change my mind after shipping?",
    a: "No problem. If you pass on the offer after inspection, we ship your device back to you free of charge. No pressure, ever." },
  { q: 'Is my personal data safe?',
    a: 'We strongly recommend a factory reset before shipping. If you forget, we perform a certified secure wipe. We never access personal files or accounts.' },
];

function Item({ q, a, open, onToggle }) {
  return (
    <div className={`rounded-2xl border transition-all duration-250 overflow-hidden
      ${open ? 'border-violet-200 bg-violet-50/50' : 'border-gray-200 bg-white hover:border-violet-200'}`}>
      <button onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group">
        <span className={`font-bold text-[15px] leading-snug transition-colors ${open ? 'text-violet-700' : 'text-gray-900'}`}>
          {q}
        </span>
        <div className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-200
          ${open ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-violet-100 group-hover:text-violet-600'}`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      <div className={`faq-body ${open ? 'open' : ''}`}>
        <div><p className="px-6 pb-6 text-gray-600 text-[14px] leading-relaxed">{a}</p></div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const [headRef, headVis]    = useScrollReveal();

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
        <div ref={headRef} className={`text-center mb-12 sr ${headVis ? 'in' : ''}`}>
          <span className="inline-block text-violet-600 text-[11px] font-bold uppercase tracking-[.22em] mb-3">FAQ</span>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-gray-900 leading-tight mb-3">
            Got questions?<br />
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">We have answers.</span>
          </h2>
          <p className="text-gray-500 text-base">Everything you need to know before you sell.</p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => {
            const [ref, vis] = useScrollReveal();
            const revealClass = i % 2 === 0 ? 'sr-l' : 'sr-r';
            return (
              <div key={i} ref={ref} className={`${revealClass} sr-d${Math.min((i % 3) + 1, 6)} ${vis ? 'in' : ''}`}>
                <Item q={q} a={a} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
