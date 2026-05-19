import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactVideo() {
  const [vidRef, vidVis]   = useScrollReveal();
  const [textRef, textVis] = useScrollReveal();

  return (
    <section className="py-20" style={{ background: 'linear-gradient(180deg,#f9fafb 0%,#ffffff 100%)' }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* YouTube video embed (16:9) */}
        <div ref={vidRef}
             className={`sr ${vidVis ? 'in' : ''} relative w-full overflow-hidden rounded-3xl shadow-2xl shadow-violet-200/40 border border-gray-200 mb-12`}
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

        {/* Heading + subheading */}
        <div ref={textRef} className={`text-center sr ${textVis ? 'in' : ''}`}>

          {/* Big heading */}
          <h2 className="font-extrabold text-gray-900 leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}>
            Text the word{' '}
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">"electronics"</span>
            {' '}to{' '}
            <a href="sms:+14439833365"
               className="text-violet-700 hover:text-violet-800 underline decoration-2 underline-offset-4 whitespace-nowrap">
              443-983-3365
            </a>
            {' '}or email it to{' '}
            <a href="mailto:electronics4money@gmail.com"
               className="text-violet-700 hover:text-violet-800 underline decoration-2 underline-offset-4 inline-block whitespace-nowrap">
              electronics4money@gmail.com
            </a>
          </h2>

          {/* Subheading */}
          <p className="text-gray-700 leading-relaxed font-bold max-w-2xl mx-auto"
             style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)' }}>
            If you have any question or you're just busy and want to speak to someone as{' '}
            <span className="font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">FAST</span>
            {' '}as possible before your meeting. A representative will get back to your number or email ASAP!
          </p>

        </div>

      </div>
    </section>
  );
}
