import { useRef } from 'react';
import { Smartphone, Tablet, Laptop, Monitor, Gamepad2, Camera, Headphones, Cpu, Speaker, Wind, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const cats = [
  { icon: Smartphone, label: 'Sell Phone',         color: 'from-violet-600 to-violet-400', glow: '124,58,237'  },
  { icon: Tablet,     label: 'Sell Tablet',         color: 'from-blue-600 to-blue-400',     glow: '59,130,246'  },
  { icon: Laptop,     label: 'Sell Laptop',         color: 'from-indigo-600 to-indigo-400', glow: '99,102,241'  },
  { icon: Monitor,    label: 'Sell Desktop',        color: 'from-violet-600 to-blue-500',   glow: '124,58,237'  },
  { icon: Gamepad2,   label: 'Sell Game Console',   color: 'from-purple-600 to-violet-400', glow: '147,51,234'  },
  { icon: Cpu,        label: 'Sell Graphics Card (GPU)', color: 'from-indigo-500 to-blue-400', glow: '99,102,241' },
  { icon: Camera,     label: 'Sell Camera',         color: 'from-violet-700 to-purple-500', glow: '109,40,217'  },
  { icon: Headphones, label: 'Sell Audio',          color: 'from-blue-600 to-indigo-500',   glow: '59,130,246'  },
  { icon: Wind,       label: 'Sell Drone',          color: 'from-cyan-600 to-blue-500',     glow: '8,145,178'   },
  { icon: Speaker,    label: 'Sell Smart Home',     color: 'from-indigo-600 to-violet-500', glow: '99,102,241'  },
  { icon: Sparkles,   label: 'Other (Anything else you want to sell)', color: 'from-violet-500 to-blue-400', glow: '124,58,237' },
];

function CatCard({ icon: Icon, label, color, glow, delay = '0ms' }) {
  const cardRef = useRef(null);
  const [ref, vis] = useScrollReveal();

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform   = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(8px)`;
    el.style.boxShadow   = `0 16px 40px rgba(${glow},.22), 0 0 0 1.5px rgba(${glow},.3)`;
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = '';
    el.style.boxShadow = '';
  };

  return (
    <div ref={ref} className={`sr-scale ${vis ? 'in' : ''}`} style={{ transitionDelay: delay }}>
      <a href="#book" ref={cardRef} onMouseMove={onMove} onMouseLeave={onLeave}
        className="tilt group bg-white rounded-2xl p-6 border border-gray-100 flex flex-col items-center gap-3 text-center hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/60 transition-all duration-200 block">
        <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg card-icon`}>
          <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
        </div>
        <span className="text-[14px] font-bold text-gray-800 group-hover:text-violet-600 transition-colors leading-snug">
          {label}
        </span>
      </a>
    </div>
  );
}

export default function DeviceCategories() {
  const [headRef, headVis] = useScrollReveal();

  return (
    <section id="categories" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div ref={headRef} className={`text-center mb-14 sr ${headVis ? 'in' : ''}`}>
          <span className="inline-block text-violet-600 text-[11px] font-bold uppercase tracking-[.22em] mb-3">What We Buy</span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-gray-900 leading-tight mb-3">
            Every device you own,<br />
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">turned into a payout</span>
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">If it runs on electricity, we want it.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {cats.map((c, i) => <CatCard key={c.label} {...c} delay={`${(i % 4) * 80}ms`} />)}
        </div>
      </div>
    </section>
  );
}
