import { waLink } from '@/lib/whatsapp';

const stats = [
  { value: '3M+', label: 'People betting with us' },
  { value: '<5 min', label: 'From hello to your ID' },
  { value: '24/7', label: 'Real humans, not bots' },
  { value: '10+', label: 'Markets, one login' },
];

export default function Hero() {
  const whatsappUrl = waLink("Hey Bet Vault, I'd like to get my betting ID set up.");

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 10% 10%, rgba(212,175,55,0.16) 0%, transparent 50%), radial-gradient(ellipse at 90% 20%, rgba(22,227,125,0.1) 0%, transparent 50%)',
        }}
      />
      <div className="wrap relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 chip-emerald rounded-full px-4 py-1.5 mb-6 text-xs font-bold tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Live &amp; taking bets right now
            </div>

            <h1 className="display text-white mb-5" style={{ fontSize: 'clamp(2.8rem, 8vw, 5.6rem)', lineHeight: 0.95 }}>
              ONE MESSAGE.<br />
              <span className="gold-text">YOUR ID IS LIVE.</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Skip the forms. Send us a WhatsApp message, tell us what you need, and your cricket
              betting ID lands in the same chat — usually in under five minutes.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-gold px-7 py-4 rounded-full text-sm sm:text-base"
              >
                Get My ID Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#steps"
                className="inline-flex items-center gap-2 btn-ghost px-7 py-4 rounded-full text-sm sm:text-base"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`${i === 0 ? 'bento-gold' : i === 3 ? 'bento-emerald' : 'bento'} rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[120px] sm:min-h-[140px]`}
                >
                  <span className="display text-3xl sm:text-4xl text-white leading-none">{s.value}</span>
                  <span className="text-gray-400 text-xs sm:text-sm mt-3">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
