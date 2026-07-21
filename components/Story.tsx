import { waLink } from '@/lib/whatsapp';

const stats = [
  { value: '2023', label: 'Year we started' },
  { value: '3M+', label: 'People who trust us with real money' },
  { value: '<5 min', label: 'Average time to a working ID' },
  { value: '7/7', label: 'Days someone is actually online' },
];

export default function Story() {
  const whatsappUrl = waLink("Hey Bet Vault, I'd like to know more about the team.");

  return (
    <section id="story" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-7 bento rounded-3xl p-7 sm:p-10">
            <span className="chip-gold inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
              Who's behind this
            </span>
            <h2 className="display text-white mb-6" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', lineHeight: 0.98 }}>
              WE GOT TIRED OF<br /><span className="gold-text">WAITING ON HOLD, TOO.</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Bet Vault started in 2023 with a handful of people sick of the platforms they were
              already using — slow support, withdrawals that vanished for days, sign-up forms asking
              for things nobody needed.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              A couple of us had worked in payments. One had built support systems for a fintech.
              The rest just really, really watch a lot of cricket. Together we built the version we
              actually wanted to use.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              We're not the biggest name in this space, and we're not trying to be. We'd rather stay
              small enough that when you message us, you're talking to someone who can actually fix it.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-ghost px-6 py-3 rounded-full text-sm"
            >
              Say Hello
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`${i % 3 === 0 ? 'bento-emerald' : 'bento'} rounded-2xl p-6 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]`}
              >
                <span className="display text-3xl sm:text-4xl text-white leading-none">{s.value}</span>
                <span className="text-gray-400 text-xs sm:text-sm mt-3">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
