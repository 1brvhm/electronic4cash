import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactVideo() {
  const [headRef, headVis] = useScrollReveal();
  const [vidRef, vidVis]   = useScrollReveal();

  return (
    <section className="py-20" style={{ background: 'linear-gradient(180deg,#f9fafb 0%,#ffffff 100%)' }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Bold headline */}
        <div ref={headRef} className={`text-center mb-12 sr ${headVis ? 'in' : ''}`}>
          <h2 className="font-extrabold text-gray-900 leading-snug mb-4"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            Wanna speak to someone before your meeting or have questions?
          </h2>
          <p className="font-extrabold text-gray-800 leading-relaxed"
             style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)' }}>
            Text the word{' '}
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">"Electronics"</span>
            {' '}to{' '}
            <a href="sms:+14439833365"
               className="text-violet-700 hover:text-violet-800 underline decoration-2 underline-offset-4 whitespace-nowrap">
              443-983-3365
            </a>
            <br className="hidden sm:block" />
            <span className="hidden sm:inline"> or email it to </span>
            <span className="sm:hidden"><br />or email it to </span>
            <a href="mailto:electronics4money@gmail.com"
               className="text-violet-700 hover:text-violet-800 underline decoration-2 underline-offset-4 break-all">
              electronics4money@gmail.com
            </a>
          </p>
          <p className="mt-5 font-bold text-gray-600 tracking-wide"
             style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)' }}>
            To speak to someone about your electronics ASAP
          </p>
        </div>

        {/* YouTube video embed (16:9) */}
        <div ref={vidRef}
             className={`sr ${vidVis ? 'in' : ''} relative w-full overflow-hidden rounded-3xl shadow-2xl shadow-violet-200/40 border border-gray-200`}
             style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/mZ7bNCyBSBY"
            title="electronics4money intro video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}
