import { waLink } from '@/lib/whatsapp';

const sports = [
  { icon: '🏏', name: 'CRICKET', tone: 'gold' },
  { icon: '⚽', name: 'FOOTBALL', tone: 'emerald' },
  { icon: '🏀', name: 'BASKETBALL', tone: 'plain' },
  { icon: '🎾', name: 'TENNIS', tone: 'plain' },
  { icon: '🏒', name: 'HOCKEY', tone: 'plain' },
  { icon: '🎰', name: 'CASINO', tone: 'gold' },
  { icon: '🃏', name: 'TEEN PATTI', tone: 'plain' },
  { icon: '🎲', name: 'LIVE TABLES', tone: 'emerald' },
];

export default function Markets() {
  const bannerWa = waLink("Hey Bet Vault, I'm ready to place my first bet — help me get set up.");

  return (
    <section id="markets" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="max-w-lg mb-10 sm:mb-12">
          <span className="chip-gold inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">
            One login, several distractions
          </span>
          <h2 className="display text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', lineHeight: 0.95 }}>
            CRICKET'S THE<br />HEADLINE, NOT THE SHOW.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {sports.map((sport) => (
            <a
              key={sport.name}
              href={waLink(`Hey Bet Vault, I want to bet on ${sport.name}. Can you help me get set up?`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${sport.tone === 'gold' ? 'bento-gold' : sport.tone === 'emerald' ? 'bento-emerald' : 'bento'} rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center gap-3 aspect-square group`}
            >
              <span className="text-3xl sm:text-4xl leading-none">{sport.icon}</span>
              <span className="display text-white text-sm sm:text-base tracking-wide group-hover:text-yellow-400 transition-colors text-center">
                {sport.name}
              </span>
            </a>
          ))}
        </div>

        <div className="skew-band rounded-3xl border border-yellow-600/25 p-8 sm:p-12 md:p-16">
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 15% 30%, #D4AF37 0%, transparent 55%), radial-gradient(circle at 85% 70%, #16E37D 0%, transparent 50%)' }}
          />
          <div className="relative z-10 max-w-lg">
            <h3 className="display text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 0.98 }}>
              YOUR FIRST BET IS<br /><span className="gold-text">ONE MESSAGE AWAY.</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-7">
              Not a sales pitch. Say hello, we'll take it from there.
            </p>
            <a
              href={bannerWa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-emerald px-7 py-4 rounded-full text-sm sm:text-base"
            >
              Let's Do This
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
