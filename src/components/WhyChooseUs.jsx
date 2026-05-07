import { Star, Shield, Zap, TrendingUp, Clock, BadgeCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const cells = [
  {
    icon: Star,
    grad: 'from-yellow-400 to-orange-400',
    title: '20,000+ Reviews',
    desc:  'Just read the reviews — our customers consistently rate us 5 stars for speed and fairness.',
  },
  {
    icon: BadgeCheck,
    grad: 'from-blue-600 to-blue-400',
    title: 'BBB Accredited',
    desc:  'Accredited and rated A+ by the Better Business Bureau. Verified trustworthy.',
  },
  {
    icon: Zap,
    grad: 'from-violet-600 to-violet-400',
    title: 'We Pay Fast!',
    desc:  'Payment hits your account within 24 hours of device inspection. Guaranteed.',
  },
  {
    icon: TrendingUp,
    grad: 'from-indigo-600 to-blue-400',
    title: 'Higher Offer',
    desc:  'Our offers consistently beat competitors. We match or beat any verified quote.',
  },
  {
    icon: Shield,
    grad: 'from-purple-600 to-violet-400',
    title: 'Fully Insured Shipping',
    desc:  'Every shipment is covered against loss and damage. Print the free label and relax.',
  },
  {
    icon: Clock,
    grad: 'from-blue-500 to-cyan-400',
    title: '4.91 / 5 Elite Rating',
    desc:  'Top-rated on ResellerRatings.com. Thousands of verified five-star transactions.',
  },
];

export default function WhyChooseUs() {
  const [headRef, headVis] = useScrollReveal();

  return (
    <section id="trust" className="py-24" style={{ background: 'linear-gradient(180deg,#fff 0%,#f5f3ff 100%)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div ref={headRef} className={`text-center mb-14 sr ${headVis ? 'in' : ''}`}>
          <span className="inline-block text-violet-600 text-[11px] font-bold uppercase tracking-[.22em] mb-3">Why Choose Us</span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-gray-900 leading-tight mb-3">
            Why people choose us<br />
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">and love it</span>
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">Built on trust, speed, and the best prices anywhere.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cells.map(({ icon: Icon, grad, title, desc }, i) => {
            const [ref, vis] = useScrollReveal();
            const revealClass = i % 3 === 0 ? 'sr-l' : i % 3 === 2 ? 'sr-r' : 'sr';
            return (
              <div key={title} ref={ref}
                className={`${revealClass} sr-d${(i % 3) + 1} ${vis ? 'in' : ''} group bg-gray-50 rounded-3xl p-7 border border-gray-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50 hover:-translate-y-2 transition-all duration-300`}>
                <div className={`w-12 h-12 bg-gradient-to-br ${grad} rounded-2xl flex items-center justify-center mb-5 shadow-md card-icon`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-[16px] mb-2 group-hover:text-violet-700 transition-colors duration-200">{title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
